import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about WavePeak Surf School at Hikkaduwa Beach, Sri Lanka. Our history, our team, and our values.',
}

const values = [
  { text: 'Certified ILS surf instructors on every session', icon: '/icons/icons8-certificate-50.png' },
  { text: 'Small student-to-instructor ratios (max 6 per group)', icon: '/icons/icons8-conference-50.png' },
  { text: 'All equipment provided — boards, leashes, rash guards', icon: '/icons/icons8-surf-96.png' },
  { text: 'Suitable for all ages from 7 years and up', icon: '/icons/icons8-user-50.png' },
  { text: 'Warm, consistent Indian Ocean swells year-round', icon: '/icons/icons8-sun-50.png' },
  { text: 'Flexible scheduling — daily 6:00 am to 6:00 pm', icon: '/icons/icons8-alarm-clock-50.png' },
  { text: 'Free cancellation up to 24 hours before your lesson', icon: '/icons/icons8-calendar-64.png' },
  { text: 'Lessons in English, Sinhala, and Tamil', icon: '/icons/icons8-globe-50.png' },
]

const stats = [
  { icon: '/icons/icons8-group-50.png', number: '2,500+', label: 'Surfers Trained', sub: 'Students from 60+ countries' },
  { icon: '/icons/icons8-award-50.png', number: '14', label: 'Years Experience', sub: 'Operating since 2010' },
  { icon: '/icons/icons8-star-50.png', number: '4.9', label: 'Student Rating', sub: 'Based on 800+ reviews' },
]

const team = [
  {
    name: 'Dinesh Jayawardena',
    role: 'Head Instructor & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'ILS Level 3 certified with 14 years of surf instruction experience. Dinesh founded WavePeak to share his love of Hikkaduwa\'s waves with the world.',
  },
  {
    name: 'Kasun Perera',
    role: 'Senior Surf Instructor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'ILS Level 2 certified. Kasun specialises in beginner lessons and junior programs, with a patient and encouraging teaching style.',
  },
  {
    name: 'Amara Silva',
    role: 'Surf Instructor & Camp Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'ILS Level 2 certified. Amara coordinates our surf camp programs and brings energy and enthusiasm to every session she leads.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#f0f4f8] border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our WavePeak Story
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Since 2010, we&apos;ve been more than just a school. We&apos;re a
            community dedicated to sharing the soul of surfing at Hikkaduwa Beach,
            Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── Our History ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          {/* Left text */}
          <div className="flex items-center py-16 md:py-20 px-6 md:px-12 lg:px-10 xl:px-16 lg:max-w-[680px] lg:ml-auto w-full">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                  Our History
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
                  WavePeak Surf School was founded in 2010 by Dinesh Jayawardena,
                  a lifelong surfer and ILS-certified instructor who grew up riding
                  the waves of Hikkaduwa Beach. What started as informal lessons
                  for visiting tourists quickly grew into Sri Lanka&apos;s most
                  trusted surf school.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Today we offer private lessons, semi-private sessions, group
                  classes, and immersive multi-day surf camps — all in the warm,
                  consistent swells of the Indian Ocean right here in Hikkaduwa.
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
                  href="/gallery"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop"
              alt="Surf lesson at Hikkaduwa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0d1b2a]/70 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="h-16 w-16 rounded-full border-2 border-white/80 bg-black/25 flex items-center justify-center hover:bg-black/40 transition-colors"
                aria-label="Play video"
              >
                <Play className="h-6 w-6 text-white fill-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats (With FIXED background image) ── */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1672510003630-18d2535419ef?q=80&w=2070&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="relative container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map(({ icon, number, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
                <div className="h-14 w-14 flex items-center justify-center mb-4">
                  <Image src={icon} alt={label} width={48} height={48} className="object-contain brightness-0 invert" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">{number}</p>
                <p className="text-sm font-semibold text-blue-100">{label}</p>
                <p className="text-xs text-blue-200/80 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We want our clients to feel awesome and unique.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map(({ text, icon }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                    <Image src={icon} alt="" width={28} height={28} className="shrink-0 object-contain mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop"
                alt="Surf coaching at WavePeak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-[#f0f4f8]">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                Our Team
              </span>
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet the Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden border border-gray-100 shadow-[0_4px_20px_0_rgb(0_0_0/0.06)]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wide mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-site text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
              Get Started
            </span>
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ready to Hit the Waves?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            Book a session with one of our certified instructors today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1d4ed8] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#1e40af] transition-colors"
          >
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
