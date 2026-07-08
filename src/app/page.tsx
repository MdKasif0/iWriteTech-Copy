import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticlesSection } from "@/components/home/FeaturedArticlesSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getFeaturedPosts, getLatestPosts } from "@/lib/posts";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(6);

  return (
    <>
      <HeroSection />
      <FeaturedArticlesSection posts={featuredPosts} />
      <CategoriesSection />
      <LatestArticlesSection posts={latestPosts} />
      <NewsletterSection />
    </>
  );
}
