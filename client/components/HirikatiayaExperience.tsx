import Image from 'next/image'

const highlights = [
  { icon: '/icon-surfboard2.png', text: 'Surfing for all levels — beginner to pro surfers' },
  { icon: '/icon-beach.png',      text: 'The most beautiful beach on the South Coast' },
  { icon: '/icon-turtle.png',     text: 'Sea turtles — swim with them' },
  { icon: '/icon-cafe.png',       text: 'All-in-one village: restaurants, cafes, parties, and total relaxation' },
]

export default function HirikatiayaExperience() {
  return (
    <div>
      <p className="text-white/85 text-sm leading-relaxed mb-8 max-w-xl">
        A beautiful, hidden bay on Sri Lanka&apos;s south coast where the jungle meets the ocean. Perfect waves, warm water, and great vibes.
      </p>

      <div className="space-y-5">
        {highlights.map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-4">
            <Image src={icon} alt="" width={32} height={32} className="shrink-0" aria-hidden />
            <p className="text-sm text-white/90">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
