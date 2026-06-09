# Noah Surf School — Design System

Full reference for colors, typography, layout, components, and patterns used on the homepage. Reusable for any new site built on the same stack.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript (strict) |
| CSS | Tailwind CSS v4 — configured via `app/globals.css` `@theme {}` (no `tailwind.config.*`) |
| Icons | `lucide-react` |
| Fonts | Google Fonts via `next/font/google` |
| Utility | `clsx` + `tailwind-merge` via `lib/utils.ts` `cn()` helper |

---

## Color Palette

### Primary — Ocean Teal

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | `#2CB8B2` | Buttons, links, highlights |
| `--color-primary-dark` | `#1D9E98` | Button hover |
| `--color-primary-light` | `#7DD3CF` | Active nav links |
| `--color-primary-50` | `#E8F9F8` | Tint backgrounds |
| `--color-primary-100` | `#B3EBEA` | |
| `--color-primary-200` | `#80DCDA` | |
| `--color-primary-300` | `#4DCBC8` | |
| `--color-primary-800` | `#13827D` | |
| `--color-primary-900` | `#0A6360` | |

### Surface / Background Colors

| Name | Hex | Section |
|---|---|---|
| White (body) | `#ffffff` | Base, cards |
| Off-white | `#fcfcfc` | Hirikatiya Experience, Google Reviews |
| Sand | `#f0e9dd` | About Noah |
| Cream | `#f0ece4` | Alternate warm surface |
| Gradient start | `#bdd2c8` | Gradient zone top (sage green) |
| Gradient end | `#5ca3af` | Gradient zone bottom (medium teal) |
| Footer | `#2c6670` | Footer background |

### Text Colors

| Use | Value |
|---|---|
| Body text (default) | `#111827` (Tailwind `gray-900`) |
| Heading on white/light | `text-gray-900` |
| Body on white/light | `text-gray-600` / `text-gray-700` |
| Muted on white/light | `text-gray-500` |
| All text on gradient zone | `text-white` / `text-white/80` |
| Navbar links | `text-white/85` → `text-white` (hover) |

### Accent

| Use | Hex |
|---|---|
| WhatsApp button | `#25D366` / `#20bd5a` (hover) |
| Star ratings | Tailwind `amber-400` |
| Brushstroke button fill | `#3AAEE0` |

---

## Typography

### Font Families

| Role | Family | Weights | CSS token |
|---|---|---|---|
| Body / UI | **Poppins** | 400, 500, 600, 700, 800 | `--font-sans` |
| Display / handwritten | **Caveat** | 400, 500, 600, 700 | `--font-display` |
| Script / personal | **Italianno** | 400 | `--font-italianno` |

Load via `next/font/google` with `display: swap`. Map to CSS variables and attach to `<html>` as Tailwind variable classes.

### Type Scale

| Element | Class | Font | Notes |
|---|---|---|---|
| Hero H1 | `text-5xl md:text-7xl font-bold` | Poppins | White, on dark overlay |
| Section H2 | `text-3xl md:text-4xl font-bold` | Poppins | |
| Card H3 | `text-xl font-bold` | Poppins | |
| Display subtitle | `font-display text-2xl md:text-3xl` | Caveat | Relaxed, italic feel |
| Script personal accent | `font-italianno text-3xl md:text-6xl` | Italianno | About Noah section |
| Body | `text-sm leading-relaxed` | Poppins | |
| Meta / small | `text-xs` | Poppins | |
| Uppercase label | `text-sm font-semibold uppercase tracking-wider` | Poppins | Buttons, section labels |

### Heading defaults (globals.css)

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
}
```

---

## Layout

### Container

```css
.container-site {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 1.5rem; /* 24px */
}
```

### Section Padding

```css
.section-padding {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem;
}
@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;  /* 96px */
    padding-bottom: 6rem;
  }
}
```

### Grid Patterns

| Pattern | Class |
|---|---|
| 2-col (text + media) | `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center` |
| 3-col (pricing cards) | `grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8` |
| 3-col (feature cards) | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5` |

---

## Section Map (Homepage)

