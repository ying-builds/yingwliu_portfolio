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

## Current task
Convert the Product Guide case study into the new Next.js + MDX template.
Build the reusable template, then move the Product Guide content into an MDX
file that fills that template. Prove it works before touching the others.

## Case studies to convert (in order)
1. Product Guide / Client Product Education Guide (FIRST — the lead story)
2. (remaining case studies to follow the same proven pattern)
