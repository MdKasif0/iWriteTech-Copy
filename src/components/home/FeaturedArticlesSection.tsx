"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PostMeta } from "@/lib/posts";

interface FeaturedArticlesSectionProps {
  posts: PostMeta[];
}

export function FeaturedArticlesSection({ posts }: FeaturedArticlesSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Featured
          </span>
        </div>
        <h2 className="heading mb-10">Featured Articles</h2>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Thumbnail */}
                  {post.thumbnail ? (
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                  )}

                  <div className="p-5 space-y-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
          /* Empty state */
          <div className="bg-card border border-dashed border-border rounded-xl py-16 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">No featured articles yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Featured articles will appear here once content is published.
              Add MDX files to <code className="mono-data text-xs">content/posts/</code> with{" "}
              <code className="mono-data text-xs">featured: true</code> in the frontmatter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
