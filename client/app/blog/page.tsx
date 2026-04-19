import type { Metadata } from 'next'
import BlogListClient from './BlogListClient'

export const metadata: Metadata = {
  title: { absolute: 'Surf Tips, Stories & Travel Guides | Noah Surf School Blog' },
  description:
    'Surf tips, technique guides, Hirikatiya travel stories, wave reports and south coast Sri Lanka life written by the instructors at Noah Surf School, Hirikatiya.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Surf Tips, Stories & Travel Guides | Noah Surf School Blog',
    description:
      'Surf tips, technique guides, Hirikatiya travel stories, wave reports and south coast Sri Lanka life written by the instructors at Noah Surf School, Hirikatiya.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
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
  return <BlogListClient />
}
