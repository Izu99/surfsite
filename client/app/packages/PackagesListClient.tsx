'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Check, Shield, LifeBuoy } from 'lucide-react'
import { PACKAGE_CATEGORIES, INCLUDED_IN_ALL, HARDCODED_PACKAGES } from '@/data/packages'
import { packageApi, type SurfPackage } from '@/lib/api'
import PackageCategorySlider from '@/components/PackageCategorySlider'
import PackageCardCompact from '@/components/PackageCardCompact'

export default function PackagesListClient() {
  const [packages, setPackages] = useState<SurfPackage[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    packageApi
      .list()
      .then((res) => setPackages([...HARDCODED_PACKAGES, ...res.data]))
      .catch(() => setPackages(HARDCODED_PACKAGES))
      .finally(() => setMounted(true))
  }, [])

  const grouped = useMemo(
    () =>
      PACKAGE_CATEGORIES.map((category) => ({
        category,
        packages: packages.filter((p) => category.levels.includes(p.level)),
      })),
    [packages],
  )

  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#fcfcfc] pt-[calc(72px+3rem)] pb-0 md:pt-[calc(72px+5rem)] relative overflow-hidden">
        <div className="absolute right-6 top-24 pointer-events-none opacity-60 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/noah-drawing.png" alt="" width={110} height={110} className="drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-primary mb-2">Choose Your Adventure</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surf School Programs
          </h1>
          <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
            Every session includes surf boards, rash guard, sunscreen, water, and first aid on standby
            — all you need to do is show up and ride.
          </p>
        </div>
      </section>

      {/* ── New card design (preview for approval) ── */}
      <section className="bg-[#fcfcfc] pb-16 md:pb-20">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-4">
            New card design — preview
          </p>
          <PackageCardCompact />
        </div>
      </section>

      {/* ── Packages by category ── */}
      <section className="section-padding bg-[#f0e9dd]">
        <div className="container-site">
          {!mounted ? (
            <div className="space-y-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-[420px] bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {grouped.map(({ category, packages: catPackages }) => (
                <PackageCategorySlider key={category.key} category={category} packages={catPackages} />
              ))}
            </div>
          )}

          {/* Everything included */}
          <div className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-sm">
            <p className="font-display text-2xl text-primary mb-1">Included in Every Session</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Everything You Need</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {INCLUDED_IN_ALL.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-display text-2xl text-primary mb-2">Safety First</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Standards</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ISA Certified Instructors</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      All instructors hold International Life Saving Federation certification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <LifeBuoy className="w-6 h-6 text-primary" />
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
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
