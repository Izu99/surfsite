import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, Caveat, Italianno } from 'next/font/google'
import './globals.css'
import SiteShell from '@/components/SiteShell'
import { Providers } from '@/components/Providers'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { jsonLdString } from '@/lib/json-ld'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    template: '%s | Noah Surf School',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
    images: [{ url: '/logo.png', width: 1020, height: 1020, alt: 'Noah Surf School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Surf School | Surf Lessons at Hirikatiya Beach, Sri Lanka',
    description:
      'Learn to surf with certified ISA instructors at Hirikatiya Beach, Sri Lanka. Open daily 6am–6pm.',
    images: ['/logo.png'],
  },
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Noah Surf School',
  image: `${siteUrl}/logo.png`,
  logo: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: '+94713207241',
  email: 'noahsurfhiriketiya2@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hirikatiya Beach',
    addressRegion: 'Southern Province',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.9624342109168165,
    longitude: 80.70676637386983,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    opens: '06:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.instagram.com/hiriketiya_noah_surf_school?igsh=MTA5dW1kdGh3MnJiNw==',
    'https://www.facebook.com/share/19CWBdk9m1/?mibextid=wwXIfr',
    'https://www.tiktok.com/@noah_surf_hiri?_r=1&_t=ZS-97t3FjESDkT',
    'https://youtube.com/@noahsurfschool',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable} ${italianno.variable} overflow-x-hidden`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LPDJZ6SEJH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LPDJZ6SEJH');
            gtag('config', 'AW-18314583481');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd) }}
        />
        <Providers>
          <SiteShell>{children}</SiteShell>
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  )
}
