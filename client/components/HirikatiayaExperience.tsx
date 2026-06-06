'use client'

import Link from 'next/link'
import Image from 'next/image'

const highlights = [
  { icon: '/icons/icons8-surf-96.png',        bold: 'Surfing',              text: ' for all levels' },
  { icon: '/icons/icons8-ocean-wave-100.png', bold: 'Sea Turtles',          text: ' — swim with them!' },
  { icon: '/icons/icons8-sun-50.png',         bold: 'Yoga & Wellness',      text: '' },
  { icon: '/icons/icons8-location-50.png',    bold: 'Hiriketiya Beach',     text: ' — the ultimate escape' },
  { icon: '/icons/icons8-alarm-clock-50.png', bold: 'Sunsets',              text: ' at Dickwella Beach' },
  { icon: '/icons/icons8-globe-50.png',       bold: 'Digital Nomad Hub',    text: ' — cafes & co-work' },
]

const facts = [
  { label: 'Swell consistency', value: '95%' },
  { label: 'Water temp',        value: '27°C' },
  { label: 'Beginner days/yr',  value: '300+' },
  { label: 'Surf breaks',       value: '4' },
]

export default function HirikatiayaExperience() {
  return (
    <div>
      <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
        <Image src="/icons/icons8-location-50.png" alt="" width={16} height={16} className="brightness-200" />
        About Hirikatiya
      </span>

      <h2 className="font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
        The Hirikatiya<br />Experience
      </h2>

      <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-xl">
        A stunning horseshoe-shaped bay on Sri Lanka&apos;s south coast — where jungle meets turquoise ocean. World-class waves, warm waters, and endless good vibes.
      </p>

      {/* Icon highlights */}
      <ul className="space-y-3 mb-8">
        {highlights.map(({ icon, bold, text }) => (
          <li key={bold} className="flex items-center gap-3 text-white/85">
            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Image src={icon} alt="" width={18} height={18} className="brightness-200 object-contain" />
            </div>
            <span className="text-sm">
              <strong className="text-white font-semibold">{bold}</strong>
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {facts.map(({ label, value }) => (
          <div key={label} className="border border-white/20 rounded-2xl p-4">
            <p className="font-display text-3xl text-primary-light font-bold leading-none">{value}</p>
            <p className="text-white/55 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-md"
      >
        Book Your Experience
      </Link>
    </div>
  )
}
