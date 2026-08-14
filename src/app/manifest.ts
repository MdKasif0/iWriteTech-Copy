import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iWriteTech",
    short_name: "iWriteTech",
    description: "Curated tech reviews, buying guides, and desk-setup inspiration.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#1A1A1A",
    icons: [
      {
        src: "/iwritetech-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
