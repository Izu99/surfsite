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
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => void
      }
    }
  }
}

const SCRIPT_ID = 'google-translate-script'

export default function GoogleTranslate({ className }: { className?: string }) {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    window.googleTranslateElementInit = () => {
      new window.google!.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
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
    <div className={cn('flex items-center gap-2 text-white/85', className)}>
      <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
      <div id="google_translate_element" />
    </div>
  )
}
