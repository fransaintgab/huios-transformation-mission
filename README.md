# Huios Transformation Mission

Website for **Huios Transformation Mission**, an interdenominational discipling network:
*Raising Mature Sons to Reveal Christ and Transform Nations.*

Built with [Astro](https://astro.build) 7, TypeScript (strict) and Tailwind CSS 4. It ships as a static site with very little JavaScript and no UI framework.

## Run it locally

You need **Node.js 24** (see `.nvmrc`; 22.12 or newer works) and **pnpm 11**.

```bash
corepack enable          # makes the pinned pnpm version available
pnpm install
pnpm dev                 # http://localhost:4321
```

To see the site with demo imagery, dates, media and contact details filled in:

```bash
pnpm dev:demo            # http://localhost:4321, with a "Preview with demo content" tag
```

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Local development server with the real client content only |
| `pnpm dev:demo` | Development server with demo content switched on |
| `pnpm check` | Astro and TypeScript diagnostics (run before every commit) |
| `pnpm build` | Production build into `dist/` |
| `pnpm build:demo` | Build with demo content, for design previews only |
| `pnpm preview` | Serve the last build from `dist/` |
| `pnpm demo:images` | Regenerate the demo imagery in `public/demo/` (needs Python 3 with Pillow and numpy) |

## Pages

| Route | Content |
| --- | --- |
| `/` | Homepage: eleven numbered sections and a finale |
| `/about/` | Who we are, philosophy, vision, mission, how we equip |
| `/our-model/` | WIN, GROW, BUILD and SEND with their departments, oversight, Cell Ministry |
| `/ministries/` | The nine ministries and the cell structure |
| `/programs/` | The six major programs |
| `/media/` | HUIOS TV and the media categories |
| `/get-involved/` | The seven pathways into the mission |
| `/contact/` | Enquiry types and contact channels |
| `404` | Not-found page (Netlify serves `404.html` automatically) |

## Project structure

```text
src/
  components/
    global/   Header, Footer, DemoNotice
    home/     One component per homepage section
    page/     PageHero, Chapter, NextChapter (shared by inner pages)
    ui/       Button, Container, Eyebrow, SectionHeader
  config/     demo.ts (the demo-mode flag)
  data/       Typed client content, one module per topic, plus demo.ts
  layouts/    BaseLayout (metadata, header, footer, shared reveal script)
  pages/      Routes
  styles/     global.css (design tokens and a few shared utilities)
  utils/      slugify.ts (stable anchor ids)
public/
  brand/      Client logo artwork. Do not edit or replace.
  demo/       Generated demo imagery (preview only)
scripts/      generate-demo-images.py
```

## Content rules

- All real copy comes from the client brief (`HUIOS TRANSFORMATION MISSION.docx`) and lives in `src/data/`. Change copy there, not inside components.
- Do not invent facts, people, dates, venues, contact details or photography. When something is missing, leave a clean gap and ask the client.
- Never modify the files in `public/brand/`.

## Demo mode

Demo mode lets reviewers see the design with imagery and realistic details in place. It is **off by default** and is only switched on by `PUBLIC_DEMO=true` (the `:demo` scripts).

- Every demo value lives in `src/data/demo.ts` and every demo image in `public/demo/`.
- Demo images are procedurally generated light-and-haze scenes, not photographs of Huios.
- Demo contact details use reserved example values (`example.org`, `555-01xx`) that reach no one.
- A fixed "Preview with demo content" tag appears on every page while it is on.

Before launch, replace demo content with approved client material. Then delete `src/data/demo.ts`, `public/demo/`, `src/config/demo.ts`, `scripts/generate-demo-images.py` and `DemoNotice.astro`, and follow the type errors.

## Design system

Tokens live in `src/styles/global.css` as CSS custom properties.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0B0A09` | Dark chapters |
| `--color-charcoal` | `#171411` | Footer, secondary dark |
| `--color-ivory` | `#F6F1E8` | Light chapters |
| `--color-paper` | `#ECE4D8` | Secondary light |
| `--color-ember` | `#EF4918` | Primary action |
| `--color-flame` | `#F4C51D` | Accents on dark |
| `--color-earth` | `#712313` | Accents on light |

Typography pairs Cormorant Garamond (display) with Manrope (body and interface). Layouts use rectangular controls, editorial rules, numbered markers and generous whitespace. Most wide layouts switch at `75rem`.

Motion is one shared `IntersectionObserver` in `BaseLayout`. Content is visible without JavaScript, and reduced-motion users see everything immediately.

## Before launch

- [ ] Real contact channels in `contactChannels` (`src/data/contact.ts`)
- [ ] Approved photography for the hero, Who We Are and inner-page heroes
- [ ] Media links or embeds for HUIOS TV
- [ ] Program dates and registration, if they should be published
- [ ] Production domain as `site` in `astro.config.mjs` (enables canonical URLs; add a sitemap then)
- [ ] Social sharing image (`og:image`)
- [ ] Remove demo content (see above)

## Deployment

`netlify.toml` builds with `pnpm build` and publishes `dist/`. Deploy only when the client asks for it.
