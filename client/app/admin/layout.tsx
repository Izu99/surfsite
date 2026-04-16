'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Waves, FileText, Package, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { label: 'Packages', href: '/admin/packages', icon: Package },
]

function AdminSidebar() {
  const { admin, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await logout()
    router.push('/admin/login')
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-[#0f1a2e] flex flex-col z-40 border-r border-white/5">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
        <div className="w-9 h-9 bg-[#1d4ed8] rounded-xl flex items-center justify-center shrink-0">
          <Waves className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none">Noah Surf</p>
          <p className="text-gray-500 text-[10px] mt-0.5">Admin Panel</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">
          Management
        </p>
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                active
                  ? 'bg-[#1d4ed8] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* User + Logout */}
      <div className="px-3 py-4 border-t border-white/5">
        {admin && (
          <div className="px-3 py-2 mb-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">Signed in as</p>
            <p className="text-white text-sm font-semibold truncate">{admin.username}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    if (loading) return
    if (!isAuthenticated && !isLoginPage) {
      router.replace('/admin/login')
    }
  }, [loading, isAuthenticated, isLoginPage, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1a2e]">
        <div className="w-8 h-8 border-2 border-[#1d4ed8] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isLoginPage) return <>{children}</>

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex">
      <AdminSidebar />
      <div className="flex-1 ml-60 min-h-screen overflow-auto">
        {children}
      </div>
    </div>
  )
}
