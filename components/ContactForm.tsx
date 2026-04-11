'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type FormState = {
  name: string
  email: string
  phone: string
  date: string
  level: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  level: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email'
    if (!form.level) e.level = 'Please select your skill level'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Booking Request Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          Thanks, {form.name.split(' ')[0]}! We&apos;ll get back to you at{' '}
          <span className="font-medium text-gray-700">{form.email}</span> within
          24 hours to confirm your lesson.
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-2 text-sm text-[#1d4ed8] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name} required>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Amal Perera"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email Address" error={errors.email} required>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      {/* Phone + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number" error={errors.phone}>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+94 77 000 0000"
            className={inputClass(false)}
          />
        </Field>
        <Field label="Preferred Date">
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={inputClass(false)}
          />
        </Field>
      </div>

      {/* Skill Level */}
      <Field label="Skill Level" error={errors.level} required>
        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className={cn(inputClass(!!errors.level), 'cursor-pointer')}
        >
          <option value="" disabled>
            Select your level…
          </option>
          <option value="beginner">Beginner — never surfed before</option>
          <option value="intermediate">
            Intermediate — can stand up consistently
          </option>
          <option value="advanced">Advanced — riding unbroken waves</option>
        </select>
      </Field>

      {/* Message */}
      <Field label="Message / Special Requests" error={errors.message} required>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your goals, group size, or any questions…"
          className={cn(inputClass(!!errors.message), 'resize-none')}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#1e40af] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Booking Request
          </>
        )}
      </button>
    </form>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full border bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400',
    'focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/30 focus:border-[#1d4ed8]',
    'transition-colors',
    hasError ? 'border-red-400' : 'border-gray-200'
  )
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
        {label}
        {required && <span className="text-[#1d4ed8] ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  )
}
