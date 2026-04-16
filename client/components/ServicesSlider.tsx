'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

type Service = {
  title: string
  description: string
  image: string
  alt: string
  icon?: string
}

export default function ServicesSlider({ services }: { services: Service[] }) {
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
    const t = setInterval(() => {
      scroll('next')
    }, 5000)
    return () => clearInterval(t)
  }, [scroll])

  return (
    <section className="section-padding bg-[#f0f4f8] overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              Let&apos;s Start An<br />Education!
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We want our clients to feel awesome and unique.
            </p>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous"
              className="h-11 w-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('next')}
              aria-label="Next"
              className="h-11 w-11 border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
        >
          {services.map((service) => (
            <div
              key={service.title}
              data-card
              className="snap-start shrink-0 w-[82vw] sm:w-[360px] md:w-[380px] overflow-hidden bg-white flex flex-col border border-gray-100 shadow-[0_4px_20px_0_rgb(0_0_0/0.07)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 82vw, 380px"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon && (
                    <Image src={service.icon} alt="" width={32} height={32} className="object-contain shrink-0" />
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                    Services
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wide hover:text-[#1d4ed8] transition-colors"
                >
                  Booking a lesson
                  <span className="h-6 w-6 border border-current flex items-center justify-center shrink-0">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
