'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Check, Clock, Users, Gift, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { INCLUDED_IN_ALL } from '@/data/packages'
import { services } from '@/components/ServicesSlider'
import type { SurfPackage } from '@/lib/api'
import { splitPackageName } from '@/lib/utils'

export default function PackageCard({
  pkg,
  readMoreHref,
  showCollection = true,
}: {
  pkg: SurfPackage
  readMoreHref?: string
  showCollection?: boolean
}) {
  const { title, subtitle } = splitPackageName(pkg.name)
  const [open, setOpen] = useState(false)
  const [collectionOpen, setCollectionOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => setSlideIndex((i) => (i + 1) % services.length)
  const prevSlide = () => setSlideIndex((i) => (i - 1 + services.length) % services.length)
  const activeService = services[slideIndex]
  const includes = pkg.includes?.length ? pkg.includes : INCLUDED_IN_ALL

  return (
    <>
      <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 bg-white transition-all duration-300">
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col flex-1 p-6 space-y-4">
          <p className="text-lg font-bold text-gray-900">
            {title}
            {subtitle && <span className="block font-display text-base text-gray-500">{subtitle}</span>}
          </p>
          {(pkg.shortDescription || pkg.description) && (
            (() => {
              const lines = (pkg.shortDescription || pkg.description).split('\n').filter(Boolean)
              return lines.length > 1 ? (
                <ul className="space-y-1">
                  {lines.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed">
                      <span className="text-primary shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 leading-relaxed">{lines[0]}</p>
              )
            })()
          )}

          {(pkg.duration || pkg.format) && (
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 text-sm text-gray-600">
              {pkg.duration && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {pkg.duration}
                </span>
              )}
              {pkg.format && (
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {pkg.format}
                </span>
              )}
            </div>
          )}

          {pkg.level === 'Agency' ? (
            <span className="self-start text-left text-sm font-semibold text-primary">
              Contact Us
            </span>
          ) : readMoreHref ? (
            <Link
              href={readMoreHref}
              className="self-start text-left text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-dark cursor-pointer"
            >
              Read More
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="self-start text-left text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-dark cursor-pointer"
            >
              Read More
            </button>
          )}

          {pkg.price > 0 && (
            <div className="space-y-3 mt-1">
              <div className="border-t border-gray-100" />

              <div className="flex items-start leading-none gap-0.5">
                <span className="text-lg font-bold mt-1 text-primary">Rs</span>
                <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                <span className="text-xs self-end mb-1 ml-1.5 text-gray-400">/ {pkg.priceNote}</span>
              </div>

              <Link
                href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className="block text-center px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gray-700 text-gray-700 hover:border-primary hover:bg-primary hover:text-white active:border-primary-dark active:bg-primary-dark active:text-white"
              >
                Book Now
              </Link>

              {showCollection && (
                <button
                  type="button"
                  onClick={() => {
                    setSlideIndex(0)
                    setCollectionOpen(true)
                  }}
                  className="block w-full text-center font-bold text-gray-900 hover:text-primary cursor-pointer"
                >
                  Noah Collection
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[88px]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[calc(100vh-104px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-48 shrink-0">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white text-lg font-bold">
                  {title}
                  {subtitle && <span className="block font-display text-base text-white/80">{subtitle}</span>}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {pkg.description && (
                <p className="text-sm text-gray-500 leading-relaxed">{pkg.description}</p>
              )}

              <div>
                <p className="font-bold text-gray-900 mb-2">What&apos;s Included:</p>
                <ul className="space-y-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.souvenir && (
                <span className="flex items-center gap-1.5 text-amber-600 font-display text-2xl">
                  <Gift className="h-3.5 w-3.5" />
                  Mystery Gift
                </span>
              )}

              {pkg.price > 0 && (
                <>
                  <div className="flex items-start leading-none gap-0.5">
                    <span className="text-lg font-bold mt-1 text-primary">Rs</span>
                    <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                    <span className="text-xs self-end mb-1 ml-1.5 text-gray-400">/ {pkg.priceNote}</span>
                  </div>

                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    className="block text-center px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gray-700 text-gray-700 hover:border-primary hover:bg-primary hover:text-white active:border-primary-dark active:bg-primary-dark active:text-white"
                  >
                    Book Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {collectionOpen && (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[88px]"
          onClick={() => setCollectionOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[calc(100vh-104px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 shrink-0">
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />

              <button
                type="button"
                onClick={() => setCollectionOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-4 left-5">
                <p className="inline-block bg-gray-700/60 text-white text-lg font-bold px-2.5 py-1 rounded-md">
                  {activeService.title}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-2xl font-bold text-primary">The Noah Collection</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                You can buy these from our online shop
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{activeService.description}</p>

              <div className="flex items-center justify-center gap-2">
                {services.map((service, i) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Go to ${service.title}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === slideIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 w-full px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors bg-primary text-white hover:bg-primary-dark"
              >
                Shop The Collection
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
