export interface CategoryConfig {
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
}

export const CATEGORIES_CONFIG: Record<string, CategoryConfig> = {
  "desk-setups": {
    name: "Desk Setups",
    slug: "desk-setups",
    description: "Inspiration and guides for building minimal, aesthetic, and productive workspaces.",
    seoTitle: "Desk Setup Ideas & Inspiration",
  },
  "mechanical-keyboards": {
    name: "Mechanical Keyboards",
    slug: "mechanical-keyboards",
    description: "Reviews, sound tests, and build guides for custom and pre-built mechanical keyboards.",
    seoTitle: "Mechanical Keyboards Reviews & Guides",
  },
  "macbook-accessories": {
    name: "MacBook Accessories",
    slug: "macbook-accessories",
    description: "The best docks, stands, sleeves, and peripherals for your Apple MacBook.",
    seoTitle: "Best MacBook Accessories & Add-ons",
  },
  "laptop-accessories": {
    name: "Laptop Accessories",
    slug: "laptop-accessories",
    description: "Enhance your portable setup with top-rated stands, chargers, and travel gear.",
    seoTitle: "Top Laptop Accessories for Productivity",
  },
  "phone-accessories": {
    name: "Phone Accessories",
    slug: "phone-accessories",
    description: "MagSafe chargers, premium cases, and daily carry essentials for your smartphone.",
    seoTitle: "Premium Phone Accessories & Cases",
  },
  "study-desk": {
    name: "Study Desk",
    slug: "study-desk",
    description: "Aesthetic and functional desk setups optimized for studying and deep work.",
    seoTitle: "Study Desk Setup Ideas & Essentials",
  },
  "gaming": {
    name: "Gaming",
    slug: "gaming",
    description: "Sleek, non-tacky gaming gear that blends perfectly into a minimal aesthetic.",
    seoTitle: "Minimalist Gaming Gear & Setups",
  },
  "productivity": {
    name: "Productivity",
    slug: "productivity",
    description: "Tools, gadgets, and software to help you focus and get more done.",
    seoTitle: "Tech Gadgets for Productivity & Focus",
  },
  "smart-home": {
    name: "Smart Home",
    slug: "smart-home",
    description: "Automate your space with aesthetic smart lighting, displays, and sensors.",
    seoTitle: "Aesthetic Smart Home Gadgets",
  },
  "amazon-finds": {
    name: "Amazon Finds",
    slug: "amazon-finds",
    description: "Hidden gems and affordable aesthetic tech finds sourced from Amazon.",
    seoTitle: "Best Amazon Tech Finds & Gadgets",
  },
  "tech-gifts": {
    name: "Tech Gifts",
    slug: "tech-gifts",
    description: "Curated gift guides for the tech lovers, creatives, and minimalists in your life.",
    seoTitle: "Aesthetic Tech Gifts for Everyone",
  }
};
