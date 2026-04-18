# anirro — Portfolio Build Brief

> **Instructions for the user:** Open Claude Code in the cloned `anirro` directory, attach this file, and say: _"Read PORTFOLIO_BRIEF.md and execute it exactly. Stop at every commit checkpoint and wait for me to confirm before continuing."_ Do not deviate from this brief.

---

## 0. Ground Rules for Claude

1. **Execute this brief end-to-end in one session.** Do not ask clarifying questions about design, tech stack, content, or file structure — everything you need is below. If something is genuinely ambiguous, pick the most minimal, elegant option and keep going.
2. **STOP at every `COMMIT CHECKPOINT`.** Run `git status` and `git diff --stat`, propose the exact commit command, then wait for the user to type **"go"** before you run `git add`, `git commit`, and continue to the next section. Do not push — the user pushes manually.
3. **Commit messages follow Conventional Commits** (`feat:`, `chore:`, `docs:`, `style:`, `refactor:`). Keep subjects ≤ 60 chars, bodies wrapped at 72. No emojis. No "🤖 Generated with Claude" footers.
4. **Code quality bar:** strict TypeScript, no `any`, no unused imports, no console.logs, no commented-out code, no placeholder lorem ipsum outside the TODO sections I mark. Tailwind classes sorted logically (layout → spacing → typography → color). Every file ends with a newline.
5. **No extra dependencies** beyond what's listed in section 3. No UI libraries, no icon packs (inline SVGs only), no animation libraries, no CMS.

---

## 1. Visual Reference & Design DNA

The target is a dead-simple, literary, almost personal-essay-feeling portfolio. Reference: `zachyu.com`-style layout. Study these traits carefully:

### Layout

- **Two columns**, flush left. Left column is a narrow sidebar (~200px wide, starting ~200px from the left edge of the viewport on desktop). Right column is the main content area, left-aligned, max-width ~800px, with a horizontal rule separating the page title from the body.
- **Generous whitespace.** Top margin on the main content is ~80px. Line-height on body is relaxed (≈1.7).
- **No colors other than black, white, and one muted grey** (`#6b6b6b`-ish) for secondary text and list numbers.
- **No borders, no cards, no shadows, no gradients, no rounded corners anywhere.** One horizontal rule under each page title — that is the only visual divider on the whole site.
- **No icons in nav.** Text only.
- **Mobile:** sidebar collapses above the content, left-aligned, with the nav as a simple vertical list. No hamburger menu.

### Typography

- **One font, used everywhere: `EB Garamond`** from Google Fonts (weights 400 + 500 + italic 400). Apply to headings, body, nav, everything. No sans-serif fallback for UI — the whole site is serif.
- **Name/page title:** 2.5rem, regular weight, tracking slightly tight.
- **Body:** 1.0625rem (17px), regular weight, color `#1a1a1a` on `#ffffff`.
- **Nav links:** same size as body, color `#1a1a1a`. Active route has a 1px underline with ~6px offset. Inactive links have no underline until hover (underline on hover, same 6px offset).
- **Inline links in body content** are underlined by default (1px, ~3px offset), no color change, no hover effect besides cursor pointer.

### Building page specifics (numbered project list)

- Each entry: small grey number (`#9a9a9a`, ~0.8rem), left-aligned in its own narrow column (~2rem wide), then the project title as an underlined link, then a description paragraph in the same indent as the title.
- Vertical spacing between entries: ~2rem.

### Home page specifics

- Intro paragraph(s), then a line "In my lifetime I want to:" followed by a list where each item starts with an em-dash and a space (`— item`). No bullets, no numbers. Use real `—` (U+2014), not `--`.

### Footer / sidebar tail

- Below the secondary nav block, add a tiny `‹ ⚜ ›` monogram (use any simple unicode glyph like `❦` or `⚜` — pick one and stick with it). Color: `#9a9a9a`. Centered under the nav block. Purely decorative, not a link.

---

