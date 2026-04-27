'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const highlights = [
  { bold: 'Hiriketiya Beach:', text: ' The Ultimate Tropical Escape' },
  { bold: 'Surfing', text: ' for All Levels' },
  { bold: 'Swim with Sea Turtles', text: '' },
  { bold: 'Yoga and Wellness', text: '' },
  { bold: 'Cafe Hopping & Digital Nomad Life', text: '' },
  { bold: 'Sunset at Dickwella Beach', text: '' },
  { bold: 'Nightlife & Live Music', text: '' },
]

const facts = [
  { label: 'Year-round swell consistency', value: '95%' },
  { label: 'Average water temperature', value: '27°C' },
  { label: 'Beginner-friendly days/year', value: '300+' },
  { label: 'Surf breaks at Hirikatiya', value: '4' },
]

function StatCard({ label, value, delay }: { label: string; value: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="border border-white/20 p-5 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="text-3xl font-extrabold text-primary-light">{value}</p>
      <p className="text-white/60 text-sm mt-1">{label}</p>
    </div>
  )
}

export default function HirikatiayaExperience() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const item = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  return (
    <div ref={ref}>
      <div className="flex items-center gap-3 mb-4" style={item(0)}>
        <span className="w-8 h-px bg-primary-light block shrink-0" />
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
          Hirikatiya Today
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={item(100)}>
        The Hirikatiya<br />Experience
      </h2>

      <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl" style={item(200)}>
        Hiriketiya Beach (often called &quot;Hiri&quot;) is a stunning horseshoe-shaped bay located on the southern coast of Sri Lanka. Known for where the lush jungle meets the turquoise Indian Ocean, it has transformed from a hidden gem into a vibrant hub for surfers, digital nomads, and wellness seekers. The bay’s unique geography creates a calm, protected area perfect for swimming, while providing world-class waves that roll in for nearly ten months of the year.
      </p>

      {/* Highlights List */}
      <ul className="space-y-3 mb-10" style={item(300)}>
        {highlights.map((itemObj, i) => (
          <li key={i} className="flex items-start gap-3 text-white/80" style={item(400 + i * 50)}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light mt-2 shrink-0" />
            <span className="text-base">
              <strong className="text-white font-bold">{itemObj.bold}</strong>
              {itemObj.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {facts.map(({ label, value }, i) => (
          <StatCard key={label} label={label} value={value} delay={800 + i * 100} />
        ))}
      </div>

      <div style={item(1200)}>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
        >
          Book Your Experience
        </Link>
      </div>
    </div>
  )
}
