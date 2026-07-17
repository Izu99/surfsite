'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Check, LayoutDashboard, AlertCircle } from 'lucide-react'
import { adminShopItemApi, type ShopItemInput } from '@/lib/api'
import { cn } from '@/lib/utils'
import ImageUploadField from '@/components/ImageUploadField'

type FormData = {
  title: string
  description: string
  image: string
  alt: string
  price: string
  sizes: string
  published: boolean
  order: string
}

const EMPTY: FormData = {
  title: '',
  description: '',
  image: '',
  alt: '',
  price: '',
  sizes: '',
  published: false,
  order: '0',
}

export default function NewShopItemPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(EMPTY)
  const [saved, setSaved] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [apiError, setApiError] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
    setApiError('')
  }, [])

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (form.price.trim() && isNaN(Number(form.price))) e.price = 'Price must be a number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setApiError('Please fix the highlighted fields below before saving.')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setSubmitting(true)
    setApiError('')
    try {
      const input: ShopItemInput = {
        title: form.title.trim(),
        description: form.description.trim(),
        image: form.image.trim(),
        alt: form.alt.trim(),
        price: Number(form.price),
        sizes: form.sizes.split(',').map((s) => s.trim()).filter(Boolean),
        published: form.published,
        order: Number(form.order) || 0,
      }
      await adminShopItemApi.create(input)
      setSaved(true)
      setTimeout(() => router.push('/admin/shop'), 1200)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Failed to create shop item')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center gap-4">
          <LayoutDashboard className="h-5 w-5 text-primary" />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Link href="/admin/shop" className="hover:text-white transition-colors">
                Shop Management
              </Link>
              <ChevronLeft className="h-3 w-3 rotate-180" />
              <span className="text-gray-300">New Item</span>
            </div>
            <h1 className="text-white font-bold text-lg">Create New Shop Item</h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-primary-50">
        <div className="container-site max-w-3xl">
          {apiError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-6">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Basic Info</h2>

              <Field label="Title" hint="optional">
                <input
                  type="text"
                  placeholder="e.g. White Noah Surf Tee"
                  value={form.title}
                  onChange={(e) => set('title', e.target.value)}
                  className={inputCls(false)}
                />
              </Field>

              <Field label="Description" hint="optional">
                <textarea
                  rows={3}
                  placeholder="e.g. Soft cotton tee with the Noah Surf School print."
                  value={form.description}
                  onChange={(e) => set('description', e.target.value)}
                  className={inputCls(false)}
                />
              </Field>

              <Field label="Sizes" hint="comma-separated, leave blank if not applicable">
                <input
                  type="text"
                  placeholder="e.g. S, M, L, XL, XXL"
                  value={form.sizes}
                  onChange={(e) => set('sizes', e.target.value)}
                  className={inputCls(false)}
                />
              </Field>

              <Field label="Display Order" hint="lower = first">
                <input
                  type="number"
                  min="0"
                  value={form.order}
                  onChange={(e) => set('order', e.target.value)}
                  className={inputCls(false)}
                />
              </Field>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Pricing</h2>
              <Field label="Price (Rs)" hint="optional — leave blank to hide pricing on the card" error={errors.price}>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="6000"
                  value={form.price}
                  onChange={(e) => set('price', e.target.value)}
                  className={inputCls(!!errors.price)}
                />
              </Field>
            </div>

            {/* Image */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Image</h2>
              <Field label="Image" hint="optional — upload a file or paste a URL">
                <ImageUploadField
                  value={form.image}
                  onChange={(url) => set('image', url)}
                  error={errors.image}
                  inputCls={inputCls}
                />
              </Field>
              <Field label="Alt Text" hint="optional — for accessibility and SEO">
                <input
                  type="text"
                  placeholder="e.g. White Noah Surf t-shirt, front and back"
                  value={form.alt}
                  onChange={(e) => set('alt', e.target.value)}
                  className={inputCls(false)}
                />
              </Field>
            </div>

            {/* Options */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-4">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Options</h2>
              <Toggle checked={form.published} onChange={(v) => set('published', v)} label="Published" description="Visible to visitors on the shop page and Noah Collection popup" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 justify-end">
              <Link href="/admin/shop" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saved || submitting}
                className={cn(
                  'flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all',
                  saved ? 'bg-green-600 text-white' : 'bg-primary hover:bg-primary-dark text-white disabled:opacity-60',
                )}
              >
                {saved ? (
                  <><Check className="h-4 w-4" /> Saved!</>
                ) : submitting ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Saving…</>
                ) : (
                  'Create Item'
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
      : 'border-gray-200 focus:ring-primary/20 focus:border-primary',
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
      <div
        onClick={() => onChange(!checked)}
        className={cn('relative w-11 h-6 rounded-full transition-colors', checked ? 'bg-primary' : 'bg-gray-200')}
      >
        <span className={cn('absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', checked && 'translate-x-5')} />
      </div>
    </label>
  )
}
