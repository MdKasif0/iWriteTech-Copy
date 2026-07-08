import RSS from "rss";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techfinds.com";
  
  const feed = new RSS({
    title: "TechFinds",
    description: "Curated, tested, aesthetic tech for your desk.",
    generator: "TechFinds RSS",
    feed_url: `${baseUrl}/feed.xml`,
    site_url: baseUrl,
    image_url: `${baseUrl}/logo.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, TechFinds`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const posts = getAllPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      guid: `${baseUrl}/blog/${post.slug}`,
      categories: [post.category, ...post.tags],
      author: post.author,
      date: post.date,
      enclosure: post.ogImage || post.featuredImage || post.thumbnail ? {
        url: (post.ogImage || post.featuredImage || post.thumbnail) as string,
        type: "image/jpeg"
      } : undefined
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
