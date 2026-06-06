'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

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
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)
  const [dir, setDir]         = useState<'next' | 'prev'>('next')
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const n = slides.length

  const go = useCallback((idx: number, direction: 'next' | 'prev' = 'next') => {
    if (animating) return
    setDir(direction)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(((idx % n) + n) % n)
      setAnimating(false)
    }, 400)
  }, [animating, n])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => go(current + 1, 'next'), INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current, paused, go])

  const next = () => { if (timerRef.current) clearInterval(timerRef.current); go(current + 1, 'next') }
  const prev = () => { if (timerRef.current) clearInterval(timerRef.current); go(current - 1, 'prev') }

  const slideAnim = animating
    ? dir === 'next'
      ? 'opacity-0 -translate-x-6'
      : 'opacity-0 translate-x-6'
    : 'opacity-100 translate-x-0'

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-0 rounded-3xl overflow-hidden min-h-[440px] lg:min-h-[520px] bg-gray-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Left panel: controls ── */}
      <div className="flex flex-col justify-between p-8 md:p-10 bg-[#f0ece4] text-gray-900 order-2 lg:order-1">
        {/* Counter */}
        <div className="flex items-end gap-1 select-none">
          <span className="text-5xl font-extrabold text-primary leading-none">
            {String(current + 1).padStart(2, '0')}
          </span>
          <span className="text-gray-300 text-2xl mb-1 mx-1">/</span>
          <span className="text-gray-400 text-2xl mb-1">
            {String(n).padStart(2, '0')}
          </span>
        </div>

        {/* Caption */}
        <div className="flex-1 flex items-center py-8">
          <p
            className={`text-gray-800 text-xl md:text-2xl font-semibold leading-snug transition-all duration-[400ms] ${slideAnim}`}
          >
            {slides[current].alt}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 'next' : 'prev')}
              aria-label={`Photo ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Arrows + View all */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200 cursor-pointer group"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── Right panel: image ── */}
      <div className="relative h-72 lg:h-auto overflow-hidden order-1 lg:order-2">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform ease-out ${
                i === current ? 'scale-[1.05] duration-[6000ms]' : 'scale-100 duration-500'
              }`}
              sizes="(max-width: 1024px) 100vw, 62vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Progress bar at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-white/20">
          <div
            key={current}
            className="h-full bg-primary origin-left"
            style={{ animation: paused ? 'none' : `gallery-progress ${INTERVAL}ms linear forwards` }}
          />
        </div>
      </div>
    </div>
  )
}
