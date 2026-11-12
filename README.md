# Wisnu Portfolio

A frontend-only, single-page engineering portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the Next.js framework preset.
4. Deploy. No backend or environment variables are required.

## Project structure

- `src/app`: Next.js App Router entry points and global styles.
- `src/components/layout`: shared navigation and footer.
- `src/components/sections`: page sections.
- `src/components/projects`: reusable project cards and project dialog.
- `src/components/ui`: theme provider, theme toggle, and shared UI.
- `src/data`: content separated by domain.
- `src/lib`: small shared utilities.
- `public/images`: profile, project, and achievement imagery.
- `public/documents`: resume and downloadable documents.

## Update content

Edit the relevant file in `src/data/`:

- `profile.ts`
- `projects.ts`
- `experience.ts`
- `education.ts`
- `achievements.ts`
- `skills.ts`

Add your portrait under `public/images/profile/` and set `profileImage` in `src/data/profile.ts`.
Replace placeholder project images and all sample links before publishing.
