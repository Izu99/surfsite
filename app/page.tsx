import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Check, Star, Facebook, Twitter, Linkedin, Clock, Users, Gift, X } from 'lucide-react'
import HeroSlideshow from '@/components/HeroSlideshow'
import ServicesSlider from '@/components/ServicesSlider'
import { homepagePackages, INCLUDED_IN_ALL } from '@/data/packages'

export const metadata: Metadata = {
  title: 'Noah Surf School | Hirikatiya Beach, Sri Lanka',
  description:
    'Learn to surf with certified instructors at Hirikatiya Beach, Sri Lanka.',
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

      {/* ── About / History ── */}
      <section className="section-padding bg-[#f0f4f8] relative overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div className="w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Our Little History
              </h2>
              <p className="text-base font-semibold text-gray-700 mb-6 leading-snug">
                We want our clients to feel awesome and unique.
              </p>
              <div className="border-l-4 border-[#1d4ed8] pl-5 space-y-4 mb-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We specialize in private surfing lessons, semi-private surfing
                  lessons, and we are proud to offer group sessions and surf camps
                  right here in Hirikatiya, Sri Lanka!
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We teach surfing at our beautiful beach in Hirikatiya — a
                  world-class surf destination with consistent warm Indian Ocean
                  waves and vibrant tropical culture.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#1d4ed8] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#1e40af] transition-colors"
                >
                  Book A Lesson
                </Link>
                <Link
                  href="/about"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Video */}
            <div className="relative lg:static flex justify-center lg:justify-end">
              {/* Background accent image - positioned at the right edge as requested */}
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
                {/* Play button */}
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
      <section className="section-padding bg-white">
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
                <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                  Advantages
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Why Learn to Surf<br />With Us?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                We want our clients to feel awesome and unique.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map(({ icon, number, label, sub }) => (
                  <div key={label}>
                    <div className="mb-4">
                      <Image src={icon} alt={label} width={48} height={48} className="object-contain" />
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold text-[#1d4ed8]">{number}</p>
                    <p className="text-xs font-semibold text-gray-800 mt-1 leading-tight">{label}</p>
                    <p className="text-xs text-gray-400 mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <ServicesSlider services={services} />

      {/* ── Gallery Preview ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
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
            {/* Left: large main */}
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

            {/* Right: top wide + bottom two */}
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
              className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
            >
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section-padding bg-[#f0f4f8]">
        <div className="container-site">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                Pricing
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Surf School Programs
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md">
              Every session includes boards, rash guard, sunscreen, water &amp; first aid. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {homepagePackages.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col transition-all duration-300 ${
                  plan.featured
                    ? 'border border-[#1d4ed8] shadow-2xl shadow-blue-200/60 md:scale-105 z-10 bg-white relative'
                    : 'border border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  {plan.featured && (
                    <span className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-widest bg-[#1d4ed8] text-white px-3 py-1.5">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-base">{plan.name}</p>
                    <p className="text-white/70 text-xs">{plan.level}</p>
                  </div>
                </div>

                {/* Price */}
                <div className={`px-6 py-4 border-b border-gray-100 ${plan.featured ? 'bg-[#1d4ed8]' : 'bg-white'}`}>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-base font-bold ${plan.featured ? 'text-blue-200' : 'text-gray-400'}`}>$</span>
                    <span className={`text-5xl font-extrabold leading-none ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs ml-1.5 ${plan.featured ? 'text-blue-200' : 'text-gray-400'}`}>
                      / {plan.priceNote}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 bg-white p-6 space-y-4">
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#1d4ed8]" />
                      {plan.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-[#1d4ed8]" />
                      {plan.format}
                    </span>
                    {plan.souvenir && (
                      <span className="flex items-center gap-1.5 text-amber-600 font-medium text-xs">
                        <Gift className="h-3.5 w-3.5" />
                        Souvenir included
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {INCLUDED_IN_ALL.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="h-3.5 w-3.5 text-[#1d4ed8] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-white p-6 border-t border-gray-100 text-center">
                  <Link
                    href={`/contact?package=${encodeURIComponent(plan.name)}`}
                    className={`inline-block px-10 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                      plan.featured
                        ? 'bg-[#1d4ed8] text-white hover:bg-[#1e40af]'
                        : 'border-2 border-gray-800 text-gray-800 hover:border-[#1d4ed8] hover:text-[#1d4ed8]'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1d4ed8] transition-all group"
            >
              View All Packages
              <Play className="w-3 h-3 fill-current transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shop ── */}
      <section className="section-padding bg-[#f0f4f8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
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
                className="inline-block bg-[#1d4ed8] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#2563eb] transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Right: product cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {shopProducts.map((product) => (
                <div
                  key={product.name}
                  className="bg-white"
                >
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
                          className={`h-3.5 w-3.5 ${
                            i < product.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-200 fill-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-[#1d4ed8] font-bold text-sm mb-4">
                      {product.price}
                    </p>
                    <button className="w-full border border-gray-300 py-2.5 text-sm font-bold uppercase tracking-wide text-gray-800 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors">
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
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">Testimonials</span>
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What People Say</h2>
            <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
              We want our clients to feel awesome and unique.
            </p>
          </div>

          {/* Checkerboard grid */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* Row 1: text | image | text | image */}
            <div className="bg-[#f0f4f8] p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[0].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d4ed8] mb-4">{testimonials[0].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[0].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[0].image} alt={testimonials[0].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1d4ed8]/0 group-hover:bg-[#1d4ed8]/55 transition-all duration-400" />
            </div>
            <div className="bg-[#f0f4f8] p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[1].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d4ed8] mb-4">{testimonials[1].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[1].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[1].image} alt={testimonials[1].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1d4ed8]/0 group-hover:bg-[#1d4ed8]/55 transition-all duration-400" />
            </div>

            {/* Row 2: image | text | image | text */}
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[2].image} alt={testimonials[2].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1d4ed8]/0 group-hover:bg-[#1d4ed8]/55 transition-all duration-400" />
            </div>
            <div className="bg-[#f0f4f8] p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[2].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d4ed8] mb-4">{testimonials[2].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[2].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[280px]">
              <Image src={testimonials[3].image} alt={testimonials[3].name} fill className="object-cover object-top" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1d4ed8]/0 group-hover:bg-[#1d4ed8]/55 transition-all duration-400" />
            </div>
            <div className="bg-[#f0f4f8] p-8 flex flex-col justify-center min-h-[280px]">
              <h3 className="font-bold text-gray-900 mb-1">{testimonials[3].name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d4ed8] mb-4">{testimonials[3].location}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{testimonials[3].quote}</p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Twitter" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Twitter className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-7 w-7 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] transition-colors">
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner (With FIXED background image) ── */}
      <section 
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?q=80&w=2070&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="relative container-site text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#60a5fa] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
              Start Today
            </span>
            <span className="w-8 h-px bg-[#60a5fa] block shrink-0" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Catch Your First Wave?
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-md mx-auto mb-8">
            Join our daily sessions on Hirikatiya Beach. All equipment provided —
            no experience necessary.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1d4ed8] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#2563eb] transition-colors"
          >
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
