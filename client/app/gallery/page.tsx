import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Surf Photo Gallery | Noah Surf School Sri Lanka' },
  description:
    'Browse photos of surf lessons, Hirikatiya Beach waves, and the full Noah Surf School experience in Sri Lanka. Students of all levels riding the Indian Ocean.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Surf Photo Gallery | Noah Surf School Sri Lanka',
    description: 'Photos of surf lessons, Hirikatiya Beach, and the Noah Surf School experience in Sri Lanka.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
}

type Photo = { src: string; alt: string; tag: string; size: 'anchor' | 'wide' | 'tall' }

// Bento sizes: 'anchor' is the big 2×3 hero cell (landscape), 'wide' is 2×2,
// 'tall' is 1×2 — chosen per photo so each cell's shape stays close to the
// image's real orientation and crops stay mild (extreme cell/image ratio
// mismatch is what cut heads off before).
const photos: Photo[] = [
  { src: '/gallery-group-lesson.jpeg', alt: 'Group surf lesson at Hirikatiya Beach', tag: 'Lessons', size: 'anchor' },
  { src: '/gallery-instructor-students-shoreline.jpeg', alt: 'Instructor guiding students along the shoreline', tag: 'Lessons', size: 'tall' },
  { src: '/gallery-instructor-portrait-bw.jpeg', alt: 'Portrait of a Noah Surf School instructor', tag: 'People', size: 'tall' },
  { src: '/gallery-trio-longboard.jpeg', alt: 'Three surfers with a longboard', tag: 'Action', size: 'tall' },
  { src: '/gallery-beach-friends.jpeg', alt: 'Friends relaxing on the beach', tag: 'Beach', size: 'tall' },
  { src: '/gallery-student-portrait.jpeg', alt: 'Student smiling after a surf lesson', tag: 'People', size: 'wide' },
  { src: '/gallery-instructor-with-kids.jpeg', alt: 'Instructor teaching kids to surf', tag: 'Lessons', size: 'tall' },
  { src: '/gallery-sunset-soft-top-boards.jpeg', alt: 'Soft-top surfboards lined up at sunset', tag: 'Beach', size: 'tall' },
  { src: '/gallery-instructor-young-surfer.jpeg', alt: 'Instructor coaching a young surfer', tag: 'Action', size: 'tall' },
  { src: '/gallery-team-celebration.jpeg', alt: 'The Noah Surf School team celebrating', tag: 'Action', size: 'tall' },
  { src: '/gallery-instructor-tee-bw.jpeg', alt: 'Instructor wearing a Noah Surf School tee', tag: 'People', size: 'tall' },
]

const sizeClasses: Record<Photo['size'], string> = {
  anchor: 'col-span-2 row-span-2 md:row-span-3',
  wide: 'col-span-2 row-span-2',
  tall: 'row-span-2',
}

const tagColors: Record<string, string> = {
  Action: 'bg-primary text-white',
  Lessons: 'bg-emerald-600 text-white',
  Beach: 'bg-amber-500 text-white',
  People: 'bg-violet-600 text-white',
}

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]} />

      {/* ── Hero ── */}
      <section className="bg-[#fcfcfc] pt-[calc(72px+3rem)] pb-0 md:pt-[calc(72px+5rem)] relative overflow-hidden">
        <div className="absolute right-8 top-20 pointer-events-none opacity-60 select-none animate-[float_8s_ease-in-out_infinite]">
          <Image src="/noah-drawing.png" alt="" width={110} height={110} className="rotate-[6deg] drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-primary mb-2">Moments in the Water</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Photos &amp; Videos
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Moments from the water, the beach, and the community at Hirikatiya — Sri Lanka&apos;s surf capital.
          </p>
        </div>
      </section>

      {/* ── Photo grid ── */}
      <section className="section-padding bg-[#f0e9dd]">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 auto-rows-[130px] md:auto-rows-[150px] gap-3 md:gap-4 [grid-auto-flow:dense]">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={cn('group relative overflow-hidden rounded-2xl', sizeClasses[photo.size])}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-[50%_30%] transition-transform duration-500 ease-out group-hover:scale-105"
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

      {/* ── CTA ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <p className="font-display text-2xl text-primary mb-2">Get Involved</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Want to be in our next photo?
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm">
            Book a lesson and we&apos;ll capture your best moments on the water.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors shadow-md">
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
