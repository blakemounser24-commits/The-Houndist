# The Houndist — Luxury Website

A premium rebuild of thehoundist.com (dog walking & sitting · Berowra & Berowra Heights, NSW), built with Next.js, Tailwind CSS, Framer Motion and Three.js. Same information architecture as the original site, elevated to a luxury-agency standard of design.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3** — design tokens (cream / forest / gold / ink) in `tailwind.config.js`
- **Framer Motion** — scroll reveals, accordion, drawer, tilt cards
- **Three.js** — drifting particle field in the hero
- **next/font/local** — Playfair Display + DM Sans, self-hosted from `app/fonts/` (no network fetch required)

## Structure

- `app/page.jsx` — the homepage, assembling every section in the original site's order
- `app/blog/[slug]/page.jsx` — three full article pages (statically generated)
- `components/` — one component per section + shared primitives
- `lib/content.js` — all copy, pricing, reviews and FAQ in one place (source of truth = the supplied PDF)
- `public/` — `hero.mp4` and `logo.png`

## Notes

- The contact section is informational only (no form), as specified.
- The service-area map is a keyless Google Maps embed pointed at Berowra NSW 2081.
- Colours, fonts and spacing follow the supplied design system.
