import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { CATEGORIES_CONFIG } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all defined categories
export function generateStaticParams() {
  return Object.keys(CATEGORIES_CONFIG).map((slug) => ({
    slug,
  }));
}

// Generate per-category SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES_CONFIG[slug];

  if (!category) {
    return {
      title: "Category Not Found | iWriteTech",
    };
  }

  return {
    title: `${category.seoTitle} | iWriteTech`,
    description: category.description,
    openGraph: {
      title: `${category.seoTitle} | iWriteTech`,
      description: category.description,
      type: "website",
      url: `${baseUrl}/categories/${category.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/categories/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES_CONFIG[slug];

  if (!category) {
    notFound();
  }

  // Find posts that belong to this category
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

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
        name: "Categories",
        item: `${baseUrl}/categories`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${baseUrl}/categories/${category.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/blog" className="hover:text-foreground transition-colors">
          Categories
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium" aria-current="page">
          {category.name}
        </span>
      </nav>

      {/* Category Hero */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Category
          </span>
        </div>
        <h1 className="display-lg mb-6">{category.name}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {categoryPosts.length} Article{categoryPosts.length === 1 ? "" : "s"}
          </Badge>
        </div>
      </div>

      {/* Article Grid */}
      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {post.thumbnail ? (
                  <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        /* Empty State */
        <div className="bg-card border border-dashed border-border rounded-xl py-24 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
            <FileText className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-xl mb-2">No articles in {category.name}</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            We are working on fresh content for this category. Check back soon for new reviews and guides!
          </p>
          <Link href="/blog">
            <Badge variant="outline" className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-sm">
              Browse all articles
            </Badge>
          </Link>
        </div>
      )}
    </div>
    </>
  );
}