```
Navbar (fixed, glass)
│
├── 1. Hero — fullscreen slideshow, dark overlay, white text
├── 2. Conditions Bar — live surf conditions
│
├── 3. Hirikatiya Experience — bg #fcfcfc, 2-col grid + YouTube embed
│
├──── wave (#fcfcfc → #f0e9dd)
├── 4. About Noah — bg #f0e9dd (sand), Italianno script, beach image
├──── wave (#f0e9dd → #fcfcfc)
│
├── 6. Google Reviews — bg #fcfcfc, marquee scroll, star ratings
│
├──── wave (#fcfcfc → #bdd2c8)
│
└── GRADIENT ZONE (linear-gradient #bdd2c8 → #5ca3af) ─────────────
    ├── 7. Noah Difference — white cards on gradient, float decorations
    ├── 8. Gallery — photo slideshow
    ├── 9. Packages — 3 pricing cards (bg-white cards on gradient)
    ├── 10. Noah Collection — horizontal scrollable product cards
    └── CTA — centered white text, no background of its own
──────────────────────────────────────────────────────────────────────
Footer — bg #2c6670
```

---

## Wave Dividers

40px `div` with a CSS gradient — used between every color-changing section:

```tsx
function SectionDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`, height: '40px' }} />
  )
}
```

Current sequence:
1. `#fcfcfc` → `#f0e9dd` (Hirikatiya → About Noah)
2. `#f0e9dd` → `#fcfcfc` (About Noah → Reviews)
3. `#fcfcfc` → `#bdd2c8` (Reviews → Gradient zone)

---

## Gradient Zone

All sections inside this wrapper are transparent — gradient shows through from the parent div.

```css
.gradient-zone {
  background: linear-gradient(to bottom, #bdd2c8, #5ca3af);
}
.gradient-zone section {
  background-color: transparent !important;
  background-image: none !important;
}
```

Text inside gradient zone is always `text-white` / `text-white/80`.

---

## Navbar

- **Position**: `fixed top-0 inset-x-0 z-50`
- **Background**: `bg-black/55 backdrop-blur-xl`
- **Border**: `border-b border-white/10`
- **Height**: 72px — pages use `pt-[72px]` on `<main>` to offset
- **Active link**: `bg-primary/20 text-primary-light rounded-full`
- **Inactive link**: `text-white/85 hover:text-white hover:bg-white/10 rounded-full`
- **CTA in nav**: WhatsApp `bg-[#25D366]` rounded pill
- **Mobile**: slide-down drawer with `bg-black/85 backdrop-blur-[20px]`

---

## Footer

- **Background**: `#2c6670`
- **Text**: `text-gray-300` / `text-white`
- **Layout**: 5-column grid (`lg:grid-cols-5`) — brand, quick links, lessons, contact, agencies
- **Bottom bar**: `border-t border-white/10`
- **Social icons**: `h-9 w-9 rounded-full border border-white/20`, hover fills with primary teal

---

## Buttons

### Primary (solid)
```
bg-primary text-white px-10 py-4 rounded-full
text-sm font-semibold uppercase tracking-wider
hover:bg-primary-dark shadow-md
```

### Outline dark (on light backgrounds)
```
border-2 border-gray-800 text-gray-800 px-8 py-3.5 rounded-full
text-sm font-semibold
hover:bg-gray-800 hover:text-white
```

### Outline white (on dark/gradient backgrounds)
```
border-2 border-white text-white px-8 py-3.5 rounded-full
text-sm font-semibold
hover:bg-white hover:text-[#5ca3af]
```

### Ghost (icon buttons, arrows)
```
h-11 w-11 rounded-full border border-white/40 text-white
hover:border-white hover:bg-white/10
```

### WhatsApp
```
bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full
text-sm font-bold shadow-lg shadow-green-500/20
```

### Brushstroke (SVG-painted button)
SVG `<rect>` with `feTurbulence` + `feDisplacementMap` filter for a hand-painted look. Fill `#3AAEE0`, white gloss overlay at 12% opacity.

---

## Cards

### Feature card (Noah Difference)
```
bg-white rounded-2xl p-6 shadow-sm flex gap-5
```
Icon (48×48px PNG/SVG) + title `font-bold text-gray-900 text-lg` + body `text-gray-500 text-sm`

