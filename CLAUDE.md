# Ying's Portfolio — Project Brief

## What this project is
This is my personal product design portfolio. It currently exists as hand-coded
static HTML, where every case study duplicates its own CSS, fonts, and layout.
The goal is to convert it to a Next.js + MDX architecture so that content and
code are cleanly separated: one reusable case study template, with each case
study's actual content living in a simple MDX file.

## Goal
- Separate content from design/code
- Build ONE reusable case study template (React component)
- Move each case study's content into its own MDX file
- Everything pulls styling from a shared design token file (styles/tokens.css)
- Later (Phase 2): layer TinaCMS on top for visual, form-based editing

## Tech stack
- Next.js (App Router)
- MDX for case study content
- Plain CSS with custom properties (design tokens) — see styles/tokens.css
- Hosted on Vercel via GitHub
- Phase 2 later: TinaCMS for visual editing

## Design system
- All colors, typography, spacing, and shared components are defined in
  styles/tokens.css. This is the single source of truth for styling.
- Do NOT hardcode colors, font sizes, or spacing values. Always reference the
  CSS custom properties (variables) defined in tokens.css.
- Fonts: Bootzy TM (display), Inter (body), PT Mono (mono/labels)
- Base spacing unit is 8px. All spacing pulls from the defined scale.

## Working from Figma
- Never estimate or eyeball spacing, sizing, or coordinates. Pull exact values
  from Figma via the MCP (get_design_context).
- If a value is unclear or you are working from memory, re-check Figma rather
  than guessing.
- This is about finding the correct value; the Design system rule above is
  about where that value then lives in code (a token, never a hardcoded literal).

## Working conventions
- Before changing anything, walk me through your plan first. Do not edit
  multiple files before I've agreed on the approach.
- Work on ONE case study first (the Product Guide / Client Product Education
  Guide) to prove the template before converting the rest.
- Keep components clean and reusable. If something is truly project-specific
  (a unique hero mockup treatment, an inline link style), keep it local to that
  case study rather than forcing it into the shared file.
- Prefer clear, readable code over clever code. I am newer to code, so explain
  what you're doing as you go.
- Conversational, plain language in explanations. No stiff jargon dumps.

## Case study cards (homepage Work grid)
- Clicking a card opens the case study as a full page in a new tab. Never a
  modal, and never an in-place overlay.
- Hover text on a card reads "View" — not "Preview".

## Writing MDX: use string props, never expressions
In this setup MDX expressions are silently dropped — `width={1326}` arrives as
undefined, and `{2 + 3}` in body text renders nothing at all. Nothing errors,
so the value just quietly goes missing.
- Always write props as strings: `width="1326"`, `columns="3"`.
- Components that take numbers coerce with `Number()` and fall back sensibly,
  so a missing or malformed value degrades instead of breaking the build.
This already cost us once: the Product Guide passed `width={1326}` to
next/image, which left it with no dimensions, so it served its largest
candidate (3840px wide) and lost its aspect ratio.

## Replacing an image: change the filename
Next.js caches optimised images keyed by URL, so overwriting a file in place
can keep serving the old version even though the new one is on disk — with no
error to hint at it. Either give the replacement a new filename, or clear
`.next/cache/images` and rebuild. This already fooled a preview once.

## Ask for meta data before writing frontmatter
Before starting the frontmatter for any case study being converted to the new
pattern, ASK for the current values — role, timeline, tools, context, and any
other meta field. Do not infer them from the legacy page, an old draft, or a
previous version, and do not leave placeholders in and move on. The old
sources are often out of date, which is part of why the case study is being
rebuilt.

## Case study images
- Mockup images and screenshots sit on a light frame: `--mockup-bg` for the
  surface and a 1px `--mockup-border-line` border, both from tokens.css.
- This applies to every mockup or screenshot in a case study, new or existing.
- Exception: media that is deliberately presented full-bleed on a dark
  section, where the asset already carries its own device frame. A light
  frame there fights the design rather than supporting it.
- Some images arrive with the frame already drawn into the pixels — a
  `--mockup-border-line` edge over a `--mockup-bg` inset. Check the edge
  pixels before framing anything. Those images take `preframed="true"` on
  MockupImage, which renders them bare; framing them again puts a frame
  inside a frame. The Product Education Guide's images are all pre-framed, as
  are BeReal's and GSM's boards.
- The red X across one cluster of GSM's lo-fi/mid-fi board is deliberate — it
  marks a discarded iteration. Leave it; it is not an export mistake.
- The blue circles in a case study hero are Ticketmaster's brand device.
  They render only when frontmatter says `client: Ticketmaster`, not from a
  generic on/off flag, so no other case study can adopt them.

