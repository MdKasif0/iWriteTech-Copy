import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail: string;
  featuredImage: string;
  featured: boolean;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export const CATEGORIES = [
  "Desk Setups",
  "MacBook Accessories",
  "Mechanical Keyboards",
  "Productivity",
  "Smart Home",
  "Audio Gear",
  "iPad Accessories",
  "Cables & Hubs",
  "Gaming",
  "Tech Components",
] as const;

export function extractTableOfContents(markdown: string): TOCItem[] {
  const headings: TOCItem[] = [];
  // Match ## and ### headings. Ignores # (h1) and ####+ (h4+).
  // Also avoids matching headings inside code blocks if they start exactly at the line start, but a simple regex is usually enough for well-formatted MDX.
  const regex = /^(##|###)\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2].replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1"); // Strip links from text if any
    
    // Create an ID that matches what rehype-slug will generate
    const id = text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove non-word characters
      .replace(/\s+/g, "-");    // Replace spaces with hyphens

    headings.push({ id, text, level });
  }
  return headings;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  if (files.length === 0) return [];

  const posts = files
    .map((filename) => {
      const filePath = path.join(POSTS_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: (data.title as string) ?? "Untitled",
        description: (data.description as string) ?? "",
        author: (data.author as string) ?? "TechFinds Team",
        date: (data.date as string) ?? new Date().toISOString(),
        category: (data.category as string) ?? "Uncategorized",
        tags: (data.tags as string[]) ?? [],
        thumbnail: (data.thumbnail as string) ?? "",
        featuredImage: (data.featuredImage as string) ?? (data.thumbnail as string) ?? "",
        featured: (data.featured as boolean) ?? false,
        readingTime: stats.text,
        seoTitle: (data.seoTitle as string) ?? (data.title as string) ?? "Untitled",
        seoDescription: (data.seoDescription as string) ?? (data.description as string) ?? "",
        ogImage: (data.ogImage as string) ?? (data.featuredImage as string) ?? (data.thumbnail as string) ?? "",
      } satisfies PostMeta;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const filePathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePathMd = path.join(POSTS_DIR, `${slug}.md`);
  
  let filePath = null;
  if (fs.existsSync(filePathMdx)) filePath = filePathMdx;
  else if (fs.existsSync(filePathMd)) filePath = filePathMd;
  
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const meta: PostMeta = {
    slug,
    title: (data.title as string) ?? "Untitled",
    description: (data.description as string) ?? "",
    author: (data.author as string) ?? "TechFinds Team",
    date: (data.date as string) ?? new Date().toISOString(),
    category: (data.category as string) ?? "Uncategorized",
    tags: (data.tags as string[]) ?? [],
    thumbnail: (data.thumbnail as string) ?? "",
    featuredImage: (data.featuredImage as string) ?? (data.thumbnail as string) ?? "",
    featured: (data.featured as boolean) ?? false,
    readingTime: stats.text,
    seoTitle: (data.seoTitle as string) ?? (data.title as string) ?? "Untitled",
    seoDescription: (data.seoDescription as string) ?? (data.description as string) ?? "",
    ogImage: (data.ogImage as string) ?? (data.featuredImage as string) ?? (data.thumbnail as string) ?? "",
  };

  return { meta, content };
}

export function getRelatedPosts(currentPost: PostMeta, count: number = 3): PostMeta[] {
  const allPosts = getAllPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(p => p.slug !== currentPost.slug);
  
  // Score posts based on matching category and tags
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    if (post.category === currentPost.category) score += 2;
    
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += sharedTags.length;
    
    return { post, score };
  });
  
  // Sort by score descending, then by date descending
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });
  
  return scoredPosts.slice(0, count).map(sp => sp.post);
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getLatestPosts(count: number = 6): PostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats).sort();
}
