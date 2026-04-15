'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { type BlogPost, initialBlogs } from '@/data/blogs'

const STORAGE_KEY = 'wavepeak_blogs'

type BlogStore = {
  blogs: BlogPost[]
  mounted: boolean
  addBlog: (post: Omit<BlogPost, 'id'>) => void
  updateBlog: (id: number, post: Partial<BlogPost>) => void
  deleteBlog: (id: number) => void
  getBlogBySlug: (slug: string) => BlogPost | undefined
  getBlogById: (id: number) => BlogPost | undefined
}

const BlogContext = createContext<BlogStore | null>(null)

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setBlogs(JSON.parse(stored) as BlogPost[])
    } catch {
      // fallback to seed data
    }
  }, [])

  const persist = useCallback((updated: BlogPost[]) => {
    setBlogs(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // storage unavailable
    }
  }, [])

  const addBlog = useCallback(
    (post: Omit<BlogPost, 'id'>) => {
      persist([...blogs, { ...post, id: Date.now() }])
    },
    [blogs, persist],
  )

  const updateBlog = useCallback(
    (id: number, post: Partial<BlogPost>) => {
      persist(blogs.map((b) => (b.id === id ? { ...b, ...post } : b)))
    },
    [blogs, persist],
  )

  const deleteBlog = useCallback(
    (id: number) => {
      persist(blogs.filter((b) => b.id !== id))
    },
    [blogs, persist],
  )

  const getBlogBySlug = useCallback(
    (slug: string) => blogs.find((b) => b.slug === slug),
    [blogs],
  )

  const getBlogById = useCallback(
    (id: number) => blogs.find((b) => b.id === id),
    [blogs],
  )

  return (
    <BlogContext.Provider
      value={{ blogs, mounted, addBlog, updateBlog, deleteBlog, getBlogBySlug, getBlogById }}
    >
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
  const words = content.trim().split(/\s+/).length
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