### Pricing card
```
rounded-2xl overflow-hidden border border-gray-200
hover:border-gray-300 bg-white
```
Featured variant: `border-primary shadow-2xl md:scale-105 z-10`

### Product/collection card
```
snap-start shrink-0 w-[82vw] sm:w-[340px]
bg-white rounded-3xl shadow-md overflow-hidden
```
Slight tilt: `style={{ rotate: i % 2 === 0 ? '-0.6deg' : '0.6deg' }}`

### Review card
Auto-scrolling marquee. Cards with reviewer avatar, star rating, quote text, photo thumbnails.

---

## Animations

Defined in `@theme {}` in `globals.css`:

| Name | Effect | Duration | Use |
|---|---|---|---|
| `float` | translateY 0 → -12px → 0 | 6–9s, infinite | Decorative images |
| `fade-up` | opacity + translateY(28px) → 0 | 0.65s | Section entrance |
| `pulse-slow` | scale 1 → 1.08 → 1 | 3s, infinite | CTA emphasis |
| `reviews-scroll` | translateX 0 → -50% | 140s, linear | Review marquee |
| `wave-flow` | translateX 0 → -50% | 22s, linear | Wave SVG decoration |
| `gallery-progress` | scaleX 0 → 1 | per slide | Gallery progress bar |

Arbitrary animation syntax (Tailwind v4):
```
animate-[float_9s_ease-in-out_infinite]
```

---

## Decorative Assets

| File | Use | Opacity | Transform |
|---|---|---|---|
| `/surfboard.png` | Gradient zone right edge | 15% | `rotate-[14deg]` |
| `/noah-drawing.png` | Noah Difference section | 85% | `rotate-[9deg]` |
| `/decor-gemini.png` | About Noah / Hirikatiya span | 90% | `rotate-[-18deg]` |
| `/decor-new.png` | Noah Collection + CTA | 95% | `rotate-[15deg]` |

All are `pointer-events-none select-none` with `aria-hidden`. Apply the `float` animation with varied durations (7–9s) so they don't move in sync.

---

## Component List

| Component | File | Purpose |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Fixed glass nav with mobile drawer |
| `HeroSlideshow` | `components/HeroSlideshow.tsx` | Fullscreen image carousel |
| `ConditionsBar` | `components/ConditionsBar.tsx` | Live surf conditions ticker |
| `HirikatiayaExperience` | `components/HirikatiayaExperience.tsx` | Icon + text highlights list |
| `ReviewsSlider` | `components/ReviewsSlider.tsx` | Auto-scrolling Google reviews |
| `GallerySlideshow` | `components/GallerySlideshow.tsx` | Paginated photo gallery |
| `HomepagePackages` | `components/HomepagePackages.tsx` | 3-column pricing grid |
| `ServicesSlider` | `components/ServicesSlider.tsx` | Horizontal scrollable cards |
| `Footer` | `components/Footer.tsx` | 5-column footer grid |
| `FloatingWhatsApp` | `components/FloatingWhatsApp.tsx` | Fixed bottom-right WhatsApp button |
| `GoogleTranslate` | `components/GoogleTranslate.tsx` | Custom language switcher |
| `SiteShell` | `components/SiteShell.tsx` | Wraps all pages with Navbar + Footer |

---

## Responsive Breakpoints (Tailwind defaults)

| Prefix | Min-width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Mobile-first: base styles are mobile, then `sm:` → `md:` → `lg:` → `xl:` override upward.

---

## Design Principles

1. **Ocean palette** — teal, sage, sand, and white. No hard primary blues or reds.
2. **Three-font personality** — Poppins for credibility, Caveat for warmth, Italianno for the personal/story moments.
3. **Wave transitions** — 40px gradient dividers so there is never a hard line between sections.
4. **Gradient zone** — the lower half of the page lives inside a single teal gradient, making the "book now" area feel immersive and distinct.
5. **Cards on gradient** — white cards on the teal gradient create strong contrast without adding another background color.
6. **Floating decorations** — surfboard and drawing PNGs float gently at different speeds to add life without distraction.
7. **Glass navbar** — dark semi-transparent so any hero image shows through.
8. **Rounded everything** — `rounded-2xl` to `rounded-3xl` on all cards; `rounded-full` on all buttons and icon circles.
