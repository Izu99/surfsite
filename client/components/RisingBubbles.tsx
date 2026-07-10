type Bubble = {
  left: string
  size: number
  rise: number
  riseDuration: number
  swayDuration: number
  delay: number
  sway: number
}

// Big bubbles rise faster, sway wider, and wobble more — small ones drift
// up slowly and stay nearly spherical, matching real bubble physics
const bubbles: Bubble[] = [
  { left: '4%',  size: 10, rise: 260, riseDuration: 10,   swayDuration: 3.5, delay: 0,   sway: 8 },
  { left: '14%', size: 22, rise: 360, riseDuration: 7.5,  swayDuration: 4.5, delay: 1.2, sway: -18 },
  { left: '24%', size: 14, rise: 300, riseDuration: 9,    swayDuration: 3,   delay: 2.4, sway: 12 },
  { left: '37%', size: 28, rise: 400, riseDuration: 6.5,  swayDuration: 5,   delay: 0.6, sway: -22 },
  { left: '50%', size: 9,  rise: 250, riseDuration: 10.5, swayDuration: 3.2, delay: 3,   sway: 7 },
  { left: '62%', size: 18, rise: 340, riseDuration: 8,    swayDuration: 4,   delay: 1.8, sway: -14 },
  { left: '74%', size: 12, rise: 280, riseDuration: 9.5,  swayDuration: 3.6, delay: 4.2, sway: 10 },
  { left: '85%', size: 24, rise: 380, riseDuration: 7,    swayDuration: 4.8, delay: 0.9, sway: -20 },
  { left: '94%', size: 8,  rise: 240, riseDuration: 11,   swayDuration: 3,   delay: 2.7, sway: 6 },
]

export default function RisingBubbles() {
  return (
    <div className="absolute inset-x-0 bottom-full h-0 overflow-visible pointer-events-none select-none z-20" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.riseDuration}s, ${b.swayDuration}s, ${b.swayDuration * 1.4}s`,
            animationDelay: `${b.delay}s, ${b.delay}s, ${b.delay}s`,
            ['--rise' as string]: `${b.rise}px`,
            ['--sway' as string]: `${b.sway}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
