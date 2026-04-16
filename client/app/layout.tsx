import type { Metadata } from 'next'
import { Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'
import SiteShell from '@/components/SiteShell'
import { Providers } from '@/components/Providers'

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    template: '%s | Noah Surf School',
  },
  description:
    'Learn to surf with certified ILS instructors at Hirikatiya Beach, Sri Lanka. Beginner lessons, advanced coaching, board rentals, surf camps, and yoga retreats. Open daily 6am–6pm.',
  keywords: [
    'surf school',
    'Hirikatiya',
    'Sri Lanka',
    'surf lessons',
    'surfing',
    'learn to surf',
    'Noah',
    'ILS certified',
    'surf camp Sri Lanka',
    'Hirikatiya Beach surfing',
  ],
  openGraph: {
    siteName: 'Noah Surf School',
    locale: 'en_US',
    type: 'website',
    title: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    description:
      'Learn to surf with certified ILS instructors at Hirikatiya Beach, Sri Lanka. Beginner lessons, advanced coaching, board rentals, surf camps, and yoga retreats.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    description:
      'Learn to surf with certified ILS instructors at Hirikatiya Beach, Sri Lanka. Open daily 6am–6pm.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={firaSansCondensed.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  )
}
