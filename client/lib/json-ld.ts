// Safely serialize data for embedding in a <script type="application/ld+json"> tag.
// Escapes "<" so a value containing "</script>" can't break out of the tag.
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
