import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://lihaazbyminhaaz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/shop",
    "/categories",
    "/collections",
    "/about",
    "/contact",
    "/delivery-info",
    "/faq",
    "/terms",
    "/refund-policy",
    "/privacy",
    "/track-order",
  ];

  const categories = [
    "/categories/royal-heritage",
    "/categories/festive-eid",
    "/categories/classic-cotton",
    "/categories/evening-black",
    "/categories/luxury-silk-jacquard",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...categoryEntries];
}
