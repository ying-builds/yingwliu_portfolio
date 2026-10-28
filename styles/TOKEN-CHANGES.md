# Token and type change log

A running list of every font, colour, size and spacing token added, changed
or removed in `styles/tokens.css` (and the `@font-face` blocks in
`styles/globals.css`). Newest first. Add an entry whenever one of these
changes, in the same commit.

## New home, footer and nav (branch `rethinking-client-self-service-and-new-home`)

### About page: one screen on desktop
| Token | Value | Used for |
|---|---|---|
| `--about-left-width` | `340px` | Polaroid column, and the widest the caption under it runs |
| `--about-right-width` | `560px` | Bio column |
| `--about-col-gap` | `96px` | Space between the two columns |
| `--about-pad-y` | `48px` | Hero top and bottom padding on desktop |
| `--about-stack-gap` | `32px` | Eyebrow, polaroid and caption spacing. Also the row gap when the page stacks |
| `--about-now-gap` | `24px` | Bio to the "I am currently" label, and the bullets to the email and LinkedIn links |
| `--about-bullet-indent` | `18px` | Text indent past the bullet dot |
| `--about-bullet-gap` | `10px` | Between the three bullets |
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
