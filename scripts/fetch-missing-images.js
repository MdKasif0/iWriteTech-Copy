import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = process.env.RAINFOREST_API_KEY;
if (!API_KEY) {
  console.error("Missing RAINFOREST_API_KEY");
  process.exit(1);
}

const BASE_URL = "https://api.rainforestapi.com/request";

const missingProducts = [
  { asin: "B0BZ55VHVP", name: "Twelve South Curve SE", dest: "public/images/posts/best-laptop-stands-macbook-2026/twelve-south-curve-se.png" },
  { asin: "B077YSN49G", name: "Oakywood Walnut Laptop Dock", dest: "public/images/posts/best-laptop-stands-macbook-2026/walnut-stand.png" },
  { asin: "B0CTZBR5CG", name: "Xiaomi Mi Computer Monitor Light Bar", dest: "public/images/posts/best-monitor-light-bars-2026/xiaomi-mi-light-bar.png" },
  { asin: "B01M26UJ1C", name: "VariDesk Pro Plus 36", dest: "public/images/posts/best-standing-desk-converters-2026/varidesk-pro-plus-36.png" },
  { asin: "B0C514C64X", name: "VIVO 32-inch K-Series", dest: "public/images/posts/best-standing-desk-converters-2026/vivo-k-series.png" },
  { asin: "B01NBIX9WB", name: "Uncaged Ergonomics CHANGEdesk Mini", dest: "public/images/posts/best-standing-desk-converters-2026/changedesk-mini.png" },
  { asin: "B0DRC9F4FS", name: "Anker MagGo Qi2 Pad", dest: "public/images/posts/best-wireless-chargers-2026/anker-maggo.png" },
  { asin: "B0FRD6N8JV", name: "Spigen ArcField 25W Qi2.2", dest: "public/images/posts/best-wireless-chargers-2026/spigen-arcfield.png" }
];

async function fetchRainforest(params) {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}?${query}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, destPath) {
  const fullPath = path.resolve(process.cwd(), destPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(fullPath);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(fullPath, () => reject(err));
    });
  });
}

async function main() {
  console.log("Fetching 8 missing images using Rainforest API...");
  for (const p of missingProducts) {
    console.log(`\nFetching ${p.name}...`);
    try {
      const data = await fetchRainforest({
        api_key: API_KEY,
        type: "product",
        amazon_domain: "amazon.in",
        asin: p.asin
      });
      
      const credits = data.request_info?.credits_remaining;
      const imageUrl = data.product?.main_image?.link;
      
      if (!imageUrl) {
        console.error(`  [ERROR] No image found for ${p.name}`);
        continue;
      }
      
      console.log(`  Found image: ${imageUrl}`);
      await downloadImage(imageUrl, p.dest);
      console.log(`  Saved to ${p.dest}`);
      console.log(`  Credits remaining: ${credits}`);
      
      // Delay to respect API limits
      await new Promise(r => setTimeout(r, 1500));
    } catch (e) {
      console.error(`  [ERROR] Failed to fetch ${p.name}: ${e.message}`);
    }
  }
  console.log("\nDone!");
}

main();
