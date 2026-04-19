//api file for client

import axios, { AxiosError } from 'axios' 

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

// Credentials (httpOnly cookie) are sent automatically via withCredentials: true above.
// Do NOT attach tokens from localStorage — that exposes them to XSS.

// Normalise error messages
api.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message?: string }>) => {
    const message = err.response?.data?.message ?? err.message ?? 'Request failed'
    return Promise.reject(new Error(message))
  },
)

// ── Types ────────────────────────────────────────────────────────
export type BlogPost = {
  _id: string
  title: string
  slug: string
  description: string
  content: string
  image: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  published: boolean
  featured: boolean
  createdAt: string
  updatedAt: string
}

export type SurfPackage = {
  _id: string
  name: string
  level: string
  format: string
  duration: string
  price: number
  priceNote: string
  souvenir: boolean
  featured: boolean
  published: boolean
  order: number
  image: string
  createdAt: string
  updatedAt: string
}

export type PackageInput = {
  name: string
  level: string
  format: string
  duration: string
  price: number
  priceNote: string
  souvenir?: boolean
  featured?: boolean
  published?: boolean
  order?: number
  image: string
}

export const packageApi = {
  list: async () => {
    const { data } = await api.get<{ success: boolean; data: SurfPackage[] }>('/api/packages')
    return data
  },
}

type PaginationMeta = { total: number; page: number; limit: number; totalPages: number }

export const adminPackageApi = {
  list: async (params?: { page?: number; limit?: number }) => {
    const { data } = await api.get<{ success: boolean; data: SurfPackage[]; pagination: PaginationMeta }>(
      '/api/admin/packages',
      { params },
    )
    return data
  },
  create: async (input: PackageInput) => {
    const { data } = await api.post<{ success: boolean; data: SurfPackage }>('/api/admin/packages', input)
    return data
  },
  update: async (id: string, input: Partial<PackageInput>) => {
    const { data } = await api.put<{ success: boolean; data: SurfPackage }>(
      `/api/admin/packages/${id}`,
      input,
    )
    return data
  },
  delete: async (id: string) => {
    const { data } = await api.delete<{ success: boolean; message: string }>(
      `/api/admin/packages/${id}`,
    )
    return data
  },
  togglePublish: async (id: string) => {
    const { data } = await api.patch<{ success: boolean; data: SurfPackage }>(
      `/api/admin/packages/${id}/toggle-publish`,
    )
    return data
  },
}

export type AdminUser = {
  id: string
  username: string
  email: string
}

// ── Auth ─────────────────────────────────────────────────────────
export const authApi = {
  login: async (identifier: string, password: string) => {
    const { data } = await api.post<{ success: boolean; token: string; admin: AdminUser }>(
      '/api/auth/login',
      { identifier, password },
    )
    return data
  },
  me: async () => {
    const { data } = await api.get<{ success: boolean; admin: AdminUser }>('/api/auth/me')
    return data
  },
  logout: async () => {
    await api.post('/api/auth/logout')
  },
}

// ── Public Blog ───────────────────────────────────────────────────
export const blogApi = {
  list: async (params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const { data } = await api.get<{
      success: boolean
      data: BlogPost[]
      pagination: { total: number; page: number; limit: number; totalPages: number }
    }>('/api/blogs', { params })
    return data
  },
  getBySlug: async (slug: string) => {
    const { data } = await api.get<{ success: boolean; data: BlogPost }>(`/api/blogs/${slug}`)
    return data
  },
}

// ── Admin Blog ────────────────────────────────────────────────────
export type BlogInput = {
  title: string
  slug?: string
  description: string
  content: string
  image: string
  category: string
  tags?: string[]
  author?: string
  published?: boolean
  featured?: boolean
}

// ── Booking Types ─────────────────────────────────────────────────
export type Booking = {
  _id: string
  name: string
  email: string
  phone: string
  packageName: string
  sessionDate: string
  sessionTime: string
  groupSize: number
  notes: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  source: 'form' | 'whatsapp' | 'walk-in'
  createdAt: string
}

export const adminBlogApi = {
  list: async (params?: { page?: number; limit?: number }) => {
    const { data } = await api.get<{ success: boolean; data: BlogPost[]; pagination: PaginationMeta }>(
      '/api/admin/blogs',
      { params },
    )
    return data
  },
  create: async (input: BlogInput) => {
    const { data } = await api.post<{ success: boolean; data: BlogPost }>('/api/admin/blogs', input)
    return data
  },
  update: async (id: string, input: Partial<BlogInput>) => {
    const { data } = await api.put<{ success: boolean; data: BlogPost }>(
      `/api/admin/blogs/${id}`,
      input,
    )
    return data
  },
  delete: async (id: string) => {
    const { data } = await api.delete<{ success: boolean; message: string }>(
      `/api/admin/blogs/${id}`,
    )
    return data
  },
  togglePublish: async (id: string) => {
    const { data } = await api.patch<{ success: boolean; data: BlogPost }>(
      `/api/admin/blogs/${id}/toggle-publish`,
    )
    return data
  },
}
