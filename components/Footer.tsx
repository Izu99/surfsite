import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Beginner Lessons',
  'Advanced Coaching',
  'Group Sessions',
  'Board Rentals',
  'Surf Camps',
]

export default function Footer() {
  return (
    <footer className="bg-[#1a2e4a] text-gray-400">
      {/* CTA band */}
      <div className="bg-[#1d4ed8]">
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-xl font-bold">
              Ready to ride your first wave?
            </h2>
            <p className="text-blue-200 text-sm mt-1">
              Join hundreds of surfers who started their journey with us.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#1d4ed8] hover:bg-blue-50 transition-colors"
          >
            Book a Lesson Today
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Noah Surf School"
                width={52}
                height={52}
                className="h-11 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-sm leading-relaxed mt-3">
              Sri Lanka&apos;s premier surf school on the beautiful shores of
              Hirikatiya Beach. Learn to surf with certified instructors in warm
              tropical waters.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 border border-white/20 flex items-center justify-center text-white hover:border-[#1d4ed8] hover:bg-[#1d4ed8] transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 border border-white/20 flex items-center justify-center text-white hover:border-[#1d4ed8] hover:bg-[#1d4ed8] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-9 w-9 border border-white/20 flex items-center justify-center text-white hover:border-[#1d4ed8] hover:bg-[#1d4ed8] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Hirikatiya Beach, Southern Province, Sri Lanka
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-[#1d4ed8] shrink-0" />
                <a href="tel:+94771234567" className="text-sm hover:text-white transition-colors">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-[#1d4ed8] shrink-0" />
                <a href="mailto:info@wavepeaksurf.lk" className="text-sm hover:text-white transition-colors">
                  info@wavepeaksurf.lk
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-[#1d4ed8] shrink-0" />
                <span className="text-sm">Daily 6:00 am – 6:00 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} Noah Surf School. All rights reserved.</p>
          <p>Hirikatiya Beach, Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
