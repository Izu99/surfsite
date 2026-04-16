'use client'

import { BlogProvider } from '@/lib/blog-store'
import { AuthProvider } from '@/contexts/AuthContext'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <BlogProvider>{children}</BlogProvider>
    </AuthProvider>
  )
}
