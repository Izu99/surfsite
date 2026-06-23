'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSlideshow() {
  return (
    <section className="relative h-screen min-h-[580px] overflow-hidden bg-[#0d3447]">
      {/* Hero image */}
      <Image
        src="/hero-bay-aerial.webp"
        alt="Hirikatiya Beach"
        fill
        className="object-cover object-center md:object-bottom"
        priority
        sizes="(max-width: 768px) 200vw, 100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/60" />

      {/* ── Mobile layout: centered ── */}
      <div className="md:hidden absolute top-[72px] inset-x-0 bottom-0 flex flex-col items-center justify-center z-10 px-6 py-10 text-center gap-4">
        <Image
          src="/logo.png"
          alt="Noah Surf School"
          width={96}
          height={96}
          className="h-36 w-auto object-contain -mt-6"
          priority
        />
        <p className="text-primary-light text-base font-medium">
          Hirikatiya Beach, Sri Lanka
        </p>
        <div
          role="heading"
          aria-level={1}
          className="text-white font-extrabold uppercase leading-none"
          style={{ fontSize: 'clamp(2.6rem, 13vw, 4.5rem)' }}
        >
          NOAH SURF<br />SCHOOL
          <span className="sr-only"> — Surf Lessons Hiriketiya Sri Lanka</span>
        </div>
        <p className="text-white/80 text-base">
          Catch your waves. Feel the freedom.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer shadow-xl"
        >
          Book Now
        </Link>
      </div>

      {/* ── Desktop layout: left-aligned ── */}
      <div className="hidden md:flex absolute top-[72px] inset-x-0 bottom-0 flex-col justify-center z-10">
        <div className="container-site">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-5 -mt-8">
              <Image
                src="/logo.png"
                alt="Noah Surf School"
                width={90}
                height={90}
                className="h-32 w-auto object-contain"
                priority
              />
            </div>

            {/* Location */}
            <p className="text-primary-light text-xl mb-2 font-medium">
              Hirikatiya Beach, Sri Lanka
            </p>

            {/* Main heading */}
            <h1
              className="text-white font-extrabold uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              NOAH SURF
              <br />
              SCHOOL
              <span className="sr-only"> — Surf Lessons Hiriketiya Sri Lanka</span>
            </h1>

            {/* Sub */}
            <p className="text-white/80 text-xl mt-4 mb-8">
              Catch your waves. Feel the freedom.
            </p>

            {/* Single CTA */}
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Wave bottom — single wave, gently flowing */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 overflow-hidden pointer-events-none">
        <div className="flex h-full w-[200%] animate-wave-flow">
          <svg viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-1/2 shrink-0 block">
            <path d="M0,48 C360,84 1080,12 1440,48 L1440,96 L0,96 Z" fill="#0d3447" />
          </svg>
          <svg viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-1/2 shrink-0 block">
            <path d="M0,48 C360,84 1080,12 1440,48 L1440,96 L0,96 Z" fill="#0d3447" />
          </svg>
        </div>
      </div>
    </section>
  )
}
