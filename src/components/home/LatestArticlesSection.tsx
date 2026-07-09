"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowRight, User } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PostMeta } from "@/lib/posts";

interface LatestArticlesSectionProps {
  posts: PostMeta[];
}

export function LatestArticlesSection({ posts }: LatestArticlesSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-[140px] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Recent
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Latest Articles
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover the newest reviews, buying guides and curated technology recommendations.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => {
              const isNewest = index === 0;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  aria-label={`Read article: ${post.title}`}
                >
                  <article className="relative bg-card dark:bg-[#161616] border border-border/40 dark:border-border/20 rounded-[28px] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-primary/40 dark:hover:border-primary/30 hover:bg-card/80 dark:hover:bg-[#1A1A1A] flex flex-col h-full">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                      {isNewest && (
                        <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                          Newest
                        </div>
                      )}
                      
                      {post.thumbnail ? (
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="h-10 w-10 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4 inline-flex">
                        <span className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-semibold text-[30px] leading-tight text-foreground mb-4 line-clamp-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                        {post.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-border/10 flex flex-col gap-6">
                        {/* Metadata Row */}
                        <div className="flex items-center gap-3 text-[13px] text-muted-foreground/80 font-medium">
                          <span className="flex items-center gap-1.5 text-foreground/80">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </span>
                          <span>•</span>
                          <span className="mono-data tracking-wide">{post.readingTime}</span>
                          <span>•</span>
                          <span className="mono-data tracking-wide">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        
                        {/* Bottom Action */}
                        <div className="flex items-center text-[15px] font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-card/30 border border-dashed border-border/50 rounded-[28px] py-24 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-muted-foreground/60" />
            </div>
            <h3 className="font-heading font-semibold text-2xl mb-3">No articles yet</h3>
            <p className="text-muted-foreground max-w-sm">
              Articles will appear here once you start publishing content.
              Add MDX files to <code className="mono-data text-xs bg-muted px-1.5 py-0.5 rounded">content/posts/</code> to get started.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
