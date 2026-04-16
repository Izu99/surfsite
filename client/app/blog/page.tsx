'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Calendar, Clock, Tag, ChevronRight, Star } from 'lucide-react'
import { useBlogs } from '@/lib/blog-store'
import { CATEGORIES } from '@/data/blogs'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 6

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] animate-pulse">
      <div className="h-52 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="flex gap-3 pt-2">
          <div className="h-3 bg-gray-200 rounded w-20" />
          <div className="h-3 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const { blogs, mounted } = useBlogs()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)

  const published = useMemo(() => blogs.filter((b) => b.published), [blogs])
  const featured = useMemo(() => published.find((b) => b.featured), [published])

  const filtered = useMemo(() => {
    let result = published.filter((b) => !b.featured || activeCategory !== 'All' || search)
    if (activeCategory !== 'All') result = result.filter((b) => b.category === activeCategory)
    if (search) {
      const q = search.toLowerCase()
      result = published.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }
    return result
  }, [published, activeCategory, search])

  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = paginated.length < filtered.length

  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#f0f4f8] border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
              Our Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surf Stories &amp; <span className="text-[#1d4ed8]">Tips</span>
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Guides, destination insights, gear reviews, and life from Hirikatiya Beach — straight
            from our instructors.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          {/* ── Featured post ── */}
          {mounted && featured && !search && activeCategory === 'All' && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-14 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-4 left-4 bg-[#1d4ed8] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8] mb-3">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#1d4ed8] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1d4ed8] group-hover:gap-2 transition-all">
                    Read Article <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* ── Search + filter ── */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/30 focus:border-[#1d4ed8] transition"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['All', ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setPage(1)
                  }}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all',
                    activeCategory === cat
                      ? 'bg-[#1d4ed8] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── Grid ── */}
          {!mounted ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found.</p>
              <button
                onClick={() => {
                  setSearch('')
                  setActiveCategory('All')
                }}
                className="mt-4 text-sm text-[#1d4ed8] underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {paginated.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 text-[#1d4ed8] text-xs font-bold px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug group-hover:text-[#1d4ed8] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center gap-0.5 bg-gray-100 px-2 py-0.5 rounded-full"
                            >
                              <Tag className="h-2.5 w-2.5" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="px-8 py-3 bg-[#1d4ed8] text-white rounded-xl text-sm font-bold hover:bg-[#1e40af] transition-colors"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
