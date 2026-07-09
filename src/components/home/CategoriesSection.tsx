"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { categories } from "@/lib/category-data";

export function CategoriesSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();
  
  // Truncate to exactly 7 items (2 rows on desktop since the first item spans 2 columns)
  const displayCategories = categories.slice(0, 7);

  return (
    <section
      ref={sectionRef}
      className={`relative py-[140px] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Subtle radial background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Browse
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">Categories</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover expertly curated categories covering the best aesthetic technology, desk setups, productivity gear and modern gadgets.
            </p>
          </div>
          
          <Link 
            href="/categories" 
            className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((cat, index) => {
            const Icon = cat.icon;
            // Make the first card span 2 columns on desktop and tablet
            const isFeatured = index === 0;
            
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className={`group block ${isFeatured ? 'md:col-span-2' : ''}`}
                aria-label={`Browse ${cat.name}`}
              >
                <div className="relative bg-card/30 border border-border/30 rounded-[28px] p-9 min-h-[260px] h-full flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/40 hover:bg-card/60 overflow-hidden">
                  
                  <div className="w-14 h-14 rounded-[18px] bg-primary/10 flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(134,100,50,0.15)]">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-[28px] mb-[18px] leading-tight text-foreground transition-colors">
                    {cat.name}
                  </h3>
                  
                  <p className="text-[16px] text-muted-foreground leading-[1.6] max-w-[28ch]">
                    {cat.description}
                  </p>
                  
                  {/* Pushes arrow to the bottom right */}
                  <div className="mt-auto pt-6 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