## Case study page standards
These apply to every case study page, current and future. They are enforced
in one place — `generateMetadata` in app/work/[slug]/page.tsx — which reads
each case study's frontmatter, so a new MDX file picks them up automatically.
- Page title: `[Case Study Name] — Ying Liu`
- URL slugs: lowercase, hyphenated, no abbreviations. The slug comes from the
  MDX filename, so name the file exactly as the URL should read
  (e.g. product-education-guide.mdx, ticketmaster.mdx, uc-davis-gsm.mdx).
- Meta description: the case study's `subheading` frontmatter field, one sentence.
- Open Graph title/description: same values as the page title/description, so
  shared links preview correctly.
- Favicon: one site-wide icon (app/icon.png). No per-page variation.

## Contact links
- All email links across the site point to yxngliu@gmail.com.
- The resume link appears only on the About page, alongside the LinkedIn,
  Email, and Medium links. Do not add it to the homepage, the footer, case
  study pages, or anywhere else.

## Password-gated case studies
Some case studies are shared privately rather than publicly. The gate is a
middleware check, not a client-side hide: an unauthenticated request never
receives the page's HTML, and the page keeps its ordinary URL — a shared link
still resolves, it just meets the gate first.

- `lib/protected.ts` lists which slugs are gated (`PROTECTED_SLUGS`) and holds
  the shared logic — the cookie name, its digest, the redirect safety check.
- `middleware.ts` rewrites a locked `/work/[slug]` request to `/unlock`,
  keeping the original URL. It fails closed: if `CASE_STUDY_PASSWORD` isn't
  set in the environment, every gated page stays locked rather than opening.
- The password lives in Vercel's environment variables, never in the repo.
  Free on every plan — this is custom middleware, not Vercel's paid
  Deployment Protection, which gates a whole deployment rather than one page.
- Assets for a gated case study live in `private/`, not `public/`, and are
  served through `/protected-media/[...path]`, which checks the same cookie.
  A case study's writing being gated is worthless if its mockups are still
  one direct image link away.
- `MockupImage` and `ProjectHero`'s mockup branch to a plain `<img>` when the
  source is a protected path. next/image optimises through a server-side
  fetch back to this app, and that fetch carries none of the visitor's
  cookies — a gated image would 404 through it even once unlocked. `GifPlayer`
  needs no such branch; it already renders plain `<video>`/`<source>` tags,
  which the browser fetches directly, cookie included.
- To gate a new case study: add its slug to `PROTECTED_SLUGS`, move its
  non-card assets into `private/case-studies/[slug]/`, and repoint the MDX at
  `/protected-media/case-studies/[slug]/…`. The homepage card image stays in
  `public/` — cards are never gated, only the page behind them.
- The client's logo also stays in `public/`, alongside the card image. It is
  the client's own public brand artwork, not the case study's work, so gating
  it protects nothing. The Product Education Guide's `logo.png` is in `public/`
  on purpose — it is not drift, and an audit should leave it there.

## Current task
Nothing outstanding. The Vercel cutover is complete, the Ticketmaster legacy
page is archived, the Work/About colour and type-scale passes have shipped,
and the case study pages have had their mobile and tablet layout fixed.

Still open, in no fixed order — see "What is left" at the end of this file:
the ~40 spacing literals, the temporary Ticketmaster redirect, the
replacement Ticketmaster case studies, and the footer's mobile breakpoint.

## Case studies to convert (in order)
1. Product Guide / Client Product Education Guide — DONE, the reference build
2. BeReal — DONE
3. UC Davis GSM — DONE

## Finishing a case study: two steps that are easy to miss
Do both as soon as a case study's content is signed off, and say so — they are
what stops a converted case study leaving debris behind.

1. **Move its assets** into `public/images/case-studies/[project-name]/`, and
   update every path in its MDX. The card image goes in the same folder as
   `card.png`; it is that case study's asset, not a site-wide one.
2. **Delete its entry from `unconvertedCards`** in app/work-grid-data.ts.
   Nothing dedupes that list against the MDX-driven cards — they are simply
   concatenated — so a leftover entry renders the case study twice on the
   homepage, with the stale copy linking to a legacy page that no longer
   exists. BeReal shipped in exactly that state until it was caught.

Asset moves happen per case study rather than in one sweep, so each one is
small enough to verify.

All three converted case studies have had their assets moved. Nothing outstanding.

Not converting:
- Ticketmaster / Support Community — being broken out into separate new
  projects later, so the existing case study is not worth porting.
- Netflix Party — links out to a Medium article and stays as-is.

