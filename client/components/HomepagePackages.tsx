'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Users, Gift, Play } from 'lucide-react'
import { packageApi, type SurfPackage } from '@/lib/api'
import { INCLUDED_IN_ALL } from '@/data/packages'

export default function HomepagePackages() {
  const [packages, setPackages] = useState<SurfPackage[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    packageApi
      .list()
      .then((res) => setPackages(res.data.slice(0, 3)))
      .finally(() => setMounted(true))
  }, [])

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-site">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Surf School Programs
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md">
            Every session includes boards, rash guard, sunscreen, water &amp; first aid. No hidden fees.
          </p>
        </div>

        {!mounted ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-[520px] bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((plan) => (
              <div
                key={plan._id}
                className={`flex flex-col transition-all duration-300 ${
                  plan.featured
                    ? 'border border-primary shadow-2xl shadow-primary-300/40 md:scale-105 z-10 bg-white relative'
                    : 'border border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  {plan.featured && (
                    <span className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-3 py-1.5">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-base">{plan.name}</p>
                    <p className="text-white/70 text-xs">{plan.level}</p>
                  </div>
                </div>

                {/* Price */}
                <div className={`px-6 py-4 border-b border-gray-100 ${plan.featured ? 'bg-primary' : 'bg-white'}`}>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-base font-bold ${plan.featured ? 'text-primary-100' : 'text-gray-400'}`}>$</span>
                    <span className={`text-5xl font-extrabold leading-none ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs ml-1.5 ${plan.featured ? 'text-primary-100' : 'text-gray-400'}`}>
                      / {plan.priceNote}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 bg-white p-6 space-y-4">
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {plan.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      {plan.format}
                    </span>
                    {plan.souvenir && (
                      <span className="flex items-center gap-1.5 text-amber-600 font-medium text-xs">
                        <Gift className="h-3.5 w-3.5" />
                        Souvenir included
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {INCLUDED_IN_ALL.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-white p-6 border-t border-gray-100 text-center">
                  <Link
                    href={`/contact?package=${encodeURIComponent(plan.name)}`}
                    className={`inline-block px-10 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                      plan.featured
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'border-2 border-gray-800 text-gray-800 hover:border-primary hover:text-primary'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all group"
          >
            View All Packages
            <Play className="w-3 h-3 fill-current transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
