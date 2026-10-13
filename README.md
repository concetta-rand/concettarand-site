# concettarand.com — V1

A lightweight personal site built with Astro, designed for free hosting on Cloudflare Pages.

## Launch visibility (start here)

Edit `src/data/site.js`. Set `now` and `notes` to `true` when ready. Both default to `false`.

- `now: false` removes the Now section from the homepage.
- `notes: false` hides Notes from the homepage and navigation **and deletes all generated Notes pages from the production build**. Your writing stays in source files.
- Other page visibility switches are in the same file.
- Add a public email and LinkedIn URL to `site.js` to activate footer links.

## Preview on your computer

Requires Node.js 20.19+.

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal (usually http://localhost:4321).

## Publish with GitHub + Cloudflare Pages

1. Create a **new GitHub repository** and upload the contents of this folder (not the ZIP itself).
2. In Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Framework preset: **Astro**; build command: `npm run build`; output directory: `dist`.
4. Deploy. Test the temporary `*.pages.dev` URL first.
5. In your Pages project, open **Custom domains** and add `concettarand.com` and optionally `www.concettarand.com`. Since the domain is already on Cloudflare, follow the displayed DNS prompts.

Every subsequent GitHub push triggers a new deployment.

## Editing content

- Homepage: `src/pages/index.astro`
- Now: within `src/pages/index.astro`
- Notes: `src/data/content.js` (each entry has title, slug, date, excerpt and paragraphs)
- Play projects: `src/data/content.js`
- Books: `src/data/content.js`; add `{title:'...', author:'...', status:'reading'}` or `status:'favorite'` and optional `note`.
- About: `src/pages/about.astro`
- Work: `src/pages/work.astro`
- Colors/layout: `src/styles/global.css`

**Important:** The example Notes are starter drafts, not claims of already-published writing. Notes remain unpublished until you enable the section. Reading is intentionally empty until you add real books. Add your own email/LinkedIn URLs in `site.js`.

## Production test

```bash
npm run build
npm run preview
```

The build step removes disabled public routes. You can enable Notes later with one toggle and a redeploy.
