import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star, Award, Users, Globe, Clock,
  ShieldCheck, Camera, Sun, User,
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

function WaveDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div style={{ background: fromColor }}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: '56px', display: 'block' }}
      >
        <path
          d="M0,28 C200,56 400,0 600,28 C800,56 1000,8 1200,28 C1320,42 1400,18 1440,22 L1440,56 L0,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
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
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/68" />
        <div className="relative container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HirikatiayaExperience />
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

      {/* Wave: dark → sandy */}
      <WaveDivider fromColor="#0d1b2a" toColor="#fdf6e9" />

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
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <User className="w-4 h-4" />
                About Noah
              </span>

              <div className="space-y-3 mb-8">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Hey! I&apos;m Noah
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I&apos;ve been riding these beautiful waves at Hirikatiya for over 14 years.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  My mission? Share the joy of surfing with anyone who wants to try — beginner, intermediate, kid or adult.
                </p>
                <p className="text-lg text-primary font-semibold">
                  The ocean is waiting for you.
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

      {/* Wave: sandy → cream */}
      <WaveDivider fromColor="#fdf6e9" toColor="#f0ece4" />

      {/* 5 ── Lessons / Services ── */}
      <ServicesSlider />

      {/* Wave: cream → sandy */}
      <WaveDivider fromColor="#f0ece4" toColor="#fdf6e9" />

      {/* ── Packages ── */}
      <HomepagePackages />

      {/* Wave: sandy → white */}
      <WaveDivider fromColor="#fdf6e9" toColor="#ffffff" />

      {/* 6 ── Ratings / Reviews ── */}
      <section className="bg-white pb-20 md:pb-24 pt-4 relative overflow-hidden">
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
      <WaveDivider fromColor="#ffffff" toColor="#fdf6e9" />

      {/* 7 ── Why Learn With Us / Stats ── */}
      <section className="bg-[#fdf6e9] relative overflow-hidden pb-20 md:pb-24 pt-4">

        <div className="container-site">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The numbers speak
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {stats.map(({ icon: Icon, number, label, sub }, i) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm"
                style={{ rotate: i === 1 ? '0.5deg' : i === 0 ? '-0.8deg' : '0.8deg' }}
              >
                <div className="w-20 h-20 rounded-full bg-[#fdf6e9] shadow-md flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-9 h-9 text-primary" />
                </div>
                <p className="text-5xl md:text-6xl text-primary font-bold leading-none">{number}</p>
                <p className="font-semibold text-gray-800 mt-2 text-base">{label}</p>
                <p className="text-sm text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Surfboard decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] pointer-events-none hidden xl:block opacity-10 select-none">
          <Image src="/surfboard.png" alt="" width={280} height={840} className="rotate-[-5deg]" aria-hidden />
        </div>
      </section>

      {/* Wave: sandy → white */}
      <WaveDivider fromColor="#fdf6e9" toColor="#ffffff" />

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
          <p className="text-gray-500 text-sm mb-8">Real moments from the water</p>

          {/* <GallerySlideshow /> */}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/52" />

        {/* Floating surfboard */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block opacity-15 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/surfboard.png" alt="" width={60} height={180} className="rotate-[10deg]" aria-hidden />
        </div>

        <div className="relative container-site text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Sun className="w-4 h-4" />
            Start Today
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Catch Your First Wave?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto mb-10">
            Every day, 6am – 6pm. All gear included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-xl"
            >
              Book A Lesson
            </Link>
            <a
              href="https://wa.me/94710427241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982 1.003-3.647-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
