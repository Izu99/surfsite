'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, Waves, Tent, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  title: string
  description: string
  image: string
  alt: string
  icon?: LucideIcon
}

const services: Service[] = [
  {
    title: 'Surf Coaching',
    description: 'One-on-one coaching for your level.',
    image: 'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf coaching at Hirikatiya',
    icon: GraduationCap,
  },
  {
    title: 'Board Rentals',
    description: 'Longboards, shortboards & foam boards.',
    image: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfboard rentals',
    icon: Waves,
  },
  {
    title: 'Surf Camps',
    description: 'Multi-day lessons + yoga + local tours.',
    image: 'https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?q=80&w=2070&auto=format&fit=crop',
    alt: 'Noah surf camp',
    icon: Tent,
  },
  {
    title: 'Group Lessons',
    description: 'Fun social groups, max 6 per instructor.',
    image: 'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Group surf lesson',
    icon: Users,
  },
]

export default function ServicesSlider() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    if (!card) return
    const step = card.offsetWidth + 24
    const maxScroll = track.scrollWidth - track.clientWidth
    const isAtEnd = track.scrollLeft >= maxScroll - 5
    const isAtStart = track.scrollLeft <= 5

    if (dir === 'next' && isAtEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (dir === 'prev' && isAtStart) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => scroll('next'), 5000)
    return () => clearInterval(t)
  }, [scroll])

  return (
    <section className="bg-[#f0ece4] section-padding overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
              Lessons
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
              What we offer
            </h2>
            <p className="text-gray-500 text-sm">Pick your adventure — we&apos;ll do the rest!</p>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('next')}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              data-card
              className="snap-start shrink-0 w-[82vw] sm:w-[340px] md:w-[360px] overflow-hidden bg-white rounded-3xl flex flex-col shadow-md"
              style={{ rotate: i % 2 === 0 ? '-0.6deg' : '0.6deg' }}
            >
              {/* Icon badge floating on image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 82vw, 360px"
                />
                {/* Big icon badge */}
                {service.icon && (() => { const Icon = service.icon!; return (
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                )})()}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 cursor-pointer self-start"
                >
                  Book Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
