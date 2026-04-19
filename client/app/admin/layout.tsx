'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Waves, FileText, Package, LogOut, CalendarCheck, Menu, X } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { label: 'Packages', href: '/admin/packages', icon: Package },
]

function AdminSidebar({ onClose }: { onClose?: () => void }) {
  const { admin, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await logout()
    router.push('/admin/login')
  }

  return (
    <aside className="flex flex-col h-full w-60 bg-[#0f1a2e] border-r border-white/5">
      {/* Brand */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shrink-0">
            <Waves className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Noah Surf</p>
            <p className="text-gray-500 text-[10px] mt-0.5">Admin Panel</p>
          </div>
        </div>
        {/* Close button — mobile only */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-gray-400 hover:text-white transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">
          Management
        </p>
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                active
                  ? 'bg-primary text-white'
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
      <div className="px-3 py-4 border-t border-white/5 shrink-0">
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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isLoginPage = pathname === '/admin/login'

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Close sidebar on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Lock body scroll when sidebar open on mobile
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  useEffect(() => {
    if (loading) return
    if (!isAuthenticated && !isLoginPage) {
      router.replace('/admin/login')
    }
  }, [loading, isAuthenticated, isLoginPage, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1a2e]">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isLoginPage) return <>{children}</>

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex">
      {/* ── Desktop sidebar (always visible lg+) ── */}
      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-60">
        <AdminSidebar />
      </div>

      {/* ── Mobile sidebar backdrop ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile sidebar drawer ── */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 lg:hidden transition-transform duration-300 ease-in-out',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ── Main content area ── */}
      <div className="flex-1 lg:ml-60 min-h-screen flex flex-col">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center gap-4 px-4 py-3 bg-[#0f1a2e] border-b border-white/10 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white transition-colors -ml-2"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Waves className="h-4 w-4 text-white" />
            </div>
            <p className="text-white font-bold text-sm">Noah Admin</p>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
