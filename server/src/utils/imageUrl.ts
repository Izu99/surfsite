// Admin-supplied image URLs are restricted to Unsplash and images we host
// ourselves (POST /api/admin/upload → <apiOrigin>/uploads/<file>). Anything
// else — arbitrary remote hosts, data:/javascript: URIs, protocol-relative
// //evil.com paths — is rejected. Keep this list in sync with the client copy
// in client/lib/image-url.ts and the img-src/remotePatterns entries in
// client/next.config.ts.
const ALLOWED_HOSTS = ['images.unsplash.com', 'plus.unsplash.com']

export const IMAGE_URL_ERROR =
  'Image must be an Unsplash URL (images.unsplash.com or plus.unsplash.com) or a file uploaded through the admin panel'

function ownHosts(): string[] {
  const hosts: string[] = []
  try {
    hosts.push(new URL(process.env.CLIENT_URL || '').hostname)
  } catch {
    // CLIENT_URL unset or malformed — fall through to the dev hosts below.
  }
  if (process.env.NODE_ENV !== 'production') hosts.push('localhost', '127.0.0.1')
  return hosts.filter(Boolean)
}

export function isAllowedImageUrl(value: unknown): boolean {
  if (typeof value !== 'string') return false

  const url = value.trim()
  // Empty means "no image" — packages and shop items both allow that.
  if (!url) return true

  // Relative paths are served by our own apps (/uploads/x.webp from the API,
  // /noah-black.webp from the client's public dir). Protocol-relative URLs
  // like //evil.com/x.jpg also start with '/', so they must be excluded.
  if (url.startsWith('/')) return !url.startsWith('//')

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return false
  }

  if (ALLOWED_HOSTS.includes(parsed.hostname)) return parsed.protocol === 'https:'

  // Our own uploads come back as absolute URLs built from the request host.
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false
  return parsed.pathname.startsWith('/uploads/') && ownHosts().includes(parsed.hostname)
}
