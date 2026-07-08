import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { SearchClient } from "@/components/blog/SearchClient";

export const metadata: Metadata = {
  title: "Search | TechFinds",
  description: "Search across all TechFinds articles, reviews, and guides.",
};

export default function SearchPage() {
  const allPosts = getAllPosts();

  return <SearchClient allPosts={allPosts} />;
}
