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
      <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
        A stunning horseshoe-shaped bay on Sri Lanka&apos;s south coast — where jungle meets turquoise ocean. World-class waves, warm waters, and endless good vibes.
      </p>

      {/* Icon highlights */}
      <ul className="space-y-3 mb-8">
        {highlights.map(({ icon: Icon, bold, text }) => (
          <li key={bold} className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm">
              <strong className="text-gray-900 font-semibold">{bold}</strong>
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3">
        {facts.map(({ label, value }) => (
          <div key={label} className="border border-gray-200 rounded-2xl p-4 bg-gray-50">
            <p className="font-display text-3xl text-primary font-bold leading-none">{value}</p>
            <p className="text-gray-500 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
