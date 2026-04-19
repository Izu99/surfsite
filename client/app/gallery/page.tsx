import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: { absolute: 'Surf Photo Gallery | Noah Surf School Sri Lanka' },
  description:
    'Browse photos of surf lessons, Hirikatiya Beach waves, and the full Noah Surf School experience in Sri Lanka. Students of all levels riding the Indian Ocean.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Surf Photo Gallery | Noah Surf School Sri Lanka',
    description:
      'Photos of surf lessons, Hirikatiya Beach, and the Noah Surf School experience in Sri Lanka.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
}

type Photo = {
  src: string
  alt: string
  tag: string
  wide?: boolean
  tall?: boolean
}

const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Surfer at Hirikatiya Beach',
    tag: 'Action',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf instructor guiding a student',
    tag: 'Lessons',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfing at Hirikatiya',
    tag: 'Action',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?q=80&w=2070&auto=format&fit=crop',
    alt: 'Hirikatiya Beach Sri Lanka',
    tag: 'Beach',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672510000383-8f46f7b157b0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf coaching session',
    tag: 'Lessons',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfer in action at sunrise',
    tag: 'Action',
  },
  {
    src: 'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfing waves at Hirikatiya',
    tag: 'Beach',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Ocean surf session',
    tag: 'Action',
  },
  {
    src: 'https://images.unsplash.com/photo-1607429288969-a64f13f2fc27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Surf camp morning session',
    tag: 'Lessons',
  },
  {
    src: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wave breaking at Hirikatiya',
    tag: 'Action',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1601387269718-2b104a09daf4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sunset over the Indian Ocean',
    tag: 'Beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1601505804121-45e2c5506c94?q=80&w=2070&auto=format&fit=crop',
    alt: 'Group surf lesson on the beach',
    tag: 'Lessons',
  },
]

const tagColors: Record<string, string> = {
  Action: 'bg-primary text-white',
  Lessons: 'bg-emerald-600 text-white',
  Beach: 'bg-amber-500 text-white',
}

export default function GalleryPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#f0f4f8] border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Gallery
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Photos &amp; <span className="text-primary">Videos</span>
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Moments from the water, the beach, and the community at Hirikatiya —
            Sri Lanka&apos;s surf capital.
          </p>
        </div>
      </section>

      {/* ── Photo grid ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 [grid-auto-rows:240px]">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={cn(
                  'group relative overflow-hidden bg-gray-100',
                  photo.wide && 'sm:col-span-2',
                  photo.tall && 'row-span-2'
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                <span
                  className={cn(
                    'absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1',
                    tagColors[photo.tag]
                  )}
                >
                  {photo.tag}
                </span>

                {/* Caption */}
                <p className="absolute bottom-0 inset-x-0 p-4 text-white text-sm font-medium leading-snug translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f0f4f8] py-16 md:py-20 border-t border-gray-200">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Get Involved
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Want to be in our next photo?
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm">
            Book a lesson and we&apos;ll capture your best moments on the water.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#1e40af] transition-colors"
          >
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
