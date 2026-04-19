import type { Metadata } from 'next'
import BlogDetailClient from './BlogDetailClient'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

  try {
    const res = await fetch(`${apiUrl}/api/blogs/${slug}`, { next: { revalidate: 60 } })
    if (!res.ok) return {}
    const data = await res.json()
    if (!data.success || !data.data) return {}
    const post = data.data as { title: string; description: string; image: string }
    return {
      title: { absolute: `${post.title} | Noah Surf School` },
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [{ url: post.image, alt: post.title }],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [post.image],
      },
      alternates: { canonical: `/blog/${slug}` },
    }
  } catch {
    return {}
  }
}

export default function BlogDetailPage({ params }: Props) {
  return <BlogDetailClient params={params} />
}
