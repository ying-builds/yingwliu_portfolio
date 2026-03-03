# Ticketmaster Case Study — Framer Build Spec

Use this as your reference while building in Framer. Every value is pulled directly from the HTML we designed together.

---

## Design Tokens

Set these up in Framer's site-level color and font variables first.

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FAF8F5` | Page background |
| Ink | `#1A1916` | Primary text, dark fills |
| Mid | `#888480` | Secondary text, descriptions |
| Soft | `#B8B4AF` | Tertiary text, labels |
| Rule | `#E4E1DC` | Borders, dividers |
| Accent | `#A63D2B` | Callout borders, hover states |
| Card BG | `#F0EDE8` | Card surfaces, gated section bg |

### Fonts

| Font | Weight | Usage |
|------|--------|-------|
| Fraunces | 400 regular | H1, metric numbers, gated title |
| Fraunces | 400 italic | H1 subtitle ("Support Community") |
| Inter | 300 (light) | Body text, descriptions |
| Inter | 400 (regular) | Nav links, meta values |
| Inter | 500 (medium) | Nav logo, card titles |

Add all three from Google Fonts in Framer: Site Settings → Fonts → Custom → Google Fonts.

---

## Page Structure (top to bottom)

### 1. Nav (Fixed)

**Framer setup:** Fixed position, full width, z-index 100

| Property | Value |
|----------|-------|
| Layout | Flex row, space-between, center aligned |
| Padding | 22px top/bottom, 48px left/right |
| Background | Cream at 92% opacity |
| Backdrop filter | Blur 12px |
| Border bottom | 1px solid Rule |

**Logo (left)**
- Inter 500, 12px, letter-spacing 0.1em, uppercase, Ink color
- Links to your Work page

**Links (right)**
- Flex row, 28px gap
- Inter 400, 12px, letter-spacing 0.04em, Mid color
- Hover: Ink color, 0.2s transition

---

### 2. Breadcrumb

| Property | Value |
|----------|-------|
| Padding top | 108px (accounts for fixed nav) |
| Padding left/right | 48px |
| Font | Inter 300, 11px |
| Letter-spacing | 0.05em |
| Color | Soft |

Content: `Work / Ticketmaster` — "Work" is a link (Soft color, hover → Ink)

---

### 3. Hero Section

| Property | Value |
|----------|-------|
| Padding | 36px top, 48px left/right |
| Max width | 900px |

**Eyebrow**
- Inter 300, 11px, uppercase, letter-spacing 0.12em, Mid color
- Margin bottom: 18px
- Text: `Product Designer & UX Researcher · 2023–2025`

**H1**
- Fraunces 400
- Font size: Use Framer responsive — min 40px, max 72px (or just set 56px–64px and adjust per breakpoint)
- Line-height: 1.06
- Letter-spacing: -0.015em
- Margin bottom: 28px
- Line 1: "Ticketmaster" in Ink
- Line 2: "Support Community" in Fraunces *italic*, Mid color

**Mission statement**
- Inter 300, 15px, line-height 1.7, Mid color
- Max width: 480px
- Left border: 2px solid Accent
- Padding left: 18px
- Margin bottom: 52px
- Text: `Designing features to drive client engagement and self-service — helping thousands of clients find answers without ever needing to ask.`

---

### 4. Meta Row

| Property | Value |
|----------|-------|
| Layout | 4-column grid, equal widths |
| Padding | 22px top/bottom, 48px left/right |
| Border top | 1px solid Rule |
| Border bottom | 1px solid Rule |

Each column separated by 1px solid Rule left border (except first). Padding-left 28px on columns 2–4, padding-right 24px on all.

**Column content:**

| Label | Value |
|-------|-------|
| Role | Sole Product Designer |
| Timeline | Aug 2023 – Oct 2025 |
| Team | Kari Scott · Em Villaverde |
| Tools | Figma, Maze, Salesforce, Coveo, Domo |

**Label style:** Inter, 10px, uppercase, letter-spacing 0.13em, Soft color, margin-bottom 6px

**Value style:** Inter 400, 13px, Ink color, line-height 1.5

**Tool chips:** Flex row, 5px gap, wrap. Each chip: Inter 10px, Mid color, 2px/9px padding, 1px solid Rule border, border-radius 20px

---

### 5. Hero Image (Code Embed)

This is the mock browser wireframe with the "Work samples available upon request" pill. Use a **Code Embed** in Framer and paste this self-contained HTML:

