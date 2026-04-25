import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions | Noah Surf School Sri Lanka' },
  description:
    'Read the full Terms and Conditions, Safety Waiver, Booking & Cancellation Policy, and Privacy Policy for Noah Surf School at Hirikatiya Beach, Sri Lanka.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms & Conditions | Noah Surf School Sri Lanka',
    description:
      'Read the full Terms and Conditions, Safety Waiver, Booking & Cancellation Policy, and Privacy Policy for Noah Surf School at Hirikatiya Beach, Sri Lanka.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Noah Surf School' }],
  },
}

const sections = [
  {
    id: 'safety-waiver',
    title: 'Safety Waiver',
    content: [
      {
        heading: '1. Acknowledgment of Risk',
        body: `Surfing is an inherently dangerous activity. By booking a lesson or using any service at Noah Surf School, you acknowledge that surfing involves risks including but not limited to: collision with surfboards or other surfers, strong ocean currents, waves of varying intensity, and other unpredictable natural hazards. You voluntarily assume all risks associated with participation.`,
      },
      {
        heading: '2. Medical Fitness',
        body: `You confirm that you are in good physical health and have no known medical conditions that would prevent safe participation in surfing activities. If you have any pre-existing medical conditions (including but not limited to heart conditions, epilepsy, back or neck injuries, or breathing difficulties), you must disclose these to your instructor before any lesson begins.`,
      },
      {
        heading: '3. Instructor Authority',
        body: `All participants agree to follow the instructions of Noah Surf School certified instructors at all times. Instructors have the right to remove any participant from the water who poses a risk to themselves or others, or who refuses to comply with safety guidelines.`,
      },
      {
        heading: '4. Minimum Age',
        body: `Participants must be at least 7 years of age. Students under 18 must have a parent or legal guardian sign this waiver on their behalf. Noah Surf School reserves the right to request proof of age.`,
      },
    ],
  },
  {
    id: 'booking-policy',
    title: 'Booking & Cancellation Policy',
    content: [
      {
        heading: '5. Booking Confirmation',
        body: `A booking is confirmed only upon receipt of a confirmation message from Noah Surf School via WhatsApp, email, or the booking form on this website. All session times are subject to weather, ocean, and safety conditions.`,
      },
      {
        heading: '6. Payment',
        body: `Payment is due at the start of your session unless a deposit has been agreed in advance. We accept cash (LKR or USD), bank transfer, and selected mobile payment methods. Prices are listed in USD and converted at the daily exchange rate.`,
      },
      {
        heading: '7. Cancellation by Client',
        body: `Cancellations made more than 24 hours before the scheduled session start time will receive a full refund or session credit. Cancellations within 24 hours of the session start time are non-refundable. No-shows are non-refundable. To cancel, contact us via WhatsApp at +94 71 042 7241 or email info@wavepeaksurf.lk.`,
      },
      {
        heading: '8. Cancellation by Noah Surf School',
        body: `We reserve the right to cancel or reschedule any session due to unsafe ocean or weather conditions, force majeure, or other circumstances beyond our control. In such cases, a full refund or alternative session will be offered. We are not liable for any travel or accommodation costs incurred.`,
      },
      {
        heading: '9. Group Sessions',
        body: `Group sessions require a minimum of 2 participants to proceed. If the minimum is not met, you will be offered a private lesson at the applicable rate or a full refund. Maximum group size is 6 students per instructor.`,
      },
    ],
  },
  {
    id: 'equipment',
    title: 'Equipment & Liability',
    content: [
      {
        heading: '10. Provided Equipment',
        body: `All lessons include use of a surfboard, leash, and rash guard. Equipment remains the property of Noah Surf School at all times. Participants are responsible for any damage caused to equipment through negligent or intentional misuse.`,
      },
      {
        heading: '11. Personal Belongings',
        body: `Noah Surf School is not responsible for loss, theft, or damage to personal belongings brought to the beach or surf school premises. We recommend leaving valuables secured at your accommodation.`,
      },
      {
        heading: '12. Limitation of Liability',
        body: `To the maximum extent permitted by applicable law, Noah Surf School, its instructors, employees, and agents shall not be liable for any injury, loss, or damage of any nature arising from participation in any activity, except where such liability cannot be excluded by law.`,
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: [
      {
        heading: '13. Data We Collect',
        body: `We collect personal information you provide when making a booking, completing our contact form, or communicating with us via WhatsApp or email. This includes your name, email address, phone number, and any health information relevant to safe participation in lessons.`,
      },
      {
        heading: '14. How We Use Your Data',
        body: `Your data is used solely for managing your booking, communicating lesson details, and ensuring your safety during sessions. We do not sell, share, or disclose your personal information to third parties except as required by law.`,
      },
      {
        heading: '15. Photography & Video',
        body: `Noah Surf School may photograph or film sessions for marketing and social media purposes. By participating, you grant us a non-exclusive licence to use images or footage in which you appear. If you do not wish to be photographed or filmed, please inform your instructor before the session begins.`,
      },
      {
        heading: '16. Data Retention',
        body: `We retain booking and contact records for up to 2 years for administrative and safety purposes, after which they are securely deleted. You may request deletion of your data at any time by contacting info@wavepeaksurf.lk.`,
      },
      {
        heading: '17. Contact',
        body: `For any privacy-related questions or data access requests, email us at info@wavepeaksurf.lk or write to Noah Surf School, Hirikatiya Beach, Southern Province, Sri Lanka.`,
      },
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-primary-50 border-b border-gray-200 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-14">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms &amp; <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Please read these terms carefully before booking a lesson or using any
            service at Noah Surf School, Hirikatiya Beach, Sri Lanka.
          </p>
          <p className="text-xs text-gray-400 mt-4">Last updated: April 2026</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

            {/* Sidebar table of contents */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Sections
                </p>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-primary-50 border border-gray-200">
                  <p className="text-xs font-bold text-gray-700 mb-2">Questions?</p>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    Our team is happy to clarify any part of these terms.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 order-1 lg:order-2 space-y-12">
              <p className="text-sm text-gray-500 leading-relaxed border-l-4 border-primary pl-5">
                By booking a lesson, using any equipment, or participating in any
                activity provided by Noah Surf School, you agree to be bound by the
                following terms and conditions. These apply to all students, guests,
                and visitors.
              </p>

              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.content.map(({ heading, body }) => (
                      <div key={heading}>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">{heading}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-10">
                <p className="text-sm text-gray-500 leading-relaxed">
                  These terms were last updated in April 2026. Noah Surf School reserves
                  the right to update these terms at any time. Continued use of our
                  services constitutes acceptance of any revised terms.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  For questions, contact us at{' '}
                  <a
                    href="mailto:info@wavepeaksurf.lk"
                    className="text-primary hover:underline"
                  >
                    info@wavepeaksurf.lk
                  </a>{' '}
                  or{' '}
                  <a href="tel:+94710427241" className="text-primary hover:underline">
                    +94 71 042 7241
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
