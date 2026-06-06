'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSlideshow() {
  return (
    <section className="relative h-screen min-h-[580px] overflow-hidden bg-[#0d3447]">
      {/* Hero image */}
      <Image
        src="/hero-bg.png"
        alt="Hirikatiya Beach"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/90" />

      {/* ── Mobile layout: centered ── */}
      <div className="md:hidden absolute top-[72px] inset-x-0 bottom-0 flex flex-col items-center justify-center z-10 px-6 py-10 text-center gap-4">
        <Image
          src="/logo.png"
          alt="Noah Surf School"
          width={96}
          height={96}
          className="h-20 w-auto object-contain"
          priority
        />
        <p className="text-primary-light text-base font-medium">
          Hirikatiya Beach, Sri Lanka
        </p>
        <h1
          className="text-white font-extrabold uppercase leading-none"
          style={{ fontSize: 'clamp(2.6rem, 13vw, 4.5rem)' }}
        >
          NOAH SURF<br />SCHOOL
          <span className="sr-only"> — Surf Lessons Hiriketiya Sri Lanka</span>
        </h1>
        <p className="text-white/80 text-base">
          Catch your first wave. Feel the freedom.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer shadow-xl"
        >
          Book Now
        </Link>
      </div>

      {/* ── Desktop layout: left-aligned ── */}
      <div className="hidden md:flex absolute top-[72px] inset-x-0 bottom-0 flex-col justify-center z-10">
        <div className="container-site">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Noah Surf School"
                width={90}
                height={90}
                className="h-20 w-auto object-contain"
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
              Catch your first wave. Feel the freedom.
            </p>

            {/* Single CTA */}
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
          <path d="M0,28 C180,56 360,0 540,28 C720,56 900,5 1080,28 C1260,50 1380,18 1440,28 L1440,56 L0,56 Z" fill="#0d1b2a" />
        </svg>
      </div>
    </section>
  )
}
