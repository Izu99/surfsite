import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star, Award, Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import HeroSlideshow from '@/components/HeroSlideshow'
import ServicesSlider from '@/components/ServicesSlider'
import HomepagePackages from '@/components/HomepagePackages'
import ConditionsBar from '@/components/ConditionsBar'
import HirikatiayaExperience from '@/components/HirikatiayaExperience'
import ReviewsSlider from '@/components/ReviewsSlider'
import GallerySlideshow from '@/components/GallerySlideshow'
import LazyVideoEmbed from '@/components/LazyVideoEmbed'
import { jsonLdString } from '@/lib/json-ld'

export const metadata: Metadata = {
  title: { absolute: 'Surf School in Hiriketiya | South Coast Sri Lanka Surfing' },
  description:
    'Hiriketiya Beach is a world-class surf spot with a horseshoe bay and consistent waves. Expert coaching for beginners and intermediates. Open daily 6am–6pm.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Noah Surf School | Best Surf Lessons in Hiriketiya & South Coast Sri Lanka',
    description:
      'Professional surf lessons in Hiriketiya, Matara and the South Coast of Sri Lanka. Beginners to intermediates welcome. Open daily 6am–6pm.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School Hiriketiya' }],
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
    number: '5.0★',
    label: 'Student Rating',
    sub: '300+ reviews',
  },
]

