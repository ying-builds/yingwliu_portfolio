# Ticketmaster / Support Community — legacy page

The hand-coded case study page from the static site, kept for reference while
the replacement case studies get written. It is **not** part of the build:
nothing outside `public/` is served, and `_archive/` is never routed.

Archived on the Next.js cutover, when the page and its assets were removed from
`public/`.

## Opening it

Open `ticketmaster-casestudy.html` directly in a browser — double-click is fine.
Every image resolves from the `images/` folder beside it.

Two things won't work offline, and neither is worth fixing:

- **Fonts.** The page links Inter and PT Mono from Google Fonts, so without a
  network connection it falls back to system faces. Layout is unaffected.
- **Site navigation.** The nav and breadcrumb point at `../../`, `../../about.html`
  and `../gsm/`. Those were relative to the old static site's folder layout and
  had already stopped resolving before this was archived.

## What changed from the original

Exactly one thing: the asset paths. The page was served from `public/`, so it
referenced assets absolutely. In the archive they are relative, so the page
opens standalone.

| Original | Archived |
| --- | --- |
| `/images/ticketmaster-legacy/…` | `images/…` |
| `/images/site/ipad-mockup.png` | `images/ipad-mockup.png` |

14 lines changed, all of them one of those two rewrites. Every other line is
byte-identical to the page that was live, and all 12 images are byte-identical
to the originals.

`ipad-mockup.png` came from `public/images/site/` rather than the page's own
folder — it was shared with the homepage card. That card was removed at the same
time, which left the file unreferenced, so it is archived here and deleted from
`public/`.

## Content worth carrying forward

The page header carried project metadata that isn't recorded anywhere else:

- **Role** — Sole Product Designer
- **Timeline** — Aug 2023 – Oct 2025
- **Team** — Kari Scott, Em Villaverde
- **Tools** — Figma, Maze, Salesforce, Coveo, Domo
- **Tagline** — "Designing features to drive client engagement and self-service —
  helping thousands of clients find answers without ever needing to ask."

The homepage card that linked here read:

- **Title** — Ticketmaster / Support Community
- **Description** — "Shaping navigation, content systems, and search to enable
  scalable client self-service across 14 global markets."
- **Role** — Sole Product Designer · **Year** — 2023 – 2025

The page also links out to a Figma slide deck, which is not archived here and
may change independently:
<https://www.figma.com/slides/CyaJETWHXCwyUJq9aNLpLi/Support-Community-PPT?node-id=1-92>

## Why it existed

Per the project brief, this was always a holding measure rather than a permanent
legacy page like Netflix Party. It lived in `public/` only so the homepage card
would not 404 after the Vercel cutover. The plan was always to break the work
into separate case studies, which is what replaces it.
