'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/unnamed (4).webp',  alt: 'Riding the waves at Hirikatiya' },
  { src: '/unnamed (5).webp',  alt: 'Surf lesson on the beach' },
  { src: '/unnamed (6).webp',  alt: 'Early morning session' },
  { src: '/unnamed (7).webp',  alt: 'The perfect barrel' },
  { src: '/unnamed (21).webp', alt: 'Hirikatiya horseshoe bay' },
  { src: '/unnamed (22).webp', alt: 'Students catching waves' },
  { src: '/unnamed (1).webp',  alt: 'Paddling out together' },
  { src: '/2024-09-14.webp',   alt: 'Golden hour at the beach' },
]

const INTERVAL = 5000

export default function GallerySlideshow() {
  const [current, setCurrent]     = useState(0)
  const [paused, setPaused]       = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const n = slides.length

  const go = useCallback((idx: number) => {
    setCurrent(((idx % n) + n) % n)
    setProgressKey(k => k + 1)
  }, [n])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => go(current + 1), INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current, paused, go])

  const thumbRef = useRef<HTMLDivElement>(null)

  // scroll active thumbnail into view
  useEffect(() => {
    const el = thumbRef.current?.children[current] as HTMLElement | undefined
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [current])

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Main stage ── */}
      <div className="relative h-[55vw] min-h-[280px] max-h-[620px] rounded-3xl overflow-hidden bg-gray-900">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform ease-out ${
                i === current
                  ? 'scale-[1.06] duration-[7000ms]'
                  : 'scale-100 duration-700'
              }`}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient — heavier at bottom for legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Slide counter — Caveat font, top right */}
        <div className="absolute top-5 right-5 z-20 font-display leading-none select-none">
          <span className="text-primary-light text-3xl md:text-4xl font-bold">
            {String(current + 1).padStart(2, '0')}
          </span>
          <span className="text-white/35 text-xl mx-1">/</span>
          <span className="text-white/50 text-xl">
            {String(n).padStart(2, '0')}
          </span>
        </div>

        {/* Caption — bottom left */}
        <div className="absolute bottom-6 left-6 z-20">
          <p className="font-display text-white text-xl md:text-2xl drop-shadow-md">
            {slides[current].alt}
          </p>
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => go(current - 1)}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-13 md:w-13 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => go(current + 1)}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-13 md:w-13 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* ── Progress bar ── */}
      <div className="h-[3px] rounded-full bg-gray-200 overflow-hidden">
        <div
          key={progressKey}
          className="h-full bg-primary rounded-full origin-left"
          style={{
            animation: paused ? 'none' : `gallery-progress ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      {/* ── Thumbnail strip ── */}
      <div
        ref={thumbRef}
        className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => go(i)}
            aria-label={slide.alt}
            className={`
              relative shrink-0 rounded-xl overflow-hidden cursor-pointer snap-start
              transition-all duration-300
              ${i === current
                ? 'w-20 h-14 md:w-24 md:h-16 ring-2 ring-primary ring-offset-2 opacity-100 scale-[1.04]'
                : 'w-16 h-12 md:w-20 md:h-14 opacity-50 hover:opacity-80'
              }
            `}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* ── View All link ── */}
      <div className="flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200 cursor-pointer group"
        >
          View all photos
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
