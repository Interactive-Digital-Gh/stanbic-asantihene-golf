# Asantehene Golf Tournament

Marketing and tournament site for the Stanbic Asantehene Golf Tournament: registration form, live leaderboard, gallery and Kumasi weather.

Built with React 18, Vite 5, Tailwind CSS 3 and React Router. Registrations and leaderboard data come from the CMS, served at `https://asantehenegolf.com/cms` (override with `VITE_CMS_URL` in a `.env.local` for local development).

## Local development

```bash
nvm use            # Node 22 (see .nvmrc)
npm ci
npm run dev        # http://localhost:5173
```

The registration form and leaderboard talk to the live CMS by default. To point them at a local CMS instead, set `VITE_CMS_URL` (for example `VITE_CMS_URL=http://127.0.0.1:8000 npm run dev`).

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: it lints and builds on the GitHub runner, then SSHes to the ID server, pulls `main` into `/var/www/production/stanbic-asantihene-golf`, runs `npm ci && npm run build`, and reloads nginx. Pull requests and other branches run `.github/workflows/ci.yml` (lint + build only).

Required GitHub Actions settings are listed at the top of `deploy.yml`. The nginx server block must point at `dist/` and include `try_files $uri $uri/ /index.html;` so React Router routes (`/gallery`, `/table`) work on refresh.
