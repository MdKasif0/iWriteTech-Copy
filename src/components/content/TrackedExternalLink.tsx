"use client";

import { track } from "@hellyeah/x-ray";
import { extractAsin, getCountryFromCookie } from "@/lib/affiliate";

interface TrackedExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

function isAmazonUrl(href: string | undefined): boolean {
  if (!href) return false;

  try {
    const { hostname } = new URL(href);
    return (
      hostname === "amazon.com" ||
      hostname.endsWith(".amazon.com") ||
      hostname === "amazon.in" ||
      hostname.endsWith(".amazon.in")
    );
  } catch {
    return false;
  }
}

export function TrackedExternalLink({ href, onClick, ...props }: TrackedExternalLinkProps) {
  const isAmazonLink = isAmazonUrl(href);

  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !href || !isAmazonLink) return;

        try {
          track("affiliate_link_clicked", {
            asin: extractAsin(href) ?? "unknown",
            marketplace: getCountryFromCookie(),
            destination_host: new URL(href).hostname,
            link_type: "inline_article_link",
          });
        } catch {
          track("affiliate_link_clicked", {
            asin: extractAsin(href) ?? "unknown",
            marketplace: getCountryFromCookie(),
            link_type: "inline_article_link",
          });
        }
      }}
      {...props}
    />
  );
}
