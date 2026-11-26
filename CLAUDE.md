# Two-apartment rental site (Thessaloniki + Chalkidiki)

Static Astro site, Greek only for now, hosted on Cloudflare Workers with static assets (same setup as the Time for Wedding repo). No server or database.

## Working with the owner
- The owner is a designer, not a developer. Reply in Greek, in plain language.
- Work on a branch and let the owner review before merging into `main` (main deploys live).

## Structure
- All content is in `src/data/site.ts` and `src/data/stays.ts`. Placeholders are in [BRACKETS]; never invent facts, prices or reviews.
- Each apartment has a `theme`: `city` (Thessaloniki: charcoal + honey, square buttons) or `sea` (Chalkidiki: light pine, pill buttons). Set via `data-theme` on `<body>`.
- Design tokens (kit «Πεύκο, μέλι και γκρι») at the top of `src/styles/global.css`. Fonts: Alegreya (headings) and Alegreya Sans (text), via @fontsource.
- Booking box (`src/components/BookingBox.astro`): uses `bookingEngineUrl` when set, otherwise a prefilled mailto.
- Hidden from search: `hideFromSearch` in site.ts plus `public/_headers`. Don't use robots.txt Disallow.
- Check layouts at 1440 px and 390 px; nothing may scroll sideways on a phone.
