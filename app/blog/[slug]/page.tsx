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

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/)
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.slice(3)}
        </h2>
      )
    }
    if (block.startsWith('# ')) {
      return (
        <h1 key={i} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {block.slice(2)}
        </h1>
      )
    }
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-0">
        {block}
      </p>
    )
  })
}

export default function BlogDetailPage({
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
    .filter((b) => b.published && b.id !== post.id && b.category === post.category)
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
          <span className="inline-block bg-[#1d4ed8] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
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
              <User className="h-4 w-4 text-[#1d4ed8]" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#1d4ed8]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#1d4ed8]" />
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
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="h-8 w-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
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
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-[#1d4ed8] pl-5">
              {post.description}
            </p>
            <div className="prose-custom space-y-5">{renderContent(post.content)}</div>

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
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                More to Read
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((r) => (
                <Link
                  key={r.id}
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
                    <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-widest">
                      {r.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm mt-1.5 mb-2 leading-snug group-hover:text-[#1d4ed8] transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1d4ed8]">
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
