import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import SectionDivider from '@/components/SectionDivider'

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
  { src: '/2024-09-14.webp', alt: 'Noah at Hirikatiya Beach', tag: 'People', wide: true },
  { src: '/2024-09-14 (1).webp', alt: 'Noah surf school owner', tag: 'People', tall: true },
  { src: '/unnamed.webp', alt: 'Surf school at Hirikatiya Beach', tag: 'Lessons', wide: true },
  { src: '/unnamed (1).webp', alt: 'Surfing at Hirikatiya', tag: 'Action' },
  { src: '/unnamed (2).webp', alt: 'Hirikatiya Beach Sri Lanka', tag: 'Beach' },
  { src: '/unnamed (3).webp', alt: 'Surf lesson session', tag: 'Lessons' },
  { src: '/unnamed (4).webp', alt: 'Surfing waves at Hirikatiya', tag: 'Action', tall: true },
  { src: '/unnamed (5).webp', alt: 'Noah surf school beach', tag: 'Beach' },
  { src: '/unnamed (6).webp', alt: 'Surf coaching Hirikatiya', tag: 'Lessons' },
  { src: '/unnamed (7).webp', alt: 'Surfing at sunset Hirikatiya', tag: 'Action', wide: true },
  {
    src: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Surfer at Hirikatiya Beach', tag: 'Action', wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf instructor guiding a student', tag: 'Lessons', tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfing at Hirikatiya', tag: 'Action',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?q=80&w=2070&auto=format&fit=crop',
    alt: 'Hirikatiya Beach Sri Lanka', tag: 'Beach',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672510000383-8f46f7b157b0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf coaching session', tag: 'Lessons', wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfer in action at sunrise', tag: 'Action',
  },
  {
    src: 'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfing waves at Hirikatiya', tag: 'Beach', tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Ocean surf session', tag: 'Action',
  },
  {
    src: 'https://images.unsplash.com/photo-1607429288969-a64f13f2fc27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Surf camp morning session', tag: 'Lessons',
  },
  {
    src: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wave breaking at Hirikatiya', tag: 'Action', wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1601387269718-2b104a09daf4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sunset over the Indian Ocean', tag: 'Beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1601505804121-45e2c5506c94?q=80&w=2070&auto=format&fit=crop',
    alt: 'Group surf lesson on the beach', tag: 'Lessons',
  },
]

const tagColors: Record<string, string> = {
  Action: 'bg-primary text-white',
  Lessons: 'bg-emerald-600 text-white',
  Beach: 'bg-amber-500 text-white',
  People: 'bg-violet-600 text-white',
}

export default function GalleryPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#5ca3af] pt-[calc(72px+3rem)] pb-0 md:pt-[calc(72px+5rem)] relative overflow-hidden">
        <div className="absolute right-8 top-20 pointer-events-none hidden lg:block opacity-20 select-none animate-[float_8s_ease-in-out_infinite]">
          <Image src="/surfboard.png" alt="" width={56} height={160} className="rotate-[14deg]" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-white/80 mb-2">Moments in the Water</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Photos &amp; Videos
          </h1>
          <p className="text-white/80 max-w-lg text-sm leading-relaxed">
            Moments from the water, the beach, and the community at Hirikatiya —
            Sri Lanka&apos;s surf capital.
          </p>
        </div>
      </section>
      <SectionDivider fromColor="#5ca3af" toColor="#fcfcfc" />

      {/* ── Photo grid ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 [grid-auto-rows:240px]">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={cn(
                  'group relative overflow-hidden rounded-2xl bg-[#fbfbfb]',
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className={cn('absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full', tagColors[photo.tag])}>
                  {photo.tag}
                </span>
                <p className="absolute bottom-0 inset-x-0 p-4 text-white text-sm font-medium leading-snug translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider fromColor="#fcfcfc" toColor="#bdd2c8" />

      {/* ── CTA ── */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #bdd2c8, #5ca3af)' }}>
        <div className="absolute right-[-20px] top-8 pointer-events-none hidden xl:block select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/noah-drawing.png" alt="" width={120} height={120} className="opacity-20 drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site">
          <p className="font-display text-2xl text-white/80 mb-2">Get Involved</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Want to be in our next photo?
          </h2>
          <p className="text-white/80 text-sm mb-7 max-w-sm">
            Book a lesson and we&apos;ll capture your best moments on the water.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#5ca3af] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-primary-50 transition-colors shadow-lg"
          >
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
