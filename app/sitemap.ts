import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rhushabh-portfolio.local",
      lastModified: "2026-11-08",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

