import type { MetadataRoute } from 'next'
import { HARDCODED_BLOGS } from '@/data/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

  let apiBlogs: { slug: string; updatedAt: string }[] = []
  try {
    const res = await fetch(`${apiUrl}/api/blogs?limit=100`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const data = await res.json()
      if (data.success && Array.isArray(data.data)) apiBlogs = data.data
    }
  } catch {
    apiBlogs = []
  }

  const blogEntries: MetadataRoute.Sitemap = [...HARDCODED_BLOGS, ...apiBlogs].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...blogEntries,
  ]
}
