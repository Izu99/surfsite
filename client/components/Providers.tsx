'use client'

import { BlogProvider } from '@/lib/blog-store'
import { AuthProvider } from '@/contexts/AuthContext'
import { ShopModalProvider } from '@/components/ShopModalContext'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <BlogProvider>
        <ShopModalProvider>{children}</ShopModalProvider>
      </BlogProvider>
    </AuthProvider>
  )
}
