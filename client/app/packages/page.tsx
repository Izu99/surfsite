import type { Metadata } from 'next'
import PackagesListClient from './PackagesListClient'

export const metadata: Metadata = {
  title: { absolute: 'Surf Lessons & Camps Hiriketiya | Noah Surf School Sri Lanka' },
  description:
    'Browse surf lesson packages at Hiriketiya, South Coast Sri Lanka — beginner lessons, private surf instructor, multi-day camps and surfboard rental. Equipment included.',
  alternates: { canonical: '/packages' },
  openGraph: {
    title: 'Surf Lessons & Programs | Noah Surf School Hirikatiya',
    description:
      'Browse surf lesson packages at Hirikatiya Beach, Sri Lanka — beginner lessons, private coaching, multi-day surf camps and board rentals. All equipment included.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Lessons & Programs | Noah Surf School Hirikatiya',
    description:
      'Beginner lessons, private coaching, surf camps and board rentals at Hirikatiya Beach, Sri Lanka.',
    images: ['/logo.png'],
  },
}

export default function PackagesPage() {
  return <PackagesListClient />
}
