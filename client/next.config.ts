import type { NextConfig } from 'next'

// The backend also serves uploaded images (from POST /api/admin/upload) at
// <apiOrigin>/uploads/<file> — that origin must be whitelisted for next/image
// and for the CSP img-src directive, or those uploaded images fail to render.
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
const apiOrigin = new URL(apiUrl)

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'bluetooth=()',
      'notifications=()',
      'push=()',
      'fullscreen=(self)',
      'accelerometer=()',
      'gyroscope=()',
      'magnetometer=()',
    ].join(', '),
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com https://translate.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      `img-src 'self' data: blob: ${apiOrigin.origin} https://images.unsplash.com https://plus.unsplash.com https://images.pexels.com https://*.googleapis.com https://*.gstatic.com https://*.ggpht.com https://*.googleusercontent.com`,
      `connect-src 'self' ${apiOrigin.origin} https:`,
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com https://youtube.com https://translate.google.com",
      "frame-ancestors 'none'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // robots.txt only blocks crawling — pages can still be indexed if
        // linked from elsewhere. X-Robots-Tag ensures admin never appears
        // in search results.
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: apiOrigin.protocol.replace(':', '') as 'http' | 'https',
        hostname: apiOrigin.hostname,
        port: apiOrigin.port,
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig
