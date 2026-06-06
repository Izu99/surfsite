'use client'

import Link from 'next/link'
import { Waves, Fish, Sun, MapPin, Clock, Wifi, type LucideIcon } from 'lucide-react'

type Highlight = { icon: LucideIcon; bold: string; text: string }

const highlights: Highlight[] = [
  { icon: Waves,  bold: 'Surfing',           text: ' for all levels' },
  { icon: Fish,   bold: 'Sea Turtles',        text: ' — swim with them!' },
  { icon: Sun,    bold: 'Yoga & Wellness',    text: '' },
  { icon: MapPin, bold: 'Hiriketiya Beach',   text: ' — the ultimate escape' },
  { icon: Clock,  bold: 'Sunsets',            text: ' at Dickwella Beach' },
  { icon: Wifi,   bold: 'Digital Nomad Hub',  text: ' — cafes & co-work' },
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
        <MapPin className="w-4 h-4" />
        About Hirikatiya
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        The Hirikatiya<br />Experience
      </h2>

      <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-xl">
        A stunning horseshoe-shaped bay on Sri Lanka&apos;s south coast — where jungle meets turquoise ocean. World-class waves, warm waters, and endless good vibes.
      </p>

      {/* Icon highlights */}
      <ul className="space-y-3 mb-8">
        {highlights.map(({ icon: Icon, bold, text }) => (
          <li key={bold} className="flex items-center gap-3 text-white/85">
            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-white" />
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
            <p className="text-3xl text-primary-light font-bold leading-none">{value}</p>
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
