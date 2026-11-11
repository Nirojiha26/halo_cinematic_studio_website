# HALO CINEMATIC STUDIO

Next.js (App Router), TypeScript, Tailwind CSS, Motion, and Lucide React frontend for **HALO CINEMATIC STUDIO**.

The original static HTML version (`../index.html`, `../assets/`, `../README.txt`) is preserved untouched as a backup.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build & Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

## Routes

- `/` — Home (hero, about preview, services, portfolio preview, team preview, contact CTA)
- `/about` — Studio story, mission, and philosophy
- `/services` — Studio offerings (Wedding Photography, Wedding Cinematography, Documentary Filming, Album Songs & Music Videos, Professional Video Editing, Custom Photo Frames)
- `/portfolio` — Filterable showcase with keyboard-accessible lightbox
- `/team` — Studio collective & team directory
- `/contact` — Studio contact details & enquiry form (WhatsApp `077 532 1978`)
- `/booking` — Booking enquiry form (prepares a WhatsApp message; does not confirm dates automatically)

## Adding Real Studio Content

- **Studio info, domain, email, location & social links:** `src/config/site.ts`
- **Portfolio photos & film URLs:** Add files to `public/images/portfolio/` and update `src/data/portfolio.ts`
- **Team members & portraits:** Add portraits to `public/images/team/` and update `src/data/team.ts`
- **Background music:** Place a licensed MP3 at `public/audio/background.mp3`
