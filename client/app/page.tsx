import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star, Award, Users, Globe, Clock,
  ShieldCheck, Camera, Sun, User, MapPin,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import HeroSlideshow from '@/components/HeroSlideshow'
import ServicesSlider from '@/components/ServicesSlider'
import HomepagePackages from '@/components/HomepagePackages'
import ConditionsBar from '@/components/ConditionsBar'
import HirikatiayaExperience from '@/components/HirikatiayaExperience'
import ReviewsSlider from '@/components/ReviewsSlider'
import GallerySlideshow from '@/components/GallerySlideshow'

export const metadata: Metadata = {
  title: { absolute: 'Best Surf School in Hiriketiya | Top South Coast Surfing Sri Lanka' },
  description:
    'Hiriketiya Beach is a world-class surfing destination with a perfect horseshoe bay and consistent waves. Expert coaching for beginners to intermediates. Open daily 6am–6pm.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Noah Surf School | Best Surf Lessons in Hiriketiya & South Coast Sri Lanka',
    description:
      'Professional surf lessons in Hiriketiya, Matara and the South Coast of Sri Lanka. Beginners to intermediates welcome. Open daily 6am–6pm.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School Hiriketiya' }],
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats: { icon: LucideIcon; number: string; label: string; sub: string }[] = [
  {
    icon: Users,
    number: '2,500+',
    label: 'Surfers Trained',
    sub: '60+ countries',
  },
  {
    icon: Award,
    number: '14',
    label: 'Years Experience',
    sub: 'ISA certified',
  },
  {
    icon: Star,
    number: '4.9★',
    label: 'Student Rating',
    sub: '800+ reviews',
  },
]

const googleReviews = [
  {
    name: 'Olivia R.',
    rating: 5,
    date: '2 weeks ago',
    review: 'Absolutely incredible! Noah and his team are world class. I went from zero to riding waves in 3 days.',
    rotate: '-rotate-[0.8deg]',
  },
  {
    name: 'Lucas W.',
    rating: 5,
    date: '1 month ago',
    review: 'Best surf school in Sri Lanka. Small groups = real attention. Improved so much in three days!',
    rotate: 'rotate-[0.5deg]',
  },
  {
    name: 'Chloe M.',
    rating: 5,
    date: '3 weeks ago',
    review: 'The instructors made me feel safe and confident. Equipment was top-notch. 10/10!',
    rotate: '-rotate-[0.4deg]',
  },
  {
    name: 'Sophie L.',
    rating: 5,
    date: '1 week ago',
    review: 'My kids (8 & 12) absolutely loved it. We booked a second session the very next day!',
    rotate: 'rotate-[0.7deg]',
  },
  {
    name: 'Arjun P.',
    rating: 5,
    date: '3 months ago',
    review: 'Outstanding coaching. Clear instructions, patient teachers. Best guides at Hirikatiya.',
    rotate: '-rotate-[0.6deg]',
  },
  {
    name: 'Ines B.',
    rating: 5,
    date: '2 months ago',
    review: 'Came for a weekend, stayed for a week. Already planning to come back next season!',
    rotate: 'rotate-[0.4deg]',
  },
]

// ─── Wave divider ─────────────────────────────────────────────────────────────

function SectionDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`, height: '40px' }} />
  )
}

// ─── Page (Section order: Hero → Conditions → Hirikatiya → Noah → Lessons → Ratings → Why Us → Gallery) ──

export default function HomePage() {
  return (
    <>
      {/* 1 ── Hero ── */}
      <HeroSlideshow />

      {/* 2 ── Conditions Bar ── */}
      <ConditionsBar />

      {/* 3 ── About Hirikatiya ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Hirikatiya<br />Experience
              </h2>
              <HirikatiayaExperience />
            </div>
            <div>
              <Image
                src="/hirikatiya-bay.png"
                alt="Hirikatiya Beach"
                width={2528}
                height={1684}
                className="w-full h-auto rounded-3xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave: white → sandy */}
      <SectionDivider fromColor="#ffffff" toColor="#fdf6e9" />

      {/* 4 ── About Noah ── handwritten personal section */}
      <section className="bg-[#fdf6e9] relative overflow-hidden pb-20 md:pb-28 pt-4">
        {/* Floating surfboard */}
        <div className="absolute right-4 top-12 pointer-events-none hidden xl:block opacity-15 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/surfboard.png" alt="" width={72} height={210} className="rotate-[-14deg]" aria-hidden />
        </div>

        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Noah portrait */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-64 md:w-72 aspect-[3/4] overflow-hidden rounded-3xl rotate-[-1.5deg] shadow-2xl">
                  <Image
                    src="/noah-portrait.png"
                    alt="Noah — Founder of Noah Surf School"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
                {/* Years badge */}
                <div className="absolute -bottom-5 -right-4 bg-primary text-white rounded-2xl px-5 py-3 shadow-xl rotate-[2.5deg]">
                  <p className="text-3xl font-bold leading-none">14</p>
                  <p className="text-xs font-semibold text-primary-100">years surfing</p>
                </div>
                {/* ISA badge */}
                <div className="absolute -top-3 -left-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg rotate-[-2deg]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <p className="font-bold text-xs text-gray-800">ISA Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Noah's personal handwritten message */}
            <div className="order-1 lg:order-2">
              <div className="space-y-3 mb-8">
                <p className="font-display text-4xl md:text-5xl text-gray-900 leading-tight">
                  Hey! I&apos;m Noah 👋
                </p>
                <p className="font-display text-2xl md:text-3xl text-gray-700 leading-snug">
                  I&apos;ve been riding these beautiful waves at Hirikatiya for over 14 years.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  My mission? Share the joy of surfing with anyone who wants to try — beginner, intermediate, kid or adult.
                </p>
                <p className="font-display text-2xl md:text-3xl text-primary">
                  The ocean is waiting for you! 🌊
                </p>
              </div>

              {/* Quick fact badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">60+ Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">2,500+ Surfers</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Daily 6am – 6pm</span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-md"
              >
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ── Google Reviews / Rating ── */}
      <section className="bg-white pb-20 md:pb-24 pt-4">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Rated 4.9 on Google
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">800+ verified Google reviews</p>
          </div>
          <ReviewsSlider reviews={googleReviews} />
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Hirikatiya+Beach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3.5 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Wave: white → sandy */}
      <SectionDivider fromColor="#ffffff" toColor="#fdf6e9" />

      {/* 7 ── Why Learn With Us ── */}
      <section className="bg-[#fdf6e9] relative overflow-hidden pb-20 md:pb-24 pt-16">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Noah Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'New Surfboards',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <path d="M24 5C31 5 43 12 43 24C43 36 31 43 24 43C17 43 5 36 5 24C5 12 17 5 24 5Z"/>
                    <path d="M24 38L22 44M24 38L26 44"/>
                    <path d="M20 24C20 21.8 21.8 20 24 20C26.2 20 28 21.8 28 24"/>
                  </svg>
                ),
              },
              {
                title: 'Ocean Safety First',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <path d="M24 4L8 10V24C8 33 15 40 24 44C33 40 40 33 40 24V10L24 4Z"/>
                    <path d="M17 24L22 29L31 19"/>
                  </svg>
                ),
              },
              {
                title: 'True Hospitality',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <path d="M24 40C24 40 7 30 7 18C7 13 11 9 16 9C19.5 9 22.5 11 24 14C25.5 11 28.5 9 32 9C37 9 41 13 41 18C41 30 24 40 24 40Z"/>
                  </svg>
                ),
              },
              {
                title: 'Innovative Teaching',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <path d="M24 7C18 7 13 12 13 18C13 22 15 25.5 18 27.5V32H30V27.5C33 25.5 35 22 35 18C35 12 30 7 24 7Z"/>
                    <path d="M18 36H30M20 40H28"/>
                    <path d="M24 14V22M20 18H28"/>
                  </svg>
                ),
              },
              {
                title: 'ISA Certified',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <circle cx="24" cy="20" r="12"/>
                    <path d="M24 8L26.5 15H34L28 19.5L30.5 26.5L24 22L17.5 26.5L20 19.5L14 15H21.5L24 8Z"/>
                    <path d="M18 32L15 44M30 32L33 44M15 44H33"/>
                  </svg>
                ),
              },
              {
                title: 'Teach Anyone',
                svg: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 shrink-0">
                    <circle cx="24" cy="11" r="6"/>
                    <path d="M12 44V34C12 28 16 24 24 24C32 24 36 28 36 34V44"/>
                    <path d="M8 36C8 36 4 33 4 29C4 26 6 24 8 24"/>
                    <path d="M40 36C40 36 44 33 44 29C44 26 42 24 40 24"/>
                  </svg>
                ),
              },
            ].map(({ svg, title }) => (
              <div key={title} className="bg-white rounded-2xl px-7 py-6 shadow-sm flex items-center gap-6">
                <div className="text-gray-900 shrink-0">{svg}</div>
                <h3 className="font-bold text-gray-900 text-xl leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: sandy → white */}
      <SectionDivider fromColor="#fdf6e9" toColor="#ffffff" />

      {/* 8 ── Gallery ── */}
      <section className="bg-white pb-20 md:pb-24 pt-4 relative overflow-hidden">
        <div className="container-site">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Photos &amp; Vibes
          </h2>
          <p className="font-display text-xl text-gray-500 mb-8">Real moments from the water</p>
          {/* <GallerySlideshow /> */}
        </div>
      </section>

      {/* 9 ── Packages / Services ── */}
      <HomepagePackages />

      {/* Wave: sandy → cream */}
      <SectionDivider fromColor="#fdf6e9" toColor="#f0ece4" />

      {/* 10 ── Lessons ── */}
      <ServicesSlider />

      <SectionDivider fromColor="#f0ece4" toColor="#ffffff" />

      {/* ── CTA Banner ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Catch Your First Wave?
          </h2>
          <p className="font-display text-2xl md:text-3xl text-gray-500 max-w-md mx-auto">
            Every day, 6am – 6pm. All gear included.
          </p>
        </div>
      </section>
    </>
  )
}
