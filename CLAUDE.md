# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

NovaDev's marketing site — a Next.js (App Router) site for a software studio. Single-page-ish: a landing page with sections (Navbar, Hero, Showcase, Services, Testimonials, Footer) plus a separate `/contact` route.

## Commands

```bash
npm run dev      # start dev server (Next.js, localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config via eslint-config-next)
```

There is no test suite configured in this repo.

## Architecture

- **App Router** under `src/app`. `layout.tsx` loads the two fonts (Inter via `--font-inter`, Space Grotesk via `--font-space`) and sets page metadata. `page.tsx` composes the landing page purely from layout components in order: `Navbar`, `Hero`, `Showcase`, `Services`, `Testimonials`, `Footer`. `src/app/contact/page.tsx` is the same shell minus Hero/Showcase/Services/Testimonials, with `Contact` instead.
- **Component layering** under `src/components`:
  - `layout/` — page sections wired to data (`Showcase.tsx`, `Services.tsx`, `Contact.tsx`, `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, `Testimonials.tsx`). These import from `src/data` and pass props down.
  - `ui/` — presentational pieces driven entirely by props (`Project.tsx`, `Service.tsx`, `Testimonial.tsx`, `CalCom.tsx`).
  - `common/` — generic primitives reused across sections (`Button.tsx`, `Frame.tsx`, `Logo.tsx`).
- **Data-driven content**: `src/data/*.ts` holds the actual copy/content as typed arrays/objects (`projects.ts`, `caseStudies.ts`, `services.ts`, `testimonials.ts`, `navbar.ts`). Adding/editing a project, service, or testimonial means editing these files, not the component markup. `caseStudies.ts` is keyed by the `id` used in `projects.ts` (see `caseStudies[selected.id]` in `Showcase.tsx`) — every project needs a matching case-study entry with that same id.
- **Types**: all shared prop/data interfaces live centrally in `src/types.ts`, grouped by section with comment headers (`Showcase`, `Services`, `Testimonials`). New content types should be added there rather than inlined in components.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
- **Styling**: Tailwind v4 (CSS-first config via `@theme inline` in `src/app/globals.css`, plus a legacy `tailwind.config.ts` for content globs). Design tokens are CSS custom properties (`--primary`, `--secondary`, `--tertiary`, `--light`, `--muted`, `--strong`) defined in `:root` in `globals.css` and exposed as Tailwind colors (`text-primary`, `bg-tertiary`, etc.) — change brand colors there, not per-component. Component-specific CSS (e.g. `services-scrollbar.css`, `bg.css`) lives in `src/styles` and is imported directly into the layout component that needs it.
- **Images**: served from `public/`, organized by section (`public/showcase`, `public/service`, `public/testimonial`, `public/bg`). Components reference them by convention, e.g. `Project.tsx` builds paths as `` `/showcase/${props.image}.png` `` and `` `/showcase/${props.logo}.png` `` directly from the `image`/`logo` fields in `projects.ts` — keep filenames in `src/data` in sync with actual files in `public/`.
- **Modal pattern**: `Showcase.tsx` holds `selected` project state and renders `ProjectWidget` (exported alongside `Project` from `src/components/ui/Project.tsx`) as an overlay when a project card's "View case study" is clicked, looking up the full case study from `caseStudies` by id.
