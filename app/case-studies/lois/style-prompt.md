# Case Study Style Guide Prompt

## Overview
Build a single-page case study website with a dark, editorial aesthetic. The design should feel like a premium product studio's work — refined, intentional, and confident. Not a typical portfolio template. Every detail should signal taste and craft.

---

## Aesthetic Direction
Dark editorial. Think: a well-designed magazine that ships software. Quiet confidence, not flashy. The typography does the heavy lifting. Space is used generously. Color is used sparingly and with purpose.

---

## Color System
```
Background base:       #0d0d12  (near-black with a cool undertone)
Background surface:    #14141c
Background card:       #1a1a24
Background elevated:   #21212e
Accent purple:         #7c6ff7  (primary accent — used for step labels, tags, key moments)
Accent warm:           #c4a882  (secondary accent — used for insight callouts only)
Text primary:          #edeaf5
Text secondary:        #8e8aaa
Text tertiary:         #4e4b6a
Border subtle:         rgba(255,255,255,0.07)
Border strong:         rgba(255,255,255,0.12)
Pass/success:          #4caf82
Danger:                #e06060
Warning:               #e8a84a
```

---

## Typography
Use two font families only:

**Display / headings:** Playfair Display (Google Fonts or Fontsource)
- Section titles: 26–34px, weight 700, letter-spacing -0.01em, line-height 1.2
- Hero title: 38–58px responsive, weight 700, letter-spacing -0.02em
- Pull quotes / HMW statements: 18px, weight 400, italic

**Mono / labels:** IBM Plex Mono (Google Fonts or Fontsource)
- Step labels, eyebrows, tags, captions: 10–11px, uppercase, letter-spacing 0.08–0.12em
- Feynman check text: 12px, italic

**Body:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
- Body copy: 16px, line-height 1.8, color: text-secondary
- Strong inline: color text-primary, weight 500
- Small descriptors: 13–14px, line-height 1.6

Never use Inter, Roboto, or Arial. The Playfair + IBM Plex Mono pairing is the entire personality of this design.

---

## Layout
- Max content width: 780px, centered
- Horizontal padding: 32px (20px mobile)
- Sections separated by a 0.5px border in border-subtle
- Vertical padding per section: 72px top and bottom
- Hero: 96px top, 80px bottom
- No sidebar. Single column. Full width content.

---

## Component Specifications

### Step Label (section opener)
```
Font: IBM Plex Mono, 11px, uppercase, letter-spacing 0.1em
Color: accent purple
Format: "01 — Observe" with step number in text-tertiary
```

### Section Goal (subheader below title)
```
Small pill/tag below section title
Font: IBM Plex Mono, 11px, uppercase
Color: text-tertiary
Background: bg-surface
Border: 0.5px border-subtle
Border-radius: 6px
Padding: 8px 12px
Width: fit-content
```

### Observation / List Items
```
Each item: flex row with a 6px accent-purple dot (opacity 0.6) + text
Background: bg-card
Border: 0.5px border-subtle
Border-radius: 10px
Padding: 12px 16px
Font: 14px, text-secondary, line-height 1.6
Gap between items: 10px
```

### Diagnosis Block
```
Background: bg-card
Border: 0.5px border-strong
Border-left: 3px solid accent-purple
Border-radius: 14px
Padding: 24px
Rows: label (IBM Plex Mono 10px, text-tertiary, min-width 72px) + value (14px, text-secondary)
```

### HMW / Pull Quote Block
```
Background: rgba(124,111,247,0.06)
Border: 0.5px solid rgba(124,111,247,0.25)
Border-radius: 14px
Padding: 28px
Text-align: center
Label: IBM Plex Mono, 10px, uppercase, accent-purple, opacity 0.7
Quote: Playfair Display, 18px, italic, text-primary
```

