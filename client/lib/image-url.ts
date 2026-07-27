// Mirror of server/src/utils/imageUrl.ts — this copy exists for instant form
// feedback only; the server is what actually enforces the rule. Change both,
// and keep them in sync with img-src/remotePatterns in next.config.ts.
const ALLOWED_HOSTS = ['images.unsplash.com', 'plus.unsplash.com']

export const IMAGE_URL_ERROR =
  'Only Unsplash image URLs or files uploaded here are allowed'

function ownHosts(): string[] {
  const hosts = ['localhost', '127.0.0.1']
  try {
    hosts.push(new URL(process.env.NEXT_PUBLIC_API_URL || '').hostname)
  } catch {
    // NEXT_PUBLIC_API_URL unset in dev — the localhost entries above cover it.
  }
  if (typeof window !== 'undefined') hosts.push(window.location.hostname)
  return hosts.filter(Boolean)
}

export function isAllowedImageUrl(value: string): boolean {
  const url = value.trim()
  // Empty means "no image" — packages and shop items both allow that.
  if (!url) return true

  // Relative paths are served by our own apps; '//evil.com/x.jpg' is not.
  if (url.startsWith('/')) return !url.startsWith('//')

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return false
  }

  if (ALLOWED_HOSTS.includes(parsed.hostname)) return parsed.protocol === 'https:'

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false
  return parsed.pathname.startsWith('/uploads/') && ownHosts().includes(parsed.hostname)
}
