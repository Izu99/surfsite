'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Faq = { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
      {faqs.map(({ q, a }, index) => {
        const isOpen = openIndex === index
        return (
          <div key={q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-3 text-left"
              aria-expanded={isOpen}
            >
              <p className="text-sm font-bold text-gray-900">{index + 1}. {q}</p>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <p className="text-sm text-gray-500 leading-relaxed mt-3">{a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
