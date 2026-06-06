'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSlideshow() {
  return (
    <section className="relative h-screen min-h-[580px] overflow-hidden bg-[#0d3447]">
      {/* Hero image — replace /hero-drone.webp with your drone shot */}
      <Image
        src="/hero-drone.webp"
        alt="Hirikatiya Beach aerial drone view"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/80" />

      {/* Floating surfboard decoration */}
      <div className="absolute top-24 right-6 md:right-16 z-10 pointer-events-none opacity-25 hidden sm:block animate-[float_7s_ease-in-out_infinite]">
        <Image src="/surfboard.png" alt="" width={48} height={140} className="object-contain rotate-[-12deg]" aria-hidden />
      </div>

      {/* Main hero content */}
      <div className="absolute top-[72px] inset-x-0 bottom-0 flex flex-col justify-center z-10">
        <div className="container-site">
          <div className="max-w-3xl">
            {/* Handwritten location tag */}
            <p className="font-display text-primary-light text-2xl md:text-3xl mb-2">
              Hirikatiya Beach, Sri Lanka
            </p>

            {/* Main heading */}
            <h1
              className="text-white font-extrabold uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}
            >
              NOAH SURF
              <br />
              SCHOOL
              <span className="sr-only"> — Surf Lessons Hiriketiya Sri Lanka</span>
            </h1>

            {/* Sub */}
            <p className="font-display text-white/80 text-xl md:text-2xl mt-4 mb-8">
              Catch your first wave. Feel the freedom.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
      </div>

      {/* Wave bottom — flows into ConditionsBar dark */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
          <path d="M0,28 C180,56 360,0 540,28 C720,56 900,5 1080,28 C1260,50 1380,18 1440,28 L1440,56 L0,56 Z" fill="#0d1b2a" />
        </svg>
      </div>
    </section>
  )
}
