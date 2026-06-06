import Image from 'next/image'

const SunsetIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-10 h-10">
    <path d="M32 14a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2zM14.3 21.7l2.8 2.8a2 2 0 0 1-2.8 2.8l-2.8-2.8a2 2 0 0 1 2.8-2.8zM49.7 21.7a2 2 0 0 1 2.8 2.8l-2.8 2.8a2 2 0 0 1-2.8-2.8l2.8-2.8zM8 38a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4H8zM52 38a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4h-4z"/>
    <path d="M18 38a14 14 0 0 1 28 0H18z"/>
    <rect x="6" y="42" width="52" height="4" rx="2"/>
    <rect x="14" y="50" width="36" height="4" rx="2"/>
  </svg>
)

const YogaIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-10 h-10">
    <circle cx="32" cy="10" r="5"/>
    <path d="M32 18c-4 0-7 2-8 6l-6 12h6l3-6v8l-8 14h7l6-10 6 10h7l-8-14v-8l3 6h6l-6-12c-1-4-4-6-8-6z"/>
  </svg>
)

const highlights = [
  { key: 'yoga',     bold: 'Yoga & Wellness',   text: '',                         svg: true },
  { key: 'beach',    bold: 'Hiriketiya Beach',  text: ' — the ultimate escape',   src: '/icon-beach.png' },
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
        A beautiful, hidden bay on Sri Lanka&apos;s south coast where the jungle meets the ocean. Perfect waves, warm water, and great vibes.
      </p>

      <ul className="space-y-4 mb-8">
        {highlights.map(({ key, bold, text, src, svg }) => (
          <li key={key} className="flex items-center gap-4 text-gray-700">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              {src ? (
                <Image src={src} alt={bold} width={40} height={40} className="object-contain" />
              ) : svg === 'sunset' ? (
                <SunsetIcon />
              ) : (
                <YogaIcon />
              )}
            </div>
            <span className="text-sm">
              <strong className="text-gray-900 font-semibold">{bold}</strong>
              {text}
            </span>
          </li>
        ))}
      </ul>

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
