import type { Metadata } from 'next'
import BlogDetailClient from './BlogDetailClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { jsonLdString } from '@/lib/json-ld'

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

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  let articleJsonLd: Record<string, unknown> | null = null
  let postTitle: string | null = null
  try {
    const res = await fetch(`${apiUrl}/api/blogs/${slug}`, { next: { revalidate: 60 } })
    if (res.ok) {
      const data = await res.json()
      if (data.success && data.data) {
        const post = data.data as {
          title: string
          description: string
          image: string
          author: string
          createdAt: string
          updatedAt: string
        }
        postTitle = post.title
        articleJsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          image: post.image,
          author: { '@type': 'Person', name: post.author },
          datePublished: post.createdAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: `${siteUrl}/blog/${slug}`,
          publisher: {
            '@type': 'Organization',
            name: 'Noah Surf School',
            logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
          },
        }
      }
    }
  } catch {
    articleJsonLd = null
  }

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(articleJsonLd) }}
        />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: postTitle ?? slug, path: `/blog/${slug}` },
        ]}
      />
      <BlogDetailClient params={params} />
    </>
  )
}
