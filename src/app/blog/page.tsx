import type { Metadata } from "next";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import { BlogListingClient } from "@/components/blog/BlogListingClient";

export const metadata: Metadata = {
  title: "Blog | TechFinds",
  description:
    "Browse all TechFinds articles — curated reviews, buying guides, and deep dives into the best aesthetic tech for your workspace.",
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPosts();
  const featuredPost = featured.length > 0 ? featured[0] : null;

  // Exclude the featured post from the main listing to avoid duplication
  const listingPosts = featuredPost
    ? allPosts.filter((p) => p.slug !== featuredPost.slug)
    : allPosts;

  return <BlogListingClient allPosts={listingPosts} featuredPost={featuredPost} />;
}
