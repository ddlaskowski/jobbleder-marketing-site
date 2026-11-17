// app/sitemap.ts
import type { MetadataRoute } from "next"
import { seoPages } from "@/content/seoPages"
import { blogPosts, blogCategories } from "@/content/blogPosts"
import { siteUrl } from "@/lib/siteUrl"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl("/instruksjoner"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: siteUrl("/blogg"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl("/om-oss"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: siteUrl("/kontakt"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  const seoLandingPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: siteUrl(`/${page.slug}`),
    changeFrequency: page.isPillar ? "weekly" : "monthly",
    priority: page.isPillar ? 0.9 : 0.7,
  }))

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: siteUrl(`/blogg/${post.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map(
    (category) => ({
      url: siteUrl(`/blogg/kategori/${category.toLowerCase()}`),
      changeFrequency: "weekly",
      priority: 0.75,
    })
  )

  return [
    ...staticPages,
    ...seoLandingPages,
    ...blogCategoryPages,
    ...blogPostPages,
  ]
}
