'use client'

import { useState, useEffect } from 'react'
import { Waves, Save, AlertCircle, Check, Clock } from 'lucide-react'
import { adminConditionsApi, type SurfConditions } from '@/lib/api'
import { cn } from '@/lib/utils'

const FIELDS: { key: keyof Omit<SurfConditions, '_id' | 'updatedAt'>; label: string; placeholder: string }[] = [
  { key: 'waveHeight', label: 'Wave Height',  placeholder: 'e.g. 0.8 – 1.2 m'   },
  { key: 'wind',       label: 'Wind',          placeholder: 'e.g. 12 km/h SW'     },
  { key: 'waterTemp',  label: 'Water Temp',    placeholder: 'e.g. 27°C'           },
  { key: 'airTemp',    label: 'Air Temp',      placeholder: 'e.g. 31°C'           },
  { key: 'conditions', label: 'Conditions',    placeholder: 'e.g. Mellow Peaks'   },
]

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
            waveHeight: res.data.waveHeight,
            wind:       res.data.wind,
            waterTemp:  res.data.waterTemp,
            airTemp:    res.data.airTemp,
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
    for (const { key, label } of FIELDS) {
      if (!form[key].trim()) {
        showToast(`${label} cannot be empty.`, 'error')
        return
      }
    }
    setSaving(true)
    try {
      const res = await adminConditionsApi.update(form)
      if (res.data.updatedAt) setLastUpdated(res.data.updatedAt)
      showToast('Conditions updated — homepage will reflect the new values.')
    } catch {
      showToast('Failed to save. Please try again.', 'error')
    } finally {
      setSaving(false)
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
                {FIELDS.map(({ key, label }) => (
                  <div key={key}>
                    <p className="text-[9px] text-white/40 uppercase tracking-wider leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs font-bold text-white">
                      {form[key] || <span className="text-white/30 italic">empty</span>}
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
                FIELDS.map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {label}
                    </label>
                    <input
                      type="text"
                      value={form[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                ))
              )}

              <div className="pt-2">
                <button
                  onClick={handleSave}
                  disabled={saving || !mounted}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors"
                >
                  {saving ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  {saving ? 'Saving…' : 'Save Conditions'}
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
    </>
  )
}