## 2. Information Architecture

Four routes. All share the same sidebar layout.

| Route       | Nav label | Purpose                                               |
| ----------- | --------- | ----------------------------------------------------- |
| `/`         | Home      | Name, 2-sentence bio, "In my lifetime I want to" list |
| `/building` | Building  | Numbered list of projects with descriptions           |
| `/blog`     | Blog      | Placeholder "Coming soon" (one line, same layout)     |
| `/archive`  | Archive   | Placeholder "Coming soon" (one line, same layout)     |

Sidebar also includes a secondary block (visually separated by a blank line, not a rule) with:

- Twitter → `https://twitter.com/AnirudhDabas` (TODO: confirm handle, leave as-is for now)
- LinkedIn → `https://linkedin.com/in/anirudhdabas`
- GitHub → `https://github.com/AnirudhDabas`
- Email → `mailto:a2dabas@uwaterloo.ca`

All external links `target="_blank" rel="noopener noreferrer"`. Email link does not.

---

## 3. Tech Stack (exact)

- **Next.js 15** (App Router, TypeScript, no `src/` directory — routes live at `app/`)
- **Tailwind CSS v4** (using the new `@import "tailwindcss"` syntax in `app/globals.css`, no `tailwind.config.js` unless strictly needed)
- **`next/font/google`** to load EB Garamond (self-hosted, preload, display `swap`)
- **Node ≥ 20**, **pnpm** as package manager (use `pnpm`, not `npm` or `yarn`)
- **ESLint** with Next's default config
- **Prettier** with `prettier-plugin-tailwindcss` for class sorting

No other dependencies. No `clsx`, no `lucide-react`, no `framer-motion`, no `shadcn`.

Scaffold with: `pnpm create next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"` inside the already-cloned empty repo. If the directory is not empty because of `.git`, run with `--use-pnpm` and proceed — adjust files as needed.

---

## 4. File Structure (final state)

```
anirro/
├── app/
│   ├── layout.tsx              # Root layout: sidebar + <main>, loads font, sets metadata
│   ├── page.tsx                # Home
│   ├── building/page.tsx
│   ├── blog/page.tsx
│   ├── archive/page.tsx
│   ├── globals.css             # Tailwind import + CSS vars for color/spacing
│   └── not-found.tsx           # Minimal 404 matching the design
├── components/
│   ├── Sidebar.tsx             # Nav with active-link styling (uses usePathname)
│   ├── PageTitle.tsx           # <h1> + <hr/> used by every page
│   └── ProjectList.tsx         # Numbered project list for /building
├── lib/
│   └── projects.ts             # Typed array of projects (single source of truth)
├── public/
│   └── favicon.ico             # Simple text-based "A" favicon — generate inline SVG if easier
├── .gitignore                  # Next.js default + .env*, .vscode, .DS_Store
├── .prettierrc                 # { "plugins": ["prettier-plugin-tailwindcss"] }
├── .eslintrc.json              # Next default, no custom rules
├── LICENSE                     # MIT, Anirudh Dabas, 2026
├── README.md                   # See section 7
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

## 5. Content (drop in verbatim)

### Home (`app/page.tsx`)

```
# Anirudh Dabas

