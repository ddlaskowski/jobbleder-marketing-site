// app/sitemap.ts
import type { MetadataRoute } from "next"
import { seoPages } from "@/content/seoPages"
import { instructionSections } from "@/content/instructionContent"
import { blogPosts, blogCategories } from "@/content/blogPosts"

const baseUrl = "https://jobbleder.no"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/instruksjoner`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/om-oss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }
  ]

  const seoLandingPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.isPillar ? "weekly" : "monthly",
    priority: page.isPillar ? 0.9 : 0.7,
  }))

  const instructionAnchors: MetadataRoute.Sitemap = instructionSections.map(
    (section) => ({
      url: `${baseUrl}/instruksjoner#${section.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  )

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogg/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map(
    (category) => ({
      url: `${baseUrl}/blogg/kategori/${category.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    })
  )

  return [
    ...staticPages,
    ...seoLandingPages,
    ...instructionAnchors,
    ...blogCategoryPages,
    ...blogPostPages,
  ]
}