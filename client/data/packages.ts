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
    _id: 'hc-pkg-1',
    name: 'Beginner Group Lesson',
    level: 'Beginner',
    format: 'Group (max 6)',
    duration: '2 hours',
    price: 35,
    priceNote: 'per person',
    souvenir: false,
    featured: false,
    published: true,
    order: 1,
    image:
      'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
  {
    _id: 'hc-pkg-2',
    name: 'Private Surf Coaching',
    level: 'Beginner',
    format: '1-on-1 Private',
    duration: '1.5 hours',
    price: 65,
    priceNote: 'per session',
    souvenir: false,
    featured: true,
    published: true,
    order: 2,
    image:
      'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
    createdAt: '2026-04-22T00:00:00.000Z',
    updatedAt: '2026-04-22T00:00:00.000Z',
  },
]
