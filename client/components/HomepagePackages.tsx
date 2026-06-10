'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { packageApi, type SurfPackage } from '@/lib/api'
import { PACKAGE_CATEGORIES, HARDCODED_PACKAGES } from '@/data/packages'
import PackageCategorySlider from './PackageCategorySlider'

export default function HomepagePackages() {
  const [packages, setPackages] = useState<SurfPackage[]>(HARDCODED_PACKAGES)

  useEffect(() => {
    packageApi
      .list()
      .then((res) => setPackages([...HARDCODED_PACKAGES, ...res.data]))
      .catch(() => {})
  }, [])

  const grouped = useMemo(
    () =>
      PACKAGE_CATEGORIES.map((category) => ({
        category,
        packages: packages.filter((p) => category.levels.includes(p.level)),
      })).filter(({ packages: catPackages }) => catPackages.length > 0),
    [packages],
  )

  return (
    <section className="section-padding bg-[#f0e9dd]">
      <div className="container-site">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Surf School Programs
          </h2>
          <p className="font-display text-xl text-white/80 mt-3 max-w-md">
            Every session includes boards, rash guard, sunscreen, water &amp; first aid. No hidden fees.
          </p>
        </div>

        <div className="space-y-6">
          {grouped.map(({ category, packages: catPackages }) => (
            <PackageCategorySlider key={category.key} category={category} packages={catPackages} />
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary transition-colors duration-200 cursor-pointer shadow-md group"
          >
            View All Packages
            <Play className="w-3 h-3 fill-current transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
