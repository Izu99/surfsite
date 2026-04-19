'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1673783807734-3dd0ffbf6784?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Surfing action at Hirikatiya Beach',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672510003630-18d2535419ef?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf action at Hirikatiya Beach',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672510000383-8f46f7b157b0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfing at Hirikatiya Sri Lanka',
  },
  {
    src: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
    alt: 'Waves at Hirikatiya Beach',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  )

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative h-screen min-h-[580px] overflow-hidden bg-[#1a2e4a]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-top"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay — transparent top so image shows under navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/65" />

      {/* Left column: slide indicators */}
      <div className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'text-sm font-bold tabular-nums text-left transition-colors tracking-wide',
              i === current ? 'text-primary-light' : 'text-white/40 hover:text-white/60'
            )}
          >
            .{String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      {/* Main hero content */}
      <div className="absolute top-[72px] inset-x-0 bottom-0 flex flex-col justify-center z-10">
        <div className="container-site pl-32 md:pl-48 lg:pl-64">
          <div className="ml-8 md:ml-12 lg:ml-16">
            {/* Tagline */}
            <p className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-1 md:mb-2">
              WAVES, OCEAN, LIFESTYLE.
            </p>

            {/* Massive heading */}
            <h1
              className="text-white font-extrabold uppercase leading-none -ml-1"
              style={{ fontSize: 'clamp(3.5rem, 13vw, 10rem)' }}
            >
              SURF SCHOOL
              <span className="sr-only"> — Noah Surf School Hiriketiya, Sri Lanka</span>
            </h1>
          </div>

          {/* Bottom row: CTA + location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-6 md:mt-10 gap-4 sm:gap-0">
            <Link
              href="/contact"
              className="ml-8 md:ml-12 lg:ml-16 inline-block bg-primary text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors"
            >
              Book A Lesson
            </Link>
            <p className="text-primary-light font-bold uppercase tracking-[0.18em] text-lg md:text-2xl mb-1">
              HIRIKATIYA, SRI LANKA
            </p>
          </div>
        </div>
      </div>

      {/* Navigation buttons: bottom right */}
      <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 flex gap-3 z-20">
        <button
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
