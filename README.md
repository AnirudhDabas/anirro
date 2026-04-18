# anirro

Personal site of Anirudh Dabas.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- EB Garamond via `next/font/google`

## Local development

```
pnpm install
pnpm dev
```

Serves at http://localhost:3000.

## Project structure

```
app/         Routes, root layout, global styles
components/  Sidebar, PageTitle, ProjectList
lib/         Typed project data
public/      Favicon
```

## Deployment

Pushes to `main` auto-deploy to Vercel. Set a custom domain in the Vercel
dashboard and update `metadataBase` in `app/layout.tsx`.

## License

MIT. See `LICENSE`.
