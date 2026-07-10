'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  LayoutDashboard,
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { adminShopItemApi, type ShopItem } from '@/lib/api'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 20

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium shadow-lg',
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white',
      )}
    >
      {type === 'success' ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
      {message}
    </div>
  )
}

function ConfirmModal({
  title,
  message,
  confirmLabel,
  onConfirm,
  onCancel,
  danger,
}: {
  title: string
  message: string
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
  danger?: boolean
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className={cn('mt-0.5 flex-shrink-0 p-2 rounded-full', danger ? 'bg-red-100' : 'bg-primary-100')}>
            <AlertCircle className={cn('h-5 w-5', danger ? 'text-red-600' : 'text-primary')} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-3 pt-1 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={cn(
              'px-5 py-2 rounded-xl text-sm font-bold text-white transition-colors',
              danger ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary-dark',
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AdminShopPage() {
  const router = useRouter()
  const [items, setItems] = useState<ShopItem[]>([])
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [deleteTarget, setDeleteTarget] = useState<ShopItem | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const fetchItems = useCallback(async (p: number) => {
    setMounted(false)
    try {
      const res = await adminShopItemApi.list({ page: p, limit: PAGE_SIZE })
      setItems(res.data)
      setTotalPages(res.pagination.totalPages)
      setTotal(res.pagination.total)
    } catch {
      showToast('Failed to load shop items.', 'error')
    } finally {
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    fetchItems(page)
  }, [fetchItems, page])

  const handleDelete = async () => {
    if (!deleteTarget) return
    try {
      await adminShopItemApi.delete(deleteTarget._id)
      setDeleteTarget(null)
      showToast('Shop item deleted.')
      const newPage = items.length === 1 && page > 1 ? page - 1 : page
      setPage(newPage)
      fetchItems(newPage)
    } catch {
      showToast('Failed to delete shop item.', 'error')
    }
  }

  const handleTogglePublish = async (id: string) => {
    try {
      const res = await adminShopItemApi.togglePublish(id)
      setItems((prev) => prev.map((i) => (i._id === id ? res.data : i)))
      showToast(res.data.published ? 'Item published.' : 'Item moved to drafts.')
    } catch {
      showToast('Failed to update item.', 'error')
    }
  }

  return (
    <>
      {/* ── Admin header ── */}
      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Admin Panel</p>
              <h1 className="text-white font-bold text-lg">Shop Management</h1>
            </div>
          </div>
          <Link
            href="/admin/shop/new"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Item
          </Link>
        </div>
      </div>

      {/* ── Table ── */}
      <section className="section-padding bg-primary-50">
        <div className="container-site">
          {!mounted ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-5 border-b border-gray-100 last:border-0">
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded w-16 ml-auto" />
                  <div className="h-4 bg-gray-200 rounded w-20" />
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-12 text-center">
              <p className="text-gray-400 mb-4">No shop items yet.</p>
              <Link
                href="/admin/shop/new"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold"
              >
                <Plus className="h-4 w-4" />
                Create your first item
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[1fr_100px_120px_130px] gap-4 px-6 py-3.5 bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>Title</span>
                <span>Price</span>
                <span>Status</span>
                <span className="text-right">Actions</span>
              </div>

              {items.map((item, idx) => (
                <div
                  key={item._id}
                  className={cn(
                    'flex items-center justify-between gap-4 px-4 md:px-6 py-4 transition-colors hover:bg-gray-50 md:grid md:grid-cols-[1fr_100px_120px_130px]',
                    idx !== items.length - 1 && 'border-b border-gray-100',
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 flex flex-wrap gap-x-1.5 items-center">
                      {item.sizes.length > 0 && <span>Sizes: {item.sizes.join(', ')}</span>}
                      <span
                        className={cn(
                          'md:hidden inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full',
                          item.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700',
                        )}
                      >
                        {item.published ? 'Published' : 'Draft'}
                      </span>
                    </p>
                  </div>

                  <span className="hidden md:block text-sm font-bold text-gray-900">
                    Rs {item.price.toLocaleString()}
                  </span>

                  <div className="hidden md:flex items-center">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full',
                        item.published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700',
                      )}
                    >
                      {item.published ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 md:justify-end">
                    <button
                      onClick={() => handleTogglePublish(item._id)}
                      title={item.published ? 'Move to Draft' : 'Publish'}
                      className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary-50 transition-colors"
                    >
                      {item.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => router.push(`/admin/shop/edit/${item._id}`)}
                      title="Edit"
                      className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary-50 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(item)}
                      title="Delete"
                      className="p-2 rounded-lg transition-colors text-gray-400 hover:text-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-400">
              {total} item{total !== 1 ? 's' : ''} total
              {totalPages > 1 && ` · Page ${page} of ${totalPages}`}
            </p>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={cn(
                      'h-8 w-8 rounded-lg text-xs font-bold transition-colors',
                      p === page
                        ? 'bg-primary text-white'
                        : 'border border-gray-200 text-gray-500 hover:border-primary hover:text-primary',
                    )}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} />}

      {deleteTarget && (
        <ConfirmModal
          title="Delete Shop Item"
          message={`Are you sure you want to delete "${deleteTarget.title}"? This action cannot be undone.`}
          confirmLabel="Delete"
          danger
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </>
  )
}
