export type SurfPackage = {
  id: number
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner-Advance' | 'Surf Guide'
  format: string
  duration: string
  price: number
  priceNote: string
  souvenir: boolean
  featured: boolean
  image: string
}

export const PACKAGE_LEVELS = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Beginner-Advance',
  'Surf Guide',
] as const

// What every session includes
export const INCLUDED_IN_ALL = [
  'Good quality surf boards',
  'Rash guard',
  'Zinc & sunscreen',
  'Water bottle',
  'First aid on standby',
]

export const surfPackages: SurfPackage[] = [
  {
    id: 1,
    name: 'Beginner Private',
    level: 'Beginner',
    format: '1 on 1',
    duration: '90 mins',
    price: 60,
    priceNote: 'per session',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Beginner Semi Private',
    level: 'Beginner',
    format: '2 on 1',
    duration: '90 mins',
    price: 40,
    priceNote: 'per person',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Beginner Group',
    level: 'Beginner',
    format: 'Group',
    duration: '90 mins',
    price: 25,
    priceNote: 'per person',
    souvenir: false,
    featured: false,
    image:
      'https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Intermediate Private',
    level: 'Intermediate',
    format: '1 on 1',
    duration: '90 mins',
    price: 70,
    priceNote: 'per session',
    souvenir: true,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Intermediate Semi Private',
    level: 'Intermediate',
    format: '2 on 1',
    duration: '90 mins',
    price: 50,
    priceNote: 'per person',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1601505804121-45e2c5506c94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Intermediate Group',
    level: 'Intermediate',
    format: '5 students · 2 instructors',
    duration: '90 mins',
    price: 35,
    priceNote: 'per person',
    souvenir: false,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1559627755-42212e5c5fdf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Advanced',
    level: 'Advanced',
    format: '1 on 1',
    duration: '90 mins',
    price: 80,
    priceNote: 'per session',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Beginner-Advance Private',
    level: 'Beginner-Advance',
    format: '1 on 1',
    duration: '90 mins',
    price: 75,
    priceNote: 'per session',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Beginner-Advance Semi Private',
    level: 'Beginner-Advance',
    format: '2 on 1',
    duration: '90 mins',
    price: 55,
    priceNote: 'per person',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Surf Guide',
    level: 'Surf Guide',
    format: 'Private guide',
    duration: '120 mins',
    price: 90,
    priceNote: 'per session',
    souvenir: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop',
  },
]

// 3 highlight cards shown on the homepage
export const homepagePackages = surfPackages.filter((p) => [1, 4, 7].includes(p.id))