```html
<div style="margin:0 48px;height:420px;border-radius:6px;background:linear-gradient(160deg,#E5E0D8,#D8D2C8);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
  <div style="width:78%;height:84%;background:#FAF8F5;border-radius:6px;box-shadow:0 24px 64px rgba(0,0,0,0.14);overflow:hidden;">
    <div style="height:28px;background:#ECEAE6;display:flex;align-items:center;padding:0 12px;gap:5px;">
      <div style="width:7px;height:7px;border-radius:50%;background:#FF5F57"></div>
      <div style="width:7px;height:7px;border-radius:50%;background:#FFBD2E"></div>
      <div style="width:7px;height:7px;border-radius:50%;background:#28CA41"></div>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">
      <div style="height:10px;background:#E8E3DB;border-radius:2px;width:55%"></div>
      <div style="height:60px;background:#EDE8E2;border-radius:3px"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
        <div style="height:40px;background:#E8E3DB;border-radius:3px"></div>
        <div style="height:40px;background:#E8E3DB;border-radius:3px"></div>
        <div style="height:40px;background:#E8E3DB;border-radius:3px"></div>
      </div>
      <div style="height:10px;background:#E8E3DB;border-radius:2px;width:40%"></div>
      <div style="height:40px;background:#EDE8E2;border-radius:3px"></div>
    </div>
  </div>
  <div style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#888480;background:rgba(250,248,245,0.88);backdrop-filter:blur(8px);padding:7px 16px;border-radius:20px;border:1px solid rgba(255,255,255,0.6);white-space:nowrap;">Work samples available upon request</div>
</div>
```

---

### 6. Content Area

| Property | Value |
|----------|-------|
| Max width | 860px |
| Margin | 0 auto (centered) |
| Padding | 72px top, 48px left/right, 100px bottom |

---

### 7. Section: The Problem

**Section label pattern** (reuse for all sections):
- Flex row, center aligned, 14px gap
- Inter, 10px, uppercase, letter-spacing 0.14em, Soft color
- Followed by a 1px Rule line that fills remaining width
- Margin bottom: 24px
- In Framer: text element + a frame with height 1px, fill Rule, flex-grow 1

**Body text:** Inter 300, 15px, line-height 1.78, color `#3D3A36`, margin-bottom 14px

**Callout box:**
- Left border: 2px solid Accent
- Padding: 14px 18px
- Background: Accent at 5% opacity (`rgba(166,61,43,0.05)`)
- Border-radius: 0 4px 4px 0
- Margin: 28px 0
- Text: Inter 300, 14px, italic, Ink color

**Problem text:** `Ticketmaster's Global Education team needed a scalable way to train and support clients across 14 markets — from first-time venue managers to enterprise promoters running hundreds of events. The B2B support platform was the vehicle: a single destination where clients could learn the product, troubleshoot issues, and stay current on platform changes without needing to contact support.`

**HMW text:** `How might we design a platform that helps clients learn and solve problems on their own — scaling education across markets without scaling headcount?`

---

### 8. Section: Projects

**Grid:**
- 3 columns, 2px gap
- Background: Rule (shows through as gap color)
- Border: 1px solid Rule
- Border-radius: 6px
- Overflow: hidden
- Margin-top: 28px

**Each card:** Background Cream, hover → `#F5F2ED`

This section is complex with the mini-mock wireframes inside each card. Two options:

**Option A (recommended):** Build the card grid natively in Framer as a 3-col grid. For the visual area at the top of each card, use a simple colored rectangle with the gradient fill and put a "Censored" text badge in the corner. Skip recreating the mini wireframes — they're decorative and won't be visible at small sizes anyway. This is faster and cleaner.

**Option B:** Use a code embed for the entire project grid. Copy this section from the HTML file.

**Card info area:**
- Padding: 14px 16px 18px
- Number: Inter 10px, Soft color, letter-spacing 0.08em, margin-bottom 4px
- Title: Inter 500, 13px, Ink color, margin-bottom 4px, line-height 1.3
- Description: Inter 12px, Mid color, line-height 1.55

**Card gradient fills:**

| Card | Gradient |
|------|----------|
| 01 Onboarding Journey | `135deg, #E2DDD6 → #D0C9C0` |
| 02 Product Updates | `135deg, #DDE2DC → #C8D0C6` |
| 03 Product Guide | `135deg, #DDD8E2 → #C8C4D0` |
| 04 Support Form | `135deg, #E2DDD6 → #C8C0B6` |
| 05 AI Personalization | `135deg, #E2DCD5 → #D0C4BC` |
| 06 Event Creation Form | `135deg, #DBE2E0 → #C4D0CC` |

---

### 9. Section: On the Ground (Code Embed)

Use a **Code Embed** for this scrapbook collage. Upload your 4 photos to Framer's asset manager first, then replace the `src` URLs in this code with Framer's hosted URLs:

