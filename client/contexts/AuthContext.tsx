'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { authApi, type AdminUser } from '@/lib/api'

type AuthState = {
  admin: AdminUser | null
  token: string | null
  loading: boolean
  login: (identifier: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Restore session from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('admin_token')
    if (stored) {
      setToken(stored)
      authApi
        .me()
        .then((res) => setAdmin(res.admin))
        .catch(() => {
          localStorage.removeItem('admin_token')
          setToken(null)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = useCallback(async (identifier: string, password: string) => {
    const res = await authApi.login(identifier, password)
    localStorage.setItem('admin_token', res.token)
    setToken(res.token)
    setAdmin(res.admin)
  }, [])

  const logout = useCallback(async () => {
    try {
      await authApi.logout()
    } catch {
      // ignore network errors on logout
    }
    localStorage.removeItem('admin_token')
    setToken(null)
    setAdmin(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{ admin, token, loading, login, logout, isAuthenticated: !!admin }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
