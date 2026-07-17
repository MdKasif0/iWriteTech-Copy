// ---------------------------------------------------------------------------
// Amazon Affiliate Marketplace Configuration
// ---------------------------------------------------------------------------
// Single source of truth for all Amazon marketplace routing.
// To add a new marketplace, add ONE entry to MARKETPLACES and ONE entry
// to COUNTRY_TO_MARKETPLACE. No other files need to change.
// ---------------------------------------------------------------------------

/** Configuration for a single Amazon marketplace. */
export interface Marketplace {
  /** Amazon domain (e.g. "www.amazon.com") */
  domain: string;
  /** Affiliate tracking tag for this marketplace */
  tag: string;
}

/**
 * All supported Amazon marketplaces.
 * Keys are short identifiers (typically matching the primary country code).
 */
export const MARKETPLACES: Record<string, Marketplace> = {
  US: { domain: "www.amazon.com", tag: "iwritetech-20" },
  IN: { domain: "www.amazon.in", tag: "iwritetech-21" },
  // -----------------------------------------------------------------------
  // Future marketplaces — uncomment and fill in tags when ready:
  // -----------------------------------------------------------------------
  // CA: { domain: "www.amazon.ca",    tag: "your-canada-tag" },
  // GB: { domain: "www.amazon.co.uk", tag: "your-uk-tag" },
  // DE: { domain: "www.amazon.de",    tag: "your-germany-tag" },
  // FR: { domain: "www.amazon.fr",    tag: "your-france-tag" },
  // IT: { domain: "www.amazon.it",    tag: "your-italy-tag" },
  // ES: { domain: "www.amazon.es",    tag: "your-spain-tag" },
  // NL: { domain: "www.amazon.nl",    tag: "your-netherlands-tag" },
  // SE: { domain: "www.amazon.se",    tag: "your-sweden-tag" },
  // PL: { domain: "www.amazon.pl",    tag: "your-poland-tag" },
  // JP: { domain: "www.amazon.co.jp", tag: "your-japan-tag" },
  // AU: { domain: "www.amazon.com.au",tag: "your-australia-tag" },
  // AE: { domain: "www.amazon.ae",    tag: "your-uae-tag" },
  // SG: { domain: "www.amazon.sg",    tag: "your-singapore-tag" },
  // BR: { domain: "www.amazon.com.br",tag: "your-brazil-tag" },
  // MX: { domain: "www.amazon.com.mx",tag: "your-mexico-tag" },
} as const;

/** The fallback marketplace used when the visitor's country is unknown or unsupported. */
export const DEFAULT_MARKETPLACE_KEY = "US";

/**
 * Maps ISO 3166-1 alpha-2 country codes to marketplace keys.
 * Multiple countries can map to the same marketplace.
 */
export const COUNTRY_TO_MARKETPLACE: Record<string, string> = {
  US: "US",
  IN: "IN",
  // -----------------------------------------------------------------------
  // Future country mappings — uncomment when marketplaces are activated:
  // -----------------------------------------------------------------------
  // CA: "CA",
  // GB: "GB",
  // DE: "DE",
  // FR: "FR",
  // IT: "IT",
  // ES: "ES",
  // NL: "NL",
  // SE: "SE",
  // PL: "PL",
  // JP: "JP",
  // AU: "AU",
  // AE: "AE",
  // SG: "SG",
  // BR: "BR",
  // MX: "MX",
};

/** Name of the cookie set by middleware containing the visitor's country code. */
export const GEO_COOKIE_NAME = "_geo";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Validates that a string looks like a valid Amazon ASIN.
 * ASINs are exactly 10 alphanumeric characters, typically starting with "B0"
 * (for products) or being all-digits (for books/ISBNs).
 */
export function isValidAsin(asin: string): boolean {
  if (typeof asin !== "string" || asin.length !== 10) return false;
  return /^[A-Z0-9]{10}$/i.test(asin);
}

/**
 * Extracts an ASIN from an Amazon product URL.
 *
 * Supports these URL patterns:
 *   - /dp/ASIN
 *   - /gp/product/ASIN
 *   - /gp/aw/d/ASIN
 *
 * Returns `null` if no valid ASIN can be extracted.
 */
export function extractAsin(url: string): string | null {
  if (!url || url === "#") return null;

  try {
    const parsed = new URL(url);

    // Only process Amazon URLs
    if (!parsed.hostname.includes("amazon")) return null;

    // Match /dp/ASIN, /gp/product/ASIN, or /gp/aw/d/ASIN
    const match = parsed.pathname.match(
      /\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/i
    );

    if (match && match[1] && isValidAsin(match[1])) {
      return match[1].toUpperCase();
    }
  } catch {
    // Not a valid URL — ignore
  }

  return null;
}

/**
 * Resolves the correct marketplace for a given ISO country code.
 * Returns the default marketplace if the country is unknown or unsupported.
 */
export function getMarketplace(countryCode: string): Marketplace {
  const upperCode = countryCode.toUpperCase();
  const marketplaceKey = COUNTRY_TO_MARKETPLACE[upperCode] ?? DEFAULT_MARKETPLACE_KEY;
  return MARKETPLACES[marketplaceKey] ?? MARKETPLACES[DEFAULT_MARKETPLACE_KEY];
}

/**
 * Generates a geo-targeted Amazon affiliate URL.
 *
 * @param asin        - The product's Amazon Standard Identification Number
 * @param countryCode - ISO 3166-1 alpha-2 country code (e.g. "US", "IN")
 * @returns           - Full Amazon affiliate URL, or "#" if ASIN is invalid
 *
 * @example
 * generateAffiliateUrl("B0DWHGCQJL", "IN")
 * // → "https://www.amazon.in/dp/B0DWHGCQJL?tag=iwritetech-21"
 *
 * generateAffiliateUrl("B0DWHGCQJL", "US")
 * // → "https://www.amazon.com/dp/B0DWHGCQJL?tag=iwritetech-20"
 *
 * generateAffiliateUrl("B0DWHGCQJL", "DE")
 * // → "https://www.amazon.com/dp/B0DWHGCQJL?tag=iwritetech-20" (fallback)
 */
export function generateAffiliateUrl(asin: string, countryCode: string = "US"): string {
  if (!isValidAsin(asin)) return "#";

  const marketplace = getMarketplace(countryCode);
  return `https://${marketplace.domain}/dp/${asin}?tag=${marketplace.tag}`;
}

/**
 * Reads the geo country code from the `_geo` cookie (client-side only).
 * Returns "US" as fallback if the cookie is missing or unreadable.
 */
export function getCountryFromCookie(): string {
  if (typeof document === "undefined") return "US";

  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === GEO_COOKIE_NAME && value) {
        return value.toUpperCase();
      }
    }
  } catch {
    // Cookie access failed — use fallback
  }

  return "US";
}
