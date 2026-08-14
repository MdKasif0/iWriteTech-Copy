"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { track } from "@hellyeah/x-ray";
import { extractAsin, generateAffiliateUrl, getCountryFromCookie } from "@/lib/affiliate";

interface AffiliateButtonProps {
  href: string;
  hrefUS?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

/**
 * Geo-targeted Amazon affiliate button.
 *
 * Accepts any Amazon URL (or raw `#` for unconfirmed products), extracts
 * the ASIN, and regenerates the link for the visitor's country using the
 * centralized marketplace config.
 *
 * - Non-Amazon URLs pass through unchanged.
 * - `href="#"` passes through unchanged (not-yet-confirmed products).
 * - Falls back to amazon.com / iwritetech-20 if country is unknown.
 * - Uses `hrefUS` for non-IN users if ASIN extraction fails (e.g. search links).
 */
export function AffiliateButton({ href, hrefUS, text, children, className = "", fullWidth = false }: AffiliateButtonProps) {
  // Attempt to extract ASIN and regenerate a geo-targeted URL
  let finalHref = href;
  const country = getCountryFromCookie();

  const asin = extractAsin(href);
  if (asin) {
    finalHref = generateAffiliateUrl(asin, country);
  } else if (country !== "IN" && hrefUS) {
    // Fallback for search links where ASIN cannot be extracted
    finalHref = hrefUS;
  }

  return (
    <Link 
      href={finalHref} 
      target="_blank" 
      rel="sponsored noopener noreferrer"
      onClick={() =>
        track("affiliate_link_clicked", {
          asin: asin ?? "unknown",
          marketplace: country,
        })
      }
      className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-full group duration-300 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {text || children}
      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
