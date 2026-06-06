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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />

      {/* Floating surfboard decoration — top right */}
      <div className="absolute top-24 right-6 md:right-16 z-10 pointer-events-none opacity-30 hidden sm:block animate-[float_7s_ease-in-out_infinite]">
        <Image src="/surfboard.png" alt="" width={48} height={140} className="object-contain rotate-[-12deg]" aria-hidden />
      </div>

      {/* Slide indicators — left */}
      <div className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'text-sm font-bold tabular-nums text-left transition-colors tracking-wide cursor-pointer',
              i === current ? 'text-primary-light' : 'text-white/40 hover:text-white/60'
            )}
          >
            .{String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      {/* Main hero content */}
      <div className="absolute top-[72px] inset-x-0 bottom-0 flex flex-col justify-center z-10">
        <div className="container-site pl-20 md:pl-32 lg:pl-48">
          <div className="ml-6 md:ml-10 lg:ml-14">
            {/* Handwritten tagline */}
            <p className="font-display text-primary-light text-2xl md:text-3xl mb-1">
              Hirikatiya Beach, Sri Lanka
            </p>

            {/* Main heading */}
            <h1
              className="text-white font-extrabold uppercase leading-none -ml-1"
              style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}
            >
              NOAH SURF
              <br />
              SCHOOL
              <span className="sr-only"> — Surf Lessons Hiriketiya Sri Lanka</span>
            </h1>

            {/* Sub tagline */}
            <p className="font-display text-white/80 text-xl md:text-2xl mt-3">
              Catch your first wave. Feel the freedom. 🏄
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-12 ml-6 md:ml-10 lg:ml-14">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-lg"
            >
              Book A Lesson
            </Link>
            <Link
              href="/packages"
              className="inline-block border-2 border-white/60 text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="absolute bottom-8 md:bottom-14 right-8 md:right-12 flex gap-3 z-20">
        <button
          onClick={prev}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15 transition-colors duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15 transition-colors duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Wave bottom — transitions into ConditionsBar dark */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
          <path d="M0,28 C180,56 360,0 540,28 C720,56 900,5 1080,28 C1260,50 1380,18 1440,28 L1440,56 L0,56 Z" fill="#0d1b2a" />
        </svg>
      </div>
    </section>
  )
}
