# Akari's Little World

A playful, paper-inspired personal portfolio built with Next.js, TypeScript, and Framer Motion. The site presents projects, playground experiments, experience, and contact info as a single scrolling journey, with a small plane that travels along the page as you scroll.

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- TypeScript
- [Framer Motion](https://www.framer.com/motion/) for scroll-driven animation
- Plain CSS (no utility framework)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
app/             App Router pages, layout, global styles, and route handlers
  data.ts        Central content data: projects, experience, playground entries
  projects/      Project detail routes
  playground/    Playground detail routes
sections/        Top-level page sections (Hero, About, Projects, Playground, Experience, Resume, Contact)
components/      Reusable UI building blocks (TopNav, JourneyPlane, ProjectCard, PlaygroundCard, StickyNote, Footer, etc.)
public/          Static assets (images, resume, playground/project media)
```

## Editing content

Most of the site's content lives in one place: [`app/data.ts`](app/data.ts). It exports typed arrays for:

- `projects` — case studies shown in the Projects section and their detail pages
- `playgrounds` — playground experiments and their media

Add, remove, or reorder entries there; the page sections and components render whatever the data contains. Static files referenced by that data (images, resume PDF, etc.) live under `public/`.

## Deployment

The project is set up to deploy on [Vercel](https://vercel.com/) with zero configuration — connect the repository and it will build and deploy on every push to `main`.

## License

Personal project — all rights reserved.