```html
<style>
  .scrapbook { position:relative; min-height:520px; width:100%; }
  .scrap-item {
    position:absolute; border-radius:4px; overflow:hidden;
    box-shadow: 0 4px 24px rgba(26,25,22,0.10), 0 1px 4px rgba(26,25,22,0.06);
    border: 3px solid rgba(255,255,255,0.9);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }
  .scrap-item:hover {
    z-index:10;
    transform: rotate(0deg) scale(1.03) !important;
    box-shadow: 0 12px 40px rgba(26,25,22,0.16), 0 2px 8px rgba(26,25,22,0.08);
  }
  .scrap-item img { width:100%; height:100%; object-fit:cover; display:block; }
  .s1 { width:58%; height:300px; top:10px; left:0; transform:rotate(-1.5deg); }
  .s2 { width:36%; height:260px; top:0; right:0; transform:rotate(2.2deg); }
  .s3 { width:40%; height:180px; bottom:0; left:4%; transform:rotate(1.8deg); }
  .s4 { width:34%; height:200px; bottom:10px; right:6%; transform:rotate(-2.5deg); }
</style>
<div class="scrapbook">
  <div class="scrap-item s1"><img src="YOUR_ROUNDTABLE_PHOTO_URL" /></div>
  <div class="scrap-item s2"><img src="YOUR_SELFIE_PHOTO_URL" /></div>
  <div class="scrap-item s3"><img src="YOUR_OFFICE_PHOTO_URL" /></div>
  <div class="scrap-item s4"><img src="YOUR_MARQUEE_PHOTO_URL" /></div>
</div>
```

Replace `YOUR_..._URL` with the Framer-hosted image URLs after uploading.

---

### 10. Section: Case Study (Gated Access)

Build this natively in Framer — it's simple enough:

**Container:**
- Border: 1px solid Rule
- Border-radius: 6px
- Background: Card BG (`#F0EDE8`)
- Padding: 64px 32px
- Min-height: 300px
- Layout: Flex column, center aligned, center justified

**Lock icon:**
- Use a Feather icon or Lucide "Lock" icon, 28px, Soft color
- Margin-bottom: 20px

**Title:**
- Fraunces 400, 22px, Ink color
- Margin-bottom: 10px
- Text: `This case study is under NDA`

**Note:**
- Inter 300, 14px, line-height 1.7, Mid color
- Margin-bottom: 28px
- Text: `Please request access with your name and company.` + line break + `Thank you!`

**Button:**
- Inter 400, 12px, letter-spacing 0.06em
- Cream text on Ink background
- Padding: 10px 24px
- Border-radius: 20px
- Hover: 75% opacity
- Links to: `https://www.figma.com/slides/CyaJETWHXCwyUJq9aNLpLi/Support-Community-PPT?node-id=1-92`
- Open in new tab

---

### 11. Section: Takeaway

**Dark container:**
- Background: Ink (`#1A1916`)
- Border-radius: 6px
- Padding: 36px 40px
- Margin-top: 28px

**Label:** Inter, 10px, uppercase, letter-spacing 0.13em, color `rgba(250,248,245,0.35)`, margin-bottom 14px. Text: `What I learned`

**Body:** Inter 300, 15px, line-height 1.78, color `rgba(250,248,245,0.82)`. Text: `The best outcome wasn't a single feature — it was infrastructure. Designing navigation, content, and search as a system meant every new article, every new market, made the platform better rather than more complex. Scalable design means designing for the work that comes after you.`

---

### 12. Footer

| Property | Value |
|----------|-------|
| Border top | 1px solid Rule |
| Padding | 40px 48px |
| Layout | Flex row, space-between, center aligned |

**Links:** Inter 400, 13px, Ink color, no underline. Hover: 50% opacity.
- Left: `← Back to Work`
- Right: `Next: UC Davis GSM →`

---

## Scroll Animations

For each section, add a Framer "While in View" animation:
- Start: opacity 0, Y offset +18px
- End: opacity 1, Y offset 0
- Duration: 0.55s ease
- Stagger each section by ~60ms

---

## Responsive Breakpoints

### Tablet (≤768px)

| Change | Value |
|--------|-------|
| All horizontal padding | 48px → 24px |
| Meta row | 4 columns → 2 columns, remove left borders |
| Hero image height | 420px → 260px |
| Content padding | 72px top → 48px, 100px bottom → 80px |
| Project grid | 3 columns → 2 columns |
| Scrapbook min-height | 520px → 400px |
| Gated section padding | 64px → 48px |

---

## Skip List (don't rebuild in Framer)

- **Custom cursor** — skip entirely, it's fragile across devices and adds no portfolio value
- **Mini-mock wireframes** in project cards — use simple gradient rectangles with "Censored" badges instead
- **Backdrop blur on nav** — Framer supports this natively, but test on your target browsers
