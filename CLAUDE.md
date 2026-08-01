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

## Case study images
- Mockup images and screenshots sit on a light frame: `--mockup-bg` for the
  surface and a 1px `--mockup-border-line` border, both from tokens.css.
- This applies to every mockup or screenshot in a case study, new or existing.
- Exception: media that is deliberately presented full-bleed on a dark
  section, where the asset already carries its own device frame. A light
  frame there fights the design rather than supporting it.

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

## Current task
Migrating the Work and About pages into the Next.js app so the legacy static
versions can be retired. The Product Guide case study is already converted and
serves as the proven pattern for the rest.

## Case studies to convert (in order)
1. Product Guide / Client Product Education Guide — DONE, the reference build
2. BeReal
3. UC Davis GSM

Not converting:
- Ticketmaster / Support Community — being broken out into separate new
  projects later, so the existing case study is not worth porting.
- Netflix Party — links out to a Medium article and stays as-is.