const googleReviews = [
  {
    name: 'Ollie Yeates',
    rating: 5,
    date: '3 months ago',
    review: "For sure the best surf instructor we've had. Noah's such a great guy and teaches you everything you need to know from the safety side of surfing to catching great waves. His attention to detail on every wave means by the end of each lesson you feel like you've learnt so much. Book with Noah and you won't be disappointed!",
    avatar: '/reviews/avatars/ollie-yeates.webp',
    link: 'https://share.google/Ri0jmOdX3WZCiZmyA',
    images: [
      '/reviews/photos/ollie-yeates-1.webp',
    ],
  },
  {
    name: 'Mikko',
    rating: 5,
    date: '4 months ago',
    review: 'Had a few amazing surf lessons in Hiriketiya with Noah. He has a very calm and patient way of teaching and explains things in a way even a complete beginner can understand. He paid attention to small details, helped me improve quickly, and even encouraged me to try some slightly bigger waves. Highly recommend him to anyone looking for surf lessons here!',
    avatar: '/reviews/avatars/mikko.webp',
    link: 'https://share.google/0bZQp8uWnzT56SUtV',
    images: [
      '/reviews/photos/mikko-1.webp',
    ],
  },
  {
    name: 'Peter Zelenay',
    rating: 5,
    date: 'a year ago',
    review: "My 4-year-old daughter had her first-ever surf lesson with Noah, and he was amazing. He was super kind, patient, and made her feel comfortable while introducing her to the basics. The pricing was more than fair, especially considering her age, attention span, and the course length. Fully recommend!",
    avatar: '/reviews/avatars/peter-zelenay.webp',
    link: 'https://share.google/RA3qdbdyPj0QARe28',
    images: [
      '/reviews/photos/peter-zelenay-1.webp',
      '/reviews/photos/peter-zelenay-2.webp',
      '/reviews/photos/peter-zelenay-3.webp',
    ],
  },
  {
    name: 'Fabienne B.',
    rating: 5,
    date: 'a year ago',
    review: "My best surf lessons so far: absolute recommendation! Noah speaks very good English and is great at explaining things. He knows exactly where to start and teaches you the really important things so that you get better and better and can eventually catch your own waves. What's more, he's just a very cool and relaxed guy who immediately makes you feel at ease. Thank you Noah!",
    avatar: '/reviews/avatars/fabienne-b.webp',
    link: 'https://share.google/BnR2ncWQ3m3OjHIw6',
    images: [
      '/reviews/photos/fabienne-b-1.webp',
      '/reviews/photos/fabienne-b-2.webp',
    ],
  },
  {
    name: 'Michal Vachler',
    rating: 5,
    date: 'a year ago',
    review: "One of the best activities we did in Sri Lanka. What makes this experience unique is Noah. A friendly, easygoing, funny, professional surfer who helped us surf our first wave. Noah takes care of safety. We did stretching together before the lesson. I really enjoyed the theory about the bay, how water flows, what kinds of waves there are. The lesson is long enough for a good price. Noah tried really hard to help us surf the first wave and it worked :) Thank you!",
    avatar: '/reviews/avatars/michal-vachler.webp',
    link: 'https://share.google/AjmA7LVPabo6X8iF5',
    images: [
      '/reviews/photos/michal-vachler-1.webp',
    ],
  },
  {
    name: 'Wendy Schippers',
    rating: 5,
    date: '2 weeks ago',
    review: "Best Surf teacher! I took two surf lessons with Noah, and I felt so incredibly supported — he is such a great instructor. Noah speaks English at a good level and is one of the more experienced surfers and instructors. He focuses on safety, a step-by-step approach, and gives great explanations. And once you are on the board, you know what it means to catch a wave — it's unreal!",
    avatar: '/reviews/avatars/wendy-schippers.webp',
    link: 'https://share.google/nAzpyaHUnrnUaj2di',
    images: [
      '/reviews/photos/wendy-schippers-1.webp',
      '/reviews/photos/wendy-schippers-2.webp',
    ],
  },
  {
    name: 'Nina Thornton',
    rating: 5,
    date: '8 months ago',
    review: "Best surf school ever! It was my first time surfing but my boyfriend already surfed a few times in different countries and he also said he had never experienced such good teachers. They take safety very seriously, take you to a beach where the waves are not as rough but still great for surfing, especially for beginners. They really give you one-on-one guidance even when you're with a whole group. Amazing feedback that's really helpful!",
    avatar: '/reviews/avatars/nina-thornton.webp',
    link: 'https://share.google/HqMaFIWAU00h5P4X8',
  },
  {
    name: 'Hasanthi De Silva',
    rating: 5,
    date: '9 months ago',
    review: "Noah and his assistant were fantastic instructors! They patiently taught the technique on land first, then guided the kids into the water. They even chose a quieter beach with gentler waves, perfect for young learners. The kids picked up surfing on their very first try! A wonderful experience — highly recommend for a safe, personalized, and fun surfing lesson.",
    avatar: '/reviews/avatars/hasanthi-de-silva.webp',
    link: 'https://share.google/5Lf6plIWRLW99HWpt',
  },
  {
    name: 'Andrea Sodero',
    rating: 5,
    date: '9 months ago',
    review: "Epic Experience! 5 stars are not enough 🤙 3 awesome surf coaches for just 4 of us! Always safety first, but still all the fun. They took us to a perfect beginner-friendly beach near Hiri and it was just amazing. Hands down, best surf lesson ever! Thanks to Noah and the crew — you guys rock 🌊🏄‍♂️🔥",
    avatar: '/reviews/avatars/andrea-sodero.webp',
    link: 'https://share.google/eCe7qMoNx4tufKTc8',
  },
  {
    name: 'Samuel Durrance',
    rating: 5,
    date: '5 months ago',
    review: "We first observed Noah delivering a lesson whilst having our own lesson with another surf school. Switching schools was the best decision we made. Noah was incredibly attentive to all the finer details — patient, informative and an incredibly good instructor which made our lesson both enjoyable and successful. We couldn't recommend Noah highly enough for those wanting to get into surfing in Hiriketiya!",
    avatar: '/reviews/avatars/samuel-durrance.webp',
    link: 'https://share.google/eBLuVzljpX5FO5e9p',
  },
  {
    name: 'Karl Krauss',
    rating: 5,
    date: '3 months ago',
    review: "First surf teacher I ever encountered who skipped lessons in bad wave conditions instead of just taking money. Very honest and friendly person. Helped me catch my first waves at the point break in Hiri. I highly recommend him for intermediate surfers — and he'll be great for beginners too!",
    avatar: '/reviews/avatars/karl-krauss.webp',
    link: 'https://share.google/BFDReTy6fF3C7uVP8',
  },
  {
    name: 'Ashmead Road',
    rating: 5,
    date: '5 months ago',
    review: "Noah is a magician. I wanted to try the point break on Hiriketiya beach but as an intermediate surfer, I was nervous. I booked Noah and had one of the best surfs of my life. He is kind, patient and a very skilled instructor. He helped me navigate the reef and catch some fantastic waves. I couldn't recommend him enough for a one-on-one session.",
    avatar: '/reviews/avatars/ashmead-road.webp',
    link: 'https://share.google/Lyd6gKKraV4QDEKCS',
  },
  {
    name: 'Jozef',
    rating: 5,
    date: '8 months ago',
    review: "I normally don't write reviews on my trips, but this one deserves it. Noah and his friends are awesome surf teachers. They cover the fundamentals: safety, surf rules and of course the surfing itself. I've taken surf lessons all over the world, but their quality of teaching really surprised me. 100% recommend, 10/10. You won't be disappointed! ✌🏽",
    avatar: '/reviews/avatars/jozef.webp',
    link: 'https://share.google/fACN8BmdmJOjlCNJY',
  },
  {
    name: 'mightyshroom',
    rating: 5,
    date: '2 months ago',
    review: "Noah has been by far the best instructor I've ever had. He took the time to explain not only the technique, but also ocean safety. He has a great eye for spotting what you're doing wrong — follow his advice and you will pop up in no time. His lessons are structured and systematic, almost like he's found the recipe for success. I truly felt like I was in good hands!",
    avatar: '/reviews/avatars/mightyshroom.webp',
    link: 'https://share.google/5zLKrNAHK2MapANnc',
  },
  {
    name: 'you sef',
    rating: 5,
    date: '2 months ago',
    review: "Noah is an amazing guy. He took great attention to all details, from surfing etiquette in the water to safety. He took time with each mistake I made, explaining it until I understood and corrected it. Just go ahead and give it a try — you will see progress after the first hour together, guaranteed. Noah, keep it up, you're doing a pretty damn good job ❤️",
    avatar: '/reviews/avatars/you-sef.webp',
    link: 'https://share.google/tVbQjy1eHF2Gz99Uy',
  },
]

