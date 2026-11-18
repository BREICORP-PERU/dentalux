import type { MetadataRoute } from "next";
import { getSiteUrl, treatmentCatalog } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: `${siteUrl}/tratamientos`, changeFrequency: "monthly", priority: 0.8 },
    ...treatmentCatalog.map((category) => ({
      url: `${siteUrl}/tratamientos/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
