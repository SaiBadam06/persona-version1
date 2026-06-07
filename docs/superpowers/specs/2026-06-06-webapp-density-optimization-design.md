# PersonaOn — Webapp Density & Readability Optimization

**Date:** 2026-06-06
**Option chosen:** B — Shared token system + component normalization
**Immediate focus (this pass):** Desktop, landing/dashboard mockup (`Downloads/personaOn`). Profiles app aligned in a later pass.

## Problem

The landing/dashboard mockup uses ~30 ad-hoc heading sizes up to `clamp(…110px)`,
random paddings (`28/22/15/11px`), and has live layout bugs:

1. Display headlines far too large for comfortable desktop reading.
2. `.hero-meta` ("Free for 14 days…") overlaps the `.strip-kicker` "TRUSTED BY…"
   block and logo marquee at the hero/brand-strip boundary.
3. "MOST PICKED" badge clipped by `overflow:hidden` on the Pro pricing card.

The Profiles product app already has a restrained scale and is not the priority.

## Design

### 1. Shared type scale (CSS custom properties, top of globals.css)

| Token | Value | LH | Use |
|---|---|---|---|
| `--text-display` | `clamp(32px, 4.5vw, 48px)` | 1.05 | hero headline only |
| `--text-h1` | `28px` | 1.15 | section headings |
| `--text-h2` | `22px` | 1.2 | sub-section / large card title |
| `--text-h3` | `18px` | 1.3 | card titles |
| `--text-h4` | `15px` | 1.4 | small headings |
| `--text-base` | `13px` | 1.55 | default body |
| `--text-sm` | `12px` | 1.5 | secondary |
| `--text-xs` | `11px` | 1.45 | captions/meta |
| `--text-2xs` | `10.5px` | 1.4 | micro/eyebrow |
| `--text-prose` | `15px` | 1.65 | long-form reading |

### 2. Spacing — 8px grid

Tokens `--space-1..10` = `4 8 12 16 24 32 48 64 80 96`.
Card/panel padding `28px → 16–20px`. Section padding `100–130px → 64–80px`.

### 3. Layout bug fixes

- Hero/brand-strip overlap: remove the collision at the boundary (verify root
  cause live — candidate causes: `.hero min-height:100vh` + centered content,
  or brand-strip pulled up). Guarantee normal-flow separation.
- Hero-meta restyle: it was colored for a dark hero (`rgba(236,240,248,.62)`)
  but renders on light bg — fix contrast.
- Pricing badge clip: allow the badge to sit inside the card or remove the crop.
- Sweep duplicate top-level selectors (`.cta-final`, `.hero-headline` ×3) and
  the 42 absolute-positioned elements for the same class of bug.

### 4. Apply + verify

Rewire hero/cta/section/marquee/pricing to the tokens. Then **run the dev app
and screenshot top→bottom** to confirm no overlap and a clean, compact desktop
read before claiming done.

## Out of scope (this pass)

Profiles app token alignment; mobile-specific tuning; full shadcn migration (Option C).
