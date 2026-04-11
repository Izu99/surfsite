# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm run lint      # ESLint via next lint
```

No test suite is configured.

## Stack

- Next.js 15 (App Router) with React 19
- Tailwind CSS v4 — configured entirely in `app/globals.css` via `@theme {}` (no `tailwind.config.*`)
- TypeScript strict mode
- `lucide-react` for icons; `clsx` + `tailwind-merge` via `lib/utils.ts` `cn()` helper

shadcn/ui is **not installed**. Components are hand-built with Tailwind. Do not import from `@/components/ui`.

## Architecture

All pages are server components except interactive ones (`'use client'` where needed).

```
app/
  layout.tsx          # root layout — wraps every page with Navbar + Footer, sets Inter font
  globals.css         # Tailwind v4 @theme tokens + custom utilities (container-site, section-padding)
  page.tsx            # homepage — Hero, About, Stats, Services, Gallery preview, Pricing, Shop, CTA
  about/page.tsx      # about page
  gallery/page.tsx    # gallery page
  contact/page.tsx    # contact page
components/
  Navbar.tsx          # 'use client' — sticky, semi-transparent dark nav with mobile drawer
  Footer.tsx          # footer
  HeroSlideshow.tsx   # hero section with image slideshow
  ServicesSlider.tsx  # horizontal services slider
  ContactForm.tsx     # contact form
lib/
  utils.ts            # cn() helper only
public/
  logo.png            # site logo
```

**Data lives in page files** as top-level `const` arrays — there is no `lib/data.ts`. Add data constants at the top of the relevant page file, above the page component.

## CSS utilities (globals.css)

Two custom utilities are used everywhere — do not replace with arbitrary Tailwind values:

- `container-site` — `max-w-[1280px]` centred with `px-6` padding
- `section-padding` — `py-20 md:py-24`

## Theme tokens

Defined in `app/globals.css` `@theme {}`:

- Primary: `--color-primary` `#1d4ed8` (blue-700)
- Accent/link hover: `#0ea5e9` (sky-500)
- Light mode only — no `dark:` classes

## Rules

- Mobile-first responsive: `sm` → `md` → `lg` → `xl`
- No inline styles — Tailwind classes only
- No `any` types
- Unsplash images require `?q=80&w=<size>&auto=format&fit=crop` params; add hostname to `next.config.ts` `remotePatterns` if adding a new image host
- `main` has `pt-[72px]` to offset the fixed 72px navbar — do not remove

## Brand

- Name: WavePeak Surf School
- Location: Hikkaduwa Beach, Sri Lanka
- Phone: +94 77 123 4567
- Email: info@wavepeaksurf.lk
- Hours: Daily 6am–6pm
