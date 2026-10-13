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
- Play projects and Things that pull at me: `src/data/content.js`
- Books: `src/data/content.js`; add `{title:'...', author:'...', status:'reading'}` or `status:'favorite'` and optional `note`.
- About: `src/pages/about.astro`
- Work: `src/pages/work.astro`
- Colors/layout: `src/styles/global.css`

**Important:** The example Notes are starter drafts, not claims of already-published writing. Notes remain unpublished until you enable the section. Reading now includes the books you supplied. Add your own email/LinkedIn URLs in `site.js`.

## Production test

```bash
npm run build
npm run preview
```

The build step removes disabled public routes. You can enable Notes later with one toggle and a redeploy.

## V1.1 update (existing GitHub + Cloudflare site)

Replace the existing repository files with the **contents** of this ZIP’s `concettarand-site` folder. Do not create a new repository or Pages project. GitHub commits trigger automatic Cloudflare Pages deployment. Keep `now` and `notes` off in `src/data/site.js` until ready. Accountabillybobs is an idea card, not a working application. Sound Partners is not referenced on the public site.


## V1.2 additions
- LinkedIn footer link and community acknowledgments on About.
- Winning with Data workshop example on Work.
- Interactive, 12-question Growth Readiness Assessment at `/assessment/`, adapted from the supplied `advance-assessment-v2.html`; original question and score logic retained.
- Linked typographic book-cover cards on Reading. These are **not actual publisher cover images**; swap for licensed cover images later if desired.
- Community names are deliberately unlinked until official destination URLs are confirmed.

## Naming What Matters update
- New interactive tool at `/naming-what-matters/`, linked from Play.
- Solo and two-person modes, both supporting customized values.
- Print/PDF results include a light Concetta Rand footer and site link.
- Branded CSV results include definitions, discussion prompts, and concettarand.com contact information.
- Old `/finding-the-words/` route redirects to the new name.
- This package builds on the Values Preview site. It does not yet include the other planned V1.3 changes to the commercial assessment and Work copy.


## V1.3 additions
- The Data That Matters, Getting on the Same Page, Tell Me About Yourself (Work)
- Commercial Transition Readiness assessment with six focus areas, snapshot and manual email request
- Naming What Matters interactive tool under Play (individual and partner modes, custom values, branded exports)
- Public contact email: hello@concettarand.com (Cloudflare Email Routing must be configured)

### Important email limitation
The assessment request uses a `mailto:` link. It **does not submit data to a server**. The visitor must have a configured email application and click Send. A future hosted form or email API would be needed for reliable automatic submission and delivery.


## V1.4 editorial refinements
- Consistent navigation on Naming What Matters and Commercial Transition Readiness.
- Assessment palette aligned to main site.
- Data That Matters includes five sample intake questions.
- Tell Me About Yourself reframed as Finding the Story, with redirect.
- Removed Smith Middle School PTSA from public community list.
- Getting on the Same Page framed as a facilitated organizational workshop, not a duplicate interactive values quiz.


## V1.5 editorial updates
- The Alignment Gap (new URL `/the-alignment-gap/`, old URL redirects).
- Telling Your Story (new URL `/telling-your-story/`, old URL redirects), with long-career narrative introduction.
- Making the invisible visible as Work-page theme.
- Home Reading and About combined into Beyond the Work, with two responsive columns; pull quotes can be added later.
- Existing Commercial Transition Readiness assessment retained; the separate GTM assessment is not promoted.


## V1.6 copy revisions

- The Data That Matters: a single anchor question about the three most important measures, rather than a list of five questions.
- Beyond the Work: “More than one thing.” and “Books I pick up again, and again.”; reading eyebrow now “Ideas & Reading”.
- Work: “Good things happen together.” and “I bring ideas to life…”
- Naming What Matters: updated description on Play and in the exercise itself.
- With Margin remains the linked project; no replacement with Estimate without a confirmed destination URL.
