"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, FileText, ArrowRight, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PostMeta } from "@/lib/posts";

const CATEGORIES = [
  "Desk Setups",
  "MacBook Accessories",
  "Mechanical Keyboards",
  "Productivity",
  "Smart Home",
  "Audio Gear",
  "iPad Accessories",
  "Cables & Hubs",
  "Gaming",
  "Tech Components",
];

type SortOption = "newest" | "oldest" | "a-z";
const POSTS_PER_PAGE = 9;

interface BlogListingClientProps {
  allPosts: PostMeta[];
  featuredPost: PostMeta | null;
}

export function BlogListingClient({ allPosts, featuredPost }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [contentRef, contentVisible] = useScrollReveal<HTMLDivElement>();

  // Filter + sort
  const filteredPosts = useMemo(() => {
    let posts = [...allPosts];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeCategory) {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case "oldest":
        posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "a-z":
        posts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return posts;
  }, [allPosts, searchQuery, activeCategory, sortBy]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryClick = (cat: string) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const hasPosts = allPosts.length > 0;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Page header */}
      <div
        ref={headerRef}
        className={`mb-12 transition-all duration-700 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Blog
          </span>
        </div>
        <h1 className="display-lg mb-4">All Articles</h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Handpicked reviews, guides, and deep dives into the best aesthetic tech for your workspace.
        </p>
      </div>

      {/* Featured post slot */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="group block mb-12">
          <article className="bg-card border border-border rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-300 hover:shadow-lg">
            {featuredPost.thumbnail ? (
              <div className="relative aspect-[16/10] md:aspect-auto bg-muted overflow-hidden">
                <Image
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-[16/10] md:aspect-auto md:min-h-[280px] bg-muted flex items-center justify-center">
                <FileText className="h-12 w-12 text-muted-foreground/30" />
              </div>
            )}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Featured
                </span>
              </div>
              <Badge variant="secondary" className="w-fit mb-3 text-xs">{featuredPost.category}</Badge>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground line-clamp-2 mb-4">{featuredPost.description}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="mono-data">{featuredPost.readingTime}</span>
                <span>·</span>
                <span className="mono-data">
                  {new Date(featuredPost.date).toLocaleDateString("en-US", {
                    month: "short", day: "numeric", year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* Controls bar */}
      <div
        ref={contentRef}
        className={`transition-all duration-700 ease-out ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content area */}
          <div className="flex-1 min-w-0">
            {/* Search + sort row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 h-11 rounded-lg"
                  aria-label="Search articles"
                />
              </div>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-full sm:w-[180px] h-11 rounded-lg" aria-label="Sort articles">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="a-z">A – Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category filter chips */}
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
              <button
                onClick={() => { setActiveCategory(null); setCurrentPage(1); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                  !activeCategory
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
                aria-pressed={!activeCategory}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results */}
            {hasPosts ? (
              <>
                {paginatedPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                        <article className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          {post.thumbnail ? (
                            <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                              <Image src={post.thumbnail} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
                            <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.description}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                              <span className="mono-data">{post.readingTime}</span>
                              <span>·</span>
                              <span className="mono-data">
                                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <EmptyFilterState query={searchQuery} category={activeCategory} />
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav className="flex items-center justify-center gap-2 mt-10" aria-label="Pagination">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={page === currentPage ? "default" : "outline"}
                        size="sm"
                        className="w-9 h-9"
                        onClick={() => setCurrentPage(page)}
                        aria-current={page === currentPage ? "page" : undefined}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </nav>
                )}
              </>
            ) : (
              /* Full empty state — no posts at all */
              <div className="bg-card border border-dashed border-border rounded-xl py-20 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
                  <FileText className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-2">No articles yet</h3>
                <p className="text-sm text-muted-foreground max-w-sm mb-6">
                  Articles will appear here once content is published.
                  Add MDX files to <code className="mono-data text-xs">content/posts/</code> to get started.
                </p>
                <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full">
                  Back to Home
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6" aria-label="Blog sidebar">
            {/* Trending Articles */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-primary" />
                Trending Articles
              </h3>
              {hasPosts ? (
                <ul className="space-y-4">
                  {allPosts.slice(0, 5).map((post, i) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group flex gap-3">
                        <span className="mono-data text-primary/60 text-sm mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </p>
                          <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Trending articles will appear here once content is published.
                </p>
              )}
            </div>

            {/* Popular Categories */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-primary" />
                Popular Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.slice(0, 6).map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="inline-block"
                  >
                    <Badge variant="outline" className="hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                      {cat}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter card */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="h-px w-4 bg-primary" />
                Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the best finds delivered weekly. No spam.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: Wire up to ESP (ConvertKit, Resend, etc.)
                }}
                className="space-y-3"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="h-10 rounded-lg"
                  aria-label="Email for newsletter"
                  required
                />
                <Button type="submit" className="w-full rounded-lg" size="sm" disabled>
                  <Send className="h-3.5 w-3.5 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function EmptyFilterState({ query, category }: { query: string; category: string | null }) {
  return (
    <div className="bg-card border border-dashed border-border rounded-xl py-16 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
        <Search className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-2">No matching articles</h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        {query && category
          ? `No articles found matching "${query}" in ${category}.`
          : query
            ? `No articles found matching "${query}".`
            : `No articles found in ${category}.`}
      </p>
    </div>
  );
}
