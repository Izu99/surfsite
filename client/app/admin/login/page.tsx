'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Waves, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

export default function AdminLoginPage() {
  const { login, isAuthenticated, loading } = useAuth()
  const router = useRouter()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace('/admin/blog')
    }
  }, [loading, isAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!identifier.trim() || !password) {
      setError('Please enter your username/email and password.')
      return
    }

    setSubmitting(true)
    try {
      await login(identifier.trim(), password)
      router.replace('/admin/blog')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1a2e]">
        <div className="w-8 h-8 border-2 border-[#1d4ed8] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1a2e] px-4">
      <div className="w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#1d4ed8] rounded-2xl flex items-center justify-center mb-4">
            <Waves className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-white font-bold text-xl">Noah Surf School</h1>
          <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Card */}
        <div className="bg-[#1a2e4a] rounded-2xl p-8 shadow-2xl border border-white/5">
          <h2 className="text-white font-bold text-lg mb-6">Sign in to continue</h2>

          {error && (
            <div className="flex items-center gap-2 bg-red-900/30 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl mb-5">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                Username or Email
              </label>
              <input
                type="text"
                autoComplete="username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="admin or admin@example.com"
                className={cn(
                  'w-full bg-[#0f1a2e] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600',
                  'focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] transition',
                  'border-white/10',
                )}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={cn(
                    'w-full bg-[#0f1a2e] border rounded-xl px-4 py-2.5 pr-11 text-sm text-white placeholder-gray-600',
                    'focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] transition',
                    'border-white/10',
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={cn(
                'w-full py-2.5 rounded-xl text-sm font-bold transition-all mt-2',
                submitting
                  ? 'bg-[#1d4ed8]/50 text-white/50 cursor-not-allowed'
                  : 'bg-[#1d4ed8] hover:bg-[#1e40af] text-white',
              )}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : (
                'Sign in'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Admin access only — not a public page
        </p>
      </div>
    </div>
  )
}
