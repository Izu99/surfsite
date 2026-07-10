import 'dotenv/config'
import mongoose from 'mongoose'
import { connectDB } from '../config/db'
import { Package } from '../models/Package'
import { ShopItem } from '../models/ShopItem'
import { Blog } from '../models/Blog'
import { SurfConditions } from '../models/SurfConditions'
import { Faq } from '../models/Faq'

/**
 * Seeds the database with the same data that currently lives as hardcoded
 * fallback arrays on the client (data/packages.ts, data/shop.ts), so an
 * admin can edit it from the backend. The frontend hardcoded arrays are
 * left untouched on purpose — this lets the two be compared side by side.
 * Safe to re-run: upserts by name/title.
 */

const INCLUDED_IN_ALL = [
  'Good quality surf boards',
  'Rash guard',
  'Zinc & sunscreen',
  'First aid on standby',
]

const packages = [
  {
    name: 'Beginner Fun Lesson',
    level: 'Beginner',
    format: '',
    duration: '1 hour',
    price: 5000,
    priceNote: 'per session',
    description:
      'This lesson is specially for budget travelers and people who are looking for fun. In this lesson you can learn ocean safety and how to get on the surfboard.',
    shortDescription: 'This lesson is specially for budget travelers and people who are looking for fun.',
    includes: ['Just for fun', 'One hour'],
    souvenir: false,
    featured: false,
    published: true,
    order: 1,
    image: '/beginner-fun-lesson-group.webp',
  },
  {
    name: 'Beginner 1-on-1',
    level: 'Beginner',
    format: '1-on-1 Private',
    duration: '1 hour 30 min',
    price: 8000,
    priceNote: 'per session',
    description: 'The most suitable and easiest lesson for beginners.',
    shortDescription: 'The most suitable and easiest lesson for beginners.',
    includes: [
      'This is a private one-on-one lesson, with only you and your instructor participating (100% attention on you)',
      'No experience needed at all, we make you zero to hero',
      'You can practice this lesson even if you cannot swim',
      'Learning about ocean safety',
      'Understanding different types of surfboards',
      'How to choose the right surfboard',
      'How to pop up on a surfboard step by step',
      'Learning the correct paddling technique',
      'Understanding surf conditions (waves, tides, and currents)',
      'Beginner surf etiquette — the rules of surfing and why they matter',
    ],
    souvenir: true,
    featured: true,
    published: true,
    order: 2,
    image: '/beginner-group-lesson.webp',
  },
  {
    name: 'Beginner Special',
    level: 'Beginner',
    format: '',
    duration: '2 hours',
    price: 10000,
    priceNote: 'per session',
    description:
      "This lesson is special for people who have never surfed before. In this lesson you can learn more theory and get a lot more fun than our other lessons because we provide two hours.",
    shortDescription:
      "This lesson is special for the people who never surfed before.\nIn this lesson you can learn more theory's and you can get a lot of fun than our other lessons because we provide two hours.",
    includes: [
      'The most suitable and easiest lesson for beginners.',
      'This is a private one-on-one lesson, with only you and your instructor participating (100% attention on you).',
      'No need any experience at all, we make you zero to hero',
      'You can practice this lesson even if you cannot swim',
      'Learning about ocean safety.',
      'Understanding different types of surfboards.',
      'How to choose the right surfboard.',
      'How to pop up on a surfboard step by step.',
      'Learning the correct paddling technique.',
      'Understanding surf conditions (waves, tides, and currents).',
      'Beginner surf etiquette — the rules of surfing and why they matter.',
    ],
    souvenir: false,
    featured: false,
    published: true,
    order: 3,
    image: '/gallery-instructor-young-surfer.jpeg',
  },
  {
    name: 'Beginner 2-on-1',
    level: 'Beginner',
    format: '2-on-1 Private',
    duration: '1 hour 30 min',
    price: 7000,
    priceNote: 'per person',
    description:
      'Perfect for couples, friends, siblings, or family members who want to learn and share the experience together. This is a private lesson for two students, with one instructor providing personalized guidance and support. Highly recommended for couples.',
    shortDescription:
      'Perfect for couples, friends, siblings, or family members who want to learn and share the experience together.',
    includes: [
      'No experience needed at all, we make you zero to hero',
      'You can practice this lesson even if you cannot swim',
      'Learning about ocean safety',
      'Understanding different types of surfboards',
      'How to choose the right surfboard',
      'How to pop up on a surfboard step by step',
      'Learning the correct paddling technique',
      'Understanding surf conditions (waves, tides, and currents)',
      'Beginner surf etiquette — the rules of surfing and why they matter',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 4,
    image: '/beginner-group-coaching.webp',
  },
  {
    name: 'Beginner Group',
    level: 'Beginner',
    format: 'Group',
    duration: '1 hour 30 min',
    price: 6000,
    priceNote: 'per person',
    description:
      "If you're a group of friends who want to share the experience together, this is the perfect lesson for you! If you're a loving family, create unforgettable memories by sharing your child's first surfing experience as a family. If you have a group of five or more people, this is the perfect lesson for you — you can book this lesson together. This is the most enjoyable lesson; you'll feel the surf camp vibe and enjoy party waves. In this group lesson we provide 2 instructors for 5 students, and if your group is bigger than five people we provide more instructors accordingly.",
    shortDescription:
      'In this group lesson we provide 2 instructors for 5 students, and if your group is bigger than five people we provide more instructors accordingly.',
    includes: [
      'No experience needed at all, we make you zero to hero',
      'You can practice this lesson even if you cannot swim',
      'Learning about ocean safety',
      'Understanding different types of surfboards',
      'How to choose the right surfboard',
      'How to pop up on a surfboard step by step',
      'Learning the correct paddling technique',
      'Understanding surf conditions (waves, tides, and currents)',
      'Beginner surf etiquette — the rules of surfing and why they matter',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 5,
    image: '/group-lesson.jpg',
  },
  {
    name: 'Intermediate 1-on-1',
    level: 'Intermediate',
    format: '1-on-1 Private',
    duration: '1 hour 30 min',
    price: 8500,
    priceNote: 'per session',
    description:
      "This lesson is for surfers who already know the techniques and have completed the beginner level. If you're ready to improve your technique and gain a deeper understanding of the ocean, this is the perfect next step. We'll explain about Hiriketiya and teach you how to surf in a reef break.",
    shortDescription:
      'This lesson is for surfers who already know the techniques and have completed the beginner level.',
    includes: [
      'This is a private one-on-one lesson, with only you and your instructor participating (100% attention on you)',
      'Introduction to turning techniques and basic surf rules',
      'Generating speed and maintaining control on the wave',
      'Building confidence in larger and more challenging conditions',
      'Developing timing, balance, and overall surfing technique',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 4,
    image: '/intermediate-surf-coaching.webp',
  },
  {
    name: 'Intermediate 2-on-1',
    level: 'Intermediate',
    format: '2-on-1 Private',
    duration: '1 hour 30 min',
    price: 7500,
    priceNote: 'per person',
    description:
      'This is a private lesson for two students, with one instructor providing personalized guidance and support. Perfect for couples, friends, siblings, or family members who want to learn and share the experience together. This lesson is special for surfers who already know the technique and have completed the beginner level. If you’re ready to improve your technique and gain a deeper understanding of the ocean, this is the perfect next step. We’ll explain about Hiriketiya and teach you how to surf in a reef break.',
    shortDescription:
      'This is a private lesson for two students, with one instructor providing personalized guidance and support.',
    includes: [
      'Introduction to turning techniques and basic surf rules',
      'Generating speed and maintaining control on the wave',
      'Building confidence in larger and more challenging conditions',
      'Developing timing, balance, and overall surfing technique',
      'After discussing with your instructor, you may progress from a soft board to a hard board depending on your skill level',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 5,
    image: '/gallery-trio-longboard.jpeg',
  },
  {
    name: 'Intermediate Group',
    level: 'Intermediate',
    format: 'Group',
    duration: '1 hour 30 min',
    price: 6500,
    priceNote: 'per person',
    description:
      'If you’re a group of friends who want to share the experience together, this is the perfect lesson for you! If you have a group of five or more people, this is the perfect lesson for you — you can book this lesson together. This is the most enjoyable lesson; you’ll feel the surf camp vibe and enjoy party waves. In this group lesson we provide 2 instructors for 5 students, and if your group is bigger than five people we provide more instructors accordingly. This lesson is special for surfers who already know the technique and have completed the beginner level. If you’re ready to improve your technique and gain a deeper understanding of the ocean, this is the perfect next step. We’ll explain about Hiriketiya and teach you how to surf in a reef break.',
    shortDescription: 'In this group lesson we provide 2 instructors for 5 students.',
    includes: [
      'Introduction to turning techniques and basic surf rules',
      'Generating speed and maintaining control on the wave',
      'Building confidence in larger and more challenging conditions',
      'Developing timing, balance, and overall surfing technique',
      'After discussing with your instructor, you may progress from a soft board to a hard board depending on your skill level',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 6,
    image: '/gallery-instructor-students-shoreline.jpeg',
  },
  {
    name: 'Surf Guide 1-on-1',
    level: 'Surf Guide',
    format: '1-on-1 Private',
    duration: '1 hour 30 min',
    price: 10000,
    priceNote: 'per session',
    description:
      'Unlike surf lessons, surf guiding is usually aimed at surfers who already know how to surf. "This is a private surf coaching lesson with only you and your instructor, giving you full attention and personalized guidance."',
    shortDescription:
      'Unlike surf lessons, surf guiding is usually aimed at surfers who already know how to surf.',
    includes: [
      'Choosing the best surf break based on wave and weather conditions.',
      'Taking surfers to suitable spots for their skill level.',
      'Explaining tides, currents, and local hazards.',
      'Sharing local knowledge about the area.',
      'Helping surfers maximize their time in the water.',
      'We will explain reef environments and shallow-water areas, as well as how to surf safely and effectively in point breaks.',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 7,
    image: '/gallery-group-lesson.jpeg',
  },
  {
    name: 'Surf Guide 2-on-1',
    level: 'Surf Guide',
    format: '2-on-1 Private',
    duration: '1 hour 30 min',
    price: 9000,
    priceNote: 'per person',
    description:
      'Unlike surf lessons, surf guiding is usually aimed at surfers who already know how to surf. This is a private lesson for two students, with one instructor providing personalized guidance and support. Perfect for couples, friends, siblings, or family members who want to learn and share the experience together.',
    shortDescription: 'This is a private lesson for two students, with one instructor.',
    includes: [
      'Choosing the best surf break based on wave and weather conditions.',
      'Taking surfers to suitable spots for their skill level.',
      'Explaining tides, currents, and local hazards.',
      'Sharing local knowledge about the area.',
      'Helping surfers maximize their time in the water.',
      'We will explain reef environments and shallow-water areas, as well as how to surf safely and effectively in point breaks.',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 8,
    image: '/gallery-instructor-young-surfer.jpeg',
  },
  {
    name: 'Surf Guide Group',
    level: 'Surf Guide',
    format: 'Group',
    duration: '1 hour 30 min',
    price: 8000,
    priceNote: 'per person',
    description:
      'Unlike surf lessons, surf guiding is usually aimed at surfers who already know how to surf. If you are a group of friends sharing your experience together, this is the perfect lesson for you. In this group lesson we provide 5 students for 2 instructors. If your group is bigger than five people we provide more instructors according to that order. This is a group lesson for five students with one instructor providing personalized guidance and support.',
    shortDescription: 'In this group lesson we provide 5 students for 2 instructors.',
    includes: [
      'Choosing the best surf break based on wave and weather conditions.',
      'Taking surfers to suitable spots for their skill level.',
      'Explaining tides, currents, and local hazards.',
      'Sharing local knowledge about the area.',
      'Helping surfers maximize their time in the water.',
      'We will explain reef environments and shallow-water areas, as well as how to surf safely and effectively in point breaks.',
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 9,
    image: '/intermediate-surf-coaching.webp',
  },
  {
    name: 'Agency Options',
    level: 'Agency',
    format: '',
    duration: '',
    price: 0,
    priceNote: '',
    description:
      "If you're a travel guide, a travel agency, a hotel, or a hostel, and you'd like a business deal with us, contact us.",
    shortDescription:
      "If you're a travel guide, a travel agency, a hotel, or a hostel, and you'd like a business deal with us, contact us.",
    includes: [
      'Flexible group sizes',
      'Custom scheduling for your guests',
      'Suitable for all experience levels',
      'Special rates for partners',
    ],
    souvenir: false,
    featured: false,
    published: true,
    order: 10,
    image: '/gallery-group-lesson.jpeg',
  },
]

const ALL_SIZES = ['S', 'M', 'L', 'XL', 'XXL']

const shopItems = [
  {
    title: 'Cap',
    description: 'Classic surf cap to keep the sun out of your eyes.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf cap',
    price: 5000,
    sizes: [] as string[],
    published: true,
    order: 1,
  },
  {
    title: 'Hat',
    description: 'Wide-brim beach hat for all-day comfort in the sun.',
    image: 'https://images.unsplash.com/photo-1561941087-2433c4a0ef12?q=80&w=2070&auto=format&fit=crop',
    alt: 'Beach hat',
    price: 7500,
    sizes: [] as string[],
    published: true,
    order: 2,
  },
  {
    title: 'White Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-white.webp',
    alt: 'White Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 3,
  },
  {
    title: 'Black Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-black.webp',
    alt: 'Black Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 4,
  },
  {
    title: 'Maroon Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-maroon.webp',
    alt: 'Maroon Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 5,
  },
  {
    title: 'Green Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-green.webp',
    alt: 'Green Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 6,
  },
  {
    title: 'Teal Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-teal.webp',
    alt: 'Teal Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 7,
  },
  {
    title: 'Navy Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-navy.webp',
    alt: 'Navy Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
    published: true,
    order: 8,
  },
  {
    title: 'Rash Guard',
    description: 'UV-protective rash guard built for long sessions.',
    image: 'https://images.unsplash.com/photo-1595389910742-5b5c0e958a11?q=80&w=2070&auto=format&fit=crop',
    alt: 'Rash guard',
    price: 7500,
    sizes: ALL_SIZES,
    published: true,
    order: 9,
  },
]

const blogs = [
  {
    title: 'Our Story: Born from the Waves of Hiriketiya',
    slug: 'our-story-born-from-the-waves-of-hiriketiya',
    description:
      "A childhood in the salt air, a dream sparked on the shore, and a journey from self-taught surfer to professional instructor — this is Noah's story.",
    content: `
<h2>A Childhood in the Salt Air</h2>
<p>I was born and raised where the jungle meets the sand in Hiriketiya, a small village on the southern coast of Sri Lanka. Long before it became a global destination, Hiriketiya was my playground. By the age of six, I was already living in harmony with the tides — playing in the surf, watching the sea turtles, and learning the ways of the ocean from our local fishermen. To me, the sound of the crashing waves wasn't just noise; it was the heartbeat of my home.</p>
<h2>The Spark of a Dream</h2>
<p>Back then, tourism was a rarity in our village. I remember being eight years old when I saw something that changed my life: a traveler gliding across the water on a board. I had never seen anything like it. My friends and I watched in awe from the shore. That was my first introduction to surfing.</p>
<p>Though I lacked the money to buy professional equipment, I never let go of the dream. I began by befriending travelers, asking to borrow their boards for just a few minutes at a time. Every second on the water was a lesson. Through persistence and passion, I taught myself — progressing from a complete beginner to an expert.</p>
<h2>Meet "Noah" — Your Guide to the Ocean</h2>
<p>As the years passed and more travelers began to discover our bay, I became a familiar face in the lineup. To many of my friends and students from around the world, I am simply known as "Noah." Today, as a professional surf instructor in Hiriketiya, I share the magic of the Indian Ocean with visitors from the UK, US, Australia, and beyond.</p>
<p>When you surf with me, I don't just teach you how to stand on a board. I teach you how to breathe with the waves, how to respect the nature of the south coast, and how to truly live in rhythm with the sea.</p>
<blockquote>My journey started on these very sands, and I invite you to begin yours with me. See you in the water — Noah.</blockquote>
    `.trim(),
    image: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['Noah', 'Our Story', 'Hiriketiya'],
    author: 'Noah',
    date: 'April 22, 2026',
    readTime: '5 min read',
    published: true,
    featured: true,
  },
  {
    title: 'The Evolution of Surf: A History of Waves in Sri Lanka',
    slug: 'the-evolution-of-surf-history-of-waves-in-sri-lanka',
    description:
      'From ancient fishing coasts to a global surf destination — how Sri Lanka found its place on the world\'s surfing map.',
    content: `
<h2>From Ancient Coasts to Global Surf Haven</h2>
<p>Sri Lanka's relationship with the ocean spans thousands of years, rooted in the traditions of our resilient fishing communities. However, the story of surfing in Sri Lanka truly began in the 1960s and 70s. During this era, intrepid travelers from Australia and Europe began exploring our southern and eastern shores, discovering what we locals always knew: our coastline holds some of the most consistent waves in the Indian Ocean.</p>
<h2>The Discovery of Hikkaduwa and Arugam Bay</h2>
<p>The first surf hubs emerged in Hikkaduwa on the southwest coast and Arugam Bay on the east. These pioneers brought the first fiberglass boards to our shores, sparking a curiosity among local village kids. What started as watching from the sand turned into a local movement. Sri Lankans began borrowing boards — much like Noah did in Hiriketiya — and teaching themselves to dance with the waves.</p>
<h2>The Rise of the South Coast &amp; Hiriketiya</h2>
<p>While Hikkaduwa was the birthplace, the "Golden Era" of the south coast — including Mirissa, Weligama, and Ahangama — followed shortly after. For a long time, Hiriketiya Beach remained a hidden secret, known only to locals and a few lucky travelers.</p>
<p>It wasn't until the last decade that the world woke up to the "Horseshoe Bay." Today, Sri Lanka is recognized globally not just for its beauty, but as a premier surfing destination. The culture has shifted from simply watching the waves to producing ISA-certified local instructors who lead the industry with a blend of professional technique and deep, ancestral knowledge of the sea.</p>
<h2>Surfing Today: A Way of Life</h2>
<p>Surfing is no longer just a tourist activity in Sri Lanka; it is a vital part of our coastal identity. From the early days of wooden planks and borrowed boards to the high-performance coaching available today at Noah's Surf School, the spirit remains the same: a profound respect for the ocean and the pure joy of the ride.</p>
    `.trim(),
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['History', 'Sri Lanka', 'Surf Culture'],
    author: 'Noah',
    date: 'April 22, 2026',
    readTime: '6 min read',
    published: true,
    featured: false,
  },
]

const faqs = [
  {
    question: 'Do I need experience to book a lesson?',
    answer: 'Not at all. We welcome complete beginners and tailor every lesson to your current skill level.',
    published: true,
    order: 1,
  },
  {
    question: 'What should I bring?',
    answer: 'Just yourself and sunscreen. We provide boards, leashes, rash guards, and all necessary equipment.',
    published: true,
    order: 2,
  },
  {
    question: 'What is the minimum age?',
    answer: 'We accept students aged 7 and up. Children under 12 are placed in our supervised junior program.',
    published: true,
    order: 3,
  },
  {
    question: 'Can I cancel or reschedule?',
    answer: 'Yes. Free cancellation or rescheduling up to 24 hours before your lesson start time.',
    published: true,
    order: 4,
  },
  {
    question: 'How big are the groups?',
    answer: 'Group lessons have a maximum of 6 students per instructor to ensure personalised attention.',
    published: true,
    order: 5,
  },
  {
    question: 'Is Hirikatiya safe for beginners?',
    answer: "Hirikatiya's inner reef breaks produce mellow, consistent waves — ideal for learning all year round.",
    published: true,
    order: 6,
  },
]

const conditionsDefaults = {
  waveHeight: '0.8 – 1.2 m',
  wind: '12 km/h SW',
  waterTemp: '27°C',
  airTemp: '31°C',
  conditions: 'Mellow Peaks',
}

async function seed() {
  await connectDB()

  // Insert-only-if-missing: never overwrites values an admin has already edited.

  let pkgCount = 0
  for (const pkg of packages) {
    const res = await Package.updateOne({ name: pkg.name }, { $setOnInsert: pkg }, { upsert: true })
    if (res.upsertedCount) pkgCount += 1
  }
  console.log(`✅  Packages: ${pkgCount} inserted, ${packages.length - pkgCount} already existed`)

  let shopCount = 0
  for (const item of shopItems) {
    const res = await ShopItem.updateOne({ title: item.title }, { $setOnInsert: item }, { upsert: true })
    if (res.upsertedCount) shopCount += 1
  }
  console.log(`✅  Shop items: ${shopCount} inserted, ${shopItems.length - shopCount} already existed`)

  let blogCount = 0
  for (const post of blogs) {
    const res = await Blog.updateOne({ slug: post.slug }, { $setOnInsert: post }, { upsert: true })
    if (res.upsertedCount) blogCount += 1
  }
  console.log(`✅  Blogs: ${blogCount} inserted, ${blogs.length - blogCount} already existed`)

  let faqCount = 0
  for (const faq of faqs) {
    const res = await Faq.updateOne({ question: faq.question }, { $setOnInsert: faq }, { upsert: true })
    if (res.upsertedCount) faqCount += 1
  }
  console.log(`✅  FAQs: ${faqCount} inserted, ${faqs.length - faqCount} already existed`)

  const existingConditions = await SurfConditions.findOne().lean()
  if (existingConditions) {
    console.log('✅  Conditions: record already exists, left untouched')
  } else {
    await SurfConditions.create(conditionsDefaults)
    console.log('✅  Conditions: inserted default record')
  }

  await mongoose.disconnect()
  console.log('✅  Done')
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err)
  process.exit(1)
})