## The legacy Ticketmaster page — archived, no longer served
Removed from `public/` after the Vercel cutover. The page, its 11 images and
the shared `ipad-mockup.png` now live in `_archive/ticketmaster-legacy/`,
which is outside `public/` and so is never routed. Open the HTML there
directly; asset paths were made relative so it works standalone. See that
folder's README for the project metadata worth reusing — role, timeline, team,
tools — when the replacement case studies get written.

`/ticketmaster-casestudy.html` now redirects to `/#work`, temporarily (307),
since the URL was live on both the old site and the new one. Point it at the
real replacement once one exists.

## The Work/About type scale — DONE
45 type literals across 25 distinct values collapsed into a small scale:
`--site-text-*` (5 sizes), `--site-tracking-*` (3), `--site-leading-*` (4).
They live in tokens.css, separate from the case study scale on purpose —
`--text-body` is 16px there and `--site-text-body` is 15px here, so the two
are genuinely different scales rather than one that drifted.

**Six declarations stayed off the scale after review**, because snapping them
was a visible loss rather than a tidy-up: `.heroRole` and `.scrollHint span`
at 11px, `.projectMetaLabel` and `.detailLabel` at 9px, `.detailValue` at
13px, `.interestsList` at 14px. Each carries a comment saying why. They are
deliberate exceptions, not literals waiting to be tokenised — a step for each
would take the scale to nine sizes and make it a lookup table again. Leave
them alone.

`--site-leading-airy` (line-height 2) exists for `.interestsList` alone, for
the same reason.

### Body copy colour — DONE
Body text once used three colours for one role: `--site-body` #3d3a36 on
About, `--site-mid` #5c5955 on the homepage cards, `--almost-black` #333333
in case studies. Unified on **`--almost-black` #333333**. `--site-ink`,
`--site-mid`, `--site-body` and `--site-soft` are all deleted — if you find a
reference to one, it is a mistake, not a token to restore.

Muted labels standardised on `--footer-muted` #999999 for dark backgrounds,
and `--subtitle` was darkened to #717171, the lightest grey that clears WCAG
AA 4.5:1 on both light surfaces. Measure contrast against the actual
background, not against white — #767676 reads as passing on paper and fails
on cream.

## Design system rules that still apply
Do NOT map site literals onto case study tokens because the numbers match.
38 of them collide by coincidence — `padding: 16px` matches `--radius-media`,
`width: 320px` matches `--persona-image-height`, `height: 200px` matches
`--footer-height`. Wiring those up couples two deliberately separate systems,
so changing a persona image height would silently resize an About element.
This matters most for the spacing pass below, since spacing is where nearly
all of those collisions live.

The two `clamp()` hero wordmarks are deliberately fluid. Leave them.

## What is left
Nothing here is blocking and nothing is urgent.

**The ~40 spacing literals.** The remaining tokenisation work, deferred out
of the type pass on purpose. Roughly 17 are real scale steps worth
tokenising; roughly 12 are one-off component dimensions (560px bio width,
220px polaroid, 340px, 700px) that are a component's size, not a design
token — those should stay literals. The card and mobile work since then added
a few more: 12px, 24px and 5px on the homepage cards, and 24px, 88px and 8px
in the footer's mobile breakpoint.

**`/ticketmaster-casestudy.html` is a temporary 307** to `/#work`, because
the URL was live on both the old site and the new one. Point it at the real
replacement once one exists.

**The replacement Ticketmaster case studies.** Not started. The Support
Community work is being broken out into separate new projects rather than
ported. `_archive/ticketmaster-legacy/README` holds the metadata worth
reusing — role, timeline, team, tools. Shipping one of these unblocks the
redirect above.

## The stacked case study layout — decided, do not drift
Below 1100px the case study title block, Introduction and sections all stack
and sit on the page gutter. Two values in there were chosen deliberately and
should not be "tidied" back to the nearest round number:

- **Section title to its own body: `--space-md`, 20px.** Sections are 112px
  apart, so this holds the ratio at about 5.6:1 and binds a title to the
  content under it. It was 40px first, which read as a blank line under a
  32px display heading and left the title floating between two sections.
- **The overrides live at the END of CaseStudy.module.css**, not in the
  `@media` block near the top. A media query adds no specificity, so an
  override there loses to any same-specificity rule declared later in the
  file — and `.introRow` and `.section` are both declared further down.
  Putting them up top applied `flex-direction` and silently dropped
  `justify-content` and `gap`. Half-applied, and it looked done.

The footer's mobile treatment fires at 768px, matching where `--site-gutter`
steps down. The old layout only stops fitting at 577px, so iPad portrait gets
a phone footer it does not strictly need — reviewed on a tablet and kept.
