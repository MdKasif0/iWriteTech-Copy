import fs from 'fs';
import path from 'path';

// Define the products to fetch
const products = [
  /*
  {
    slug: "tovixy-organiser",
    type: "product",
    asin: "B0CL32N9VC",
    name: "TOVIXY Pen Stand Desk Organiser",
  },
  */
  {
    slug: "mbkoh-cable-tray",
    type: "product",
    asin: "B0GYLP3GT6",
    name: "MBKOH Under-Desk Cable Management Tray",
  },
  {
    slug: "saleon-lamp",
    type: "search",
    searchTerm: "SaleOn Rechargeable LED Desk Lamp Pen Holder USB-C",
    name: "SaleOn Rechargeable LED Desk Lamp",
    note: "SEARCH RESULT — verify this matched the right product before publishing"
  },
  {
    slug: "striff-stand",
    type: "search",
    searchTerm: "STRIFF 2-in-1 Laptop Mobile Stand Ergonomic",
    name: "STRIFF 2-in-1 Laptop and Mobile Stand",
    note: "SEARCH RESULT — verify this matched the right product before publishing"
  },
];

const alreadyFetched = {
  slug: "k-knodel-desk-mat",
  existingPath: "public/images/products/k-knodel-desk-mat/main.jpg",
  copyTo: "public/images/posts/aesthetic-study-desk-setup-2026/k-knodel-desk-mat.jpg",
};

const RAINFOREST_API_KEY = process.env.RAINFOREST_API_KEY;
if (!RAINFOREST_API_KEY) {
  console.error("Missing RAINFOREST_API_KEY in environment variables.");
  process.exit(1);
}

const OUTPUT_DIR = path.join(process.cwd(), "public/images/posts/aesthetic-study-desk-setup-2026");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadImage(url, dest) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download image: ${response.statusText}`);
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

async function fetchProduct(product) {
  console.log(`\nFetching ${product.name} (${product.slug})...`);
  
  try {
    let url = `https://api.rainforestapi.com/request?api_key=${RAINFOREST_API_KEY}&amazon_domain=amazon.in`;
    
    if (product.type === "product") {
      url += `&type=product&asin=${product.asin}`;
    } else {
      url += `&type=search&search_term=${encodeURIComponent(product.searchTerm)}`;
    }
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    let imageUrl;
    if (product.type === "product") {
      imageUrl = data.product?.main_image?.link;
    } else {
      imageUrl = data.search_results?.[0]?.image;
    }
    
    if (!imageUrl) {
      throw new Error("No image found in response data.");
    }
    
    console.log(`Found image: ${imageUrl}`);
    
    const dest = path.join(OUTPUT_DIR, `${product.slug}.jpg`);
    await downloadImage(imageUrl, dest);
    
    console.log(`Saved image to ${dest}`);
    
    if (data.request_info && data.request_info.credits_remaining !== undefined) {
      console.log(`Credits remaining: ${data.request_info.credits_remaining}`);
      if (data.request_info.credits_remaining < 10) {
        console.warn("WARNING: Credits below 10! Stopping.");
        process.exit(1);
      }
    }
  } catch (err) {
    console.error(`Failed to fetch ${product.slug}:`, err.message);
  }
}

async function main() {
  // 1. Copy the already fetched image
  console.log(`\nCopying already fetched image for ${alreadyFetched.name}...`);
  const existingPath = path.join(process.cwd(), alreadyFetched.existingPath);
  const copyToPath = path.join(process.cwd(), alreadyFetched.copyTo);
  
  if (fs.existsSync(existingPath)) {
    fs.copyFileSync(existingPath, copyToPath);
    console.log(`Copied ${existingPath} to ${copyToPath}`);
  } else {
    console.error(`WARNING: Existing image not found at ${existingPath}`);
  }
  
  // 2. Fetch new images
  for (const product of products) {
    await fetchProduct(product);
    await delay(1500); // 1.5 second delay between requests
  }
  
  console.log("\nDone!");
}

main().catch(err => {
  console.error("Unhandled error:", err);
});