// ─── Wave divider ─────────────────────────────────────────────────────────────

function SectionDivider({ fromColor, toColor, className }: { fromColor: string; toColor: string; className?: string }) {
  return (
    <div className={className} style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`, height: '40px' }} />
  )
}

// ─── Page (Section order: Hero → Conditions → Hirikatiya → Noah → Lessons → Ratings → Why Us → Gallery) ──

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Noah Surf School',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Learn to surf with certified ISA instructors at Hirikatiya Beach, Sri Lanka. Group and private lessons, surf camps, board rentals. Open daily 6am–6pm.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(websiteJsonLd) }}
      />

      {/* 1 ── Hero ── */}
      <HeroSlideshow />

      {/* 2 ── Conditions Bar ── */}
      <ConditionsBar />

      {/* 3 ── About Hirikatiya ── */}
      <section className="bg-[#fcfcfc] py-20 md:py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: title + stats */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Hirikatiya<br />Experience
              </h2>
              <HirikatiayaExperience />
            </div>
            {/* Right: video — autoplay/loop background, no user interaction */}
            <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl">
              <LazyVideoEmbed
                src="https://www.youtube.com/embed/48oXIoQ1Nmw?autoplay=1&mute=1&loop=1&playlist=48oXIoQ1Nmw&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1"
                title="Noah Surf School — Hirikatiya Beach, Sri Lanka"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hirikatiya + About Noah — wrapped so surfboard spans both ── */}
      <div className="relative">
        {/* ONE Noah surfboard spanning both sections on the right */}
        <div className="absolute right-[-25px] top-[-20px] pointer-events-none select-none z-50 animate-[float_9s_ease-in-out_infinite]">
          <Image src="/decor-gemini.png" alt="" width={480} height={480} className="w-44 sm:w-60 lg:w-72 h-auto opacity-90 drop-shadow-xl rotate-[-18deg]" aria-hidden />
        </div>

      {/* Wave: white → sandy */}
      <SectionDivider fromColor="#fcfcfc" toColor="#f0e9dd" />

      {/* 4 ── About Noah ── handwritten personal section */}
      <section className="bg-[#f0e9dd] relative pt-8 md:pt-12 pb-20 md:pb-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-y-8 lg:gap-y-3 gap-x-12 lg:gap-x-20 items-start">
            {/* Greeting + quote — first on mobile, top-right on desktop */}
            <div className="lg:col-start-2 lg:row-start-1 space-y-3">
              <p className="font-italianno text-5xl md:text-6xl text-gray-900 leading-tight">
                Hey! I&apos;m Noah
              </p>
              <p className="font-italianno text-3xl md:text-4xl text-gray-700 leading-snug">
                &ldquo;I saw a foreigner out in the sea, riding the waves on a strange board. I had no idea what it actually was.&rdquo;
              </p>
            </div>

            {/* Beach image — second on mobile, left (full height) on desktop */}
            <div className="lg:col-start-1 lg:row-start-1 lg:row-span-3">
              <Image
                src="/hirikatiya-bay.webp"
                alt="Man and child at Hirikatiya Beach"
                width={2528}
                height={1684}
                className="w-full h-auto rounded-3xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Ocean line — third on mobile (after image), middle-right on desktop */}
            <p className="font-italianno text-3xl md:text-4xl text-primary lg:col-start-2 lg:row-start-2">
              The ocean is waiting for you!
            </p>

            {/* Button — last on mobile (centered), bottom-right on desktop */}
            <div className="flex justify-center lg:justify-start lg:col-start-2 lg:row-start-3">
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center cursor-pointer group select-none"
                style={{ width: 210, height: 68 }}
              >
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="0 0 210 68"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="brushstroke-fill" x="-12%" y="-35%" width="124%" height="170%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.022 0.028" numOctaves="4" seed="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                  <rect
                    x="10" y="10" width="190" height="48" rx="8"
                    fill="#3AAEE0"
                    filter="url(#brushstroke-fill)"
                    className="group-hover:fill-sky-400 transition-colors duration-300"
                  />
                  <rect
                    x="20" y="14" width="130" height="18" rx="6"
                    fill="white"
                    opacity="0.12"
                    filter="url(#brushstroke-fill)"
                  />
                </svg>
                <span className="relative text-white text-sm font-semibold flex items-center gap-2 drop-shadow-sm">
                  Read My Story
                  <span aria-hidden="true" className="text-base leading-none">🌊</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>{/* end Hirikatiya+Noah wrapper */}

      {/* Wave: sand → white (About Noah → Reviews) */}
      <SectionDivider fromColor="#f0e9dd" toColor="#fcfcfc" />

      {/* 6 ── Google Reviews / Rating ── */}
      <section className="bg-[#fcfcfc] pb-20 md:pb-24 pt-4">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Rated 5.0 on Google
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">300+ verified Google reviews</p>
          </div>
          <ReviewsSlider reviews={googleReviews} />
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Hiriketiya+Noah+Surfing+School/@5.962363,80.7042361,17z/data=!4m18!1m9!3m8!1s0x3ae1370012226f0f:0xaf6fc116b43ab5a1!2sHiriketiya+Noah+Surfing+School!8m2!3d5.9623577!4d80.706811!9m1!1b1!16s%2Fg%2F11w9n2p__3!3m7!1s0x3ae1370012226f0f:0xaf6fc116b43ab5a1!8m2!3d5.9623577!4d80.706811!9m1!1b1!16s%2Fg%2F11w9n2p__3?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Smooth transition into gradient zone */}
      <SectionDivider fromColor="#fcfcfc" toColor="#bdd2c8" />

      {/* Gradient zone: Noah Difference → CTA */}
      <div className="gradient-zone relative overflow-hidden">
        {/* Floating surfboard decoration */}
        <div className="absolute right-6 top-32 pointer-events-none hidden xl:block opacity-15 select-none animate-[float_9s_ease-in-out_infinite]">
          <Image src="/surfboard.png" alt="" width={72} height={210} className="rotate-[14deg]" aria-hidden />
        </div>

        {/* 7 ── Why Learn With Us ── */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute right-4 top-6 rotate-[9deg] sm:right-6 sm:top-8 sm:rotate-0 pointer-events-none select-none animate-[float_7s_ease-in-out_infinite]">
            <Image src="/noah-drawing.webp" alt="" width={160} height={160} className="w-32 sm:w-36 lg:w-40 h-auto opacity-85 drop-shadow-md" aria-hidden />
          </div>
          <div className="container-site">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Noah Difference
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/80 mt-3 max-w-xl">
                Six reasons why surfers from 60+ countries choose Noah Surf School.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Ocean Safety First',
                  desc: 'Every lesson starts with a safety talk about the ocean.',
                  svg: (<Image src="/icon-difference-surfing.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
                {
                  title: 'Certified & Qualified',
                  bullets: [
                    'ISA Certified — International Surfing Association certified instructors',
                    'Diploma in Hospitality and Tourism Management, Singapore',
                  ],
                  svg: (<Image src="/icon-difference-certificate.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
                {
                  title: 'New Surfboards',
                  desc: 'Good, modern boards. We check and clean them every week.',
                  svg: (<Image src="/icon-difference-surfboard.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
                {
                  title: 'Warm Welcome',
                  desc: "Sri Lankan warmth — you'll feel at home from day one.",
                  svg: (<Image src="/icon-difference-welcome.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
                {
                  title: 'Smart Teaching',
                  desc: 'We film you surfing, practice on the beach, then coach you live in the water.',
                  svg: (<Image src="/icon-difference-classroom.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
                {
                  title: 'Teach Anyone',
                  desc: 'Ages 4 to 70 — total beginners to advanced surfers welcome.',
                  svg: (<Image src="/icon-difference-teach-anyone.png" alt="" width={48} height={48} className="w-12 h-12 shrink-0" aria-hidden />),
                },
              ].map(({ svg, title, desc, bullets }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-5">
                  <div className="text-gray-900 shrink-0 mt-1">{svg}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1">{title}</h3>
                    {bullets ? (
                      <ul className="text-gray-500 text-sm leading-relaxed space-y-1 list-disc list-inside">
                        {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 ── Gallery ── */}
        <section className="pb-20 md:pb-24 pt-4 relative overflow-hidden">
          <div className="container-site">
            <GallerySlideshow />
          </div>
        </section>

        {/* 9 ── Packages ── */}
        <HomepagePackages />

        {/* 10 ── Noah Collection + CTA wrapped for surfboard positioning ── */}
        <div className="relative">
          <ServicesSlider />

          {/* Noah turtle — sits in a zero-height marker at the ServicesSlider/CTA boundary, with no overflow-clipping ancestor, so the head is never cut off */}
          <div className="relative h-0">
            <div className="absolute right-[-20px] -top-36 pointer-events-none select-none z-0 animate-[float_8s_ease-in-out_infinite]">
              <Image src="/decor-new.png" alt="" width={572} height={572} className="w-[334px] sm:w-[401px] lg:w-[502px] h-auto opacity-95 drop-shadow-lg rotate-[15deg]" aria-hidden />
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="container-site text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight mt-5">
                Ready to Catch Your First Wave?
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/80 max-w-md mx-auto">
                Every day, 6am – 6pm. All gear included.
              </p>
            </div>
          </section>
        </div>

      </div>{/* end gradient-zone */}
    </>
  )
}
