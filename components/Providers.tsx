'use client'

import { BlogProvider } from '@/lib/blog-store'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <BlogProvider>{children}</BlogProvider>
}
