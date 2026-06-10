import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, ShieldCheck, Users, Star, Award, Sun, Clock, Globe, type LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'About Noah Surf School | Hirikatiya Beach, Sri Lanka' },
  description:
    'The story behind Noah Surf School at Hirikatiya Beach, Sri Lanka. Meet our ISA-certified instructors and learn why surfers from over 60 countries choose us.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Noah Surf School | Hirikatiya Beach, Sri Lanka',
    description:
      'The story behind Noah Surf School at Hirikatiya Beach, Sri Lanka. Meet our ISA-certified instructors and learn why surfers from over 60 countries choose us.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
}

const values: { text: string; icon: LucideIcon }[] = [
  { text: 'Certified ISA surf instructors on every session', icon: ShieldCheck },
  { text: 'Small student-to-instructor ratios (max 6 per group)', icon: Users },
  { text: 'All equipment provided — boards, leashes, rash guards', icon: Award },
  { text: 'Suitable for all ages from 7 years and up', icon: Users },
  { text: 'Warm, consistent Indian Ocean swells year-round', icon: Sun },
  { text: 'Flexible scheduling — daily 6:00 am to 6:00 pm', icon: Clock },
  { text: 'Lessons in English', icon: Globe },
]

const stats: { icon: LucideIcon; number: string; label: string; sub: string }[] = [
  { icon: Users, number: '2,500+', label: 'Surfers Trained', sub: 'Students from 60+ countries' },
  { icon: Award, number: '14', label: 'Years Experience', sub: 'Operating since 2010' },
  { icon: Star, number: '5.0', label: 'Student Rating', sub: 'Based on 300+ reviews' },
]

const socials = [
  {
    label: 'Instagram',
    handle: '@noahsurfschool',
    href: 'https://instagram.com/noahsurfschool',
    Icon: Instagram,
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
  },
  {
    label: 'Facebook',
    handle: 'Noah Surf School',
    href: 'https://facebook.com/noahsurfschool',
    Icon: Facebook,
    bg: 'bg-[#1877F2]',
  },
  {
    label: 'YouTube',
    handle: 'Noah Surf School',
    href: 'https://youtube.com/@noahsurfschool',
    Icon: Youtube,
    bg: 'bg-[#FF0000]',
  },
]

