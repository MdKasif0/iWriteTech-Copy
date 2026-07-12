#!/usr/bin/env python3
"""
iWriteTech — Rainforest API product data fetcher
Run once locally: python3 fetch-rainforest-data.py
Uses only Python's standard library — nothing to pip install.

This WILL spend real credits from your 98-request quota (unlike testing
in chat, which is sandboxed). It fetches 32 products total and stops
automatically if credits drop below 10.

When it finishes, copy everything between the "PASTE EVERYTHING BELOW"
markers and send it back to Claude.
"""

import urllib.request
import urllib.parse
import json
import time
import sys
import ssl

# Bypass SSL certificate verification issues on macOS
ssl._create_default_https_context = ssl._create_unverified_context

API_KEY = "1AD0A801AB294BA1B9AF94EFC9E3C770"  # regenerate this after running — it's been shared in chat
BASE_URL = "https://api.rainforestapi.com/request"

products = [
    {"asin": "B0CBWJ9SKX", "name": "Keychron C3 Pro"},
    {"asin": "B0D3GZYN1P", "name": "RK ROYAL KLUDGE R75 Wireless"},
    {"asin": "B0FZMMNZ95", "name": "Logitech MX Mechanical"},
    {"asin": "B06XRVX3XM", "name": "Satechi USB-C Pro Hub"},
    {"asin": "B01F01DRW6", "name": "Rain Design mStand"},
    {"asin": "B0D6TLKMGM", "name": "Belkin BoostCharge Pro 3-in-1"},
    {"asin": "B09QH9L1NH", "name": "Anker 555 8-in-1"},
    {"asin": "B0C1Y8RPG7", "name": "UGREEN Revodok Pro 313"},
    {"asin": "B09GK8LBWS", "name": "CalDigit TS4"},
    {"asin": "B0DK59YKRS", "name": "BenQ ScreenBar Halo 2"},
    {"asin": "B076VNFZJG", "name": "BenQ ScreenBar"},
    {"asin": "B07DYRS1WH", "name": "Elgato Stream Deck Mini"},
    {"asin": "B0CTZBR5CG", "name": "Xiaomi Mi Computer Monitor Light Bar"},
    {"asin": "B0FRD6N8JV", "name": "Spigen ArcField 25W Qi2.2"},
    {"asin": "B0D7YXQ77M", "name": "ESR HaloLock CryoBoost"},
    {"asin": "B0B13ZBX29", "name": "Graf Lantz Merino Wool Felt Pad"},
    {"asin": "B0BBG6G93H", "name": "K KNODEL Dual-Sided PU Leather"},
    {"asin": "B07N5K716Y", "name": "Nordik Leather Desk Mat"},
    {"asin": "B0BZ55VHVP", "name": "Twelve South Curve SE"},
    {"asin": "B0C275CR1C", "name": "BESIGN LS03"},
    {"asin": "B077YSN49G", "name": "Oakywood Walnut Laptop Dock"},
    {"asin": "B01M26UJ1C", "name": "VariDesk Pro Plus 36"},
    {"asin": "B0C514C64X", "name": "VIVO 32-inch K-Series (check stock)"},
    {"asin": "B01NBIX9WB", "name": "Uncaged Ergonomics CHANGEdesk Mini"},
    {"asin": "B0076O1MQY", "name": "Ergotron WorkFit-S"},
    {"asin": "B0DRC9F4FS", "name": "Anker MagGo Qi2 Pad"},
    {"asin": "B0DBP4PT21", "name": "Quntis Monitor Light Bar"},
    {"asin": "B0FP57SR72", "name": "PROTEQ Desk Mat with Wireless Charging"},
    {"asin": "B0DBTTC2CH", "name": "Anker Zolo Braided USB-C Cable"},
    {"asin": "B0F53KGSFZ", "name": "Amazon Basics 20,000mAh Power Bank"},
]

search_only = [
    {"name": "MSI Forge GK600 TKL Wireless"},
    {"name": "Orbitkey Desk Mat"},
]


def fetch(params):
    query = urllib.parse.urlencode(params)
    url = f"{BASE_URL}?{query}"
    req = urllib.request.Request(url, headers={"User-Agent": "iwritetech-fetch-script"})
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode())


def main():
    results = []

    for p in products:
        params = {
            "api_key": API_KEY,
            "type": "product",
            "amazon_domain": "amazon.in",
            "asin": p["asin"],
        }
        try:
            data = fetch(params)
            info = data.get("request_info", {})
            credits = info.get("credits_remaining", "?")
            product = data.get("product", {})
            buybox = product.get("buybox_winner", {}) or {}
            price = buybox.get("price", {}) or {}
            availability = buybox.get("availability", {}) or {}
            main_image = product.get("main_image", {}) or {}

            summary = {
                "asin": p["asin"],
                "name": p["name"],
                "title": product.get("title"),
                "price_value": price.get("value"),
                "currency": price.get("currency"),
                "rating": product.get("rating"),
                "ratings_total": product.get("ratings_total"),
                "main_image": main_image.get("link"),
                "availability": availability.get("raw"),
            }
            results.append(summary)
            print(f"[OK]   {p['name']} — credits remaining: {credits}", file=sys.stderr)

            if isinstance(credits, int) and credits < 10:
                print("\n!!! Credits below 10 — stopping early to preserve remaining quota. !!!", file=sys.stderr)
                break

        except Exception as e:
            print(f"[FAIL] {p['name']}: {e}", file=sys.stderr)
            results.append({"asin": p["asin"], "name": p["name"], "error": str(e)})

        time.sleep(1.5)

    for s in search_only:
        params = {
            "api_key": API_KEY,
            "type": "search",
            "amazon_domain": "amazon.in",
            "search_term": s["name"],
        }
        try:
            data = fetch(params)
            info = data.get("request_info", {})
            credits = info.get("credits_remaining", "?")
            search_results = data.get("search_results", []) or []
            first = search_results[0] if search_results else {}
            price = first.get("price", {}) or {}

            summary = {
                "name": s["name"],
                "found_asin": first.get("asin"),
                "title": first.get("title"),
                "price_value": price.get("value"),
                "currency": price.get("currency"),
                "image": first.get("image"),
                "note": "SEARCH RESULT — verify this is the correct product before using",
            }
            results.append(summary)
            print(f"[OK-SEARCH] {s['name']} — credits remaining: {credits}", file=sys.stderr)

        except Exception as e:
            print(f"[FAIL] {s['name']}: {e}", file=sys.stderr)
            results.append({"name": s["name"], "error": str(e)})

        time.sleep(1.5)

    print("\n\n=== PASTE EVERYTHING BELOW THIS LINE BACK TO CLAUDE ===\n")
    print(json.dumps(results, indent=2))
    print("\n=== END PASTE ===\n")


if __name__ == "__main__":
    main()
