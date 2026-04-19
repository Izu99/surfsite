'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Calendar,
  Clock,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useBlogs } from '@/lib/blog-store'
import DOMPurify from 'dompurify'

function BlogContent({ html }: { html: string }) {
  // During SSR typeof window === 'undefined' — render nothing rather than
  // passing raw unsanitised HTML. DOMPurify runs after hydration on the client.
  const clean =
    typeof window !== 'undefined'
      ? DOMPurify.sanitize(html, { USE_PROFILES: { html: true } })
      : ''

  return (
    <div
      className={[
        'blog-content space-y-2 text-gray-700 text-base leading-relaxed',
        '[&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-10 [&_h1]:mb-4',
        '[&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3',
        '[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2',
        '[&_p]:leading-relaxed [&_p]:text-gray-700',
        '[&_strong]:font-bold [&_strong]:text-gray-900',
        '[&_em]:italic',
        '[&_u]:underline',
        '[&_s]:line-through [&_s]:text-gray-500',
        '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1',
        '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1',
        '[&_li]:leading-relaxed',
        '[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-6',
        '[&_code]:bg-gray-100 [&_code]:text-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono',
        '[&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-6',
        '[&_pre_code]:bg-transparent [&_pre_code]:text-gray-100 [&_pre_code]:p-0',
        '[&_a]:text-primary [&_a]:underline [&_a]:hover:text-[#1e40af]',
        '[&_hr]:border-gray-200 [&_hr]:my-8',
        '[&_mark]:px-0.5 [&_mark]:rounded-sm',
        '[&_img]:rounded-xl [&_img]:max-w-full [&_img]:my-6',
      ].join(' ')}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  )
}

export default function BlogDetailClient({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { blogs, mounted } = useBlogs()

  if (!mounted) {
    return (
      <div className="pt-[72px]">
        <div className="h-[420px] bg-gray-200 animate-pulse" />
        <div className="container-site py-12">
          <div className="max-w-3xl mx-auto space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${70 + (i % 3) * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const post = blogs.find((b) => b.slug === slug && b.published)
  if (!post) notFound()

  const related = blogs
    .filter((b) => b.published && b._id !== post._id && b.category === post.category)
    .slice(0, 3)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <>
      {/* ── Hero image ── */}
      <div className="relative h-[420px] md:h-[520px] pt-[72px] overflow-hidden bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-site pb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/70 text-xs hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── Meta bar ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-site py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {post.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Share:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-primary pl-5">
              {post.description}
            </p>
            <BlogContent html={post.content} />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="section-padding bg-[#f0f4f8] border-t border-gray-200">
          <div className="container-site">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                More to Read
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((r) => (
                <Link
                  key={r._id}
                  href={`/blog/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {r.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm mt-1.5 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                      Read <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
