import type { Metadata } from 'next'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Book a Surf Lesson | Contact Noah Surf School Sri Lanka' },
  description:
    'Book your surf lesson at Hirikatiya Beach, Sri Lanka with Noah Surf School. Private lessons, group sessions, surf camps and board rentals. Open 6am–6pm daily.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Book a Surf Lesson | Contact Noah Surf School Sri Lanka',
    description:
      'Book your surf lesson at Hirikatiya Beach, Sri Lanka with Noah Surf School. Private lessons, group sessions, surf camps and board rentals. Open 6am–6pm daily.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['Hirikatiya Beach', 'Southern Province, Sri Lanka'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+94 71 042 7241'],
    href: 'tel:+94710427241',
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Daily 6:00 am – 6:00 pm', 'Open 365 days a year'],
  },
]

const faqs = [
  {
    q: 'Do I need experience to book a lesson?',
    a: 'Not at all. We welcome complete beginners and tailor every lesson to your current skill level.',
  },
  {
    q: 'What should I bring?',
    a: 'Just yourself and sunscreen. We provide boards, leashes, rash guards, and all necessary equipment.',
  },
  {
    q: 'What is the minimum age?',
    a: 'We accept students aged 7 and up. Children under 12 are placed in our supervised junior program.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: 'Yes. Free cancellation or rescheduling up to 24 hours before your lesson start time.',
  },
  {
    q: 'How big are the groups?',
    a: 'Group lessons have a maximum of 6 students per instructor to ensure personalised attention.',
  },
  {
    q: "Is Hirikatiya safe for beginners?",
    a: "Hirikatiya's inner reef breaks produce mellow, consistent waves — ideal for learning all year round.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-primary-50 border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a <span className="text-primary">Lesson</span>
          </h1>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            Message us on WhatsApp and we&apos;ll confirm your session straight away.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* WhatsApp CTA */}
            <div className="flex flex-col gap-6">
              <a
                href="https://wa.me/94710427241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-10 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-500/20 group"
              >
                <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982 1.003-3.647-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider mb-2">Chat on WhatsApp</h3>
                <p className="text-base font-medium opacity-90 mb-6">
                  The fastest way to book — we reply within minutes.
                </p>
                <span className="bg-white text-[#25D366] px-8 py-3 text-sm font-black uppercase tracking-widest rounded-full">
                  Message Now
                </span>
              </a>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {contactInfo.map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex gap-4 p-4 border border-gray-200 bg-primary-50">
                    <div className="h-10 w-10 bg-primary flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        {label}
                      </p>
                      {lines.map((line, i) =>
                        href && i === 0 ? (
                          <a key={i} href={href} className="block text-sm font-medium text-gray-800 hover:text-primary transition-colors">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-gray-600">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=Hirikatiya+Beach+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gray-800 py-3 text-sm font-bold uppercase tracking-wide text-gray-800 hover:border-primary hover:text-primary transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-gray-200 w-full aspect-[4/3] min-h-[340px]">
              <iframe
                title="Hiriketiya Noah Surfing School location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.505071691863!2d80.70676637386983!3d5.9624342109168165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1370012226f0f%3A0xaf6fc116b43ab5a1!2sHiriketiya%20Noah%20Surfing%20School!5e1!3m2!1sen!2slk!4v1776399349914!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-primary-50 py-16 md:py-20 border-t border-gray-200">
        <div className="container-site">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 bg-white p-6">
                <p className="text-sm font-bold text-gray-900 mb-2">{q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
