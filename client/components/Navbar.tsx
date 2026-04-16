'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="container-site">
        <nav className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Noah Surf School"
              width={56}
              height={56}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                    pathname === href
                      ? 'text-blue-400'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {label}
                  <ChevronRight className="h-3 w-3 opacity-70" />
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20 shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982 1.003-3.647-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-black/80 backdrop-blur-xl border-t border-white/10',
          open ? 'max-h-72' : 'max-h-0'
        )}
      >
        <div className="container-site py-3 flex flex-col">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'px-3 py-3.5 text-sm font-medium uppercase tracking-wide border-b border-white/5 transition-colors',
                pathname === href ? 'text-blue-400' : 'text-white/90 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+94771234567"
            className="px-3 py-3.5 text-sm font-bold text-white"
          >
            +94 77 123 4567
          </a>
        </div>
      </div>
    </header>
  )
}
