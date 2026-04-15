'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Plus, X, Check, LayoutDashboard } from 'lucide-react'
import { useBlogs, calcReadTime, toSlug } from '@/lib/blog-store'
import { CATEGORIES } from '@/data/blogs'
import { cn } from '@/lib/utils'

type FormData = {
  title: string
  slug: string
  description: string
  content: string
  image: string
  category: string
  author: string
  tags: string[]
  published: boolean
  featured: boolean
}

const EMPTY: FormData = {
  title: '',
  slug: '',
  description: '',
  content: '',
  image: '',
  category: CATEGORIES[0],
  author: 'Noah Fernando',
  tags: [],
  published: false,
  featured: false,
}

export default function NewBlogPage() {
  const { addBlog } = useBlogs()
  const router = useRouter()
  const [form, setForm] = useState<FormData>(EMPTY)
  const [tagInput, setTagInput] = useState('')
  const [saved, setSaved] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const set = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => {
        const next = { ...prev, [key]: value }
        if (key === 'title') next.slug = toSlug(value as string)
        return next
      })
      setErrors((e) => ({ ...e, [key]: undefined }))
    },
    [],
  )

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !form.tags.includes(t)) {
      set('tags', [...form.tags, t])
    }
    setTagInput('')
  }

  const removeTag = (tag: string) => set('tags', form.tags.filter((t) => t !== tag))

  const validate = (): boolean => {
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
    if (!validate()) return

    addBlog({
      ...form,
      readTime: calcReadTime(form.content),
      date: new Date().toISOString().split('T')[0],
    })

    setSaved(true)
    setTimeout(() => router.push('/admin/blog'), 1200)
  }

  return (
    <>
      {/* ── Admin header ── */}
      <div className="bg-[#1a2e4a] border-b border-white/10 pt-[72px]">
        <div className="container-site py-6 flex items-center gap-4">
          <LayoutDashboard className="h-5 w-5 text-[#1d4ed8]" />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Link href="/admin/blog" className="hover:text-white transition-colors">
                Blog Management
              </Link>
              <ChevronLeft className="h-3 w-3 rotate-180" />
              <span className="text-gray-300">New Post</span>
            </div>
            <h1 className="text-white font-bold text-lg">Create New Post</h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-[#f0f4f8]">
        <div className="container-site max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title + Slug */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">
                Basic Info
              </h2>

              <Field label="Title" error={errors.title}>
                <input
                  type="text"
                  placeholder="Enter blog title…"
                  value={form.title}
                  onChange={(e) => set('title', e.target.value)}
                  className={inputCls(!!errors.title)}
                />
              </Field>

              <Field label="Slug (auto-generated)" error={errors.slug}>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => set('slug', e.target.value)}
                  className={inputCls(!!errors.slug)}
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Category">
                  <select
                    value={form.category}
                    onChange={(e) => set('category', e.target.value)}
                    className={inputCls(false)}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Author">
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => set('author', e.target.value)}
                    className={inputCls(false)}
                  />
                </Field>
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">
                Cover Image
              </h2>
              <Field label="Image URL (Unsplash recommended)" error={errors.image}>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/…"
                  value={form.image}
                  onChange={(e) => set('image', e.target.value)}
                  className={inputCls(!!errors.image)}
                />
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
                <textarea
                  rows={2}
                  placeholder="A brief summary shown on cards and meta descriptions…"
                  value={form.description}
                  onChange={(e) => set('description', e.target.value)}
                  className={inputCls(!!errors.description)}
                />
              </Field>

              <Field
                label="Full Content"
                hint="Use ## for headings, blank lines for paragraphs"
                error={errors.content}
              >
                <textarea
                  rows={14}
                  placeholder="Write your blog content here…"
                  value={form.content}
                  onChange={(e) => set('content', e.target.value)}
                  className={cn(inputCls(!!errors.content), 'font-mono text-sm leading-relaxed')}
                />
              </Field>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">
                Tags
              </h2>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Add tag…"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                  className={cn(inputCls(false), 'flex-1')}
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 bg-blue-50 text-[#1d4ed8] text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-500 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Publish settings */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-4">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">
                Publishing
              </h2>
              <Toggle
                checked={form.published}
                onChange={(v) => set('published', v)}
                label="Published"
                description="Visible to visitors on the blog page"
              />
              <Toggle
                checked={form.featured}
                onChange={(v) => set('featured', v)}
                label="Featured"
                description="Shown in the featured spotlight on the blog listing"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 justify-end">
              <Link
                href="/admin/blog"
                className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saved}
                className={cn(
                  'flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all',
                  saved
                    ? 'bg-green-600 text-white'
                    : 'bg-[#1d4ed8] hover:bg-[#1e40af] text-white',
                )}
              >
                {saved ? (
                  <>
                    <Check className="h-4 w-4" /> Saved!
                  </>
                ) : (
                  'Create Post'
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
    hasError
      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
      : 'border-gray-200 focus:ring-[#1d4ed8]/20 focus:border-[#1d4ed8]',
  )
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
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

function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
  description: string
}) {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <div>
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <div
        onClick={() => onChange(!checked)}
        className={cn(
          'relative w-11 h-6 rounded-full transition-colors',
          checked ? 'bg-[#1d4ed8]' : 'bg-gray-200',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform',
            checked && 'translate-x-5',
          )}
        />
      </div>
    </label>
  )
}
