'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  LayoutDashboard,
  AlertCircle,
  Check,
  X,
} from 'lucide-react'
import { adminFaqApi, type Faq, type FaqInput } from '@/lib/api'
import { cn } from '@/lib/utils'

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
          <div className="mt-0.5 flex-shrink-0 p-2 rounded-full bg-red-100">
            <AlertCircle className="h-5 w-5 text-red-600" />
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
            className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

type FormState = {
  question: string
  answer: string
  order: string
  published: boolean
}

const EMPTY_FORM: FormState = { question: '', answer: '', order: '0', published: true }

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [mounted, setMounted] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<Faq | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  // Form state — editing !== null means the form edits that FAQ, otherwise creates
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Faq | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const fetchFaqs = useCallback(async () => {
    try {
      const res = await adminFaqApi.list({ limit: 50 })
      setFaqs(res.data)
    } catch {
      showToast('Failed to load FAQs.', 'error')
    } finally {
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    fetchFaqs()
  }, [fetchFaqs])

  const openCreate = () => {
    setEditing(null)
    setForm({ ...EMPTY_FORM, order: String(faqs.length + 1) })
    setFormError('')
    setFormOpen(true)
  }

  const openEdit = (faq: Faq) => {
    setEditing(faq)
    setForm({
      question: faq.question,
      answer: faq.answer,
      order: String(faq.order),
      published: faq.published,
    })
    setFormError('')
    setFormOpen(true)
  }

  const closeForm = () => {
    setFormOpen(false)
    setEditing(null)
    setFormError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.question.trim()) { setFormError('Question is required'); return }
    if (!form.answer.trim()) { setFormError('Answer is required'); return }

    setSubmitting(true)
    setFormError('')
    try {
      const input: FaqInput = {
        question: form.question.trim(),
        answer: form.answer.trim(),
        order: Number(form.order) || 0,
        published: form.published,
      }
      if (editing) {
        await adminFaqApi.update(editing._id, input)
        showToast('FAQ updated.')
      } else {
        await adminFaqApi.create(input)
        showToast('FAQ created.')
      }
      closeForm()
      fetchFaqs()
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to save FAQ')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    try {
      await adminFaqApi.delete(deleteTarget._id)
      setDeleteTarget(null)
      showToast('FAQ deleted.')
      fetchFaqs()
    } catch {
      showToast('Failed to delete FAQ.', 'error')
    }
  }

  const handleTogglePublish = async (id: string) => {
    try {
      const res = await adminFaqApi.togglePublish(id)
      setFaqs((prev) => prev.map((f) => (f._id === id ? res.data : f)))
      showToast(res.data.published ? 'FAQ published.' : 'FAQ moved to drafts.')
    } catch {
      showToast('Failed to update FAQ.', 'error')
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
              <h1 className="text-white font-bold text-lg">FAQ Management</h1>
            </div>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <Plus className="h-4 w-4" />
            New FAQ
          </button>
        </div>
      </div>

      <section className="section-padding bg-primary-50">
        <div className="container-site max-w-4xl">
          <p className="text-xs text-gray-400 mb-4">
            These questions appear in the FAQ section of the contact page. Lower order = shown first.
          </p>

          {!mounted ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-5 border-b border-gray-100 last:border-0">
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-4 bg-gray-200 rounded w-16 ml-auto" />
                </div>
              ))}
            </div>
          ) : faqs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-12 text-center">
              <p className="text-gray-400 mb-4">No FAQs yet.</p>
              <button
                onClick={openCreate}
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold"
              >
                <Plus className="h-4 w-4" />
                Create your first FAQ
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              {faqs.map((faq, idx) => (
                <div
                  key={faq._id}
                  className={cn(
                    'flex items-start justify-between gap-4 px-4 md:px-6 py-4 transition-colors hover:bg-gray-50',
                    idx !== faqs.length - 1 && 'border-b border-gray-100',
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm">
                      {faq.order}. {faq.question}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{faq.answer}</p>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <span
                      className={cn(
                        'hidden sm:inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full mr-1',
                        faq.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700',
                      )}
                    >
                      {faq.published ? 'Published' : 'Draft'}
                    </span>
                    <button
                      onClick={() => handleTogglePublish(faq._id)}
                      title={faq.published ? 'Move to Draft' : 'Publish'}
                      className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary-50 transition-colors"
                    >
                      {faq.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => openEdit(faq)}
                      title="Edit"
                      className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary-50 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(faq)}
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
        </div>
      </section>

      {/* ── Create / Edit modal ── */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-[10vh]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeForm} />
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">{editing ? 'Edit FAQ' : 'New FAQ'}</h3>
              <button
                type="button"
                onClick={closeForm}
                aria-label="Close"
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {formError && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {formError}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Question</label>
              <input
                type="text"
                placeholder="e.g. Do I need experience to book a lesson?"
                value={form.question}
                onChange={(e) => setForm((p) => ({ ...p, question: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Answer</label>
              <textarea
                rows={4}
                placeholder="The answer shown when the question is expanded."
                value={form.answer}
                onChange={(e) => setForm((p) => ({ ...p, answer: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              />
            </div>

            <div className="flex items-center gap-6">
              <div className="w-32">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Order <span className="font-normal text-gray-400">— lower = first</span>
                </label>
                <input
                  type="number"
                  min="0"
                  value={form.order}
                  onChange={(e) => setForm((p) => ({ ...p, order: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer select-none mt-5">
                <div
                  onClick={() => setForm((p) => ({ ...p, published: !p.published }))}
                  className={cn('relative w-11 h-6 rounded-full transition-colors', form.published ? 'bg-primary' : 'bg-gray-200')}
                >
                  <span className={cn('absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', form.published && 'translate-x-5')} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Published</span>
              </label>
            </div>

            <div className="flex items-center gap-3 justify-end pt-1">
              <button
                type="button"
                onClick={closeForm}
                className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-primary hover:bg-primary-dark text-white disabled:opacity-60 transition-all"
              >
                {submitting ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Saving…</>
                ) : editing ? (
                  'Save Changes'
                ) : (
                  'Create FAQ'
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}

      {deleteTarget && (
        <ConfirmModal
          title="Delete FAQ"
          message={`Are you sure you want to delete "${deleteTarget.question}"? This action cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </>
  )
}
