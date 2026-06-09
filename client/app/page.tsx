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
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKVk_2d6PuXAy7lVK8z_80njfRDnRI6dZF-YQN2AiuOhTcC-w=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/Ri0jmOdX3WZCiZmyA',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn21A124Py4o6zUNKznenvknY920t69wwrx6jcr3b58iu3X-O2XBKOTC6ykXP1t40YnfOYXdUU804asvwpuSI2g2zXqrQ9JsraPmeBhS6cvz5NZ6fCsx9m_R9I9jpAZPasrqefe1p8GfciE=w600-h450-p-k-no',
    ],
  },
  {
    name: 'Mikko',
    rating: 5,
    date: '4 months ago',
    review: 'Had a few amazing surf lessons in Hiriketiya with Noah. He has a very calm and patient way of teaching and explains things in a way even a complete beginner can understand. He paid attention to small details, helped me improve quickly, and even encouraged me to try some slightly bigger waves. Highly recommend him to anyone looking for surf lessons here!',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXwma06cGu9OLnlGbhbOnR3YTmeZDyMKWrOODMD5l08wvUX0gI=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/0bZQp8uWnzT56SUtV',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn2t2AbJCfKB0blmQAnocOAV5naR3rSwTSyKScmS7nk2Fn-W4q_c2tjffma_dF9_uaHTtXv_r1WjXaq_ByzvCDt7rRVineBg07cpgGiqEfKAbi_aRTmzTJNcew2Kc5GWx7J9ab-zvCsEOGjm=w600-h450-p-k-no',
    ],
  },
  {
    name: 'Peter Zelenay',
    rating: 5,
    date: 'a year ago',
    review: "My 4-year-old daughter had her first-ever surf lesson with Noah, and he was amazing. He was super kind, patient, and made her feel comfortable while introducing her to the basics. The pricing was more than fair, especially considering her age, attention span, and the course length. Fully recommend!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKRXfZ-E6Jl29GzZ5AALRphay9rVmDPcauhgzRCs2HgfC-4jhA=w36-h36-p-rp-mo-ba12-br100',
    link: 'https://share.google/RA3qdbdyPj0QARe28',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn0gA9p9ap86IEc027vrpHHWOq7jbRdbMCogy-VOJD73Rcshkf4O3C_cU_dejbhgWJy3zav847YfTlVRhoTereOFI8DefeqHaO7Y6ad61CJqlwc8huyAtcKvEIoSXgeWsp5vft1H=w300-h450-p-k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3dxz4kSaAe0Z-WE9hadVsjHzGuh9D2ehwFKW8dhAMLbhCymL948wbE40iswaPCPzpy2hKcaScCAtmsGYTy0Nc7rLbSRBW7IOFgJ0gBoBp6_M1agqSvq8B4kbJUkjUQ4MAlMRU=w300-h225-p-k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn25f9ElVO4JIlmhYrODvSqVwzIv_K4ox1xf8gNPJZM4EKTh1VaNeoubm0BvM37W_SZ4FQO2IKz-Y42Jf4d6cYGj3KGqoMOO8ZVhZfMGva-mgRpM9fJqhAoJuhB4zGscg-MkNmnLSA=w300-h225-p-k-no',
    ],
  },
  {
    name: 'Fabienne B.',
    rating: 5,
    date: 'a year ago',
    review: "My best surf lessons so far: absolute recommendation! Noah speaks very good English and is great at explaining things. He knows exactly where to start and teaches you the really important things so that you get better and better and can eventually catch your own waves. What's more, he's just a very cool and relaxed guy who immediately makes you feel at ease. Thank you Noah!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI3NSZmg43ujHczBSK2_i-ixesc0H4TnxWLLT6h0kdpxpk2Yg=w36-h36-p-rp-mo-ba12-br100',
    link: 'https://share.google/BnR2ncWQ3m3OjHIw6',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn0t-r3LAJfDFIE1WUCyhv6awUL4y2B2m9LFMlNZzt2Qsf_Oaqxit4Dzrs8qblVncxwp6FOQDOwGDdTELE2iw9AnkJzpWLCAQ8Taxijw9eJHI5mU38FET3JpHPwVADZqsUTBHjgYLA=w300-h450-p-k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3IcvKhPi7lavsBM5mHGmZgqabLDKcr6WHG0tG3Pk5RFLKOnyrOjg1Kyv4183O76riuMpjUyb5zdSkI4SmLhZKdYZjE-qMFEqvTNKhhX6fzrhjvMV_K_ET7mjWUaXeAQw-fmqcb=w300-h450-p-k-no',
    ],
  },
  {
    name: 'Michal Vachler',
    rating: 5,
    date: 'a year ago',
    review: "One of the best activities we did in Sri Lanka. What makes this experience unique is Noah. A friendly, easygoing, funny, professional surfer who helped us surf our first wave. Noah takes care of safety. We did stretching together before the lesson. I really enjoyed the theory about the bay, how water flows, what kinds of waves there are. The lesson is long enough for a good price. Noah tried really hard to help us surf the first wave and it worked :) Thank you!",
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUj8JTnYLGmx_EaRMcHr3suAzZD7q5CaOChXUz7ss5l7ooQMpu7=w36-h36-p-rp-mo-ba12-br100',
    link: 'https://share.google/AjmA7LVPabo6X8iF5',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn0h4CHnfgM6suoecfsuN2Ai4_OgRJoTfj_I4T84iXUCG_haj_i7wZu2_z60TJzRweXBiRnVQ7M6kSvrpQRE4JqYKoC6bwQVeUdvqapaXRUind8hCOgcxDqwasIOyn9pkZLYiUXk=w600-h450-p-k-no',
    ],
  },
  {
    name: 'Wendy Schippers',
    rating: 5,
    date: '2 weeks ago',
    review: "Best Surf teacher! I took two surf lessons with Noah, and I felt so incredibly supported — he is such a great instructor. Noah speaks English at a good level and is one of the more experienced surfers and instructors. He focuses on safety, a step-by-step approach, and gives great explanations. And once you are on the board, you know what it means to catch a wave — it's unreal!",
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW9b15-jt9FhHfN7w0TPx24l-YG4cNCVqcQ-kQBSo8VUKFhhayN=w36-h36-p-rp-mo-ba4-br100',
    link: 'https://share.google/nAzpyaHUnrnUaj2di',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn0w1VC9gkGvR7wN_Ek0TX3b_yhw7qJ1885jhQOV0GN-1-F3YnUtI6cxD6UrklryDfEOQN-Ir3U07JZEBCNowpuSgdi-YJ7PpwNuEN0ENgwpWhnI8Nsln8nq8koN0-q1GiHsnMBr4AvCDvNA=w300-h450-p-k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3MY293czUMBkEuyoULscd4o6c5fj_C1FLgFXn-roMVZFlxoaC-v575MwHf0JiFWFAEr1D75iXGQv5zMxMUtWi-4o9PHF_8xSk0fp1hzz8q937Ce5s5A0tYvWl7l2wP75Hybnl3vYtD4JmV=w300-h450-p-k-no',
    ],
  },
  {
    name: 'Nina Thornton',
    rating: 5,
    date: '8 months ago',
    review: "Best surf school ever! It was my first time surfing but my boyfriend already surfed a few times in different countries and he also said he had never experienced such good teachers. They take safety very seriously, take you to a beach where the waves are not as rough but still great for surfing, especially for beginners. They really give you one-on-one guidance even when you're with a whole group. Amazing feedback that's really helpful!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ6T7einuvwtQKvbHlp0sf-IpPZ7mLsdaEtpB-GaspC3oHFLpc=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/HqMaFIWAU00h5P4X8',
  },
  {
    name: 'Hasanthi De Silva',
    rating: 5,
    date: '9 months ago',
    review: "Noah and his assistant were fantastic instructors! They patiently taught the technique on land first, then guided the kids into the water. They even chose a quieter beach with gentler waves, perfect for young learners. The kids picked up surfing on their very first try! A wonderful experience — highly recommend for a safe, personalized, and fun surfing lesson.",
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUD3jEPX-qDFlnpqhXSaBvu-9rcBgKrd7E-qBzmjeur5SAIbuil=w36-h36-p-rp-mo-ba12-br100',
    link: 'https://share.google/5Lf6plIWRLW99HWpt',
  },
  {
    name: 'Andrea Sodero',
    rating: 5,
    date: '9 months ago',
    review: "Epic Experience! 5 stars are not enough 🤙 3 awesome surf coaches for just 4 of us! Always safety first, but still all the fun. They took us to a perfect beginner-friendly beach near Hiri and it was just amazing. Hands down, best surf lesson ever! Thanks to Noah and the crew — you guys rock 🌊🏄‍♂️🔥",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKxCeaaUCo1dN8HbeDBUlt5WGtIiIf0UEoFcYs073GzpGWhig=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/eCe7qMoNx4tufKTc8',
  },
  {
    name: 'Samuel Durrance',
    rating: 5,
    date: '5 months ago',
    review: "We first observed Noah delivering a lesson whilst having our own lesson with another surf school. Switching schools was the best decision we made. Noah was incredibly attentive to all the finer details — patient, informative and an incredibly good instructor which made our lesson both enjoyable and successful. We couldn't recommend Noah highly enough for those wanting to get into surfing in Hiriketiya!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocId5e99bS98G22ZwK6pj_1zgkrbDoPwOkP7laCGe6yD8LTMlQ=w36-h36-p-rp-mo-ba2-br100',
    link: 'https://share.google/eBLuVzljpX5FO5e9p',
  },
  {
    name: 'Karl Krauss',
    rating: 5,
    date: '3 months ago',
    review: "First surf teacher I ever encountered who skipped lessons in bad wave conditions instead of just taking money. Very honest and friendly person. Helped me catch my first waves at the point break in Hiri. I highly recommend him for intermediate surfers — and he'll be great for beginners too!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIT1Mp2YpLE0OE8-H3uZCDIoN5tC2qVQtt3VT4wMcqRgW2arQ=w36-h36-p-rp-mo-ba12-br100',
    link: 'https://share.google/BFDReTy6fF3C7uVP8',
  },
  {
    name: 'Ashmead Road',
    rating: 5,
    date: '5 months ago',
    review: "Noah is a magician. I wanted to try the point break on Hiriketiya beach but as an intermediate surfer, I was nervous. I booked Noah and had one of the best surfs of my life. He is kind, patient and a very skilled instructor. He helped me navigate the reef and catch some fantastic waves. I couldn't recommend him enough for a one-on-one session.",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKT9rwkKyOf8Y3nBhhdACaMx0AIrCSobTQWhU_8ovDV_uWCKQ=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/Lyd6gKKraV4QDEKCS',
  },
  {
    name: 'Jozef',
    rating: 5,
    date: '8 months ago',
    review: "I normally don't write reviews on my trips, but this one deserves it. Noah and his friends are awesome surf teachers. They cover the fundamentals: safety, surf rules and of course the surfing itself. I've taken surf lessons all over the world, but their quality of teaching really surprised me. 100% recommend, 10/10. You won't be disappointed! ✌🏽",
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWVO1sGuoLd0vUAvRV_snLCI0YQ9D1Lv3qPgPi-xAn1bY071oI=w36-h36-p-rp-mo-br100',
    link: 'https://share.google/fACN8BmdmJOjlCNJY',
  },
  {
    name: 'mightyshroom',
    rating: 5,
    date: '2 months ago',
    review: "Noah has been by far the best instructor I've ever had. He took the time to explain not only the technique, but also ocean safety. He has a great eye for spotting what you're doing wrong — follow his advice and you will pop up in no time. His lessons are structured and systematic, almost like he's found the recipe for success. I truly felt like I was in good hands!",
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKNuOE-bznQlMP6h3NV4fMlbkqWjzIyY7J8n7l1fbiPlQHTGQ=w36-h36-p-rp-mo-ba2-br100',
    link: 'https://share.google/5zLKrNAHK2MapANnc',
  },
  {
    name: 'you sef',
    rating: 5,
    date: '2 months ago',
    review: "Noah is an amazing guy. He took great attention to all details, from surfing etiquette in the water to safety. He took time with each mistake I made, explaining it until I understood and corrected it. Just go ahead and give it a try — you will see progress after the first hour together, guaranteed. Noah, keep it up, you're doing a pretty damn good job ❤️",
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU6Tq57xbTd0ND_TmzoTRXbrQ1IFLid1qMhp8m8-lLpZyyROurq=w36-h36-p-rp-mo-ba12-br100',
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

export default function HomePage() {
  return (
    <>
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
            {/* Right: video */}
            <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/LwU4zxolXoY?autoplay=1&mute=1&loop=1&playlist=LwU4zxolXoY&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1"
                title="Noah Surf School — Hirikatiya Beach, Sri Lanka"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hirikatiya + About Noah — wrapped so surfboard spans both ── */}
      <div className="relative">
        {/* ONE Noah surfboard spanning both sections on the right */}
        <div className="absolute right-[-25px] top-[-20px] pointer-events-none select-none z-10 animate-[float_9s_ease-in-out_infinite]">
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
                src="/hirikatiya-bay.png"
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
              href="https://www.google.com/maps/place/Hirikatiya+Beach"
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
            <Image src="/noah-drawing.png" alt="" width={160} height={160} className="w-32 sm:w-36 lg:w-40 h-auto opacity-85 drop-shadow-md" aria-hidden />
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
                  svg: (<Image src="/icon-difference-certificate.gif" alt="" width={48} height={48} unoptimized className="w-12 h-12 shrink-0" aria-hidden />),
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
                  svg: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 shrink-0">
                      <circle cx="24" cy="11" r="6"/>
                      <path d="M12 44V34C12 28 16 24 24 24C32 24 36 28 36 34V44"/>
                      <path d="M8 36C8 36 4 33 4 29C4 26 6 24 8 24"/>
                      <path d="M40 36C40 36 44 33 44 29C44 26 42 24 40 24"/>
                    </svg>
                  ),
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
          {/* Noah surfboard — right side, starts at card bottom, spans into CTA */}
          <div className="absolute right-[-30px] top-[510px] pointer-events-none select-none z-10 animate-[float_8s_ease-in-out_infinite]">
            <Image src="/decor-new.png" alt="" width={572} height={572} className="w-[352px] sm:w-[422px] lg:w-[528px] h-auto opacity-95 drop-shadow-lg rotate-[15deg]" aria-hidden />
          </div>

          <ServicesSlider />

          {/* ── CTA Banner ── */}
          <section className="py-24 md:py-32">
            <div className="container-site text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
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
