export const PACKAGE_LEVELS = [
  'All',
  'Beginner',
  'Intermediate',
  'Surf Guide',
  'Agency',
] as const

export type PackageLevel = (typeof PACKAGE_LEVELS)[number]

export type PackageCategory = {
  key: string
  label: string
  tagline: string
  levels: string[]
  emptyText: string
  hideSessionTimes?: boolean
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
    key: 'SurfGuide',
    label: 'Surf Guide',
    tagline: 'Push your limits in bigger conditions.',
    levels: ['Surf Guide'],
    emptyText: 'New surf guide packages coming soon.',
  },
  {
    key: 'Agency',
    label: 'For Agencies',
    tagline: 'Are you a travel agency or hotel? We offer group packages and partnerships for your guests.',
    levels: ['Agency'],
    emptyText: 'Contact us to set up a partnership package for your guests.',
    hideSessionTimes: true,
  },
]

export const INCLUDED_IN_ALL = [
  'Good quality surf boards',
  'Rash guard',
  'Zinc & sunscreen',
  'First aid on standby',
]
