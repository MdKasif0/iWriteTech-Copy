"use client";

import { Check, ArrowRight, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function NewsletterSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-[140px] px-4 md:px-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Premium Invitation Container */}
        <div className="relative w-full rounded-[36px] overflow-hidden bg-card/80 dark:bg-card/30 border border-border/40 dark:border-border/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
          
          {/* Subtle Radial Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/40 to-transparent blur-[60px] pointer-events-none" />
          
          {/* Giant Watermark Illustration */}
          <Monitor 
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] text-foreground/[0.03] dark:text-foreground/[0.02] -rotate-12 pointer-events-none" 
            strokeWidth={0.5} 
          />

          <div className="relative z-10 pt-[100px] pb-[90px] px-8 md:px-[80px] flex flex-col items-center text-center">
            
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Weekly Edition
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </div>

            {/* Heading */}
            <h2 className="font-heading text-5xl md:text-[64px] font-semibold text-foreground leading-[1.1] mb-8 max-w-[800px] mx-auto tracking-tight">
              The Weekly Desk Drop
            </h2>
            
            {/* Subtitle */}
            <p className="text-muted-foreground text-lg md:text-[22px] leading-[1.6] mb-12 max-w-[700px] mx-auto">
              One carefully curated email every Friday featuring aesthetic desk setups, premium gadgets, honest reviews, buying guides, and the best tech finds. 
              <span className="block mt-2 font-medium text-foreground/70">No spam. Only beautiful technology.</span>
            </p>

            {/* Email form group */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="w-full max-w-[550px] mx-auto mb-8 relative flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full h-[64px] px-[28px] rounded-full bg-background dark:bg-[#1A1A1A] border border-border/60 dark:border-border/30 text-foreground text-[17px] placeholder:text-muted-foreground/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="h-[64px] rounded-full px-10 bg-[#E8E1D5] hover:bg-[#DED5C5] dark:bg-[#2A2824] dark:hover:bg-[#33302C] text-foreground font-semibold text-[17px] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                disabled
              >
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-2 text-sm md:text-[16px] text-muted-foreground/80 font-medium mb-12">
              <Check className="w-4 h-4 text-primary" />
              <span>Join 5,000+ readers. Unsubscribe anytime.</span>
            </div>

            {/* Benefit Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-[800px]">
              {[
                "Weekly Desk Setups",
                "Curated Gadget Finds",
                "Honest Buying Guides"
              ].map((benefit, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 dark:bg-muted/20 border border-border/30 text-muted-foreground/90 text-sm font-medium hover:bg-muted dark:hover:bg-muted/40 hover:text-foreground transition-colors cursor-default"
                >
                  <Check className="w-3.5 h-3.5 text-primary/80" />
                  {benefit}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
