'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Check, Users, Gift } from 'lucide-react'

const LEARN_ITEMS = [
  'How to stay safe in the water and read the ocean a little better',
  'Surf etiquette – yeah, there are rules, and they matter',
  "Paddling the right way (so you don't exhaust yourself)",
  'The pop-up – getting to your feet without looking like a dying starfish',
  'Balance, how to stand, and controlling your board',
  'Catching white-water waves (the easy, fun ones to start with)',
  'Basic turns to steer where you want to go',
  'Getting comfortable in the ocean and actually building confidence',
]

export default function PackageCardCompact() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col w-full sm:w-80 rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 bg-white transition-all duration-300">
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <Image
            src="/beginner-group-lesson.webp"
            alt="Beginner Lessons"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2">
              <Users className="h-3.5 w-3.5" />
              1-on-1
            </span>
            <p className="text-white text-lg font-bold">Beginner Lessons</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            Perfect if you&apos;ve never surfed before or have only tried it a couple times.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-dark cursor-pointer"
          >
            Read More
          </button>

          <div className="border-t border-gray-100" />

          <div className="flex items-start leading-none gap-0.5">
            <span className="text-lg font-bold mt-1 text-gray-400">$</span>
            <span className="text-4xl font-extrabold text-gray-900">29</span>
            <span className="text-xs self-end mb-1 ml-1.5 text-gray-400">/ per session</span>
          </div>

          <Link
            href={`/contact?package=${encodeURIComponent('Beginner Lessons')}`}
            className="block text-center px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors bg-gray-900 text-white hover:bg-primary"
          >
            Book Now
          </Link>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[88px]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[calc(100vh-104px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-48 shrink-0">
              <Image
                src="/beginner-group-lesson.webp"
                alt="Beginner Lessons"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white text-lg font-bold">Beginner Lessons</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Perfect if you&apos;ve never surfed before or have only tried it a couple times.
              </p>

              <div>
                <p className="font-bold text-gray-900 mb-2">What you&apos;ll learn:</p>
                <ul className="space-y-2">
                  {LEARN_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <span className="flex items-center gap-1.5 text-amber-600 font-display text-2xl">
                <Gift className="h-3.5 w-3.5" />
                Souvenir included
              </span>

              <div className="flex items-start leading-none gap-0.5">
                <span className="text-lg font-bold mt-1 text-gray-400">$</span>
                <span className="text-4xl font-extrabold text-gray-900">29</span>
                <span className="text-xs self-end mb-1 ml-1.5 text-gray-400">/ per session</span>
              </div>

              <Link
                href={`/contact?package=${encodeURIComponent('Beginner Lessons')}`}
                className="block text-center px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors bg-gray-900 text-white hover:bg-primary"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
