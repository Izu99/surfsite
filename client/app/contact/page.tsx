import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: { absolute: 'Book a Surf Lesson | Contact Noah Surf School Sri Lanka' },
  description:
    'Book your surf lesson at Noah Surf School, Hirikatiya Beach, Sri Lanka. Contact us for private lessons, group sessions, surf camps, and board rentals. Open daily 6am–6pm.',
  openGraph: {
    title: 'Book a Surf Lesson | Contact Noah Surf School Sri Lanka',
    description:
      'Book your surf lesson at Noah Surf School, Hirikatiya Beach, Sri Lanka. Private lessons, group sessions, camps, and board rentals. Open daily 6am–6pm.',
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
    lines: ['+94 77 123 4567'],
    href: 'tel:+94771234567',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@wavepeaksurf.lk'],
    href: 'mailto:info@wavepeaksurf.lk',
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
      <section className="bg-[#f0f4f8] border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a <span className="text-[#1d4ed8]">Lesson</span>
          </h1>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            Ready to hit the waves? Fill in the form and we&apos;ll confirm your
            session within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Form ── */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Send a Booking Request
                </h2>
                <p className="text-sm text-gray-500 mb-7">
                  Fields marked with{' '}
                  <span className="text-[#1d4ed8] font-semibold">*</span> are
                  required.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* ── Info + Map ── */}
            <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col gap-6">
              {/* Primary WhatsApp Focus */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-500/20 group"
              >
                <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982 1.003-3.647-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider mb-1">Fastest Way to Book</h3>
                <p className="text-sm font-medium opacity-90 mb-4">Chat with us directly on WhatsApp</p>
                <span className="bg-white text-[#25D366] px-6 py-2 text-xs font-black uppercase tracking-widest rounded-full">Message Now</span>
              </a>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map(({ icon: Icon, label, lines, href }) => (
                  <div
                    key={label}
                    className="flex gap-4 p-4 border border-gray-200 bg-[#f0f4f8]"
                  >
                    <div className="h-10 w-10 bg-[#1d4ed8] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        {label}
                      </p>
                      {lines.map((line, i) =>
                        href && i === 0 ? (
                          <a
                            key={i}
                            href={href}
                            className="block text-sm font-medium text-gray-800 hover:text-[#1d4ed8] transition-colors"
                          >
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

              {/* Get directions */}
              <a
                href="https://maps.google.com/?q=Hirikatiya+Beach+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gray-800 py-3 text-sm font-bold uppercase tracking-wide text-gray-800 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Width Map Section ── */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-site">
          <div className="overflow-hidden border border-gray-200 aspect-[21/9] min-h-[300px] md:min-h-[450px]">
            <iframe
              title="Hirikatiya Beach location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.37!2d80.0809!3d6.1395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e1e25d6c3b%3A0x4b31dcf4c52cba13!2sHirikatiya%20Beach!5e0!3m2!1sen!2slk!4v1699900000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f0f4f8] py-16 md:py-20 border-t border-gray-200">
        <div className="container-site">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1d4ed8] block shrink-0" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="border border-gray-200 bg-white p-6"
              >
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
