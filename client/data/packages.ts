import type { SurfPackage } from '@/lib/api'

export const PACKAGE_LEVELS = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Beginner-Advance',
  'Surf Guide',
] as const

export type PackageLevel = (typeof PACKAGE_LEVELS)[number]

export const INCLUDED_IN_ALL = [
  'Good quality surf boards',
  'Rash guard',
  'Zinc & sunscreen',
  'Water bottle',
  'First aid on standby',
]

export const HARDCODED_PACKAGES: SurfPackage[] = [
  {
    _id: 'hc-pkg-2',
    name: 'Private Surf Coaching',
    level: 'Beginner',
    format: '1-on-1 Private',
    duration: '1 hour 30 min',
    price: 65,
    priceNote: 'per session',
    description: 'One-on-one coaching tailored to your level — fastest way to progress with full instructor attention.',
    includes: INCLUDED_IN_ALL,
    souvenir: false,
    featured: true,
    published: true,
    order: 1,
    image: '/beginner-group-lesson.webp',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
  {
    _id: 'hc-pkg-1',
    name: 'Beginner Group Lesson',
    level: 'Beginner',
    format: 'Group (max 6)',
    duration: '1 hour 45 min',
    price: 35,
    priceNote: 'per person',
    description: 'Perfect first taste of surfing — learn the basics in a fun, small group with a certified instructor.',
    includes: INCLUDED_IN_ALL,
    souvenir: false,
    featured: false,
    published: true,
    order: 2,
    image: '/beginner-group-coaching.png',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
  {
    _id: 'hc-pkg-3',
    name: 'Intermediate Surf Coaching',
    level: 'Intermediate',
    format: 'Group (max 4)',
    duration: '1 hour 30 min',
    price: 50,
    priceNote: 'per person',
    description: 'Already up and riding? Sharpen your turns, positioning and wave selection with focused small-group coaching.',
    includes: INCLUDED_IN_ALL,
    souvenir: false,
    featured: false,
    published: true,
    order: 3,
    image: '/intermediate-surf-coaching.png',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
]
