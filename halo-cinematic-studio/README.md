# HALO CINEMATIC STUDIO — Next.js Application

This is the main web application for **HALO CINEMATIC STUDIO**, built with [Next.js 16](https://nextjs.org/) (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, and Lucide React.

The original static HTML version is preserved at the repository root (`../index.html`, `../assets/`) as a backup.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
# Type check → Lint → Build → Start
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

---

## Routes

| Route | Component | Description |
|---|---|---|
| `/` | `page.tsx` | Hero, About preview, Packages preview, Photos preview, Contact CTA |
| `/about` | `about/page.tsx` | Studio story, mission & philosophy, craft disciplines |
| `/packages` | `packages/page.tsx` | Interactive tabbed package explorer (24 packages, 4 categories) |
| `/photos` | `photos/page.tsx` | Filterable gallery with darkroom lightbox |
| `/contact` | `contact/page.tsx` | WhatsApp enquiry form with package selection |
| `/services` | `services/page.tsx` | → Redirects to `/packages` |
| `/portfolio` | `portfolio/page.tsx` | → Redirects to `/photos` |
| `/booking` | `booking/page.tsx` | → Redirects to `/contact` |
| `/team` | `team/page.tsx` | → Redirects to `/about` |

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Tailwind + custom CSS tokens
│   ├── about/page.tsx
│   ├── packages/page.tsx
│   ├── photos/page.tsx
│   ├── contact/page.tsx
│   ├── booking/page.tsx          # → redirect to /contact
│   ├── services/page.tsx         # → redirect to /packages
│   ├── portfolio/page.tsx        # → redirect to /photos
│   ├── team/page.tsx             # → redirect to /about
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/                   # Navbar, Footer, MobileMenu
│   ├── sections/                 # Hero, AboutPreview, PackagesExplorer,
│   │                             # PackagesPreview, PhotosGallery, PhotosPreview,
│   │                             # ContactCTA, EnquiryForm
│   ├── shared/                   # Logo, LogoPanel, PackageCard, PhotoCard,
│   │                             # ContactDetails, PageHeader, MusicToggle,
│   │                             # WhatsAppButton, FloatingActions, ServiceCard,
│   │                             # QueryParamSync, CurrentYear
│   └── ui/                       # Button, Container/Section, SectionHeading
│
├── config/
│   └── site.ts                   # Central studio config (name, logo, contact, nav)
│
├── data/
│   ├── packages.ts               # 24 packages across 4 categories with pricing
│   ├── photos.ts                 # Wedding portraits & package brochure catalog
│   └── services.ts               # 6 studio craft disciplines
│
├── lib/
│   ├── hooks.ts                  # useBodyScrollLock, useFocusTrap
│   ├── metadata.ts               # createMetadata helper
│   └── utils.ts                  # cn(), pad2(), isActivePath()
│
└── motion/                       # MotionProvider, PageTransition, Reveal
```

---

## Assets

```
public/
├── logos/
│   └── logo-1.png                # Official HALO logo (1536×1024 PNG)
├── images/
│   ├── photos/                   # 4 cropped wedding couple portraits
│   │   ├── wedding-couple-01.jpg
│   │   ├── wedding-couple-02.jpg
│   │   ├── wedding-couple-03.jpg
│   │   └── wedding-couple-04.jpg
│   └── flyers/                   # 14 official package brochure sheets
│       ├── wedding-silver-basic.jpg
│       ├── wedding-silver-standard.jpg
│       ├── wedding-royal-golden.jpg
│       ├── wedding-diamond-platinum.jpg
│       ├── engagement-basic-01.jpg … engagement-outstanding-03.jpg
│       ├── event-basic.jpg
│       ├── event-standard.jpg
│       └── event-outstanding.jpg
└── audio/                        # Place background.mp3 here (optional)
```

---

## Configuration

### Studio Config — `src/config/site.ts`

All studio branding, contact info, and navigation are centralized here:

```ts
siteConfig.name          // "HALO CINEMATIC STUDIO"
siteConfig.tagline       // "Capture • Create • Inspire"
siteConfig.contact.email // "halostudio18@gmail.com"
siteConfig.contact.phoneDisplay // "077 532 1978"
siteConfig.logo.src      // "/logos/logo-1.png"
siteConfig.nav           // Home, About, Packages, Photos, Contact
siteConfig.socials       // Add Instagram/Facebook when available
```

### Packages — `src/data/packages.ts`

All 24 packages with category, tier, pricing, and deliverables. To add or edit a package, modify the `studioPackages` array and it will automatically appear on `/packages` and in the Contact form's package dropdown.

### Photos — `src/data/photos.ts`

Gallery items referencing images in `public/images/photos/` and `public/images/flyers/`. To add new photos, place them in the appropriate folder and add an entry to the `weddingPortraits` or `packageBrochures` array.

---

## Key Features

- **Responsive Design** — Mobile-first layout with smooth transitions
- **WhatsApp Enquiry System** — Visitors select a package category + specific tier, fill in details, and send a structured WhatsApp message to `077 532 1978`
- **URL Parameter Sync** — Deep-linking support: `/packages?category=weddings`, `/contact?category=weddings&package=wedding-royal-golden`
- **Darkroom Lightbox** — Keyboard-accessible (Arrow keys, Escape) photo viewer with package enquiry CTA
- **Music Toggle** — Optional background music (place MP3 at `public/audio/background.mp3`)
- **Floating WhatsApp Button** — Always-visible quick access to studio WhatsApp
- **SEO** — `sitemap.xml`, `robots.txt`, OpenGraph & Twitter meta, canonical URLs
- **Legacy Redirects** — Old routes (`/services`, `/portfolio`, `/booking`, `/team`) redirect cleanly

---

## Contact

| Channel | Details |
|---|---|
| Phone / WhatsApp | 077 532 1978 |
| Email | halostudio18@gmail.com |
| WhatsApp | [wa.me/94775321978](https://wa.me/94775321978) |
