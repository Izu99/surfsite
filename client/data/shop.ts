export type Service = {
  title: string
  description: string
  image: string
  alt: string
  price: number
  sizes?: string[]
}

const ALL_SIZES = ['S', 'M', 'L', 'XL', 'XXL']

export const services: Service[] = [
  {
    title: 'Cap',
    description: 'Classic surf cap to keep the sun out of your eyes.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Surf cap',
    price: 5000,
  },
  {
    title: 'Hat',
    description: 'Wide-brim beach hat for all-day comfort in the sun.',
    image: 'https://images.unsplash.com/photo-1561941087-2433c4a0ef12?q=80&w=2070&auto=format&fit=crop',
    alt: 'Beach hat',
    price: 7500,
  },
  {
    title: 'White Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-white.webp',
    alt: 'White Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Black Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-black.webp',
    alt: 'Black Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Maroon Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-maroon.webp',
    alt: 'Maroon Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Green Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-green.webp',
    alt: 'Green Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Teal Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-teal.webp',
    alt: 'Teal Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Navy Noah Surf Tee',
    description: 'Soft cotton tee with the Noah Surf School print, Sri Lanka flag patch on front, full back logo.',
    image: '/shop-tshirt-navy.webp',
    alt: 'Navy Noah Surf t-shirt, front and back',
    price: 6000,
    sizes: ALL_SIZES,
  },
  {
    title: 'Rash Guard',
    description: 'UV-protective rash guard built for long sessions.',
    image: 'https://images.unsplash.com/photo-1595389910742-5b5c0e958a11?q=80&w=2070&auto=format&fit=crop',
    alt: 'Rash guard',
    price: 7500,
  },
]
