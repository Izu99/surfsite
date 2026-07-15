'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Mounts the YouTube iframe only once its container scrolls near the
 * viewport. Native loading="lazy" is not enough here — Chrome's lazy
 * threshold for iframes is several thousand px on slow connections, so
 * the embed (player JS + Roboto fonts, ~600 KB) still competed with the
 * initial page load on mobile.
 */
export default function LazyVideoEmbed({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      {visible && (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}
    </div>
  )
}
