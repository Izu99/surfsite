'use client'

import { useEffect, useState } from 'react'
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react'

type Review = {
  name: string
  rating: number
  date: string
  review: string
  avatar?: string
  link?: string
  /** Photos the reviewer attached to their review (e.g. shots of them surfing), shown after the text — same as Google Reviews */
  images?: string[]
}

function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
        <span className="text-white text-xs font-bold">{name[0].toUpperCase()}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      width={32}
      height={32}
      loading="lazy"
      className="h-8 w-8 rounded-full object-cover shrink-0"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  )
}

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
)

type LightboxState = { name: string; images: string[]; index: number }

function Lightbox({ state, onClose, onNavigate }: {
  state: LightboxState
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const { name, images, index } = state
  const hasMultiple = images.length > 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasMultiple) onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft' && hasMultiple) onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, images.length, hasMultiple, onClose, onNavigate])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo shared by ${name}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length) }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length) }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`Photo ${index + 1} shared by ${name}`}
        className="max-w-full max-h-full object-contain rounded-lg"
        referrerPolicy="no-referrer"
        onClick={(e) => e.stopPropagation()}
      />

      {hasMultiple && (
        <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  )
}

export default function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const doubled = [...reviews, ...reviews]
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  return (
    <>
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className="flex items-start gap-5 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ animationPlayState: paused ? 'paused' : undefined }}
      >
        {doubled.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-5 flex flex-col shadow-sm"
            style={{ rotate: i % 3 === 0 ? '-0.6deg' : i % 3 === 1 ? '0.5deg' : '-0.3deg' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              {review.link ? (
                <a href={review.link} target="_blank" rel="noopener noreferrer" aria-label="View on Google" className="shrink-0 hover:opacity-70 transition-opacity">
                  <GoogleIcon />
                </a>
              ) : (
                <GoogleIcon />
              )}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
              &ldquo;{review.review}&rdquo;
            </p>
            {review.images && review.images.length > 0 && (
              <div className="flex gap-2 mb-4">
                {review.images.map((src, imgIdx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox({ name: review.name, images: review.images!, index: imgIdx })}
                    aria-label={`Open photo ${imgIdx + 1} from ${review.name} full size`}
                    className="block h-20 w-20 shrink-0 rounded-lg overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Photo ${imgIdx + 1} shared by ${review.name}`}
                      loading="lazy"
                      className="block h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
            <div
              className={`flex items-center gap-3 border-t border-primary/10 pt-3 ${
                review.images && review.images.length > 0 ? 'mt-auto' : 'mt-[50px]'
              }`}
            >
              <Avatar src={review.avatar} name={review.name} />
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">{review.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {lightbox && (
      <Lightbox
        state={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox({ ...lightbox, index })}
      />
    )}
    </>
  )
}
