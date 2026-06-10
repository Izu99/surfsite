import type { Metadata } from 'next'
import BlogListClient from './BlogListClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Surf Tips, Stories & Travel Guides | Noah Surf School Blog' },
  description:
    'Surf tips, technique guides, Hirikatiya travel stories, wave reports and south coast Sri Lanka life written by the instructors at Noah Surf School, Hirikatiya.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Surf Tips, Stories & Travel Guides | Noah Surf School Blog',
    description:
      'Surf tips, technique guides, Hirikatiya travel stories, wave reports and south coast Sri Lanka life written by the instructors at Noah Surf School, Hirikatiya.',
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Tips, Stories & Travel Guides | Noah Surf School Blog',
    description:
      'Surf tips, Hirikatiya travel stories, wave reports and south coast life from Noah Surf School.',
    images: ['/logo.png'],
  },
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]} />
      <BlogListClient />
    </>
  )
}
