import type { Metadata } from 'next'
import { Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WavePeak Surf School | Hikkaduwa Beach, Sri Lanka',
    template: '%s | WavePeak Surf School',
  },
  description:
    'Learn to surf with certified instructors at Hikkaduwa Beach, Sri Lanka. Beginner lessons, advanced coaching, board rentals, and surf camps.',
  keywords: [
    'surf school',
    'Hikkaduwa',
    'Sri Lanka',
    'surf lessons',
    'surfing',
    'learn to surf',
    'WavePeak',
  ],
  openGraph: {
    siteName: 'WavePeak Surf School',
    locale: 'en_US',
    type: 'website',
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
