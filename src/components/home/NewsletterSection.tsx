"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function NewsletterSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-8 md:py-12 bg-card/50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Stay Updated
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="heading mb-3">The Weekly Desk Drop</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            One email per week. The best finds, reviews, and desk setups — no spam, no fluff.
          </p>

          {/* Email form — non-functional for now */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Wire up to ESP (ConvertKit, Resend, etc.)
              // const email = e.currentTarget.email.value;
              // await subscribeToNewsletter(email);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="flex-1 h-12 px-5 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8"
              disabled
            >
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            Free forever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
