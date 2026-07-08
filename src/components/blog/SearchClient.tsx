"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, FileText, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PostMeta } from "@/lib/posts";

interface SearchClientProps {
  allPosts: PostMeta[];
}

/**
 * Simple fuzzy match: checks if every word in the query appears somewhere
 * in the target string (case-insensitive). Not a full Levenshtein/fuse.js
 * implementation but covers the "fuzzy" spirit for frontmatter search.
 */
function fuzzyMatch(query: string, target: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const t = target.toLowerCase();
  return words.every((w) => t.includes(w));
}

export function SearchClient({ allPosts }: SearchClientProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];

    return allPosts.filter((post) => {
      const haystack = [
        post.title,
        post.description,
        post.category,
        ...post.tags,
      ].join(" ");
      return fuzzyMatch(q, haystack);
    });
  }, [allPosts, query]);

  const hasQuery = query.trim().length > 0;
  const hasPosts = allPosts.length > 0;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Search
          </span>
          <span className="h-px w-8 bg-primary" />
        </div>
        <h1 className="heading mb-4">Find what you&apos;re looking for</h1>
        <p className="text-muted-foreground">
          Search across all articles, reviews, and guides by title, description, tags, or category.
        </p>
      </div>

      {/* Search input */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full h-14 pl-12 pr-12 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            aria-label="Search articles"
            autoComplete="off"
          />
          {hasQuery && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {hasQuery && (
          <p className="text-sm text-muted-foreground mt-3 text-center" aria-live="polite">
            {results.length === 0
              ? "No results found"
              : `${results.length} result${results.length === 1 ? "" : "s"} found`}
          </p>
        )}
      </div>

      {/* Results area */}
      {hasQuery ? (
        results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {results.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {post.thumbnail ? (
                    <div className="aspect-[16/10] bg-muted overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                  )}
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <Badge variant="secondary" className="w-fit text-xs">{post.category}</Badge>
                    <h3 className="font-semibold text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                      <span className="mono-data">{post.readingTime}</span>
                      <span>·</span>
                      <span className="mono-data">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          /* No results state */
          <div className="bg-card border border-dashed border-border rounded-xl py-16 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">No results found</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Try a different search term or browse by category.
            </p>
            <Link href="/blog" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full mt-6">
              Browse All Articles
            </Link>
          </div>
        )
      ) : !hasPosts ? (
        /* No posts at all */
        <div className="bg-card border border-dashed border-border rounded-xl py-20 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
            <FileText className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Nothing to search yet</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Once articles are published, you&apos;ll be able to search across all titles, descriptions,
            tags, and categories.
          </p>
        </div>
      ) : (
        /* Has posts but no query — show recent suggestions */
        <div className="max-w-2xl mx-auto">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4 text-center">
            Recent Articles
          </h3>
          <div className="space-y-3">
            {allPosts.slice(0, 5).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-4 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <FileText className="h-4 w-4 text-muted-foreground/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{post.category} · {post.readingTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
