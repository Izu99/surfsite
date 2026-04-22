import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Instagram, Facebook, Youtube } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'About Noah Surf School | Hirikatiya Beach, Sri Lanka' },
  description:
    'The story behind Noah Surf School at Hirikatiya Beach, Sri Lanka. Meet our ILS-certified instructors and learn why surfers from over 60 countries choose us.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Noah Surf School | Hirikatiya Beach, Sri Lanka',
    description:
      'The story behind Noah Surf School at Hirikatiya Beach, Sri Lanka. Meet our ILS-certified instructors and learn why surfers from over 60 countries choose us.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
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

const team = [
  {
    name: 'Noah',
    role: 'Head Instructor & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'ILS certified with years of surf instruction experience. Noah founded the school to share his love of Hiriketiya\'s waves with visitors from around the world.',
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
      <section className="bg-primary-50 border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Noah <span className="text-primary">Story</span>
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Since 2010, we&apos;ve been more than just a school. We&apos;re a
            community dedicated to sharing the soul of surfing at Hirikatiya Beach,
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
                <span className="w-8 h-px bg-primary block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Our History
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Our Story: Born from the<br />Waves of Hiriketiya
              </h2>
              <p className="text-base font-semibold text-gray-700 mb-6 leading-snug">
                A Childhood in the Salt Air
              </p>
              <div className="border-l-4 border-primary pl-5 space-y-4 mb-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  I was born and raised where the jungle meets the sand in
                  Hiriketiya, a small village on the southern coast of Sri
                  Lanka. Long before it became a global destination, Hiriketiya
                  was my playground. By the age of six, I was already living in
                  harmony with the tides — playing in the surf, watching the sea
                  turtles, and learning the ways of the ocean from our local
                  fishermen. To me, the sound of the crashing waves wasn&apos;t
                  just noise; it was the heartbeat of my home.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">The Spark of a Dream —</strong>{' '}
                  I remember being eight years old when I saw something that
                  changed my life: a traveler gliding across the water on a
                  board. My friends and I watched in awe from the shore. Though
                  I lacked the money to buy equipment, I began by borrowing
                  boards from travelers for just a few minutes at a time. Through
                  persistence and passion, I taught myself — progressing from a
                  beginner to an expert.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Today, known simply as &ldquo;Noah&rdquo; to students from
                  around the world, I share the magic of the Indian Ocean with
                  visitors from the UK, US, Australia, and beyond. I don&apos;t
                  just teach you how to stand on a board — I teach you how to
                  breathe with the waves, respect the nature of the south coast,
                  and truly live in rhythm with the sea.
                </p>
              </div>
              <blockquote className="border-l-4 border-primary/40 pl-5 mb-8 italic text-gray-500 text-sm leading-relaxed">
                &ldquo;My journey started on these very sands, and I invite you
                to begin yours with me. See you in the water — Noah.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
                >
                  Book A Lesson
                </Link>
                <Link
                  href="/gallery"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
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
              alt="Surf lesson at Hirikatiya"
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

      {/* ── Surf History ── */}
      <section className="section-padding bg-[#f0f4f8] border-t border-gray-200">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Surf History
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight max-w-2xl">
            The Evolution of Surf: A History of Waves in Sri Lanka
          </h2>
          <p className="text-base font-semibold text-gray-700 mb-10 max-w-xl leading-snug">
            From ancient coasts to a global surf haven — the story of how Sri Lanka found its place on the world&apos;s surfing map.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left column */}
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">From Ancient Coasts to Global Surf Haven</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sri Lanka&apos;s relationship with the ocean spans thousands of years, rooted in the traditions of our resilient fishing communities. However, the story of surfing in Sri Lanka truly began in the 1960s and 70s. During this era, intrepid travelers from Australia and Europe began exploring our southern and eastern shores, discovering what we locals always knew: our coastline holds some of the most consistent waves in the Indian Ocean.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Discovery of Hikkaduwa and Arugam Bay</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The first surf hubs emerged in Hikkaduwa on the southwest coast and Arugam Bay on the east. These pioneers brought the first fiberglass boards to our shores, sparking a curiosity among local village kids. What started as watching from the sand turned into a local movement. Sri Lankans began borrowing boards — much like Noah did in Hiriketiya — and teaching themselves to dance with the waves.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Rise of the South Coast &amp; Hiriketiya</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  While Hikkaduwa was the birthplace, the &ldquo;Golden Era&rdquo; of the south coast — including Mirissa, Weligama, and Ahangama — followed shortly after. For a long time, Hiriketiya Beach remained a hidden secret, known only to locals and a few lucky travelers.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  It wasn&apos;t until the last decade that the world woke up to the &ldquo;Horseshoe Bay.&rdquo; Today, Sri Lanka is recognized globally not just for its beauty, but as a premier surfing destination. The culture has shifted from simply watching the waves to producing ISA-certified local instructors who lead the industry with a blend of professional technique and deep, ancestral knowledge of the sea.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Surfing Today: A Way of Life</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Surfing is no longer just a tourist activity in Sri Lanka; it is a vital part of our coastal identity. From the early days of wooden planks and borrowed boards to the high-performance coaching available today at Noah&apos;s Surf School, the spirit remains the same: a profound respect for the ocean and the pure joy of the ride.
                </p>
              </div>
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
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map(({ icon, number, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
                <div className="h-14 w-14 flex items-center justify-center mb-4">
                  <Image src={icon} alt={label} width={48} height={48} className="object-contain brightness-0 invert" />
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
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Learn to surf with confidence at the best south coast surf
                destination. Safety and technique come first — our team, led by
                Noah, consists of ISA-certified professionals dedicated to
                helping you progress quickly and safely.
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
      <section className="section-padding bg-primary-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Team
              </span>
              <span className="w-8 h-px bg-primary block shrink-0" />
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
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Day in the Life ── */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Behind the Scenes
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                A Day in the Life<br />at Hirikatiya
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Wake up to the sound of waves, grab a board, and spend the day doing
                what you love. Watch what a typical day looks like at Noah Surf School
                — from morning sessions to sunset walks on the beach.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                Book Your Day
              </Link>
            </div>
            {/* YouTube embed */}
            <div className="relative w-full aspect-video overflow-hidden border border-gray-200 shadow-[var(--shadow-card)]">
              <iframe
                src="https://www.youtube.com/embed/LwU4zxolXoY?rel=0&modestbranding=1"
                title="A day in the life at Noah Surf School — Hirikatiya Beach, Sri Lanka"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Follow Us ── */}
      <section className="section-padding bg-[#f0f4f8] border-t border-gray-200">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Follow Us
              </span>
              <span className="w-8 h-px bg-primary block shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Stay in the Loop
            </h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Follow our daily surf sessions, behind-the-scenes moments, and Hirikatiya
              life on social media.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {socials.map(({ label, handle, href, Icon, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all group"
              >
                <div
                  className={`h-14 w-14 rounded-full ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-900">{label}</p>
                <p className="text-xs text-gray-400 mt-1">{handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-site text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Get Started
            </span>
            <span className="w-8 h-px bg-primary block shrink-0" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ready to Hit the Waves?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            Book a session with one of our certified instructors today.
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
