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
  description: string
  shortDescription?: string
  includes: string[]
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
  description?: string
  shortDescription?: string
  includes?: string[]
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

// ── Surf Conditions ───────────────────────────────────────────────
export type SurfConditions = {
  _id?: string
  waveHeight: string
  wind: string
  waterTemp: string
  airTemp: string
  conditions: string
  updatedAt?: string
}

export const conditionsApi = {
  get: async () => {
    const { data } = await api.get<{ success: boolean; data: SurfConditions }>('/api/conditions')
    return data
  },
}

export const adminConditionsApi = {
  get: async () => {
    const { data } = await api.get<{ success: boolean; data: SurfConditions | null }>('/api/admin/conditions')
    return data
  },
  update: async (input: Omit<SurfConditions, '_id' | 'updatedAt'>) => {
    const { data } = await api.put<{ success: boolean; data: SurfConditions }>('/api/admin/conditions', input)
    return data
  },
  delete: async () => {
    const { data } = await api.delete<{ success: boolean; message: string }>('/api/admin/conditions')
    return data
  },
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

export type BookingInput = {
  name: string
  email: string
  phone: string
  packageName: string
  sessionDate: string
  sessionTime: string
  groupSize: number
  notes?: string
}

export const bookingApi = {
  create: async (input: BookingInput) => {
    const { data } = await api.post<{ success: boolean; data: Booking }>('/api/bookings', input)
    return data
  },
}

export const adminBookingApi = {
  list: async (params?: { page?: number; limit?: number; status?: string }) => {
    const { data } = await api.get<{ success: boolean; data: Booking[]; pagination: PaginationMeta }>(
      '/api/admin/bookings',
      { params },
    )
    return data
  },
  updateStatus: async (id: string, status: Booking['status']) => {
    const { data } = await api.patch<{ success: boolean; data: Booking }>(
      `/api/admin/bookings/${id}/status`,
      { status },
    )
    return data
  },
  delete: async (id: string) => {
    const { data } = await api.delete<{ success: boolean; message: string }>(
      `/api/admin/bookings/${id}`,
    )
    return data
  },
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

// ── Shop ─────────────────────────────────────────────────────────
export type ShopItem = {
  _id: string
  title: string
  description: string
  image: string
  alt: string
  price: number
  sizes: string[]
  published: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export type ShopItemInput = {
  title: string
  description: string
  image: string
  alt: string
  price: number
  sizes?: string[]
  published?: boolean
  order?: number
}

export const shopApi = {
  list: async () => {
    const { data } = await api.get<{ success: boolean; data: ShopItem[] }>('/api/shop')
    return data
  },
}

export const adminShopItemApi = {
  list: async (params?: { page?: number; limit?: number }) => {
    const { data } = await api.get<{ success: boolean; data: ShopItem[]; pagination: PaginationMeta }>(
      '/api/admin/shop',
      { params },
    )
    return data
  },
  create: async (input: ShopItemInput) => {
    const { data } = await api.post<{ success: boolean; data: ShopItem }>('/api/admin/shop', input)
    return data
  },
  update: async (id: string, input: Partial<ShopItemInput>) => {
    const { data } = await api.put<{ success: boolean; data: ShopItem }>(
      `/api/admin/shop/${id}`,
      input,
    )
    return data
  },
  delete: async (id: string) => {
    const { data } = await api.delete<{ success: boolean; message: string }>(
      `/api/admin/shop/${id}`,
    )
    return data
  },
  togglePublish: async (id: string) => {
    const { data } = await api.patch<{ success: boolean; data: ShopItem }>(
      `/api/admin/shop/${id}/toggle-publish`,
    )
    return data
  },
}

// ── FAQ ──────────────────────────────────────────────────────────
export type Faq = {
  _id: string
  question: string
  answer: string
  published: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export type FaqInput = {
  question: string
  answer: string
  published?: boolean
  order?: number
}

export const faqApi = {
  list: async () => {
    const { data } = await api.get<{ success: boolean; data: Faq[] }>('/api/faqs')
    return data
  },
}

export const adminFaqApi = {
  list: async (params?: { page?: number; limit?: number }) => {
    const { data } = await api.get<{ success: boolean; data: Faq[]; pagination: PaginationMeta }>(
      '/api/admin/faqs',
      { params },
    )
    return data
  },
  create: async (input: FaqInput) => {
    const { data } = await api.post<{ success: boolean; data: Faq }>('/api/admin/faqs', input)
    return data
  },
  update: async (id: string, input: Partial<FaqInput>) => {
    const { data } = await api.put<{ success: boolean; data: Faq }>(
      `/api/admin/faqs/${id}`,
      input,
    )
    return data
  },
  delete: async (id: string) => {
    const { data } = await api.delete<{ success: boolean; message: string }>(
      `/api/admin/faqs/${id}`,
    )
    return data
  },
  togglePublish: async (id: string) => {
    const { data } = await api.patch<{ success: boolean; data: Faq }>(
      `/api/admin/faqs/${id}/toggle-publish`,
    )
    return data
  },
}

// ── Upload ───────────────────────────────────────────────────────
export const adminUploadApi = {
  upload: async (file: File) => {
    const formData = new FormData()
    formData.append('image', file)
    const { data } = await api.post<{ success: boolean; url: string }>(
      '/api/admin/upload',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )
    return data
  },
}
