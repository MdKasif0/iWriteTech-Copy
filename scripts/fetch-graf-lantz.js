import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = process.env.RAINFOREST_API_KEY;
if (!API_KEY) {
  console.error("Missing RAINFOREST_API_KEY");
  process.exit(1);
}

const BASE_URL = "https://api.rainforestapi.com/request";

const product = { 
  asin: "B0B13ZBX29", 
  name: "Graf Lantz Merino Wool Felt Desk Pad", 
  dest: "public/images/posts/best-desk-mats-2026/graf-lantz-felt.png" 
};

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
  console.log(`Fetching ${product.name}...`);
  try {
    const data = await fetchRainforest({
      api_key: API_KEY,
      type: "product",
      amazon_domain: "amazon.in",
      asin: product.asin
    });
    
    const credits = data.request_info?.credits_remaining;
    const imageUrl = data.product?.main_image?.link;
    
    if (!imageUrl) {
      console.error(`  [ERROR] No image found for ${product.name}`);
      return;
    }
    
    console.log(`  Found image: ${imageUrl}`);
    await downloadImage(imageUrl, product.dest);
    console.log(`  Saved to ${product.dest}`);
    console.log(`  Credits remaining: ${credits}`);
    
  } catch (e) {
    console.error(`  [ERROR] Failed to fetch ${product.name}: ${e.message}`);
  }
}

main();
