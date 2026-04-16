'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Users, Gift, Shield, LifeBuoy } from 'lucide-react'
import { PACKAGE_LEVELS, INCLUDED_IN_ALL } from '@/data/packages'
import { packageApi, type SurfPackage } from '@/lib/api'
import { cn } from '@/lib/utils'

function PackageCard({ pkg }: { pkg: SurfPackage }) {
  return (
    <div
      className={cn(
        'flex flex-col transition-all duration-300',
        pkg.featured
          ? 'border border-[#1d4ed8] shadow-2xl shadow-blue-200/60 bg-white relative z-10 md:scale-105'
          : 'border border-gray-200 hover:border-gray-300 bg-white',
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
        {pkg.featured && (
          <span className="absolute top-0 left-0 bg-[#1d4ed8] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2">
            Most Popular
          </span>
        )}
        <div className="absolute bottom-4 left-5">
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">
            {pkg.level}
          </p>
          <p className="text-white text-lg font-bold">{pkg.name}</p>
        </div>
      </div>

      {/* Price */}
      <div className={`px-6 py-4 border-b border-gray-100 ${pkg.featured ? 'bg-[#1d4ed8]' : 'bg-white'}`}>
        <div className="flex items-start leading-none gap-0.5">
          <span className={`text-lg font-bold mt-1 ${pkg.featured ? 'text-blue-200' : 'text-gray-400'}`}>$</span>
          <span className={`text-5xl font-extrabold ${pkg.featured ? 'text-white' : 'text-gray-900'}`}>
            {pkg.price}
          </span>
          <span className={`text-xs self-end mb-1 ml-1.5 ${pkg.featured ? 'text-blue-200' : 'text-gray-400'}`}>
            / {pkg.priceNote}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 bg-white p-6 space-y-4">
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#1d4ed8]" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-[#1d4ed8]" />
            {pkg.format}
          </span>
          {pkg.souvenir && (
            <span className="flex items-center gap-1.5 text-amber-600 font-medium text-xs">
              <Gift className="h-3.5 w-3.5" />
              Souvenir included
            </span>
          )}
        </div>
        <ul className="divide-y divide-gray-100">
          {INCLUDED_IN_ALL.map((item) => (
            <li key={item} className="flex items-center gap-3 py-2.5 text-sm">
              <Check className="h-4 w-4 text-[#1d4ed8] shrink-0" />
              <span className="text-[#1d4ed8]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 bg-white border-t border-gray-100 text-center">
        <Link
          href={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className={cn(
            'inline-block px-10 py-3 text-sm font-bold uppercase tracking-wide transition-colors',
            pkg.featured
              ? 'bg-[#1d4ed8] text-white hover:bg-[#1e40af]'
              : 'border-2 border-gray-800 text-gray-800 hover:border-[#1d4ed8] hover:text-[#1d4ed8]',
          )}
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default function PackagesPage() {
  const [packages, setPackages] = useState<SurfPackage[]>([])
  const [activeLevel, setActiveLevel] = useState<string>('All')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    packageApi
      .list()
      .then((res) => setPackages(res.data))
      .finally(() => setMounted(true))
  }, [])

  const filtered = useMemo(
    () => (activeLevel === 'All' ? packages : packages.filter((p) => p.level === activeLevel)),
    [activeLevel, packages],
  )

  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#f0f4f8] border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">Packages</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surf School Programs
          </h1>
          <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
            Every session includes surf boards, rash guard, sunscreen, water, and first aid on standby
            — all you need to do is show up and ride.
          </p>
        </div>
      </section>

      {/* ── Packages grid ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          {/* Level filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PACKAGE_LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-all',
                  activeLevel === level
                    ? 'bg-[#1d4ed8] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                )}
              >
                {level}
              </button>
            ))}
          </div>

          {!mounted ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-[500px] bg-gray-100 animate-pulse rounded" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No packages found for this level.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((pkg) => (
                <PackageCard key={pkg._id} pkg={pkg} />
              ))}
            </div>
          )}

          {/* What's included */}
          <div className="mt-16 bg-[#f0f4f8] p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                Included in Every Session
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Everything You Need</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {INCLUDED_IN_ALL.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3"
                >
                  <Check className="h-4 w-4 text-[#1d4ed8] shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="section-padding bg-[#f0f4f8] border-t border-gray-200">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                  Safety First
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Standards
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                    <Shield className="w-6 h-6 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ILS Certified Instructors</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      All instructors hold International Life Saving Federation certification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                    <LifeBuoy className="w-6 h-6 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">First Aid on Every Session</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      A certified first aider and full kit are present at every lesson, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop"
                alt="Safety at Noah Surf School"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
