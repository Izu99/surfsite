import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Users, Gift } from 'lucide-react'
import { INCLUDED_IN_ALL } from '@/data/packages'
import type { SurfPackage } from '@/lib/api'
import { cn } from '@/lib/utils'

export default function PackageCard({ pkg }: { pkg: SurfPackage }) {
  return (
    <div
      className={cn(
        'flex flex-col transition-all duration-300 rounded-2xl overflow-hidden h-full',
        pkg.featured
          ? 'border border-primary shadow-2xl shadow-primary-300/40 bg-white relative z-10'
          : 'border border-gray-200 hover:border-gray-300 bg-white',
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
        {pkg.featured && (
          <span className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2">
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

      <div className={`px-6 py-4 border-b border-gray-100 ${pkg.featured ? 'bg-primary' : 'bg-white'}`}>
        <div className="flex items-start leading-none gap-0.5">
          <span className={`text-lg font-bold mt-1 ${pkg.featured ? 'text-primary-100' : 'text-gray-400'}`}>$</span>
          <span className={`text-5xl font-extrabold ${pkg.featured ? 'text-white' : 'text-gray-900'}`}>
            {pkg.price}
          </span>
          <span className={`text-xs self-end mb-1 ml-1.5 ${pkg.featured ? 'text-primary-100' : 'text-gray-400'}`}>
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
          {pkg.souvenir && (
            <span className="flex items-center gap-1.5 text-amber-600 font-medium text-xs">
              <Gift className="h-3.5 w-3.5" />
              Souvenir included
            </span>
          )}
        </div>
        <ul className="divide-y divide-gray-100">
          {(pkg.includes?.length ? pkg.includes : INCLUDED_IN_ALL).map((item) => (
            <li key={item} className="flex items-center gap-3 py-2.5 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white border-t border-gray-100 text-center">
        <Link
          href={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className={cn(
            'inline-block px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors',
            pkg.featured
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'border-2 border-gray-800 text-gray-800 hover:border-primary hover:text-primary',
          )}
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