I'm a Computer Science student at the [University of Waterloo](https://uwaterloo.ca)
on the President's Scholarship of Distinction, and co-founder of
[Trend Weavers Media](#). I like building things that go viral, win hackathons,
or both.

In my lifetime I want to:
— TODO: replace with your real goals
— TODO: replace with your real goals
— TODO: replace with your real goals
```

Leave those three TODO lines exactly as shown so Anirudh can fill them in after. Do not invent goals for him.

### Building (`/building`) — use `lib/projects.ts`

Render them as a numbered list (see section 1 styling). Project data:

```ts
export type Project = {
  name: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "waddleloo.com",
    href: "https://waddleloo.com",
    description:
      "Full-stack AI goose tracking platform for UW campus. Went viral with 500K+ views, 1K+ daily active users at peak, and covered by CBC News. YOLOv8 + Gemini Vision pipeline, OSRM route planner that reroutes around goose hotspots within 60m. Expanded to WLU.",
  },
  {
    name: "bystander",
    href: "https://github.com/AnirudhDabas", // TODO: replace with real link
    description:
      "Hack Canada 2026 winner. Dockerized a clinically validated C++ biometrics SDK into a Node.js backend for contactless heart rate and breathing rate extraction from video. Gemini Vision triage scoring 1–10, ElevenLabs voice coaching, Twilio SMS alerts to nearby first aiders.",
  },
  {
    name: "child abuse prevention app",
    href: "https://github.com/AnirudhDabas", // TODO
    description:
      "1st place at a national hackathon. Cross-platform mobile safety app with anonymous AI chat for at-risk youth. Fine-tuned DistilBERT for real-time high-risk language detection, E2E encrypted messaging, severity-based alert routing, admin triage dashboard.",
  },
  {
    name: "trend weavers media",
    href: "#", // TODO
    description:
      "Co-founder. Built full-stack automation and analytics tools driving $85K+ revenue across 15+ clients. Python pipelines integrating Meta and TikTok APIs to automate weekly reporting, saving 20+ hours/month. Client platforms on Next.js + Supabase with RLS.",
  },
  {
    name: "findme (talent4assure)",
    href: "#", // TODO
    description:
      "Built real-time GPS ingestion, geofence processing, background location syncing, and emergency alerts for a safety app. React Native + Node.js + MongoDB. Cut API latency by 30% via indexing, geospatial lookup caching, and aggregation pipeline tuning.",
  },
];
```

Keep the project names lowercase as shown — it matches the aesthetic.

### Blog (`/blog`)

Page title "Anirudh Dabas", then a single line body: `Coming soon.`

### Archive (`/archive`)

Page title "Anirudh Dabas", then a single line body: `Coming soon.`

### Metadata (root layout)

```ts
export const metadata = {
  title: "Anirudh Dabas",
  description:
    "Computer Science at Waterloo. Co-founder at Trend Weavers Media.",
  metadataBase: new URL("https://anirudhdabas.com"), // TODO: update when domain is live
};
```

---

## 6. Component Contracts

### `Sidebar.tsx`

- Client component (`"use client"`) because it uses `usePathname`.
- Two nav blocks with a visual gap between them (margin, not a rule).
- Primary block: Home, Building, Blog, Archive.
- Secondary block: Twitter, LinkedIn, GitHub, Email.
- Active route: 1px solid underline with `text-underline-offset: 6px`. Non-active: no underline; on hover add the same underline.
- No icons, no animations.
- Below the secondary block: the tiny `‹ ⚜ ›` decorative glyph, muted grey, centered.

### `PageTitle.tsx`

- Accepts `children` (the title text).
- Renders `<h1>` at 2.5rem and an `<hr/>` below with `border-top: 1px solid #1a1a1a`, margin-top ~1.5rem, no border bottom.
- Used identically on all four pages so the page feels consistent.

### `ProjectList.tsx`

- Takes `projects: Project[]`.
- Renders a `<ol>` with `list-style: none`, custom numbering (grey, small, positioned in a narrow left column using CSS grid or flex — your call).
- Each `<li>`: number | (title link on one line, description paragraph below).

### Layout

- `app/layout.tsx` wraps children in a flex/grid layout: sidebar fixed-width on the left, main content flexible, both top-aligned, max-width container on the outer level so nothing stretches infinitely on ultrawide.
- Apply the EB Garamond font at the `<html>` level via `className={ebGaramond.className}`.
- Set `<html lang="en">`.

---

## 7. README.md (required content)

Write a clean README with these sections:

1. **Title:** `# anirro`
2. **One-line description:** `Personal site of Anirudh Dabas.`
3. **Stack:** bulleted — Next.js 15, TypeScript, Tailwind CSS v4, EB Garamond.
4. **Local development:**
   ```
   pnpm install
   pnpm dev
   ```
   then note it serves at `http://localhost:3000`.
