"use client";

import { useEffect } from "react";
import { cv, track } from "@hellyeah/x-ray";

interface ArticleViewTrackerProps {
  slug: string;
  category: string;
}

export function ArticleViewTracker({ slug, category }: ArticleViewTrackerProps) {
  useEffect(() => {
    track(cv.viewContent, {
      content_id: slug,
      content_type: "article",
      category,
    });
  }, [category, slug]);

  return null;
}
