// BlogPost type is now sourced from the API layer
export type { BlogPost } from '@/lib/api'
import type { BlogPost } from '@/lib/api'

export const CATEGORIES = ['Surf Tips', 'Sri Lanka', 'Gear', 'Lifestyle', 'News'] as const

export const HARDCODED_BLOGS: BlogPost[] = [
  {
    _id: 'hc-blog-1',
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
    image:
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['Noah', 'Our Story', 'Hiriketiya'],
    author: 'Noah',
    date: 'April 22, 2026',
    readTime: '5 min read',
    published: true,
    featured: true,
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
  {
    _id: 'hc-blog-2',
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
    image:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['History', 'Sri Lanka', 'Surf Culture'],
    author: 'Noah',
    date: 'April 22, 2026',
    readTime: '6 min read',
    published: true,
    featured: false,
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
]
