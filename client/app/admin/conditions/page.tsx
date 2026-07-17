'use client'

import { useState, useEffect } from 'react'
import { Waves, Save, AlertCircle, Check, Clock, RotateCcw } from 'lucide-react'
import { adminConditionsApi, type SurfConditions } from '@/lib/api'
import { cn } from '@/lib/utils'

type FieldKey = keyof Omit<SurfConditions, '_id' | 'updatedAt'>

const FIELDS: { key: FieldKey; label: string; placeholder: string; unit?: string }[] = [
  { key: 'waveHeight', label: 'Wave Height',  placeholder: '0.8 – 1.2',    unit: 'm'    },
  { key: 'wind',       label: 'Wind',          placeholder: '12 SW',        unit: 'km/h' },
  { key: 'waterTemp',  label: 'Water Temp',    placeholder: '27',           unit: '°C'   },
  { key: 'airTemp',    label: 'Air Temp',      placeholder: '31',           unit: '°C'   },
  { key: 'conditions', label: 'Conditions',    placeholder: 'e.g. Mellow Peaks'          },
]

// Strip a trailing unit (e.g. "0.8 – 1.2 m" -> "0.8 – 1.2") so the input shows only the number.
const stripUnit = (value: string, unit?: string): string => {
  if (!unit) return value
  const trimmed = value.trim()
  return trimmed.endsWith(unit) ? trimmed.slice(0, -unit.length).trim() : trimmed
}

// Re-attach the fixed unit on save (e.g. "0.8 – 1.2" -> "0.8 – 1.2 m").
const withUnit = (value: string, unit?: string): string => {
  const trimmed = value.trim()
  if (!unit || !trimmed) return trimmed
  return `${trimmed} ${unit}`
}

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

export default function AdminConditionsPage() {
  const [form, setForm] = useState({
    waveHeight: '',
    wind: '',
    waterTemp: '',
    airTemp: '',
    conditions: '',
  })
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [resetting, setResetting] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  useEffect(() => {
    adminConditionsApi.get()
      .then((res) => {
        if (res.data) {
          setForm({
            waveHeight: stripUnit(res.data.waveHeight, 'm'),
            wind:       stripUnit(res.data.wind, 'km/h'),
            waterTemp:  stripUnit(res.data.waterTemp, '°C'),
            airTemp:    stripUnit(res.data.airTemp, '°C'),
            conditions: res.data.conditions,
          })
          if (res.data.updatedAt) setLastUpdated(res.data.updatedAt)
        }
      })
      .catch(() => {})
      .finally(() => setMounted(true))
  }, [])

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const payload = {
        waveHeight: withUnit(form.waveHeight, 'm'),
        wind:       withUnit(form.wind, 'km/h'),
        waterTemp:  withUnit(form.waterTemp, '°C'),
        airTemp:    withUnit(form.airTemp, '°C'),
        conditions: form.conditions.trim(),
      }
      const res = await adminConditionsApi.update(payload)
      if (res.data.updatedAt) setLastUpdated(res.data.updatedAt)
      showToast('Conditions updated — homepage will reflect the new values.')
    } catch {
      showToast('Failed to save. Please try again.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleReset = async () => {
    setShowResetConfirm(false)
    setResetting(true)
    try {
      await adminConditionsApi.delete()
      setForm({ waveHeight: '', wind: '', waterTemp: '', airTemp: '', conditions: '' })
      setLastUpdated(null)
      showToast('Conditions reset — homepage will show defaults until re-saved.')
    } catch {
      showToast('Failed to reset. Please try again.', 'error')
    } finally {
      setResetting(false)
    }
  }

  const formattedTime = lastUpdated
    ? new Date(lastUpdated).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : null

  return (
    <>
      {/* ── Header ── */}
      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center gap-3">
          <Waves className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Admin Panel</p>
            <h1 className="text-white font-bold text-2xl">Hirikatiya Today — Live Conditions</h1>
          </div>
        </div>
      </div>

      {/* ── Form ── */}
      <section className="section-padding bg-primary-50">
        <div className="container-site max-w-2xl">
          {/* Last updated badge */}
          {formattedTime && (
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Clock className="h-3.5 w-3.5 text-primary" />
              Last updated: <span className="font-semibold text-gray-700">{formattedTime}</span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400">Homepage auto-reflects this on next load</span>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
            {/* Preview bar */}
            <div className="bg-[#0d1b2a] px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Live preview — Hirikatiya Today
                </span>
              </div>
              <div className="flex flex-wrap gap-5">
                {FIELDS.map(({ key, label, unit }) => (
                  <div key={key}>
                    <p className="text-[9px] text-white/40 uppercase tracking-wider leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs font-bold text-white">
                      {form[key] ? withUnit(form[key], unit) : <span className="text-white/30 italic">empty</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fields */}
            <div className="p-6 space-y-5">
              {!mounted ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-12 bg-gray-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : (
                FIELDS.map(({ key, label, placeholder, unit }) => (
                  <div key={key}>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {label}
                      {unit && <span className="ml-1.5 font-medium text-gray-400 normal-case tracking-normal">— in {unit}</span>}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={form[key]}
                        onChange={(e) => handleChange(key, e.target.value)}
                        placeholder={placeholder}
                        className={cn(
                          'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition',
                          unit && 'pr-14',
                        )}
                      />
                      {unit && (
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                          {unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleSave}
                  disabled={saving || resetting || !mounted}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors"
                >
                  {saving ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  {saving ? 'Saving…' : 'Save Conditions'}
                </button>
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={saving || resetting || !mounted}
                  className="flex items-center gap-2 border border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                >
                  {resetting ? (
                    <span className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
                  ) : (
                    <RotateCcw className="h-4 w-4" />
                  )}
                  {resetting ? 'Resetting…' : 'Reset'}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            Changes are saved to the database and reflected on the homepage immediately. The update time is set automatically.
          </p>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} />}

      {showResetConfirm && (
        <ConfirmModal
          title="Reset Conditions"
          message="This clears the saved conditions record from the database. The homepage will show its built-in defaults until you save new values."
          confirmLabel="Reset"
          onConfirm={handleReset}
          onCancel={() => setShowResetConfirm(false)}
        />
      )}
    </>
  )
}
