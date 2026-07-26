# Laksh AI — Marketing Website

A premium, single-page marketing site for Laksh AI, built with React + Vite +
Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploying with your own domain

`dist/` is a fully static bundle — deploy it anywhere that serves static
files:

- **Netlify / Vercel** (recommended, free tier is enough): connect the repo
  or drag-and-drop the `dist/` folder, then point your domain's DNS (usually
  an `A`/`ALIAS` or `CNAME` record) at the host as instructed in their
  dashboard.
- **Any static host** (S3 + CloudFront, GitHub Pages, your own server):
  upload the contents of `dist/` and point the domain there.

## Before going live — things to fill in

- `src/components/Contact.jsx` — replace `YOUR_SERVICE_ID`,
  `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with real values from your
  [EmailJS](https://www.emailjs.com/) account so the contact form actually
  sends mail. Also swap the placeholder address, phone, and email in the
  same file, and the map embed if you want a real location pinned.
- `index.html` — update `<link rel="canonical">`, Open Graph, and Twitter
  meta tags once you have your real domain, and add a real `/og-image.jpg`
  (1200×630) and `/public/favicon.svg` if you want a custom mark instead of
  the default reticle icon.
- `src/constants/team.js` (inside `content.js`) — swap placeholder team
  names/photos for real ones if you want the team section to reflect actual
  staff (LinkedIn links are currently placeholders too).
- Social links in `Footer.jsx` currently point nowhere — add real URLs.

## Project structure

```
src/
  components/   → one component per landing-page section
  constants/     → all site copy and data (services, solutions, team, FAQ, etc.)
  hooks/         → scroll-direction and active-section observers
  utils/         → shared Reveal animation wrapper + Reticle signature mark
  App.jsx        → assembles all sections in order
  main.jsx       → React root
  index.css      → Tailwind + design tokens (colors, fonts, custom utilities)
```

## Design tokens

| Role       | Color     |
|------------|-----------|
| Primary    | `#0F172A` |
| Secondary  | `#2563EB` |
| Accent     | `#14B8A6` |
| Background | `#F8FAFC` |

Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono**
(labels/stats) — loaded via Google Fonts in `index.html`.
