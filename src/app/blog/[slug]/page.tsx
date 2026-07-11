import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { Link as LinkIcon, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getAllPosts, getPostBySlug, getRelatedPosts, extractTableOfContents } from "@/lib/posts";
import { MDXComponents } from "@/components/content/MDXComponents";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = getPostBySlug(slug);

  if (!postData) {
    return {
      title: "Article Not Found | iWriteTech",
    };
  }

  const { meta } = postData;

  const ogImageUrl = meta.ogImage || `${baseUrl}/api/og?title=${encodeURIComponent(meta.seoTitle || meta.title)}&category=${encodeURIComponent(meta.category)}`;
  const pinterestImageUrl = meta.pinterestImage || ogImageUrl;

  const ogImages: Array<{ url: string; width: number; height: number; alt: string }> = [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: meta.title,
    },
  ];

  // Add Pinterest-optimized portrait image if it differs from the standard OG image
  if (meta.pinterestImage && meta.pinterestImage !== meta.ogImage) {
    ogImages.push({
      url: pinterestImageUrl,
      width: 1000,
      height: 1500,
      alt: meta.title,
    });
  }

  return {
    title: `${meta.seoTitle} | iWriteTech`,
    description: meta.seoDescription,
    openGraph: {
      title: `${meta.seoTitle} | iWriteTech`,
      description: meta.seoDescription,
      type: "article",
      publishedTime: meta.date,
      authors: [meta.author],
      url: `${baseUrl}/blog/${meta.slug}`,
      images: ogImages,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${meta.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postData = getPostBySlug(slug);

  if (!postData) {
    notFound();
  }

  const { meta, content } = postData;
  const toc = extractTableOfContents(content);
  const relatedPosts = getRelatedPosts(meta, 3);
  
  // Format date
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const categorySlug = meta.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.category,
        item: `${baseUrl}/categories/${categorySlug}`
      },
      {
        "@type": "ListItem",
        position: 4,
        name: meta.title,
        item: `${baseUrl}/blog/${meta.slug}`
      }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.seoTitle || meta.title,
    description: meta.seoDescription || meta.description,
    image: meta.ogImage || meta.featuredImage,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      "@type": "Person",
      name: meta.author,
    },
    publisher: {
      "@type": "Organization",
      name: "iWriteTech",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${meta.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs" aria-current="page">
            {meta.title}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Link href={`/categories/${meta.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
              <Badge variant="secondary" className="mb-6 px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                {meta.category}
              </Badge>
            </Link>
            
            <h1 className="display-lg mb-6 leading-tight">
              {meta.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              {meta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground border-y border-border py-4 w-full justify-center">
              <AuthorCard name={meta.author} compact />
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-4">
                <span className="mono-data tracking-wide">{formattedDate}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span className="mono-data tracking-wide">{meta.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {meta.featuredImage && (
            <div className="relative mt-12 aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-muted border border-border">
              <Image 
                src={meta.featuredImage} 
                alt={meta.title} 
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Main Content & TOC Layout */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 relative">
          
          {/* Left Sidebar (Desktop TOC) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-4 bg-primary" />
                <h3 className="font-semibold text-sm uppercase tracking-widest text-primary">On this page</h3>
              </div>
              
              {toc.length > 0 ? (
                <nav className="space-y-3" aria-label="Table of contents">
                  {toc.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
                        heading.level === 3 ? "pl-4 text-xs" : "font-medium"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-sm text-muted-foreground italic">No sections available.</p>
              )}
            </div>
          </aside>

          {/* Main Article Prose */}
          <div className="flex-1 min-w-0">
            {/* Mobile TOC (Accordion style simple fallback) */}
            <div className="lg:hidden mb-10 p-5 rounded-xl border border-border bg-card">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-primary" />
                On this page
              </h3>
              {toc.length > 0 ? (
                <nav className="space-y-3">
                  {toc.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block text-sm text-muted-foreground hover:text-primary transition-colors ${
                        heading.level === 3 ? "pl-4" : ""
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-sm text-muted-foreground italic">No sections available.</p>
              )}
            </div>

            {/* MDX Content Rendering */}
            <div className="w-full max-w-none">
              <MDXRemote
                source={content}
                components={MDXComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeSlug], // Auto-generates IDs for headings
                  },
                }}
              />
            </div>
            
            {/* Tags */}
            {meta.tags && meta.tags.length > 0 && (
              <div className="mt-16 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-muted/50">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Share Footer */}
            <div className="mt-12 py-8 border-y border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="font-semibold text-lg">Share this article</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Copy link">
                  <LinkIcon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                </Button>
              </div>
            </div>

            {/* Author Bio Footer */}
            <div className="mt-12">
              <AuthorCard name={meta.author} />
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-primary" />
              <h2 className="heading m-0">Continue Reading</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
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
                      <div className="aspect-[16/10] bg-muted" />
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <Badge variant="secondary" className="w-fit text-xs mb-3">{post.category}</Badge>
                      <h3 className="font-semibold text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-3">
                        {post.title}
                      </h3>
                      <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
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
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}

