This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Content Management

### Adding a New MDX Article
1. Create a new `.mdx` file in the `content/posts/` directory. (e.g. `my-new-post.mdx`).
2. Add the required frontmatter at the top of the file:
```mdx
---
title: "Your Title"
description: "A short summary"
slug: "my-new-post"
author: "Author Name"
category: "Desk Setups"
tags: ["productivity", "minimal"]
date: "2026-07-08"
featuredImage: "https://images.unsplash.com/..."
thumbnail: "https://images.unsplash.com/..."
featured: false
---
```
3. Write your content below using standard Markdown or the custom MDX components (`<ProductCard />`, `<ComparisonTable />`, `<ProsConsBox />`, etc.).
Note: If using Unsplash images, ensure the domain is in `next.config.ts`.

### Editing Categories
To add or modify categories across the site (Homepage, Navbar, Footer, and `/categories` route):
1. Open `src/lib/categories.ts`.
2. Edit the `CATEGORIES_CONFIG` array.
3. Provide the name, icon, and SEO description for each category. Next.js will automatically generate the category routes based on this config!

## Environment Variables & Analytics

For production deployment, make sure to set these environment variables in your Netlify dashboard (or `.env` for local development):

- `NEXT_PUBLIC_SITE_URL`: The production URL (e.g., `https://yourdomain.com`). Used for SEO canonicals and XML sitemaps.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 Measurement ID (starts with `G-`). This automatically enables tracking.
- `NEXT_PUBLIC_GSC_VERIFICATION`: The verification string for Google Search Console.
- `NEXT_PUBLIC_AFFILIATE_TAG`: Your Amazon Associates tag (e.g., `yourtag-20`). The `<AffiliateButton />` component will automatically append `?tag=yourtag-20` to any Amazon product links!

## Deploy on Netlify

This site is optimized for Netlify using the `@netlify/plugin-nextjs` package. It uses the Netlify Next.js Advanced Middleware and Edge Functions for SSR and ISR.

To deploy:
1. Push this repository to GitHub.
2. In the Netlify Dashboard, create a new site from your GitHub repository.
3. The build command (`pnpm run build`) and publish directory (`.next`) will be automatically detected via the `netlify.toml` file!
