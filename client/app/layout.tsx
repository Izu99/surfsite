import type { Metadata } from 'next'
import { Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'
import SiteShell from '@/components/SiteShell'
import { Providers } from '@/components/Providers'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

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
    'Learn to surf with certified ISA instructors at Hirikatiya Beach, Sri Lanka. Group and private lessons, surf camps, board rentals. Open daily 6am–6pm.',
  keywords: [
    // Brand
    'Noah Surf School',
    'Noah Surf School Hiriketiya',
    'Noah Surf Sri Lanka',
    'Hiriketiya Noah Surfing School',
    // Location
    'surf school Hiriketiya',
    'surf lessons Matara',
    'surfing Galle',
    'Dickwella surf school',
    'South Coast Sri Lanka surfing',
    'Hiriketiya Beach surfing',
    // Services
    'beginner surf lessons',
    'intermediate surf coaching',
    'private surf instructor Sri Lanka',
    'surf camp Sri Lanka',
    'surfboard rental Hiriketiya',
    // Beginner intent
    'learn to surf Sri Lanka',
    'first time surfing Hiriketiya',
    'safe surf lessons for beginners',
    'kids surf lessons Sri Lanka',
    // Advanced intent
    'surf guiding Matara',
    'advanced surfing Hiriketiya reef',
    'surf photography Sri Lanka',
    // Vibe
    'local surf instructors Hiriketiya',
    'authentic Sri Lankan surf experience',
    'eco-friendly surf camp Sri Lanka',
  ],
  openGraph: {
    siteName: 'Noah Surf School',
    locale: 'en_US',
    type: 'website',
    title: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    description:
      'Learn to surf with certified ISA instructors at Hirikatiya Beach, Sri Lanka. Beginner lessons, advanced coaching, board rentals, surf camps, and yoga retreats.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    description:
      'Learn to surf with certified ISA instructors at Hirikatiya Beach, Sri Lanka. Open daily 6am–6pm.',
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
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  )
}
