# CT Portfolio

[![CI](https://github.com/ChaimTriebitz/ct/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ChaimTriebitz/ct/actions/workflows/ci.yml)

A personal developer portfolio built to present selected projects, technologies, and contact links in an animated, responsive interface.

**Live site:** [ct-site.dev](https://ct-site.dev)

## What it includes

- Animated home page with a type-on introduction
- Projects gallery with screenshots, technology lists, source links, and live demos
- Technology stack page with interactive 3D/animated elements
- About and contact pages
- Light/dark theme control
- Responsive navigation and a persistent footer with contact links
- App Router layout and page metadata for sharing and search

## Tech stack

- Next.js App Router and React
- TypeScript
- Sass / SCSS
- Motion for UI animation
- Three.js, React Three Fiber, and Drei for 3D visuals
- ESLint

## Run locally

Requirements: Node.js 20.9 or newer and npm.

~~~bash
npm ci
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

~~~bash
npm run lint
npm run build
~~~

GitHub Actions runs linting and a production build on pushes to the default branch and pull requests.

## Project structure

~~~text
app/
  (layout)/       Shared header and footer
  about/          About page
  contact/        Contact page
  projects/       Project cards and links
  stack/          Interactive technology stack
  layout.tsx      Global layout and metadata
components/       Reusable UI and 3D components
hooks/            Shared React hooks
assets/           Icons, SVGs, and project images
styles/           Global and component SCSS
types/            Shared TypeScript types
~~~

## Notes

- Project cards link directly to their source repositories and available live demos.
- No environment variables are required for the current portfolio build.
- The 3D stack uses WebGL, so performance and reduced-motion behavior should be checked on lower-powered mobile devices.
