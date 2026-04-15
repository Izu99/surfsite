'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, Eye, EyeOff, LayoutDashboard, AlertCircle, Check } from 'lucide-react'
import { useBlogs } from '@/lib/blog-store'
import { cn } from '@/lib/utils'

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium shadow-lg transition-all',
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white',
      )}
    >
      {type === 'success' ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
      {message}
    </div>
  )
}

export default function AdminBlogPage() {
  const { blogs, deleteBlog, updateBlog, mounted } = useBlogs()
  const router = useRouter()
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const handleDelete = (id: number) => {
    if (confirmDelete === id) {
      deleteBlog(id)
      setConfirmDelete(null)
      showToast('Blog post deleted.')
    } else {
      setConfirmDelete(id)
      setTimeout(() => setConfirmDelete(null), 3000)
    }
  }

  const handleTogglePublish = (id: number, current: boolean) => {
    updateBlog(id, { published: !current })
    showToast(current ? 'Post moved to drafts.' : 'Post published.')
  }

  return (
    <>
      {/* ── Admin header ── */}
      <div className="bg-[#1a2e4a] border-b border-white/10 pt-[72px]">
        <div className="container-site py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-5 w-5 text-[#1d4ed8]" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Admin Panel</p>
              <h1 className="text-white font-bold text-lg">Blog Management</h1>
            </div>
          </div>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>
      </div>

      {/* ── Table ── */}
      <section className="section-padding bg-[#f0f4f8]">
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
          ) : blogs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-12 text-center">
              <p className="text-gray-400 mb-4">No blog posts yet.</p>
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center gap-2 bg-[#1d4ed8] text-white px-5 py-2.5 rounded-xl text-sm font-bold"
              >
                <Plus className="h-4 w-4" />
                Create your first post
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[1fr_120px_110px_100px_130px] gap-4 px-6 py-3.5 bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>Title</span>
                <span>Category</span>
                <span>Date</span>
                <span>Status</span>
                <span className="text-right">Actions</span>
              </div>

              {blogs.map((post, idx) => (
                <div
                  key={post.id}
                  className={cn(
                    'grid md:grid-cols-[1fr_120px_110px_100px_130px] gap-4 items-center px-6 py-4 transition-colors hover:bg-gray-50',
                    idx !== blogs.length - 1 && 'border-b border-gray-100',
                  )}
                >
                  {/* Title + meta */}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm truncate max-w-xs md:max-w-none">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </p>
                  </div>

                  {/* Category */}
                  <span className="hidden md:inline-flex text-xs font-medium bg-blue-50 text-[#1d4ed8] px-2.5 py-1 rounded-full w-fit">
                    {post.category}
                  </span>

                  {/* Date */}
                  <span className="hidden md:block text-xs text-gray-500">{post.date}</span>

                  {/* Status */}
                  <div className="hidden md:flex items-center">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full',
                        post.published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700',
                      )}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 md:justify-end">
                    <button
                      onClick={() => handleTogglePublish(post.id, post.published)}
                      title={post.published ? 'Move to Draft' : 'Publish'}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#1d4ed8] hover:bg-blue-50 transition-colors"
                    >
                      {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => router.push(`/admin/blog/edit/${post.id}`)}
                      title="Edit"
                      className="p-2 rounded-lg text-gray-400 hover:text-[#1d4ed8] hover:bg-blue-50 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      title={confirmDelete === post.id ? 'Click again to confirm' : 'Delete'}
                      className={cn(
                        'p-2 rounded-lg transition-colors',
                        confirmDelete === post.id
                          ? 'bg-red-100 text-red-600'
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-50',
                      )}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-gray-400 mt-4 text-right">
            {blogs.length} post{blogs.length !== 1 ? 's' : ''} total
          </p>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  )
}
