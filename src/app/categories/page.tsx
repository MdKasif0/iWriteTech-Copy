import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/category-data";

export const metadata = {
  title: "Categories | iWriteTech",
  description: "Browse all premium technology categories.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen py-[140px] relative">
      {/* Subtle radial background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Collections
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h1 className="font-heading text-6xl md:text-7xl font-semibold text-foreground mb-6">
            All Categories
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Explore our expertly curated collections covering the best aesthetic technology, desk setups, and modern gadgets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            // Let the first category be slightly larger to create editorial hierarchy on the full page
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
    </main>
  );
}
