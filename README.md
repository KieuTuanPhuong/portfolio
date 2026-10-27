# Portfolio — Kieu Tuan Phuong

Personal site for remote contract / part-time frontend work.
Goal: a client or recruiter lands here from LinkedIn, Lemon.io or an HN post and in
under 60 seconds knows what I build, sees proof, and knows how to contact me.

Live: _TBD_ (target `tuanphuongkieu.dev`)
Source: public repo, on purpose. The site itself is a work sample.

## Stack (already scaffolded, do not change)

- Next.js 16.4 App Router, React 19, TypeScript, Tailwind 4, Bun.
- `cacheComponents` + `partialPrefetching` are on (create-next-app defaults). Nothing here
  fetches at runtime, so every page is a fully static shell. Leave the config alone.
- Before writing any Next.js code read the matching guide in `node_modules/next/dist/docs/`.
  This version differs from older Next.js (see `AGENTS.md`).
- No CMS, no database, no auth, no contact form. Project content lives in one TypeScript file.

```bash
bun install
bun dev        # http://localhost:3000
bun run build  # must pass with zero warnings before every push
bun run lint
```

## Pages

```
/                 single page, five sections, in this order
  Hero            name · "Senior Frontend Developer — Next.js / React / Vue"
                  one line: "Remote contract & part-time · Hanoi, GMT+7 · US and EU meeting hours OK"
                  buttons: Email · GitHub · LinkedIn · Download CV (PDF from the Overleaf project)
  Selected work   6 cards → /work/[slug]  (screenshot slider, logo, name, one-line outcome, stack chips)
  How I work      3 bullets: design the flow → build it → wire the backend · async-first · fast onboarding
  Stack           Frontend / Backend & CMS / Tooling — same groups as the CV
  Contact         mailto link, LinkedIn, "from $30/hr" optional

/work/[slug]      6 case pages, one shared template, statically generated
  Context         client + domain, one line
  Role            title, team size, my share of the frontend
  Problem         2–3 sentences
  What I built    3–5 bullets, concrete nouns (portals, flows, integrations), no adjectives
  Stack           chips
  Outcome         what shipped / what it enabled; a number if there is a true one
  Screenshots     2–4 in a swipe slider, see NDA note below (numbered placeholders until added)
  Links           live site if public, repo if allowed, else omit the row
```

Card order is by strength, not date:

1. `dstax-compliance` — lead frontend + UI/UX from scratch
2. `parrot-ai` — Student / Teacher / Admin portals, AI personalisation
3. `vietnam-data` — 4 interconnected portals
4. `pirc-ai` — AI pricing-estimate visualisation
5. `endeverous` — Nuxt social network
6. `vietplastic-wsps` — two Next.js + Strapi client sites (the only ones with public URLs: link them)

## File layout to add

```
app/
  layout.tsx            metadata (title template, description, OG), fonts already set
  page.tsx              home: the five sections
  work/[slug]/page.tsx  case template; generateStaticParams from data/projects.ts
  sitemap.ts            home + 6 case URLs
  robots.ts             allow all, point at sitemap
  opengraph-image.tsx   one 1200×630 image: name + title (shared by every page is fine)
  not-found.tsx         one line + link home
components/
  ProjectCard.tsx
  Section.tsx           heading + children, nothing else
data/
  projects.ts           the only content file, typed
  profile.ts            name, title, email, links, tagline, stack groups
public/
  cv.pdf                exported from Overleaf
  work/<slug>/*.webp    screenshots, max 1600px wide, compressed
```

`data/projects.ts` shape:

```ts
export type Project = {
  slug: string
  name: string
  logo?: string             // "/work/<slug>/logo.svg"; initials placeholder when absent
  period: string            // "Mar 2026 – May 2026"
  client: string            // "Glinteco client (tax compliance)"
  role: string              // "Lead Frontend Developer & UI/UX Designer"
  team: string              // "3 (1 frontend)"
  stack: string[]
  summary: string           // one line, used on the card
  problem: string
  built: string[]           // 3–5 bullets
  outcome: string
  images: { src: string; alt: string; width: number; height: number }[]  // next/image needs size
  links?: { label: string; href: string }[]
}
```

Text for all six already exists in `~/.career-ops/cv.md`; copy from there, do not rewrite from memory.

## Build order

1. `data/profile.ts` + `data/projects.ts` with all six entries (text only, empty `images`).
2. Home page, mobile first. 16px side gutter, no horizontal scroll at 360px.
3. `/work/[slug]` template + `generateStaticParams`. Verify all six URLs build.
4. Metadata: title template `%s · Kieu Tuan Phuong`, per-page description, `opengraph-image.tsx`,
   `sitemap.ts`, `robots.ts`, `not-found.tsx`.
5. Screenshots (after NDA check), `alt` on every one, `next/image` with explicit width/height.
6. `public/cv.pdf` from Overleaf. Replace the default SVGs in `public/`.
7. Lighthouse, mobile, production build: Performance, Accessibility, Best Practices, SEO all ≥ 95.
   Fix before sharing the link anywhere.
8. Deploy (below), then add the live URL to: `~/.career-ops/config/profile.yml` `portfolio_url`,
   `~/.career-ops/cv.md`, the Overleaf header, LinkedIn website field, GitHub profile.

## NDA / screenshots

DStax, Parrot AI, Vietnam Data, Pirc AI and Endeverous are Glinteco client work.
Ask before publishing screenshots or client names. Fallbacks, in order:
cropped UI fragments with data blurred → generic description + "screenshots available on request".
Vietplastic and Western Sydney Piano School are public websites: link them directly.

## Deploy

Vercel Hobby (free). Portfolio use is within its non-commercial terms.

1. Push the repo to GitHub (public).
2. vercel.com → Add New Project → import the repo. Framework is auto-detected; no settings to change.
   Every push to `main` deploys; every branch gets a preview URL.
3. Domain: buy `tuanphuongkieu.dev` (or `.com`) at Cloudflare Registrar or Namecheap.
   Vercel → Project → Settings → Domains → add it → copy the two DNS records it shows into the
   registrar. SSL is automatic.
4. Vercel → Analytics → enable (free tier). Nothing else.

Fallback if Vercel is ever a problem: Cloudflare Pages with `output: 'export'`
(read `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` first; it lists what
`opengraph-image` and `next/image` need in that mode).

## Out of scope (deliberately)

Blog, dark-mode toggle, animations, contact form, i18n, CMS, testimonials section (add when there
are real ones), analytics beyond Vercel's. Each one is a later decision, not a launch blocker.

## Done means

- [ ] All six case pages build and read correctly on a phone
- [ ] Lighthouse mobile ≥ 95 across the board
- [ ] OG image renders when the URL is pasted into LinkedIn
- [ ] `cv.pdf` downloads and matches the LaTeX CV
- [ ] Live URL added to career-ops, CV, LinkedIn, GitHub profile
