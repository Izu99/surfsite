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

export type PackageCategory = {
  key: string
  label: string
  tagline: string
  levels: string[]
  emptyText: string
}

export const PACKAGE_CATEGORIES: PackageCategory[] = [
  {
    key: 'Beginner',
    label: 'Beginner',
    tagline: 'New to surfing? Start here.',
    levels: ['Beginner'],
    emptyText: 'New beginner packages coming soon.',
  },
  {
    key: 'Intermediate',
    label: 'Intermediate',
    tagline: 'Already up and riding? Sharpen your skills.',
    levels: ['Intermediate'],
    emptyText: 'New intermediate packages coming soon.',
  },
  {
    key: 'Advanced',
    label: 'Advanced',
    tagline: 'Push your limits in bigger conditions.',
    levels: ['Advanced', 'Beginner-Advance'],
    emptyText: 'New advanced packages coming soon.',
  },
  {
    key: 'Agencies',
    label: 'For Agencies',
    tagline: 'Are you a travel agency or hotel? We offer group packages and partnerships for your guests.',
    levels: ['Surf Guide', 'Agencies'],
    emptyText: 'Contact us to set up a partnership package for your guests.',
  },
]

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
    name: 'Beginner 1-on-1 (Theory & Practical)',
    level: 'Beginner',
    format: '1-on-1 Private',
    duration: '1 hour 45 min',
    price: 65,
    priceNote: 'per session',
    description: 'Includes surf boards, safety tips, an introduction to Hirikatiya Beach, and ocean safety.',
    includes: [
      '1 teacher : 1 student',
      'No prior experience needed',
      'Suitable for complete beginners',
      "Can't swim? No problem",
    ],
    souvenir: true,
    featured: true,
    published: true,
    order: 1,
    image: '/beginner-group-lesson.webp',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
  {
    _id: 'hc-pkg-1',
    name: 'Group (Theory & Practical)',
    level: 'Beginner',
    format: 'Group (max 6)',
    duration: '1 hour 45 min',
    price: 35,
    priceNote: 'per person',
    description: 'Includes surf boards, safety tips, an introduction to Hirikatiya Beach, and ocean safety.',
    includes: [
      '1 teacher : up to 6 students',
      'No prior experience needed',
      'Suitable for complete beginners',
      "Can't swim? No problem",
    ],
    souvenir: true,
    featured: false,
    published: true,
    order: 2,
    image: '/group-lesson.jpg',
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
    includes: [
      '1 teacher : up to 4 students',
      'Basic surfing experience required',
      'Suitable for intermediate surfers',
      'Focus on technique & wave selection',
    ],
    souvenir: false,
    featured: false,
    published: true,
    order: 3,
    image: '/intermediate-surf-coaching.png',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
]
