import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GEO_COOKIE_NAME } from "@/lib/affiliate";

/**
 * Next.js Proxy — Geo-detection for affiliate link routing.
 *
 * Reads the visitor's country from Netlify's geolocation header
 * (`x-country-code`, set automatically by Netlify's edge network)
 * and stores it in a lightweight cookie so client components can read it.
 *
 * - Runs at the network boundary on Netlify (zero cold-start penalty).
 * - Skips if the cookie already exists (avoids overwriting on every request).
 * - Falls back to "US" if geolocation is unavailable (local dev, bots, VPNs).
 */
export function proxy(request: NextRequest) {
  // If the cookie is already set, skip — no work needed
  const existingGeo = request.cookies.get(GEO_COOKIE_NAME);
  if (existingGeo?.value) {
    return NextResponse.next();
  }

  // Read country from Netlify's geolocation header
  // Netlify sets x-country-code (ISO 3166-1 alpha-2) on its edge network
  const country =
    request.headers.get("x-country-code") ??
    request.headers.get("x-nf-country-code") ??
    "US";

  // Create response and set the geo cookie
  const response = NextResponse.next();
  response.cookies.set(GEO_COOKIE_NAME, country, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: false, // Must be readable by client-side JS
  });

  return response;
}

/**
 * Matcher config — only run proxy on page routes.
 * Skips static assets, API routes, and Next.js internals.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, logo.svg, robots.txt, sitemap.xml
     * - API routes
     * - Static asset files (images, fonts, etc.)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|logo\\.svg|robots\\.txt|sitemap\\.xml|api/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)).*)",
  ],
};
