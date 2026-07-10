import type { Metadata } from 'next'
import Image from 'next/image'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShopGrid from '@/components/ShopGrid'

export const metadata: Metadata = {
  title: { absolute: 'Shop | Noah Surf School Merchandise Hiriketiya' },
  description:
    'Shop the Noah Collection — Noah Surf School tees, caps, hats and rash guards. Hiriketiya Beach, Sri Lanka.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop | Noah Surf School Merchandise',
    description:
      'Shop the Noah Collection — tees, caps, hats and rash guards from Noah Surf School, Hiriketiya Beach, Sri Lanka.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
}

export default function ShopPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]} />

      {/* ── Page hero ── */}
      <section className="bg-[#fcfcfc] pt-[calc(72px+3rem)] pb-0 md:pt-[calc(72px+5rem)] relative overflow-hidden">
        <div className="absolute right-6 top-24 pointer-events-none opacity-60 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/noah-drawing.png" alt="" width={110} height={110} className="drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-primary mb-2">Gear Up</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Noah Collection
          </h1>
          <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
            Tees, caps, hats and rash guards from Noah Surf School — pick your favorite, message
            us your size, and we&apos;ll have it ready for you at the beach.
          </p>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className="section-padding bg-[#5ca3af]">
        <div className="container-site">
          <ShopGrid />
        </div>
      </section>
    </>
  )
}
