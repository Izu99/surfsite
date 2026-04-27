import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Star } from 'lucide-react'
import HeroSlideshow from '@/components/HeroSlideshow'
import ServicesSlider from '@/components/ServicesSlider'
import HomepagePackages from '@/components/HomepagePackages'
import ConditionsBar from '@/components/ConditionsBar'
import HirikatiayaExperience from '@/components/HirikatiayaExperience'

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

const stats = [
  {
    icon: '/icons/icons8-ocean-wave-100.png',
    number: '2,500+',
    label: 'Surfers Trained',
    sub: 'Students from 60+ countries',
  },
  {
    icon: '/icons/icons8-surf-96.png',
    number: '14',
    label: 'Years Experience',
    sub: 'Certified ISA instructors',
  },
  {
    icon: '/icons/icons8-star-50.png',
    number: '4.9★',
    label: 'Student Rating',
    sub: 'Based on 800+ reviews',
  },
]

const services = [
  {
    title: 'Surf Coaching',
    description:
      'One-on-one professional coaching tailored to your level. Technique, paddle power, and wave timing.',
    image: 'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf coaching at Hirikatiya',
    icon: '/icons/icons8-surf-96.png',
  },
  {
    title: 'Board Rentals',
    description:
      'Longboards, shortboards, and foam boards — suited for any condition at Hirikatiya Beach.',
    image: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surfboard rentals',
    icon: '/icons/icons8-holiday-50.png',
  },
  {
    title: 'Surf Camps',
    description:
      'Multi-day immersive camps combining lessons, yoga, and Sri Lanka cultural tours.',
    image: 'https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?q=80&w=2070&auto=format&fit=crop',
    alt: 'Noah surf camp',
    icon: '/icons/icons8-location-50.png',
  },
  {
    title: 'Group Lessons',
    description:
      'Learn in a fun, social environment. Small groups of up to 6 per instructor.',
    image: 'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Group surf lesson',
    icon: '/icons/icons8-conference-50.png',
  },
]

const googleReviews = [
  {
    name: 'Olivia R.',
    rating: 5,
    date: '2 weeks ago',
    review:
      'Absolutely incredible experience. Noah and his team are world class instructors. I went from never surfing before to riding waves confidently in just 3 days. The beach is magical.',
  },
  {
    name: 'Lucas W.',
    rating: 5,
    date: '1 month ago',
    review:
      'Best surf school in Sri Lanka without a doubt. Small group sizes mean you get real, personalised attention. I improved so much in three days. Highly recommended to anyone visiting Hirikatiya!',
  },
  {
    name: 'Chloe M.',
    rating: 5,
    date: '3 weeks ago',
    review:
      'I was nervous about surfing for the first time, but the instructors made me feel so safe and confident. Equipment was top-notch and the location is absolutely stunning. 10/10!',
  },
  {
    name: 'Sophie L.',
    rating: 5,
    date: '1 week ago',
    review:
      'Noah Surf School is the real deal. Professional, friendly, and so much fun. My kids (aged 8 and 12) absolutely loved it. We booked a second session the very next day!',
  },
  {
    name: 'Arjun P.',
    rating: 5,
    date: '3 months ago',
    review:
      'Outstanding coaching from day one. Clear instructions, patient teachers, and the right balance of challenge and fun. These guys are the best guides at Hirikatiya.',
  },
  {
    name: 'Ines B.',
    rating: 5,
    date: '2 months ago',
    review:
      'Came for a weekend, stayed for a week. The vibe at Hirikatiya is unlike anywhere else and Noah\'s team made every session count. Already planning to come back next season.',
  },
]

