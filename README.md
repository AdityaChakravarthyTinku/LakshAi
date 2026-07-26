# Laksh AI — Marketing Website

A complete, production-ready, single-page marketing website for **Laksh AI**,
an AI, data, and software engineering solutions company. Built as a modular
React + Vite application with Tailwind CSS and Motion for React.

---

## 1. Project Overview

This is a single-page application (one route, anchor-based navigation) that
presents Laksh AI's positioning, solutions, technical specialists, delivery
process, engagement models, and a working contact form. All editable content
(copy, contact details, service/specialist data, image URLs) lives in one
file: `src/data/siteContent.js`.

## 2. Technology Stack

- React 18 (JavaScript + JSX, no TypeScript)
- Vite 5
- Tailwind CSS v4 via the official `@tailwindcss/vite` plugin
- Motion for React (`motion` package, imported from `motion/react`)
- Lucide React for icons
- `@fontsource/manrope` for a locally bundled Manrope font
- Native React state/hooks and `IntersectionObserver` — no Redux, no React
  Router, no UI framework (Bootstrap/Material UI/shadcn), no jQuery

## 3. Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## 4. Installation

```bash
npm install
```

## 5. Development

```bash
npm run dev
```

Starts the Vite dev server (default: http://localhost:5173) with hot reload.

## 6. Production Build

```bash
npm run build
```

Builds the optimized production bundle into the `dist/` folder. **`dist/` is
the folder you deploy** — upload its contents to your host of choice.

## 7. Preview the Production Build Locally

```bash
npm run preview
```

Serves the built `dist/` folder locally so you can verify the production
build before deploying.

## 8. Contact Form Endpoint Configuration

The contact form is hosting-provider independent. It reads a single
environment variable:

```
VITE_CONTACT_ENDPOINT=
```

1. Copy `.env.example` to `.env`.
2. Set `VITE_CONTACT_ENDPOINT` to the URL of your own backend/serverless
   function that accepts a `POST` request with a JSON body (fields:
   `fullName`, `workEmail`, `companyName`, `phone`, `interestedService`,
   `engagementModel`, `message`, `consent`).
3. Rebuild the site (`npm run build`) after changing `.env`.

If `VITE_CONTACT_ENDPOINT` is left empty, the form will **never** show a fake
success message. Instead it displays: *"The contact form backend has not
been configured yet. Please contact us using the email address shown on this
page."* alongside a clickable `mailto:` link. A submission is only treated as
successful when the configured endpoint returns an HTTP success status.

This project intentionally does not hardcode Formspree, Netlify Forms,
Firebase, or Supabase, so you can point `VITE_CONTACT_ENDPOINT` at whichever
backend you prefer.

## 9. How to Replace Company Placeholders

Open `src/data/siteContent.js` and edit:

- `brand` — name, tagline, short description, domain
- `contactInfo` — office, phone, email, business hours (used everywhere
  contact details appear, so you only edit them once)
- `hero`, `capabilityStrip`, `services`, `specialists`, `processStages`,
  `aboutContent`, `whyLaksh`, `engagementModels`, `footerLinks` — all
  section copy and card content

## 10. How to Replace Images

Image URLs are centralized in `src/data/siteContent.js`:

- `hero.backgroundImage` — hero background photo
- `aboutContent.image` — About section photo
- `whyLaksh.image` — Why Laksh AI section photo

Replace each URL with your own hosted image (or a local import from
`src/assets/`). Each image already has a gradient fallback and `alt` text set
in the corresponding component, so a broken image URL will not break the
layout.

## 11. How to Replace the Domain

Replace every occurrence of `https://www.yourdomain.com` with your real
domain in:

- `index.html` (canonical URL, Open Graph/Twitter tags, JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`

## 12. Deploying the `dist` Folder to Traditional Hosting

After `npm run build`, upload the entire contents of `dist/` (not the folder
itself) to your web server's public/www root via FTP, SFTP, or your host's
file manager.

## 13. Deployment Notes by Provider

**Vercel**
- Import the repository, framework preset "Vite".
- Build command: `npm run build`, Output directory: `dist`.
- Add `VITE_CONTACT_ENDPOINT` under Project Settings → Environment Variables.

**Netlify**
- Build command: `npm run build`, Publish directory: `dist`.
- Add `VITE_CONTACT_ENDPOINT` under Site Settings → Environment Variables.

**Cloudflare Pages**
- Build command: `npm run build`, Build output directory: `dist`.
- Add `VITE_CONTACT_ENDPOINT` under Settings → Environment Variables.

**GitHub Pages**
- Run `npm run build` locally or in a GitHub Action.
- Publish the `dist/` folder to the `gh-pages` branch (e.g. via the
  `gh-pages` npm package or a GitHub Action).
- If the site will live under `https://username.github.io/repo-name/`
  (a subdirectory, not a custom root domain), set `base: "/repo-name/"` in
  `vite.config.js` before building.

**cPanel / Generic Static Hosting**
- Run `npm run build` locally.
- Upload the contents of `dist/` into `public_html/` (or the equivalent web
  root) via FTP or the File Manager.

## 14. Custom Domain Overview

- If the site is served from the root of your domain (e.g.
  `https://www.yourdomain.com/`), keep `base: "/"` in `vite.config.js` (this
  is the default in this project).
- If the site is served from a subdirectory (e.g.
  `https://www.yourdomain.com/laksh-ai/`), change `base` in
  `vite.config.js` to match, then rebuild.
- Exact DNS records (A records, CNAME records, or nameserver changes) depend
  entirely on your chosen hosting provider — consult that provider's custom
  domain documentation for the specific records they require.

## 15. SEO Launch Checklist

- [ ] Replace `https://www.yourdomain.com` everywhere (see Section 11)
- [ ] Replace the Open Graph/Twitter image placeholder with a real image
- [ ] Update the JSON-LD organization block with real contact/address data
- [ ] Verify `robots.txt` and `sitemap.xml` reflect the final domain
- [ ] Confirm the page title and meta description in `index.html`
- [ ] Submit the sitemap to Google Search Console after launch

## 16. Accessibility Checklist

- [ ] One `<h1>` on the page (in the Hero), logical heading order after that
- [ ] Skip-to-content link works and is visible on keyboard focus
- [ ] All interactive elements reachable and operable via keyboard
- [ ] Visible focus outlines present on every focusable element
- [ ] Modals trap focus, restore focus on close, and close on <kbd>Escape</kbd>
- [ ] Form fields have associated labels and accessible error messages
- [ ] Reduced-motion preference disables non-essential animation
- [ ] Decorative images/icons are `aria-hidden`; meaningful images have `alt`

## 17. Prelaunch Checklist

- [ ] All placeholder contact details replaced with real information
- [ ] `VITE_CONTACT_ENDPOINT` configured and tested end-to-end
- [ ] All images replaced with licensed/owned photography
- [ ] Privacy Policy and Terms placeholder modals replaced with real legal
      copy (see `src/components/common/LegalPlaceholderModal.jsx` and
      `src/components/Footer.jsx`)
- [ ] Domain replaced across `index.html`, `robots.txt`, `sitemap.xml`
- [ ] `npm run build` completes without errors or warnings
- [ ] Site reviewed on 360px, 768px, 1024px, 1280px, and 1440px viewports

---

## Project Structure

```
laksh-ai/
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/siteContent.js
    ├── hooks/
    │   ├── useActiveSection.js
    │   ├── useBodyScrollLock.js
    │   └── useFocusTrap.js
    ├── components/
    │   ├── common/
    │   │   ├── Button.jsx
    │   │   ├── Logo.jsx
    │   │   ├── Modal.jsx
    │   │   ├── Reveal.jsx
    │   │   ├── SectionHeader.jsx
    │   │   ├── ScrollToTop.jsx
    │   │   └── LegalPlaceholderModal.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── CapabilityStrip.jsx
    │   ├── SolutionsSection.jsx
    │   ├── ServiceCard.jsx
    │   ├── AboutSection.jsx
    │   ├── SpecialistsSection.jsx
    │   ├── SpecialistCard.jsx
    │   ├── ProcessSection.jsx
    │   ├── WhyLakshSection.jsx
    │   ├── EngagementSection.jsx
    │   ├── CTASection.jsx
    │   ├── ContactSection.jsx
    │   ├── ContactForm.jsx
    │   └── Footer.jsx
    └── utils/scrollToSection.js
```

## Content Integrity Note

This project intentionally omits fabricated customer names, client logos,
testimonials, revenue figures, project counts, employee counts, awards,
certifications, or years of experience, per the original content brief.
Replace bracketed placeholders (office address, phone, email) with your
real information before launch.
