import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date("2026-08-30T23:59:59-05:00")

  return [
    { url: siteUrl.toString(), lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: new URL("plomero-quito", siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("electricista-quito", siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
