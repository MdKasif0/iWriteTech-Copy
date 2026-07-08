import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { CATEGORIES_CONFIG } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techfinds.com";

  // Static routes
  const staticRoutes = [
    "",
    "/blog",
    "/search",
    "/reviews",
    "/guides",
    "/amazon-finds",
    "/about",
    "/contact",
    "/privacy",
    "/affiliate-disclosure",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic category routes
  const categoryRoutes = Object.keys(CATEGORIES_CONFIG).map((slug) => ({
    url: `${baseUrl}/categories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic post routes
  const posts = getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
