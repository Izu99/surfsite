import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star, Award, Users, Globe, Clock,
  ShieldCheck, Camera, Sun, User, MapPin,
  Waves, Heart, Lightbulb, BadgeCheck, GraduationCap,
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
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <MapPin className="w-4 h-4" />
                About Hirikatiya
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Hirikatiya<br />Experience
              </h2>
              <HirikatiayaExperience />
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-3xl rotate-[1deg] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1601387269718-2b104a09daf4?q=80&w=870&auto=format&fit=crop"
                  alt="Surfing at Hirikatiya Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
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
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              Google Reviews
            </span>
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
      <section className="bg-[#fdf6e9] relative overflow-hidden pb-20 md:pb-24 pt-4">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Why Learn With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Noah Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Waves,        title: 'New Surfboards',       desc: 'We use only brand-new, well-maintained boards suited to every level — foam, longboard & shortboard.' },
              { icon: ShieldCheck,  title: 'Ocean Safety First',   desc: 'Every session starts with a full safety briefing. Our instructors are trained in water rescue and first aid.' },
              { icon: Heart,        title: 'True Hospitality',     desc: 'From pick-up to pack-down, we treat every student like family. Warm smiles, cold water, good vibes.' },
              { icon: Lightbulb,    title: 'Innovative Teaching',  desc: 'Our methods blend video feedback, dryland drills, and in-water coaching for the fastest progress.' },
              { icon: BadgeCheck,   title: 'NDA Certified',        desc: 'Our school meets national surf coaching standards — quality you can trust, instructors you can rely on.' },
              { icon: GraduationCap, title: 'Teach Anyone',        desc: 'Kids, adults, beginners, intermediates — we adapt every lesson so everyone catches waves on day one.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] pointer-events-none hidden xl:block opacity-10 select-none">
          <Image src="/surfboard.png" alt="" width={280} height={840} className="rotate-[-5deg]" aria-hidden />
        </div>
      </section>

      {/* Wave: sandy → white */}
      <SectionDivider fromColor="#fdf6e9" toColor="#ffffff" />

      {/* 8 ── Gallery ── */}
      <section className="bg-white pb-20 md:pb-24 pt-4 relative overflow-hidden">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <Camera className="w-4 h-4" />
              Gallery
            </span>
          </div>
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
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Sun className="w-4 h-4" />
            Start Today
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Catch Your First Wave?
          </h2>
          <p className="font-display text-white/80 text-2xl md:text-3xl max-w-md mx-auto mb-10 text-gray-500">
            Every day, 6am – 6pm. All gear included.
          </p>
        </div>
      </section>
    </>
  )
}
