import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Users, Gift } from 'lucide-react'
import { INCLUDED_IN_ALL } from '@/data/packages'
import type { SurfPackage } from '@/lib/api'
import { splitPackageName } from '@/lib/utils'

export default function PackageCard({ pkg }: { pkg: SurfPackage }) {
  const { title, subtitle } = splitPackageName(pkg.name)
  return (
    <div className="flex flex-col transition-all duration-300 rounded-2xl overflow-hidden h-full border border-gray-200 hover:border-gray-300 bg-white">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5">
          <p className="text-white text-lg font-bold">
            {title}
            {subtitle && <span className="block font-display text-lg text-white/80">{subtitle}</span>}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-start leading-none gap-0.5">
          <span className="text-lg font-bold mt-1 text-gray-400">$</span>
          <span className="text-5xl font-extrabold text-gray-900">
            {pkg.price}
          </span>
          <span className="text-xs self-end mb-1 ml-1.5 text-gray-400">
            / {pkg.priceNote}
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white p-6 space-y-4">
        {pkg.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{pkg.description}</p>
        )}
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            {pkg.format}
          </span>
        </div>
        <ul className="divide-y divide-gray-100">
          {(pkg.includes?.length ? pkg.includes : INCLUDED_IN_ALL).map((item) => (
            <li key={item} className="flex items-center gap-3 py-2.5 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-primary">{item}</span>
            </li>
          ))}
        </ul>
        {pkg.souvenir && (
          <span className="flex items-center gap-1.5 text-amber-600 font-display text-2xl">
            <Gift className="h-3.5 w-3.5" />
            Souvenir included
          </span>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 text-center">
        <Link
          href={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className="inline-block px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gray-800 text-gray-800 hover:border-primary hover:text-primary"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
