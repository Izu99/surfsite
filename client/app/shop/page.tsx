import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/shop'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

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

const WHATSAPP_NUMBER = '94710427241'

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const message = `Hi! I'd like to order the ${service.title} (Rs ${service.price.toLocaleString()}).`
              const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

              return (
                <div
                  key={service.title}
                  className="flex flex-col w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-white shadow-md"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {service.sizes && (
                      <div className="flex flex-wrap gap-1.5">
                        {service.sizes.map((size) => (
                          <span
                            key={size}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex items-start leading-none gap-0.5 mb-4">
                        <span className="text-lg font-bold mt-1 text-primary">Rs</span>
                        <span className="text-3xl font-extrabold text-primary">
                          {service.price.toLocaleString()}
                        </span>
                      </div>

                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gray-700 text-gray-700 hover:border-primary hover:bg-primary hover:text-white cursor-pointer"
                      >
                        Order via WhatsApp
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
