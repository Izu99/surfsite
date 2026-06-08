'use client'

import { useEffect } from 'react'
import { Languages } from 'lucide-react'
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

// Languages most relevant to international surf tourists — Sinhala excluded,
// since the site already serves local visitors in English.
const INCLUDED_LANGUAGES = 'fr,de,es,it,ru,pt,nl,zh-CN,ja,ko'

export default function GoogleTranslate({ className }: { className?: string }) {
  useEffect(() => {
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
  }, [])

  return (
    <div
      className={cn(
        'relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/15 cursor-pointer',
        className
      )}
    >
      <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Translate</span>
      {/* Google renders its own (invisible) <select> here, stretched to cover this
          whole pill — clicking the visible "Translate" label opens its native picker */}
      <div id="google_translate_element" />
    </div>
  )
}
