import type { Metadata } from 'next'
import PackagesListClient from './PackagesListClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Surf Lessons & Camps Hiriketiya | Noah Surf School Sri Lanka' },
  description:
    'Surf lesson packages at Hiriketiya, South Coast Sri Lanka — beginner lessons, private instruction, multi-day camps and board rental. Equipment included.',
  alternates: { canonical: '/packages' },
  openGraph: {
    title: 'Surf Lessons & Programs | Noah Surf School Hiriketiya',
    description:
      'Browse surf lesson packages at Hiriketiya Beach, Sri Lanka — beginner lessons, private coaching, multi-day surf camps and board rentals. All equipment included.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Lessons & Programs | Noah Surf School Hiriketiya',
    description:
      'Beginner lessons, private coaching, surf camps and board rentals at Hiriketiya Beach, Sri Lanka.',
    images: ['/logo.png'],
  },
}

export default function PackagesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }]} />
      <PackagesListClient />
    </>
  )
}
