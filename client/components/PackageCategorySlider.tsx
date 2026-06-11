'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PackageCard from './PackageCard'
import type { PackageCategory } from '@/data/packages'
import type { SurfPackage } from '@/lib/api'

export default function PackageCategorySlider({
  category,
  packages,
  readMoreHref,
  showCollection,
}: {
  category: PackageCategory
  packages: SurfPackage[]
  readMoreHref?: string
  showCollection?: boolean
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    if (!card) return
    const step = card.offsetWidth + 20
    track.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7">
      <div className="flex items-end justify-between gap-4 mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{category.label}</h3>
        </div>
        {packages.length > 1 && (
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll('prev')}
              aria-label="Previous"
              className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('next')}
              aria-label="Next"
              className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {packages.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-12 px-4 bg-[#f0e9dd]/50 rounded-xl">
          <p className="text-sm text-gray-500 max-w-sm mb-4">{category.emptyText}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide bg-primary text-white hover:bg-primary-dark transition-colors cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      ) : (
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {packages.map((pkg) => (
            <div key={pkg._id} data-card className="snap-start shrink-0 w-[85%] sm:w-[320px]">
              <PackageCard pkg={pkg} readMoreHref={readMoreHref} showCollection={showCollection} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
