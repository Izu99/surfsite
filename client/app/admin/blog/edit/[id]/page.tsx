'use client'

import { useState, useCallback, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Plus, X, Check, LayoutDashboard, AlertCircle } from 'lucide-react'
import { adminBlogApi, type BlogPost } from '@/lib/api'
import { calcReadTime, toSlug } from '@/lib/blog-store'
import { CATEGORIES } from '@/data/blogs'
import { cn } from '@/lib/utils'
import RichTextEditor from '@/components/RichTextEditor'

type FormData = Omit<BlogPost, '_id' | 'readTime' | 'date' | 'createdAt' | 'updatedAt'>

function ConfirmModal({
  title,
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}: {
  title: string
  message: string
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex-shrink-0 p-2 rounded-full bg-blue-100">
            <AlertCircle className="h-5 w-5 text-[#1d4ed8]" />
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
            className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-[#1d4ed8] hover:bg-[#1e40af] transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()

  const [form, setForm] = useState<FormData | null>(null)
  const [tagInput, setTagInput] = useState('')
  const [saved, setSaved] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [apiError, setApiError] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    adminBlogApi
      .list()
      .then((res) => {
        const post = res.data.find((b) => b._id === id)
        if (!post) { setNotFound(true); return }
        setForm({
          title: post.title,
          slug: post.slug,
          description: post.description,
          content: post.content,
          image: post.image,
          category: post.category,
          author: post.author,
          tags: post.tags,
          published: post.published,
          featured: post.featured,
        })
      })
      .catch(() => setNotFound(true))
  }, [id])

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => {
      if (!prev) return prev
      const next = { ...prev, [key]: value }
      if (key === 'title') next.slug = toSlug(value as string)
      return next
    })
    setErrors((e) => ({ ...e, [key]: undefined }))
    setApiError('')
  }, [])

  const addTag = () => {
    if (!form) return
    const t = tagInput.trim()
    if (t && !form.tags.includes(t)) set('tags', [...form.tags, t])
    setTagInput('')
  }

  const removeTag = (tag: string) => {
    if (!form) return
    set('tags', form.tags.filter((t) => t !== tag))
  }

  const validate = (): boolean => {
    if (!form) return false
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.description.trim()) e.description = 'Description is required'
    if (!form.content.trim()) e.content = 'Content is required'
    if (!form.image.trim()) e.image = 'Cover image URL is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form || !validate()) return
    setShowConfirm(true)
  }

  const doSave = async () => {
    if (!form) return
    setShowConfirm(false)
    setSubmitting(true)
    setApiError('')
    try {
      await adminBlogApi.update(id, { ...form })
      setSaved(true)
      setTimeout(() => router.push('/admin/blog'), 1200)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Failed to save changes')
    } finally {
      setSubmitting(false)
    }
  }

  if (!form && !notFound) {
    return (
      <div className="animate-pulse">
        <div className="h-24 bg-gray-200" />
        <div className="container-site py-12 space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 rounded-2xl" />
          ))}
        </div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="pt-[calc(72px+4rem)] text-center container-site">
        <p className="text-gray-500 mb-4">Post not found.</p>
        <Link href="/admin/blog" className="text-[#1d4ed8] underline text-sm">Back to admin</Link>
      </div>
    )
  }

  if (!form) return null

  return (
    <>
      {showConfirm && (
        <ConfirmModal
          title="Save Changes"
          message="Are you sure you want to save changes to this post?"
          confirmLabel="Save Changes"
          onConfirm={doSave}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center gap-4">
          <LayoutDashboard className="h-5 w-5 text-[#1d4ed8]" />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Link href="/admin/blog" className="hover:text-white transition-colors">Blog Management</Link>
              <ChevronLeft className="h-3 w-3 rotate-180" />
              <span className="text-gray-300 truncate max-w-[200px]">{form.title || 'Edit Post'}</span>
            </div>
            <h1 className="text-white font-bold text-lg">Edit Post</h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-[#f0f4f8]">
        <div className="container-site max-w-4xl">
          {apiError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-6">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic info */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Basic Info</h2>
              <Field label="Title" error={errors.title}>
                <input type="text" value={form.title} onChange={(e) => set('title', e.target.value)} className={inputCls(!!errors.title)} />
              </Field>
              <Field label="Slug">
                <input type="text" value={form.slug} onChange={(e) => set('slug', e.target.value)} className={inputCls(false)} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Category">
                  <select value={form.category} onChange={(e) => set('category', e.target.value)} className={inputCls(false)}>
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Author">
                  <input type="text" value={form.author} onChange={(e) => set('author', e.target.value)} className={inputCls(false)} />
                </Field>
              </div>
            </div>

            {/* Cover image */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">Cover Image</h2>
              <Field label="Image URL" error={errors.image}>
                <input type="url" value={form.image} onChange={(e) => set('image', e.target.value)} className={inputCls(!!errors.image)} />
              </Field>
              {form.image && (
                <div className="mt-3 h-40 rounded-xl overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Content</h2>
              <Field label="Short Description" error={errors.description}>
                <textarea rows={2} value={form.description} onChange={(e) => set('description', e.target.value)} className={inputCls(!!errors.description)} />
              </Field>
              <Field label="Full Content" error={errors.content}>
                <RichTextEditor
                  key={id}
                  value={form.content}
                  onChange={(html) => set('content', html)}
                  hasError={!!errors.content}
                />
              </Field>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">Tags</h2>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Add tag…"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag() } }}
                  className={cn(inputCls(false), 'flex-1')}
                />
                <button type="button" onClick={addTag} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 bg-blue-50 text-[#1d4ed8] text-xs font-medium px-3 py-1.5 rounded-full">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors"><X className="h-3 w-3" /></button>
                  </span>
                ))}
              </div>
            </div>

            {/* Publishing */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-4">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Publishing</h2>
              <Toggle checked={form.published} onChange={(v) => set('published', v)} label="Published" description="Visible to visitors on the blog page" />
              <Toggle checked={form.featured} onChange={(v) => set('featured', v)} label="Featured" description="Shown in the featured spotlight on the blog listing" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 justify-end">
              <Link href="/admin/blog" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Cancel</Link>
              <button
                type="submit"
                disabled={saved || submitting}
                className={cn(
                  'flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all',
                  saved ? 'bg-green-600 text-white' : 'bg-[#1d4ed8] hover:bg-[#1e40af] text-white disabled:opacity-60',
                )}
              >
                {saved ? (
                  <><Check className="h-4 w-4" /> Saved!</>
                ) : submitting ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Saving…</>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition',
    hasError ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : 'border-gray-200 focus:ring-[#1d4ed8]/20 focus:border-[#1d4ed8]',
  )
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
        {label}
        {hint && <span className="font-normal text-gray-400 ml-1.5">— {hint}</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function Toggle({ checked, onChange, label, description }: { checked: boolean; onChange: (v: boolean) => void; label: string; description: string }) {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <div>
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <div onClick={() => onChange(!checked)} className={cn('relative w-11 h-6 rounded-full transition-colors', checked ? 'bg-[#1d4ed8]' : 'bg-gray-200')}>
        <span className={cn('absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', checked && 'translate-x-5')} />
      </div>
    </label>
  )
}
