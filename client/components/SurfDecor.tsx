import { cn } from '@/lib/utils'

type Props = { className?: string }

export function WaveDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 140 55" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M0,32 C14,16 24,42 38,28 C52,14 62,42 78,28 C94,14 104,42 120,28 C130,20 136,30 140,30 L140,55 L0,55 Z" />
      <path d="M0,32 C5,25 11,27 13,22 C10,26 4,34 0,32 Z" />
    </svg>
  )
}

export function CurlWaveDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 100 80" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M18,48 C18,28 32,14 46,16 C56,18 60,28 58,36 C56,44 48,46 44,42 C38,36 40,27 46,28 C42,24 34,28 32,38 C30,46 26,54 18,50 Z" />
      <path d="M58,36 C65,36 80,44 90,56 C95,62 98,70 100,72 L100,80 L0,80 C2,74 8,65 14,60 C20,55 28,54 36,54 C46,54 54,58 60,58 C70,58 78,53 86,55" />
    </svg>
  )
}

export function SurfboardDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 36 108" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M18,3 C10,3 4,20 4,48 C4,74 9,92 18,103 C27,92 32,74 32,48 C32,20 26,3 18,3 Z" />
      <path d="M18,103 C15,100 11,106 13,110 L18,103 Z" />
    </svg>
  )
}

export function PalmDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 72 100" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M34,96 C33,82 32,68 34,54" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M34,56 C26,52 14,50 4,40 C14,42 28,52 34,56 Z" />
      <path d="M34,56 C30,46 28,32 32,20 C30,30 32,46 35,56 Z" />
      <path d="M35,56 C42,50 54,46 64,36 C58,42 44,52 35,56 Z" />
      <path d="M35,56 C38,46 50,38 60,30 C54,36 40,48 35,56 Z" />
      <path d="M34,56 C26,50 14,48 4,50 C14,46 28,52 34,56 Z" />
    </svg>
  )
}

export function FlowerDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className} aria-hidden focusable="false">
      <ellipse cx="30" cy="14" rx="7" ry="13" />
      <ellipse cx="30" cy="14" rx="7" ry="13" transform="rotate(72 30 30)" />
      <ellipse cx="30" cy="14" rx="7" ry="13" transform="rotate(144 30 30)" />
      <ellipse cx="30" cy="14" rx="7" ry="13" transform="rotate(216 30 30)" />
      <ellipse cx="30" cy="14" rx="7" ry="13" transform="rotate(288 30 30)" />
      <circle cx="30" cy="30" r="8" />
    </svg>
  )
}

export function WaveLineDecor({ className }: Props) {
  return (
    <svg viewBox="0 0 120 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
         className={className} aria-hidden focusable="false">
      <path d="M4,15 C14,5 22,24 32,15 C42,6 50,24 60,15 C70,6 78,24 88,15 C98,6 106,24 116,15" />
    </svg>
  )
}

interface ScatterProps {
  icon: 'wave' | 'curl' | 'board' | 'palm' | 'flower' | 'line'
  className?: string
  size?: string
  rotate?: string
  opacity?: string
}

export function Scatter({ icon, className, size = 'w-16', rotate = '', opacity = 'opacity-20' }: ScatterProps) {
  const base = cn('absolute pointer-events-none select-none text-black', size, rotate, opacity, className)
  if (icon === 'wave')   return <WaveDecor className={base} />
  if (icon === 'curl')   return <CurlWaveDecor className={base} />
  if (icon === 'board')  return <SurfboardDecor className={base} />
  if (icon === 'palm')   return <PalmDecor className={base} />
  if (icon === 'flower') return <FlowerDecor className={base} />
  return <WaveLineDecor className={base} />
}
