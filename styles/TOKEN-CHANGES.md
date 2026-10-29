# Token and type change log

A running list of every font, colour, size and spacing token added, changed
or removed in `styles/tokens.css` (and the `@font-face` blocks in
`styles/globals.css`). Newest first. Add an entry whenever one of these
changes, in the same commit.



## 2026-10-28: Footer links match the top nav
### Changed
| Token | Was | Now |
| --- | --- | --- |
| `--text-footer-nav` | 12.5px | `var(--text-nav)` (12px, so the footer's Work / About / Resume read at the same size as the top nav) |

## 2026-10-28: BeReal in the story layout
### Added
| Token | Value |
| --- | --- |
| `--story-feature-video` | 280px (width of a portrait phone video beside a feature's text) |

## 2026-10-28: Intel One Mono everywhere, one nav
### Changed
| Token | Was | Now |
| --- | --- | --- |
| `--font-mono` | `'PT Mono', monospace` | `'Intel One Mono', monospace` |
| `--font-intel-mono` | `'Intel One Mono', monospace` | `var(--font-mono)` (alias, same font) |

### Removed
- The PT Mono `@font-face` blocks in `styles/globals.css` and the two PT Mono
  files in `public/fonts`.

### Nav
- The wordmark and the Work / About / Resume links are Intel One Mono at
  `--text-nav` (12px) on every page. The cream pages' wordmark was Bootzy TM
  at 16px with tracking; the links were Inter 500.

## 2026-10-28: Peelable stickers on the About notebook
### Added
| Token | Value |
| --- | --- |
| `--sticker-lift-duration` | 0.25s (hover curl and drop) |
| `--sticker-peel-duration` | 0.9s |
| `--sticker-fall-distance` | 70vh |
| `--about-sticker-tuxedo-width` / `-left` / `-top` | 16cqw / 1.8cqw / 0.5cqw (top-left of the left page) |
| `--about-sticker-tabby-width` / `-right` / `-bottom` | 19cqw / 4.5cqw / 1.5cqw |

### Added: dotted flourishes (same day)
| Token | Value |
| --- | --- |
| `--about-ornament-opacity` | 0.75 |
| `--about-orn-tall-width` / `-left` / `-top` | 8vw / 7vw / 12% |
| `--about-orn-big-width` / `-right` / `-top` | 11vw / 4vw / 6% |
| `--about-orn-small-width` / `-left` / `-bottom` | 8.2cqw / 1.9cqw / 8.6cqw (pinned to the notebook, centred on that point) |

## New home, footer and nav (branch `rethinking-client-self-service-and-new-home`)

### About page: one screen on desktop
**Notebook layout:** the page is now an open notebook picture with the content laid on it. These are all new, sized off the notebook's own width (`cqw`) so they shrink together. The first number is the size at full width.

| Token | Value | Used for |
|---|---|---|
| `--about-nb-max-height` | `860px` | Tallest the notebook gets on a big screen |
| `--about-nb-photo` | `23cqw` | Polaroid width, and the width of the left page's column |
| `--about-nb-text` | `min(14px, 1.29cqw)` | Bio, I am currently, and the three lines |
| `--about-nb-label` | `min(10px, 0.92cqw)` | About, I am currently, Otherwise I am, the date and title lines |
| `--about-nb-small` | `min(12px, 1.1cqw)` | Email and LinkedIn |
| `--about-nb-caption` | `min(20px, 1.85cqw)` | Caption under the polaroid |
| `--about-nb-section-gap` | `min(36px, 3.3cqw)` | Between groups on the right page |
| `--about-nb-label-gap` | `min(8px, 0.74cqw)` | A label to its text |
| `--about-nb-bullet-gap` | `min(4px, 0.37cqw)` | Between the three lines and the two links |
| `--about-nb-para-gap` | `min(14px, 1.3cqw)` | Between bio paragraphs |
| `--about-nb-title-gap` | `min(6px, 0.55cqw)` | Date line to the title line |
| `--about-nb-stack-gap` | `min(24px, 2.2cqw)` | Title to polaroid, polaroid to caption |
| `--about-photo-stacked` | `220px` | Polaroid width in the stacked (under 900px) layout, same as before |
| `--about-paper-opacity` | `0.5` | Embossed paper picture behind the whole About page, turned down so it stays quiet |
| `--about-title-gap` | `6px` | Same date-to-title gap in the stacked (under 900px) layout |

The older `--about-*` tokens below still drive the stacked layout.

The bullet dots and the rules next to the labels were removed later, so `--about-bullet-indent` is gone again.

| Token | Value | Used for |
|---|---|---|
| `--about-left-width` | `340px` | Polaroid column, and the widest the caption under it runs |
| `--about-right-width` | `560px` | Bio column |
| `--about-col-gap` | `96px` | Space between the two columns |
| `--about-pad-y` | `48px` | Hero top and bottom padding on desktop |
| `--about-stack-gap` | `32px` | Eyebrow, polaroid and caption spacing. Also the row gap when the page stacks |
| `--about-section-gap` | `40px` | Between groups on the right: bio, I am currently, Otherwise I am, links. Much larger than the label gap so each label reads as belonging to what is under it |
| `--about-label-gap` | `8px` | A label to the text it names. Also now the gap under "About" (was 24px) |
| `--about-bullet-gap` | `4px` | Between the three "Otherwise I am" lines (was 10px) |
| `--about-glyph-right` | `1.5vw` (was `6vw`, first `3vw`) | Faint 瑩 behind the page, distance from the right edge. Now sits in the margin beside the notebook. The outline of it and the "Ying Liu" script went from 6% to 14% black so they still show on the paper picture |
| `--about-caption-size` | `20px` | Caption under the polaroid. Now Crimson Pro in normal case (was PT Mono caps) |

### Lighter card strokes
| Token | Change | Note |
|---|---|---|
| `--home-card-stroke` | new, `var(--home-card-label)`, `#717171` | Outer edge of Work, AI and Play cards. Same grey as the line under the tabs. Was `--home-card-border` `#d1d0ce` |
| `--home-card-border` | unchanged, `#d1d0ce` | Now only the rule above the caption inside a card |

### Softer card corners
| Token | Change | Note |
|---|---|---|
| `--home-card-radius` | `8px` to `5px` | Corner of the homepage cards (Work, AI and Play tiles) |

### Footer smoke band matches the bar above it
| Token | Change | Note |
|---|---|---|
| `--footer-bar-height` | new, `calc(--space-footer-y * 2 + --footer-mark-size)`, 234px | Height of the dark footer bar. The smoke band now uses it, so the two are the same height |
| `--footer-band-ratio` | removed (was `1440 / 275`) | Band was an aspect ratio, about 275px at 1440 and up to 340px on wide screens |
| `--footer-band-max-height` | removed (was `340px`) | No longer needed, the height is fixed |

### Shorter homepage cards
| Token | Change | Note |
|---|---|---|
| `--home-card-cover-ratio` | new, `16 / 10` | Card picture shape on Work and AI cards. Was `536 / 376` hardcoded (from the Figma frames). About 30px shorter per card at laptop width |

### Client Self-Service moves to the story layout
| Token | Value | Used for |
|---|---|---|
| `--text-story-stat` | `clamp(32px, 4vw, 42px)` | Big number in the three-stat strip, Crimson Pro |

### Story layout and warmer footer smoke (Event Programming Form and UC Davis GSM)
| Token | Value | Used for |
|---|---|---|
| `--story-max-width` | `1180px` | Content width of the story case study layout |
| `--story-gutter-x` | `16px` | Page side padding on phones (the module widens it on larger screens) |
| `--story-rail` | `250px` | Sticky left rail that names each section |
| `--story-gutter` | `56px` | Gap between the rail and the content column |
| `--story-section-y` | `88px` | Section top and bottom padding |
| `--story-col-gap` | `44px` | Gap between blocks inside a column |
| `--story-hero-bottom` | `88px` | Hero to first section |
| `--story-frame-pad` | `25px` | Inset of the framed media |
| `--text-story-h2` | `28px` | Rail headline, Crimson Pro |
| `--footer-band-bg` | `#f7efe4` | Footer smoke band. Warmed up from the page cream, and matches the re-tinted smoke video's own background so there is no seam |

### Case study captions and open columns (Event Programming Form draft)
| Token | Value | Used for |
|---|---|---|
| `--space-caption-gap` | `var(--space-sm)`, 10px | Distance from a caption or note to the block it describes. A caption that follows a block in the column pulls up by the column gap minus this, so it never floats a full 40px below its element |
| `--space-column-pad` | `16px` | Cell padding for ruled open columns, the no-box replacement for rounded stat and insight cards |


### Play pill clean-up
| Token | Change | Note |
|---|---|---|
| `--home-pill-radius` | `14px` to `12px` | Tighter corner |
| `--home-pill-shadow` | `0 4px 16px / .12` to `0 2px 8px / .08` | Softer against photos |
| `--home-pill-bg` | new, `rgba(255,255,255,.92)` | Almost solid white (was solid). Pill also hugs its text now instead of spanning the tile |
| `--home-pill-pad-y` / `--home-pill-pad-x` | new, `10px` / `14px` | Was `12px 16px` hardcoded |
| `--home-pill-tags` | new, `11px` | Tag line is now its own grey line under the title (matches card labels) |

### Motion
| Token | Value | Used for |
|---|---|---|
| `--home-arrow-nudge` | `3px` | Play pill ↗ arrow drifts this far up and right while the tile is hovered (matches the reference recording) |
| `--home-arrow-duration` | `0.4s` | Ease-out time for that drift. Off under reduced motion |

### Fonts
| Change | Where | Note |
|---|---|---|
| Added **Crimson Pro** (regular + italic, one weight, 400) | `--font-serif` | Journal text in the hero, and Work / AI card titles. No bold, so titles are weight 400. |
| Added **Covered By Your Grace** | `--font-hand` | Hero handwriting: "psst, poke around!", "pet bean!", tape notes. |
| Added **Intel One Mono** | `--font-intel-mono` | Homepage mono labels, replacing PT Mono there. About, case studies and the footer still use PT Mono (roll-out is a later pass, see CLAUDE.md). |

### Colours
| Token | Value | Used for |
|---|---|---|
| `--site-cream` | now `var(--background-fill)` `#f8f6f5` (was `#faf8f5`) | One page background site-wide |
| `--nav-logo-rest` | `#6e6d6b` | Nav wordmark at rest (4.8:1 on the page) |
| `--site-accent-on-dark` | `#d4533f` | Footer link underline on the dark bar |
| `--site-accent-lift` | `#d4533f` | Nav underline over the dark hero |
| `--hero-ink` | `#1a1916` | Journal handwriting |
| `--hero-sparkle-cream` / `--hero-sparkle-butter` | `#f4efe6` / `#ffd66b` | Bean's sparkles |
| `--home-section-top` / `--home-section-bottom` | `#2a2927` / `#1a1916` | Dark band behind the tabs (gradient) |
| `--home-tab-rest` | `#8f8b86` | Inactive tab (5.1:1 on the band) |
| `--home-card-surface` | `#eeece9` | Card caption background |
| `--home-card-cover` | `#e4e1dc` | Cover when a card has no picture |
| `--home-card-border` | `#d1d0ce` | Card edge and caption rule |
| `--home-card-label` | `#717171` | Company line, tags |
| `--home-card-body` | `#5f5b56` | One-line description |

### Type sizes
| Token | Value | Used for |
|---|---|---|
| `--home-card-title` | 24px | Card title (Crimson Pro, letter-spacing normal) |
| `--home-card-meta` | 11px | Company line and tags (Intel One Mono, caps) |
| `--home-card-tracking` | 0.08em | Mono labels on cards and pills |
| `--site-text-body` (existing) | 15px | Card description (Inter, line height 1.5) |
| Play pill text | 12px (`--site-text-small`) | Title bold in caps, tags in normal case |
| Tabs | 14px (`--text-meta`) | Inter, selected weight 500 |
| `--text-footer-nav` / `-tagline` / `-copy` | 12.5px / 9px / 10px | Footer |

### Spacing, radius, shadow
| Token | Value |
|---|---|
| `--home-gutter` | 54px |
| `--home-card-gap` | 8px (between Work cards) |
| `--home-play-gap` | 20px (between Play tiles) |
| `--home-card-radius` | 8px |
| `--home-pill-radius` | 14px |
| `--home-card-shadow` | `0 8px 24px rgba(0,0,0,.35)` |
| `--home-pill-shadow` | `0 4px 16px rgba(0,0,0,.12)` |
| `--space-footer-y` | 59px |
| `--footer-band-ratio` / `-max-height` / `-height-mobile` | 1440/275, 340px, 120px |
| Play pill inset | `--space-xs` (8px) on left, right and bottom |

### Removed
`--footer-height`, `--gap-footer-nav`, the old `.footer*` rules, and the old
homepage hero and grid styles in `app/page.module.css`.

### Fixed along the way
- Card titles inherited the case-study `h3` letter-spacing (0.3px); now `normal`.

### To reconcile later
- `--site-accent-on-dark` and `--site-accent-lift` are the same colour
  (`#d4533f`). Merge into one when convenient.
- Play pill text is 12px while card labels are 11px (matches Figma). Confirm
  whether they should be one size.
