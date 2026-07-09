import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Amazon Finds | iWriteTech",
  description: "Hidden gems and affordable aesthetic tech finds sourced from Amazon.",
};

export default function AmazonFindsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium" aria-current="page">
          Amazon Finds
        </span>
      </nav>

      {/* Hero */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Hidden Gems
          </span>
        </div>
        <h1 className="display-lg mb-6">Amazon Finds</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Hidden gems and affordable aesthetic tech finds sourced from Amazon.
          High-quality accessories that won't break the bank.
        </p>
      </div>

      {/* Empty State */}
      <div className="bg-card border border-dashed border-border rounded-xl py-24 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
          <FileText className="h-7 w-7 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-xl mb-2">No finds yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          We are currently scouting Amazon for the best aesthetic tech. Check back soon!
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
