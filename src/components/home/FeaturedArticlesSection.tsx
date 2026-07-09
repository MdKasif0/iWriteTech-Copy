"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PostMeta } from "@/lib/posts";

interface FeaturedArticlesSectionProps {
  posts: PostMeta[];
}

export function FeaturedArticlesSection({ posts }: FeaturedArticlesSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  const heroPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section
      ref={sectionRef}
      className={`py-[120px] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-semibold text-foreground">Featured Articles</h2>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-16">
            {/* Main Hero Article */}
            {heroPost && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Large Image */}
                <Link href={`/blog/${heroPost.slug}`} className="group block relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="relative aspect-[16/10] lg:aspect-[16/9] w-full bg-muted">
                    {heroPost.thumbnail ? (
                      <Image
                        src={heroPost.thumbnail}
                        alt={heroPost.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="h-12 w-12 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                </Link>

                {/* Right: Content */}
                <div className="flex flex-col items-start space-y-6">
                  <Badge variant="secondary" className="text-sm uppercase tracking-widest bg-transparent border border-border text-muted-foreground px-4 py-1.5 rounded-full">
                    {heroPost.category}
                  </Badge>
                  
                  <Link href={`/blog/${heroPost.slug}`} className="group">
                    <h3 className="font-heading text-4xl lg:text-5xl leading-tight font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {heroPost.title}
                    </h3>
                  </Link>

                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    {heroPost.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest pt-2 pb-6">
                    <span className="font-medium text-foreground">{heroPost.author}</span>
                    <span>·</span>
                    <span className="mono-data">{heroPost.readingTime}</span>
                    <span>·</span>
                    <span className="mono-data">
                      {new Date(heroPost.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </span>
                  </div>

                  <Link 
                    href={`/blog/${heroPost.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F1ECE1] hover:bg-[#E8E1D8] dark:bg-card dark:hover:bg-accent text-foreground font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Articles */}
            {secondaryPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
                {secondaryPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-card rounded-[24px] border border-border/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-4"
                  >
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden rounded-[16px] mb-6">
                      {post.thumbnail ? (
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="h-8 w-8 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>
                    <div className="px-2 pb-2 space-y-3">
                      <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                        {post.category}
                      </span>
                      <h4 className="font-heading text-2xl font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest pt-2">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                        <span>·</span>
                        <span className="mono-data">{post.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
