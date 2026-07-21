/**
 * AdSense Configuration
 * =====================
 * Central config for Google AdSense integration.
 *
 * HOW TO SET UP:
 * 1. Copy .env.example to .env.local
 * 2. Replace placeholder values with your actual AdSense IDs
 * 3. Create ad units in your AdSense dashboard (https://adsense.google.com)
 *    - Go to Ads → By ad unit → Display ads
 *    - Create 3 responsive display ad units (top, middle, bottom)
 *    - Copy each ad unit's "data-ad-slot" value into .env.local
 *
 * HOW TO DISABLE ADS:
 * - Remove or comment out the env variables in .env.local
 * - Or set NEXT_PUBLIC_ADS_ENABLED=false
 */

/** Publisher ID (ca-pub-XXXXXXXXXXXXXXXX) */
export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-6238466387091690";

/** Individual ad-slot IDs created in the AdSense dashboard */
export const AD_SLOTS = {
  top: process.env.NEXT_PUBLIC_AD_SLOT_TOP || "",
  middle: process.env.NEXT_PUBLIC_AD_SLOT_MIDDLE || "",
  bottom: process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM || "",
} as const;

/** Whether ads are enabled (disabled in dev by default) */
export function isAdsEnabled(): boolean {
  // Explicit override
  if (process.env.NEXT_PUBLIC_ADS_ENABLED === "false") return false;

  // Always disable in development / localhost
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0") {
      return false;
    }
  }

  return true;
}
