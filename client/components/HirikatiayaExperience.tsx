'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

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

      <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md" style={item(200)}>
        Hiriketiya Beach has emerged as a world-class surfing hidden gem.
        Recognized globally for its perfect horseshoe bay and consistent waves,
        Hiriketiya is no longer just a local favorite — it is one of the most
        popular surf beaches in the world.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {facts.map(({ label, value }, i) => (
          <StatCard key={label} label={label} value={value} delay={300 + i * 100} />
        ))}
      </div>

      <div style={item(700)}>
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
