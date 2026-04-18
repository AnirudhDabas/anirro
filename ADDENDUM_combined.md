# anirro — Addendum

This is an addendum to PORTFOLIO_BRIEF.md. Execute all changes below in one pass.
Do not ask questions. Commit at the end with the message specified in the final section.

---

## Change 1 — Add Hindi name to the heading

In every page's `<PageTitle>` (or wherever "Anirudh Dabas" renders as the `<h1>`), change it to:

```
Anirudh Dabas (अनिरुद्ध दाबास)
```

- Render in the same EB Garamond font (it has Devanagari support — no fallback needed)
- Same size, same weight, same color as the rest of the heading
- Not a link, not styled differently
- Regular space before the opening parenthesis

This mirrors exactly how Zachary Yu renders 유진영 on his site.

---

## Change 2 — "Inspired by Zachary Yu" attribution

Add to the very bottom of `components/Sidebar.tsx`, below the `‹ ⚜ ›` glyph:

- Single line: `Inspired by Zachary Yu`
- Font size: `0.7rem`
- Color: `#9a9a9a` (same muted grey as the glyph)
- "Zachary Yu" is a link to `https://zachyu.com` with `target="_blank" rel="noopener noreferrer"`
- Link: same muted grey color, no underline by default, underline on hover
- `margin-top: 0.5rem` below the glyph
- Centered under the nav block
- No italics, no quotes

---

## Change 3 — Old paper / parchment aesthetic

### Color palette — update CSS variables in `app/globals.css`:

```css
:root {
  --bg: #f5f0e6; /* warm parchment */
  --fg: #2b1f0e; /* dark warm brown */
  --muted: #8a7560; /* warm tan for secondary text and numbers */
  --link: #2b1f0e; /* same as fg */
  --rule: #c4b49a; /* warm beige for <hr> and dividers */
}
```

Apply everywhere:

- `<body>` background → `var(--bg)`
- All body text → `var(--fg)`
- All `<hr>` borders → `var(--rule)`, 1px solid
- Secondary text (nav external links, sidebar glyph, attribution, project numbers) → `var(--muted)`
- No element should remain pure `#000000` or `#ffffff`

### Paper texture — add to `app/globals.css`:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.018;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
```

Faint paper grain at 1.8% opacity — invisible at a glance, adds warmth up close.

### Typography micro-adjustments:

- `letter-spacing: -0.01em` on `<h1>`
- Body `font-size`: `1.0625rem` if not already
- Body `line-height`: `1.75`
- `font-variant-ligatures: common-ligatures` on `body`
- `font-variant-numeric: oldstyle-nums` on `body`
- `-webkit-font-smoothing: antialiased` on `body`

### Do NOT:

- Add any sepia CSS filter over images
- Make text hard to read — contrast must remain clearly legible
- Add decorative borders or frames around the page
- Fetch any external background images
- Change layout, spacing, or font family

---

## Change 4 — Update Waddleloo stats in `lib/projects.ts`

Replace the Waddleloo entry description with:

```ts
"Full-stack AI goose tracking platform for UW campus. Went viral with 1M+ views, 1K+ daily active users at peak, and covered by CBC and CTV News. YOLOv8 + Gemini Vision pipeline, OSRM route planner that reroutes around goose hotspots within 60m. Expanded to WLU.",
```

---

## Change 5 — Fix Trend Weavers dates in `lib/projects.ts`

Replace the Trend Weavers description with:

```ts
"Co-founder (2023–2025). Built full-stack automation and analytics tools driving $85K+ revenue across 15+ clients. Python pipelines integrating Meta and TikTok APIs to automate weekly reporting, saving 20+ hours/month. Client platforms on Next.js + Supabase with RLS.",
```

---

## Change 6 — Update home page bio in `app/page.tsx`

Replace the current intro paragraph(s) with:

```
I make ideas real, fast.

I'm a Computer Science student at the [University of Waterloo](https://uwaterloo.ca)
on the President's Scholarship of Distinction. I like building things that go viral,
win hackathons, or both.
```

"I make ideas real, fast." renders as its own short paragraph — same body font, same size —
before the longer intro. It is not a heading. It acts as a tagline.

---

## Final commit

Run `pnpm lint` and `pnpm prettier --write .`, then:

```
git add -A
git commit -m "style: paper aesthetic, hindi name, attribution, and content updates"
```

Stop and print:

```
Done. Push with: git push origin main
Changes applied:
  • Heading: Anirudh Dabas (अनिरुद्ध दाबास)
  • Sidebar: "Inspired by Zachary Yu" attribution added
  • Colors: parchment bg (#f5f0e6), warm brown text (#2b1f0e)
  • Paper grain texture at 1.8% opacity
  • Oldstyle numerals and ligatures enabled
  • Waddleloo: 500K → 1M+ views, added CTV
  • Trend Weavers: marked 2023–2025
  • Home page: "I make ideas real, fast." tagline
```