5. **Project structure:** a trimmed tree (just top-level directories + what they hold).
6. **Deployment:** one paragraph — pushes to `main` auto-deploy to Vercel; set a custom domain in the Vercel dashboard and update `metadataBase` in `app/layout.tsx`.
7. **License:** MIT, see `LICENSE`.

Keep it under 60 lines. No badges, no screenshots section, no table of contents.

---

## 8. LICENSE

Standard MIT license text. Copyright line: `Copyright (c) 2026 Anirudh Dabas`.

---

## 9. Commit Checkpoints (STOP at each one)

Execute the work in this order. After each block, run `git status`, propose the commit command, and **wait for the user to say "go"** before committing. Do not chain commits.

### CHECKPOINT 1 — Scaffold

- Scaffold the Next.js app in the current (already git-initialized) directory.
- Add `.prettierrc` with the tailwind plugin.
- Install `prettier` and `prettier-plugin-tailwindcss` as dev deps.
- Write `README.md` and `LICENSE`.
- Update `.gitignore` to include `.env*`, `.vscode/`, `.DS_Store`.
- Verify `pnpm dev` starts without errors.
- **Commit:** `chore: scaffold next.js app with tailwind and prettier`

### CHECKPOINT 2 — Typography & globals

- Configure EB Garamond via `next/font/google` in `app/layout.tsx`.
- Set up `app/globals.css` with CSS variables for `--fg`, `--muted`, `--bg` and base body styles (line-height, color, font smoothing).
- Empty placeholder home page so it renders.
- **Commit:** `feat: configure eb garamond typography and base styles`

### CHECKPOINT 3 — Layout & Sidebar

- Build `components/Sidebar.tsx` with active-route styling.
- Build `app/layout.tsx` two-column layout (sidebar + main).
- Responsive: sidebar stacks above main on mobile (<768px).
- **Commit:** `feat: add sidebar navigation and two-column layout`

### CHECKPOINT 4 — Page title primitive & Home page

- Build `components/PageTitle.tsx`.
- Implement `app/page.tsx` with Anirudh's bio and the "In my lifetime I want to" list (with the three TODO lines exactly as specified).
- **Commit:** `feat: implement home page`

### CHECKPOINT 5 — Building page

- Create `lib/projects.ts` with the project data from section 5.
- Build `components/ProjectList.tsx`.
- Implement `app/building/page.tsx`.
- **Commit:** `feat: implement building page with project list`

### CHECKPOINT 6 — Blog, Archive, 404

- Implement `app/blog/page.tsx` and `app/archive/page.tsx` as "Coming soon." stubs that still use `PageTitle`.
- Implement `app/not-found.tsx` that matches the layout and shows `Not found.`
- **Commit:** `feat: add blog, archive, and 404 pages`

### CHECKPOINT 7 — Polish

- Run `pnpm lint` and fix any warnings.
- Run `pnpm prettier --write .`.
- Verify every route renders correctly with no console errors or hydration warnings.
- Add a simple favicon (inline SVG of a serif "A" converted to `favicon.ico` if possible, or leave the default).
- Update `README.md` if anything drifted.
- **Commit:** `chore: lint, format, and final polish`

---

## 10. Done condition

After CHECKPOINT 7, print this exact message and stop:

```
Done. Review the 7 commits with: git log --oneline
Push with: git push origin main
Then deploy by importing the repo at https://vercel.com/new
Open-ended TODOs left in the code:
  • app/page.tsx — three lifetime goals
  • lib/projects.ts — real href for bystander, child abuse prevention app, trend weavers media, findme
  • app/layout.tsx — metadataBase domain
  • components/Sidebar.tsx — confirm Twitter handle
```

Do not push. Do not open a PR. Do not run `vercel` CLI. The user takes it from here.