### Hypothesis Items
```
Grid: 48px number column + 1fr content
Background: bg-card
Border: 0.5px border-subtle
Border-radius: 12px
Padding: 18px
Number: IBM Plex Mono, 13px, accent-purple
Body: 14px, text-secondary, line-height 1.65
Gap between items: 12px
```

### Build Stats
```
3-column grid
Each card: bg-card, border-subtle, border-radius 12px, padding 20px, text-center
Value: Playfair Display, 28px, weight 700, text-primary
Label: IBM Plex Mono, 10px, uppercase, text-tertiary
```

### Image Placeholders
```
Background: bg-surface
Border: 0.5px border-strong
Border-radius: 14px
Inner dashed border: 1.5px dashed rgba(124,111,247,0.2), border-radius 12px, margin 8px
Min-height: 240px (taller for full-width images)
Label: IBM Plex Mono, 10px, uppercase, accent-purple
Description: 13px, text-tertiary
Caption below: 12px, text-tertiary, italic, padding 10px 16px 14px, centered
```

### Analysis Items (hypothesis validation)
```
3-column grid: 48px number | 80px status badge | 1fr text
Background: bg-card
Border: 0.5px border-subtle
Border-radius: 10px
Padding: 14px 16px
Status badge: IBM Plex Mono, 10px, uppercase, pill shape
  - Validated: green text + green tinted bg
  - Insight: warm accent text + warm tinted bg
Body: 13.5px, text-secondary, line-height 1.55
```

### Insight Block (unexpected finding)
```
Same as Diagnosis Block but:
Border-left: 3px solid accent-warm (#c4a882)
Label: IBM Plex Mono, 10px, accent-warm
```

### Pattern Items
```
Background: bg-card
Border: 0.5px border-subtle
Border-radius: 14px
Padding: 24px
Title: 15px, weight 500, text-primary, flex with mono pattern number in accent-purple
Description: 14px, text-tertiary, line-height 1.6
Gap between items: 16px
```

### Feynman Check (appears at the bottom of each section)
```
Opacity: 0.5
Border: 0.5px dashed text-tertiary
Border-radius: 10px
Padding: 14px 18px
Label: IBM Plex Mono, 9px, uppercase, letter-spacing 0.1em, text-tertiary
Text: IBM Plex Mono, 12px, text-tertiary, italic, line-height 1.6
```

### Meta Tags (hero)
```
Font: IBM Plex Mono, 11px
Padding: 5px 12px
Border-radius: 20px
Border: 0.5px border-strong
Color: text-secondary
Accent variant: accent-purple text, purple-tinted bg, purple border
```

### Context Strip
```
4-column grid with 0.5px border-right dividers between items
Label: IBM Plex Mono, 10px, uppercase, text-tertiary
Value: 14px, weight 500, text-primary
```

### Section Divider
```
Width: 40px
Height: 0.5px
Background: border-strong
Margin: 28px 0
```

### Hero Eyebrow
```
Font: IBM Plex Mono, 11px, uppercase, letter-spacing 0.12em
Color: accent-purple
Flex row with a 48px line (0.5px, accent-purple, opacity 0.4) after it
```

---

## Spacing Rhythm
Use multiples of 8px for all spacing:
- 4, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 72, 80, 96

---

## Closing Section
```
Padding: 80px top and bottom
Text-align: center
Pull quote: Playfair Display, 22–30px responsive, line-height 1.45, text-primary, max-width 560px, centered
Sub text: 15px, text-tertiary, max-width 420px, centered, line-height 1.6
No border-bottom on this section
```

---

## General Rules
- No drop shadows — depth comes from layered background colors
- No gradients on backgrounds — solid colors only
- Borders are always 0.5px — never 1px
- Border-radius: 6px (small), 10px (medium), 12px (standard), 14px (large), 20px (pill)
- All transitions: 0.15–0.2s ease
- Images: full-width within content column, border-radius 14px, border 0.5px border-strong
- Mobile: collapse grids to single column, reduce padding to 20px horizontal
- Scrollbar: 3px width, bg-elevated thumb, rounded
