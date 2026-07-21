"use client";

import { useEffect, useRef, useState } from "react";
import { ADSENSE_CLIENT, isAdsEnabled } from "@/lib/adsense";

/**
 * AdBanner — Reusable Google AdSense Display Ad Component
 * ========================================================
 *
 * USAGE:
 *   <AdBanner adSlot="1234567890" />
 *   <AdBanner adSlot={process.env.NEXT_PUBLIC_AD_SLOT_TOP!} className="my-8" />
 *
 * HOW TO MOVE ADS:
 *   Simply move the <AdBanner /> JSX to a different location in your template.
 *
 * HOW TO ADD NEW AD UNITS:
 *   1. Create a new Display ad unit in AdSense dashboard
 *   2. Add the slot ID to .env.local (e.g. NEXT_PUBLIC_AD_SLOT_SIDEBAR=...)
 *   3. Use <AdBanner adSlot={process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR!} />
 *
 * HOW TO DISABLE:
 *   - Set NEXT_PUBLIC_ADS_ENABLED=false in .env.local
 *   - Or remove the ad slot env variable (empty slots are skipped)
 */

interface AdBannerProps {
  /** The data-ad-slot value from your AdSense ad unit */
  adSlot: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdBanner({ adSlot, className = "", style }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLModElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const initialized = useRef(false);

  // Intersection Observer — only load ad when it scrolls into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Push ad once visible
  useEffect(() => {
    if (!isVisible || initialized.current) return;
    if (!isAdsEnabled() || !adSlot) return;

    // Small delay to ensure the <ins> element is in the DOM
    const timer = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
      } catch {
        // Fail silently — ad blocker or AdSense unavailable
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isVisible, adSlot]);

  // Don't render anything if ads are disabled or no slot provided
  if (!adSlot) return null;

  return (
    <div
      ref={containerRef}
      className={`ad-container w-full flex justify-center py-8 md:py-12 ${className}`}
      style={style}
      aria-hidden="true"
      data-nosnippet
    >
      <div className="w-full max-w-[728px]">
        {/* Subtle editorial separator */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="h-px w-8 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium select-none">
            Advertisement
          </span>
          <span className="h-px w-8 bg-border" />
        </div>

        {/* Ad container with reserved min-height to prevent CLS */}
        <div className="rounded-xl bg-muted/30 dark:bg-muted/10 border border-border/40 overflow-hidden flex items-center justify-center"
          style={{ minHeight: "90px" }}
        >
          {isVisible && (
            <ins
              ref={adRef}
              className="adsbygoogle"
              style={{
                display: "block",
                width: "100%",
              }}
              data-ad-client={ADSENSE_CLIENT}
              data-ad-slot={adSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          )}
        </div>
      </div>
    </div>
  );
}
