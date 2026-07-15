'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { PACKAGE_CATEGORIES, INCLUDED_IN_ALL } from '@/data/packages'
import { packageApi, type SurfPackage } from '@/lib/api'
import PackageCategorySlider from '@/components/PackageCategorySlider'
import FloatingShopButton from '@/components/FloatingShopButton'

const INCLUDED_ICONS: Record<string, string> = {
  'Good quality surf boards': '/icon-surfboard-new.png',
  'Rash guard': '/icon-value-equipment.png',
  'Zinc & sunscreen': '/icon-value-warm-water.png',
  'First aid on standby': '/icon-value-certified.png',
}

export default function PackagesListClient() {
  const [packages, setPackages] = useState<SurfPackage[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    packageApi
      .list()
      .then((res) => setPackages(res.data))
      .catch(() => {})
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
          <Image src="/noah-drawing.webp" alt="" width={110} height={110} className="drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-primary mb-2">Choose Your Adventure</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surf School Programs
          </h1>
          <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
            Every session includes surf boards, rash guard, sunscreen, and first aid on standby
            — all you need to do is show up and ride.
          </p>
        </div>
      </section>

      {/* ── Packages by category ── */}
      <section className="section-padding bg-[#afcec5]">
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
                <PackageCategorySlider
                  key={category.key}
                  category={category}
                  packages={catPackages}
                  showCollection={false}
                />
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
                  <Image
                    src={INCLUDED_ICONS[item] ?? '/icon-surfboard-new.png'}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
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
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <Image src="/icon-difference-certificate.png" alt="" width={36} height={36} className="w-9 h-9" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ISA Certified Instructors</h4>
                    <ul className="text-gray-500 text-sm leading-relaxed list-disc list-inside space-y-1">
                      <li>ISA Certified — International Surfing Association certified instructors</li>
                      <li>Diploma in Hospitality and Tourism Management, Singapore</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <Image src="/icon-value-certified.png" alt="" width={36} height={36} className="w-9 h-9" aria-hidden />
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

      <FloatingShopButton />
    </>
  )
}
