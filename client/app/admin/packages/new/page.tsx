'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Check, LayoutDashboard, AlertCircle } from 'lucide-react'
import { adminPackageApi, type PackageInput } from '@/lib/api'
import { cn } from '@/lib/utils'

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Beginner-Advance', 'Surf Guide'] as const

type FormData = {
  name: string
  level: string
  format: string
  duration: string
  price: string
  priceNote: string
  image: string
  souvenir: boolean
  featured: boolean
  published: boolean
  order: string
}

const EMPTY: FormData = {
  name: '',
  level: 'Beginner',
  format: '',
  duration: '90 mins',
  price: '',
  priceNote: 'per session',
  image: '',
  souvenir: false,
  featured: false,
  published: false,
  order: '0',
}

export default function NewPackagePage() {
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
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.format.trim()) e.format = 'Format is required'
    if (!form.duration.trim()) e.duration = 'Duration is required'
    if (!form.price.trim() || isNaN(Number(form.price))) e.price = 'Valid price is required'
    if (!form.priceNote.trim()) e.priceNote = 'Price note is required'
    if (!form.image.trim()) e.image = 'Image URL is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setApiError('')
    try {
      const input: PackageInput = {
        name: form.name.trim(),
        level: form.level,
        format: form.format.trim(),
        duration: form.duration.trim(),
        price: Number(form.price),
        priceNote: form.priceNote.trim(),
        image: form.image.trim(),
        souvenir: form.souvenir,
        featured: form.featured,
        published: form.published,
        order: Number(form.order) || 0,
      }
      await adminPackageApi.create(input)
      setSaved(true)
      setTimeout(() => router.push('/admin/packages'), 1200)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Failed to create package')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center gap-4">
          <LayoutDashboard className="h-5 w-5 text-[#1d4ed8]" />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Link href="/admin/packages" className="hover:text-white transition-colors">
                Package Management
              </Link>
              <ChevronLeft className="h-3 w-3 rotate-180" />
              <span className="text-gray-300">New Package</span>
            </div>
            <h1 className="text-white font-bold text-lg">Create New Package</h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-[#f0f4f8]">
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

              <Field label="Package Name" error={errors.name}>
                <input
                  type="text"
                  placeholder="e.g. Beginner Private"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className={inputCls(!!errors.name)}
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Level">
                  <select
                    value={form.level}
                    onChange={(e) => set('level', e.target.value)}
                    className={inputCls(false)}
                  >
                    {LEVELS.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </Field>

                <Field label="Format" error={errors.format}>
                  <input
                    type="text"
                    placeholder="e.g. 1 on 1, Group, 2 on 1"
                    value={form.format}
                    onChange={(e) => set('format', e.target.value)}
                    className={inputCls(!!errors.format)}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Duration" error={errors.duration}>
                  <input
                    type="text"
                    placeholder="e.g. 90 mins"
                    value={form.duration}
                    onChange={(e) => set('duration', e.target.value)}
                    className={inputCls(!!errors.duration)}
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
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-5">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Pricing</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Price (USD)" error={errors.price}>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="60"
                    value={form.price}
                    onChange={(e) => set('price', e.target.value)}
                    className={inputCls(!!errors.price)}
                  />
                </Field>

                <Field label="Price Note" error={errors.priceNote}>
                  <input
                    type="text"
                    placeholder="e.g. per session, per person"
                    value={form.priceNote}
                    onChange={(e) => set('priceNote', e.target.value)}
                    className={inputCls(!!errors.priceNote)}
                  />
                </Field>
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">Cover Image</h2>
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

            {/* Options */}
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 space-y-4">
              <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Options</h2>
              <Toggle checked={form.souvenir} onChange={(v) => set('souvenir', v)} label="Souvenir Included" description="Show souvenir badge on the package card" />
              <Toggle checked={form.featured} onChange={(v) => set('featured', v)} label="Featured (Most Popular)" description="Highlights this package with blue styling and a badge" />
              <Toggle checked={form.published} onChange={(v) => set('published', v)} label="Published" description="Visible to visitors on the packages and home page" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 justify-end">
              <Link href="/admin/packages" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Cancel
              </Link>
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
                  'Create Package'
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
        className={cn('relative w-11 h-6 rounded-full transition-colors', checked ? 'bg-[#1d4ed8]' : 'bg-gray-200')}
      >
        <span className={cn('absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', checked && 'translate-x-5')} />
      </div>
    </label>
  )
}
