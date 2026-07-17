# Michael Orekhov — Portfolio (React + TypeScript)

A React + TypeScript port of the original ASP.NET Razor Pages site, using Vite.
All visual design comes from the original `styles.css`, copied over unchanged.

## Structure

- `src/App.tsx` — assembles the page from section components
- `src/components/` — one component per section (Header, Hero, About, Stack, Work, Experience, Education, Footer, plus a shared Timeline)
- `src/data/content.ts` — all copy and content, typed against `src/types.ts`
- `src/styles.css` — original stylesheet, unchanged

## Run it

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```