const shopProducts = [
  {
    name: 'Premium Surfboard',
    price: '$450 – $650',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Premium surfboard',
  },
  {
    name: 'Pro Surf Series',
    price: '$580 – $720',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618495843164-db3fbdca57d4?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Pro surf series board',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSlideshow />

      {/* ── Live Conditions Bar ── */}
      <ConditionsBar />

      {/* ── About / History ── */}
      <section className="section-padding bg-[#f0f4f8] relative overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div className="w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Our Little History
              </h2>
              <p className="text-base font-semibold text-gray-700 mb-6 leading-snug">
                We want our clients to feel awesome and unique.
              </p>
              <div className="border-l-4 border-primary pl-5 space-y-4 mb-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We specialize in private surfing lessons, semi-private surfing
                  lessons, and we are proud to offer group sessions and surf camps
                  right here in Hirikatiya, Sri Lanka!
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you are a beginner catching your first wave or an
                  intermediate surfer looking for the perfect point break, our
                  surf school provides expert coaching in the heart of paradise.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
                >
                  Book A Lesson
                </Link>
                <Link
                  href="/about"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative lg:static flex justify-center lg:justify-end">
              <div className="absolute right-[-1.5rem] lg:right-0 top-1/2 -translate-y-1/2 w-[65%] lg:w-[38%] h-[115%] lg:h-full overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1672510000383-8f46f7b157b0?q=80&w=2070&auto=format&fit=crop"
                  alt="Surf action background"
                  fill
                  className="object-cover opacity-90"
                  sizes="40vw"
                />
              </div>
              <div className="relative w-[90%] sm:w-[85%] lg:w-[85%] mr-2 lg:mr-8 aspect-[4/3] overflow-hidden shadow-2xl z-10">
                <Image
                  src="/unnamed (22).webp"
                  alt="Noah — founder of Noah Surf School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages / Stats ── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop"
                alt="Hirikatiya Beach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right: stats */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Advantages
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Why Learn to Surf<br />With Us?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Learn to surf with confidence at the best south coast surf
                destination. Safety and technique come first — our ISA-certified
                team is dedicated to helping you progress quickly and safely.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map(({ icon, number, label, sub }) => (
                  <div key={label}>
                    <div className="mb-4">
                      <Image src={icon} alt={label} width={48} height={48} className="object-contain" />
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold text-primary">{number}</p>
                    <p className="text-xs font-semibold text-gray-800 mt-1 leading-tight">{label}</p>
                    <p className="text-xs text-gray-400 mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative surfboard — right edge, not fixed */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[32%] pointer-events-none hidden lg:block">
          <Image
            src="/surfboard.png"
            alt=""
            width={420}
            height={1220}
            className="object-contain rotate-[-5deg] drop-shadow-2xl"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Noah's Voice ── */}

      <section
        className="relative overflow-hidden py-20 md:py-28 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/78" />
        <div className="relative container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary-light block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
                Noah&apos;s Voice
              </span>
              <span className="w-8 h-px bg-primary-light block shrink-0" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug mb-8">
              &ldquo;Surfing isn&apos;t just a sport — it&apos;s the feeling of pure freedom.
              At Hirikatiya, we don&apos;t just teach you to ride waves.
              We share a way of life.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-primary shrink-0">
                <Image
                  src="/noah-portrait.png"
                  alt="Noah — Head Instructor"
                  width={56}
                  height={56}
                  className="object-cover object-top h-full w-full"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Noah</p>
                <p className="text-primary-light text-xs">Founder &amp; Head Instructor, Noah Surf School</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block border border-white/30 text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-primary transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <ServicesSlider services={services} />

      {/* ── Gallery Preview ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Photos &amp; Videos
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We want our clients to feel awesome and unique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[440px]">
            <div className="relative overflow-hidden group">
              <Image
                src="/unnamed (4).webp"
                alt="Surf at Hirikatiya Beach"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col gap-3 h-full">
              <div className="relative overflow-hidden flex-1 group">
                <Image
                  src="/unnamed (5).webp"
                  alt="Surf lesson at Hirikatiya"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="flex gap-3 flex-1">
                <div className="relative overflow-hidden flex-1 group">
                  <Image
                    src="/unnamed (6).webp"
                    alt="Surfing at Hirikatiya"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden flex-1 group">
                  <Image
                    src="/unnamed (7).webp"
                    alt="Hirikatiya Beach Sri Lanka"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hirikatiya Experience ── */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/60" />
        <div className="relative container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HirikatiayaExperience />
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601387269718-2b104a09daf4?q=80&w=870&auto=format&fit=crop"
                  alt="Surfing at Hirikatiya Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <button
                    className="h-16 w-16 rounded-full border-2 border-white/80 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-all"
                    aria-label="Play Hirikatiya experience video"
                  >
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <HomepagePackages />

      {/* ── Google Reviews ── */}
      <section className="section-padding bg-primary-50 border-t border-gray-100">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Google Reviews
              </span>
              <span className="w-8 h-px bg-primary block shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Rated 4.9 on Google
            </h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">Based on 800+ verified Google reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review) => (
              <div
                key={review.name}
                className="bg-white border border-gray-100 p-6 shadow-[var(--shadow-card)] flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {/* Google logo */}
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
                    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
                    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Hirikatiya+Beach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              View All Reviews on Google
            </a>
          </div>
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
        <div className="absolute inset-0 bg-[#0d1b2a]/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative container-site text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-light block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
              Start Today
            </span>
            <span className="w-8 h-px bg-primary-light block shrink-0" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Catch Your First Wave?
          </h2>
          <p className="text-primary-100 text-sm md:text-base max-w-md mx-auto mb-8">
            Join our daily sessions on Hirikatiya Beach. All equipment provided —
            no experience necessary.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors"
          >
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
