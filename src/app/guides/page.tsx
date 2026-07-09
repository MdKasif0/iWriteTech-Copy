import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Buying Guides | iWriteTech",
  description: "Comprehensive buying guides to help you choose the best aesthetic tech for your needs.",
};

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium" aria-current="page">
          Buying Guides
        </span>
      </nav>

      {/* Hero */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Curated Picks
          </span>
        </div>
        <h1 className="display-lg mb-6">Buying Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Comprehensive buying guides to help you choose the best tech for your needs.
          Whether you're building a minimalist desk setup or upgrading your daily carry.
        </p>
      </div>

      {/* Empty State */}
      <div className="bg-card border border-dashed border-border rounded-xl py-24 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
          <FileText className="h-7 w-7 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-xl mb-2">No guides yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          We are working on fresh buying guides. Check back soon for new curated lists!
        </p>
        <Link href="/blog">
          <Badge variant="outline" className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-sm">
            Browse all articles
          </Badge>
        </Link>
      </div>
    </div>
  );
}
