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
