import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://gentapparelbd.com";

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
    "/categories/denim-jeans",
    "/categories/chino-pants",
    "/categories/sports-trousers",
    "/categories/knitwear-sweaters",
    "/categories/export-casuals",
    "/collections/winter-is-back",
    "/collections/super-premium-denim",
    "/collections/italian-attitude",
    "/collections/athletic-streetwear",
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
