'use client'

import { useEffect, useRef, useState } from 'react'
import { Languages, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void
      }
    }
  }
}

const SCRIPT_ID = 'google-translate-script'

// Each language is shown by its own native name/script — recognizable to any
// visitor regardless of where they're browsing from or what locale Google
// detects (Google's own picker UI adapts to IP geolocation, which would show
// e.g. Sinhala to a foreign tourist physically in Sri Lanka — unreadable to them).
const LANGUAGES: { code: string; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

const INCLUDED_LANGUAGES = LANGUAGES.filter((l) => l.code !== 'en')
  .map((l) => l.code)
  .join(',')

// Google's hidden <select> is what actually drives translation — programmatically
// setting its value and firing `change` triggers it without needing Google's own
// (locale-dependent) picker UI. Setting it back to '' restores the original page.
function applyTranslation(code: string) {
  const select = document.querySelector<HTMLSelectElement>(
    '#google_translate_element select.goog-te-combo'
  )
  if (!select) return
  select.value = code === 'en' ? '' : code
  select.dispatchEvent(new Event('change'))
}

function loadTranslateScript() {
  if (document.getElementById(SCRIPT_ID)) return

  window.googleTranslateElementInit = () => {
    new window.google!.translate.TranslateElement(
      { pageLanguage: 'en', includedLanguages: INCLUDED_LANGUAGES, autoDisplay: false },
      'google_translate_element'
    )
  }

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)
}

export default function GoogleTranslate({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={wrapperRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => {
          loadTranslateScript()
          setOpen((v) => !v)
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/15 cursor-pointer"
      >
        <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Translate</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 max-h-80 w-44 overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1420] py-2 shadow-xl shadow-black/40"
        >
          {LANGUAGES.map(({ code, label }) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                onClick={() => {
                  applyTranslation(code)
                  setOpen(false)
                }}
                className="w-full cursor-pointer px-4 py-2 text-left text-sm text-white/85 transition-colors duration-150 hover:bg-white/10 hover:text-white"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Google mounts its translation engine (incl. the hidden <select> that
          actually performs translation) here — its own UI is suppressed via CSS */}
      <div id="google_translate_element" />
    </div>
  )
}
