'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { blogApi, type BlogPost } from '@/lib/api'

type PublicBlogStore = {
  blogs: BlogPost[]
  mounted: boolean
  getBlogBySlug: (slug: string) => BlogPost | undefined
}

const BlogContext = createContext<PublicBlogStore | null>(null)

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    blogApi
      .list({ limit: 100 })
      .then((res) => setBlogs(res.data))
      .catch(() => setBlogs([]))
      .finally(() => setMounted(true))
  }, [])

  const getBlogBySlug = useCallback(
    (slug: string) => blogs.find((b) => b.slug === slug),
    [blogs],
  )

  return (
    <BlogContext.Provider value={{ blogs, mounted, getBlogBySlug }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlogs() {
  const ctx = useContext(BlogContext)
  if (!ctx) throw new Error('useBlogs must be inside BlogProvider')
  return ctx
}

export function calcReadTime(content: string): string {
  // Strip HTML tags before counting words
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const words = text ? text.split(' ').length : 0
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
