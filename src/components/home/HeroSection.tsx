"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection() {
  const [heroRef, heroVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className={`relative py-20 md:py-28 lg:py-36 transition-all duration-700 ease-out ${
        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Curated Tech
              </span>
            </div>

            <h1 className="display-xl max-w-2xl">
              Tech that looks as good as it performs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Curated, tested, aesthetic tech for your desk. We handpick every
              gadget, keyboard, and accessory so you don&apos;t have to scroll
              through thousands of listings.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/blog" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 rounded-full">
                Browse the Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/reviews" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 rounded-full">
                Latest Reviews
              </Link>
            </div>

            {/* Spec line */}
            <div className="pt-6 border-t border-border flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="mono-data text-foreground">5</span>
                <span className="ml-1.5">Categories</span>
              </div>
              <div>
                <span className="mono-data text-foreground">100%</span>
                <span className="ml-1.5">Hands-On Tested</span>
              </div>
              <div>
                <span className="mono-data text-foreground">0</span>
                <span className="ml-1.5">Sponsored Picks</span>
              </div>
            </div>
          </div>

          {/* Right — Featured Find Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Eyebrow label */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-6 bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                    Featured Find
                  </span>
                </div>
              </div>

              {/* Placeholder image area */}
              <div className="mx-6 aspect-[4/3] rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center space-y-2 px-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your first featured article will appear here
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 py-5 space-y-2">
                <div className="h-5 w-3/4 rounded bg-muted" />
                <div className="h-4 w-1/2 rounded bg-muted/60" />
                <div className="flex items-center gap-4 pt-3 text-xs text-muted-foreground">
                  <span className="mono-data">— min read</span>
                  <span>·</span>
                  <span className="mono-data">— date</span>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border border-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