const team: { name: string; role: string; image: string; bio: string; character?: boolean }[] = [
  {
    name: 'Noah',
    role: 'Head Instructor & Founder',
    image: '/noah-character.png',
    character: true,
    bio: "ISA certified with years of surf instruction experience. Noah founded the school to share his love of Hiriketiya's waves with visitors from around the world.",
  },
  {
    name: 'Kasun Perera',
    role: 'Senior Surf Instructor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'ISA Level 2 certified. Kasun specialises in beginner lessons and junior programs, with a patient and encouraging teaching style.',
  },
  {
    name: 'Amara Silva',
    role: 'Surf Instructor & Camp Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'ISA Level 2 certified. Amara coordinates our surf camp programs and brings energy and enthusiasm to every session she leads.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#fcfcfc] pt-[calc(72px+3rem)] pb-0 md:pt-[calc(72px+5rem)] relative overflow-hidden">
        <div className="absolute right-6 top-24 pointer-events-none opacity-60 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/noah-drawing.png" alt="" width={120} height={120} className="drop-shadow-md" aria-hidden />
        </div>
        <div className="container-site pb-16 md:pb-20">
          <p className="font-display text-2xl text-primary mb-2">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Noah&apos;s Journey
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Born on this beach, shaped by these waves.
          </p>
        </div>
      </section>

      {/* ── Noah's Story ── */}
      <section className="bg-[#f0e9dd] relative overflow-hidden">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            {/* Story text */}
            <div>
              <p className="font-display text-2xl text-primary mb-3">Noah&apos;s Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Born from the<br />Waves of Hiriketiya
              </h2>
              <p className="text-base font-semibold text-gray-700 mb-6 leading-snug">
                A Childhood in the Salt Air
              </p>
              <div className="border-l-4 border-primary pl-5 space-y-4 mb-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  I was born in Hiriketiya, a small village on the south coast of Sri Lanka, where
                  the jungle meets the beach. Long before it became famous, Hiriketiya was my
                  playground. By the age of six, I was already playing in the waves, watching sea
                  turtles, and learning about the ocean from local fishermen. The sound of the waves
                  felt like home to me.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">The Spark of a Dream —</strong>{' '}
                  When I was eight, I saw something that changed my life: a traveler riding the waves
                  on a surfboard. I didn&apos;t have money to buy my own board, so I asked travelers
                  if I could borrow theirs. I kept practicing and slowly taught myself — from a
                  beginner to an expert.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Today, students from all over the world simply call me &ldquo;Noah.&rdquo; I teach
                  visitors from the UK, US, Australia, and many other countries. I don&apos;t just
                  teach you how to stand on a surfboard — I help you feel comfortable in the waves,
                  respect the ocean, and enjoy every moment in the water.
                </p>
              </div>
              <p className="font-display text-2xl md:text-3xl text-gray-800 leading-snug mb-6">
                &ldquo;I saw a foreigner out in the sea, riding the waves on a strange board. I had no idea what it actually was.&rdquo;
              </p>
              <blockquote className="border-l-4 border-primary/40 pl-5 mb-8 italic text-gray-500 text-sm leading-relaxed">
                &ldquo;My journey started on this beach, and I&apos;d love to help you start yours
                too. See you in the water — Noah.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors">
                  Book A Lesson
                </Link>
                <Link href="/gallery" className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors">
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Noah character illustration */}
            <div className="flex justify-center items-end pointer-events-none select-none mt-6 lg:mt-0">
              <Image
                src="/noah-character.png"
                alt="Noah, founder and head instructor at Noah Surf School"
                width={340}
                height={480}
                className="drop-shadow-2xl w-52 md:w-64 lg:w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Surf History ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <p className="font-display text-2xl text-primary mb-3">Surf History</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight max-w-2xl">
            The Evolution of Surf in Sri Lanka
          </h2>
          <p className="text-base font-semibold text-gray-700 mb-10 max-w-xl leading-snug">
            From ancient coasts to a global surf haven.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">From Ancient Coasts to Global Surf Haven</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sri Lanka&apos;s relationship with the ocean spans thousands of years. The story
                  of surfing in Sri Lanka truly began in the 1960s and 70s when intrepid travelers
                  from Australia and Europe began exploring our southern and eastern shores,
                  discovering what locals always knew: our coastline holds some of the most
                  consistent waves in the Indian Ocean.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Discovery of Hikkaduwa and Arugam Bay</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The first surf hubs emerged in Hikkaduwa and Arugam Bay. These pioneers brought
                  the first fiberglass boards to our shores. Sri Lankans began borrowing boards —
                  much like Noah did in Hiriketiya — and teaching themselves to dance with the waves.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Rise of the South Coast &amp; Hiriketiya</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For a long time, Hiriketiya Beach remained a hidden secret. It wasn&apos;t until
                  the last decade that the world woke up to the &ldquo;Horseshoe Bay.&rdquo; Today,
                  Sri Lanka is recognized globally as a premier surfing destination.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Surfing Today: A Way of Life</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Surfing is no longer just a tourist activity; it is a vital part of our coastal
                  identity. From borrowed boards to the high-performance coaching at Noah&apos;s
                  Surf School, the spirit remains the same: a profound respect for the ocean and
                  the pure joy of the ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats (parallax) ── */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1672510003630-18d2535419ef?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#0d1b2a]/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map(({ icon: Icon, number, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
                <div className="h-14 w-14 flex items-center justify-center mb-4">
                  <Icon className="w-9 h-9 text-white" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">{number}</p>
                <p className="text-sm font-semibold text-primary-100">{label}</p>
                <p className="text-xs text-primary-200/80 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-display text-2xl text-primary mb-3">Advantages</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Why Learn to Surf<br />With Us?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Safety and technique come first — our team, led by Noah, consists of ISA-certified
                professionals dedicated to helping you progress quickly and safely.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map(({ text, icon: Icon }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                    <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop"
                alt="Surf coaching at Noah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-[#f0e9dd]">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="font-display text-2xl text-primary mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Instructors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden rounded-2xl shadow-sm">
                <div className={`relative h-64 overflow-hidden rounded-t-2xl ${member.character ? 'bg-[#f0e9dd]' : ''}`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={member.character ? 'object-contain object-bottom p-3' : 'object-cover object-top'}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-1 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day in the Life ── */}
      <section className="section-padding bg-[#fcfcfc]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-display text-2xl text-primary mb-3">Behind the Scenes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                A Day in the Life<br />at Hirikatiya
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Wake up to the sound of waves, grab a board, and spend the day doing what you love.
                Watch what a typical day looks like at Noah Surf School — from morning sessions to
                sunset walks on the beach.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors">
                Book Your Day
              </Link>
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/LwU4zxolXoY?rel=0&modestbranding=1"
                title="A day in the life at Noah Surf School"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Follow Us ── */}
      <section className="section-padding bg-[#f0e9dd]">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="font-display text-2xl text-primary mb-2">Follow Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Stay in the Loop</h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Follow our daily surf sessions, behind-the-scenes moments, and Hirikatiya life on social media.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {socials.map(({ label, handle, href, Icon, bg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-all group">
                <div className={`h-14 w-14 rounded-full ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-900">{label}</p>
                <p className="text-xs text-gray-400 mt-1">{handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-[#fcfcfc]">
        <div className="container-site py-16 md:py-20">
          <p className="font-display text-2xl text-primary mb-2">Find Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Hirikatiya Beach, Sri Lanka</h2>
          <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              title="Hiriketiya Noah Surfing School location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.505071691863!2d80.70676637386983!3d5.9624342109168165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1370012226f0f%3A0xaf6fc116b43ab5a1!2sHiriketiya%20Noah%20Surfing%20School!5e1!3m2!1sen!2slk!4v1776399349914!5m2!1sen!2slk"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#f0e9dd]">
        <div className="container-site text-center">
          <p className="font-display text-2xl text-primary mb-2">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ready to Hit the Waves?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            Book a session with one of our certified instructors today.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-md">
            Book A Lesson
          </Link>
        </div>
      </section>
    </>
  )
}
