# WaveX Kite School — Next.js Project

Converted from the original single-file HTML into a production-ready **Next.js 14 App Router** project using **TypeScript**, **Tailwind CSS**, and **shadcn/ui-ready** component patterns.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Folder Structure

```
wavex/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar + Footer)
│   ├── globals.css         # Tailwind base + custom scrollbar styles
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page (team, values, story)
│   └── contact/
│       └── page.tsx        # Contact page (form + details + map)
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger + active links
│   ├── Footer.tsx          # Footer with 4-column layout
│   ├── HeroSlideshow.tsx   # Auto-advancing hero slideshow with dots & arrows
│   ├── AboutSection.tsx    # About split section with image grid
│   ├── StatsSection.tsx    # Stats with count-up animation on scroll
│   ├── ServicesSection.tsx # Service cards with hover effects
│   ├── GallerySection.tsx  # Photo gallery grid
│   ├── PricingSection.tsx  # 3-tier pricing cards
│   ├── EquipmentSection.tsx# Equipment shop preview
│   ├── TestimonialsSection.tsx # Auto-sliding testimonials
│   ├── CTABanner.tsx       # Newsletter CTA with email submit
│   └── ScrollReveal.tsx    # Reusable scroll-triggered animation wrapper
│
├── lib/
│   ├── constants.ts        # All site data (slides, services, pricing, etc.)
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│
├── tailwind.config.ts      # Custom colors, fonts, keyframes
├── next.config.mjs         # Image domains (Unsplash, randomuser.me)
├── tsconfig.json
└── package.json
```

---

## ✨ Features

| Feature | Implementation |
|---|---|
| App Router | `app/` directory with layouts and page-level metadata |
| TypeScript | Strict mode enabled throughout |
| Tailwind CSS | Custom design tokens (gold, dark, darker, mid, gray) |
| Fonts | Google Fonts via `next/font` (Oswald + Open Sans) |
| Optimised Images | `next/image` with Unsplash + randomuser.me domains |
| Scroll Animations | Custom `ScrollReveal` component (IntersectionObserver) |
| Count-up Animation | Triggered on viewport entry in `StatsSection` |
| Hero Slideshow | Auto-advancing with dots, arrows, and crossfade |
| Testimonial Slider | Touch-friendly auto-slider with dot navigation |
| Mobile Nav | Animated hamburger menu with smooth slide-down |
| SEO | Per-page metadata (`title`, `description`, OpenGraph) |
| Active Nav Links | Highlighted using `usePathname` |

---

## 🎨 Design Tokens

```ts
colors: {
  gold:   '#E8B84B',   // Brand accent
  dark:   '#1a2535',   // Section backgrounds
  darker: '#0f1825',   // Nav, footer
  light:  '#f5f7fa',   // Alternating section bg
  gray:   '#6b7c93',   // Body text
}
```

---

## 📦 Key Dependencies

```json
{
  "next": "14.2.5",
  "react": "^18",
  "framer-motion": "^11.3.0",     // Available for additional animations
  "lucide-react": "^0.400.0",     // Icons
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.4.0"
}
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Stats, Services, Gallery, Pricing, Equipment, Testimonials, CTA |
| `/about` | About — Story, Values, Stats, Team, CTA |
| `/contact` | Contact — Form, Details, Map, Info Strip |

---

## 🔧 Customisation

All site content lives in **`lib/constants.ts`** — update images, pricing, services, team members, and testimonials there without touching component code.

To add **shadcn/ui** components:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input card
```
"# serfsite" 
"# surfsite" 
"# surfsite" 
