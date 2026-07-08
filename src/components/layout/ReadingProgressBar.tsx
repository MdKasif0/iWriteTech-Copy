"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ReadingProgressBar() {
  const pathname = usePathname();
  const [readingProgress, setReadingProgress] = useState(0);

  const isArticlePage =
    pathname?.startsWith("/blog/") ||
    pathname?.startsWith("/reviews/") ||
    pathname?.startsWith("/guides/");

  useEffect(() => {
    const scrollListener = () => {
      if (typeof window === "undefined") return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      if (totalHeight > 0) {
        setReadingProgress((scrollPosition / totalHeight) * 100);
      } else {
        setReadingProgress(0);
      }
    };

    if (isArticlePage) {
      window.addEventListener("scroll", scrollListener);
      scrollListener();
      return () => window.removeEventListener("scroll", scrollListener);
    }
  }, [isArticlePage]);

  if (!isArticlePage) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
