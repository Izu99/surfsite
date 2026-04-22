import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Star, Facebook, Twitter, Linkedin, Wind, Thermometer, Sun, CheckCircle } from 'lucide-react'
import HeroSlideshow from '@/components/HeroSlideshow'
import ServicesSlider from '@/components/ServicesSlider'
import HomepagePackages from '@/components/HomepagePackages'

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

const liveConditions = [
  { label: 'Wave Height', value: '0.8 – 1.2 m', Icon: CheckCircle },
  { label: 'Wind', value: '12 km/h SW', Icon: Wind },
  { label: 'Water Temp', value: '27°C', Icon: Thermometer },
  { label: 'Air Temp', value: '31°C', Icon: Sun },
  { label: 'Conditions', value: 'Mellow Peaks', Icon: CheckCircle },
]

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
    sub: 'Certified ILS instructors',
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

const hirikatiryaFacts = [
  { label: 'Year-round swell consistency', value: '95%' },
  { label: 'Average water temperature', value: '27°C' },
  { label: 'Beginner-friendly days/year', value: '300+' },
  { label: 'Surf breaks at Hirikatiya', value: '4' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    quote: 'Noah gave me the confidence to ride my first wave. The instructors are patient, professional, and genuinely passionate about surfing.',
  },
  {
    name: 'James K.',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    quote: 'Best surf school in Sri Lanka. Small group sizes mean real attention. I improved so much in just three days. Highly recommended!',
  },
  {
    name: 'Amelia T.',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    quote: 'I came as a complete beginner and left standing on a board every time. The team made it fun and safe from day one.',
  },
  {
    name: 'Marco D.',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    quote: 'Fantastic experience at Hirikatiya. Perfect waves for learning, and the instructors know exactly how to help you progress fast.',
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
      <section className="bg-[#0d1b2a] border-b border-white/10 py-4">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                Hirikatiya Today
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              {liveConditions.map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-wider leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs font-bold text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="ml-auto text-[10px] text-white/25 hidden lg:block">
              Updated 6:00 AM · Hirikatiya Beach
            </p>
          </div>
        </div>
      </section>

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

            {/* Right: Video */}
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
                  src="https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop"
                  alt="Surf lesson video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <button
                    className="h-16 w-16 rounded-full border-2 border-white/80 bg-black/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/30 hover:scale-110 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </button>
                </div>
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
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1601505804121-45e2c5506c94?q=80&w=2070&auto=format&fit=crop"
                alt="Surfer on wave"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-white/80 bg-black/25 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 h-full">
              <div className="relative overflow-hidden flex-1 group">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661813583584-bbb3ac4ade09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Surf at Hirikatiya"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="flex gap-3 flex-1">
                <div className="relative overflow-hidden flex-1 group">
                  <Image
                    src="https://images.unsplash.com/photo-1559627755-42212e5c5fdf?q=80&w=2070&auto=format&fit=crop"
                    alt="Ocean at Hirikatiya"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden flex-1 group">
                  <Image
                    src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop"
                    alt="Surfing in Hirikatiya"
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
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary-light block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
                  The Experience
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                The Hirikatiya<br />Experience
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
                Hiriketiya Beach has emerged as a world-class surfing hidden gem.
                Recognized globally for its perfect horseshoe bay and consistent waves,
                Hiriketiya is no longer just a local favorite — it is one of the most
                popular surf beaches in the world.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {hirikatiryaFacts.map(({ label, value }) => (
                  <div key={label} className="border border-white/20 p-4">
                    <p className="text-2xl font-extrabold text-primary-light">{value}</p>
                    <p className="text-white/60 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                Book Your Experience
              </Link>
            </div>
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

      {/* ── Shop ── */}
      <section className="section-padding bg-primary-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Shop
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                Looking For New<br />Equipment?
              </h2>
              <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                We want our clients to feel awesome and unique.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {shopProducts.map((product) => (
                <div key={product.name} className="bg-white">
                  <div className="relative h-80 bg-gray-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${i < product.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-200 fill-gray-200'
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-primary font-bold text-sm mb-4">{product.price}</p>
                    <button className="w-full border border-gray-300 py-2.5 text-sm font-bold uppercase tracking-wide text-gray-800 hover:border-primary hover:text-primary transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
              <span className="w-8 h-px bg-primary block shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What People Say</h2>
            <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
              We want our clients to feel awesome and unique.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="bg-primary-50 p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[0].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{testimonials[0].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[0].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[0].image} alt={testimonials[0].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-400" />
            </div>
            <div className="bg-primary-50 p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[1].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{testimonials[1].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[1].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[1].image} alt={testimonials[1].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-400" />
            </div>

            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[2].image} alt={testimonials[2].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-400" />
            </div>
            <div className="bg-primary-50 p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[2].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{testimonials[2].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[2].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[3].image} alt={testimonials[3].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-400" />
            </div>
            <div className="bg-primary-50 p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[3].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{testimonials[3].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[3].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
