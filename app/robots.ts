import type { MetadataRoute } from "next"
import { SITE_ORIGIN, siteUrl } from "@/lib/siteUrl"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: siteUrl("/sitemap.xml"),
    host: SITE_ORIGIN,
  }
}
