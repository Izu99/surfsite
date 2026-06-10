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
  loading: boolean
  login: (identifier: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthState | null>(null)

// ⚠️ TEMP DEV BYPASS — set back to false before deploying / once backend is live.
// When true, the admin UI is unlocked without logging in (no real session).
const BYPASS_AUTH = false

const MOCK_ADMIN: AdminUser = {
  id: 'dev',
  username: 'dev-admin',
  email: 'dev@local',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(
    BYPASS_AUTH ? MOCK_ADMIN : null,
  )
  const [loading, setLoading] = useState(!BYPASS_AUTH)

  // Restore session via httpOnly cookie — no localStorage
  useEffect(() => {
    if (BYPASS_AUTH) return
    authApi
      .me()
      .then((res) => setAdmin(res.admin))
      .catch(() => setAdmin(null))
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async (identifier: string, password: string) => {
    const res = await authApi.login(identifier, password)
    // Token is set as httpOnly cookie by the server — do not store in localStorage
    setAdmin(res.admin)
  }, [])

  const logout = useCallback(async () => {
    try {
      await authApi.logout()
    } catch {
      // ignore network errors on logout
    }
    setAdmin(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{ admin, loading, login, logout, isAuthenticated: !!admin }}
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
