# Plan: SCSS → Tailwind Migration + Premium Dark Design System + Consistent Spacing

## TL;DR

1. Replace all 26+ SCSS modules with Tailwind CSS v4
2. Overhaul color system from light SaaS to **premium dark ocean + golden accent** palette
3. Establish consistent page layout (shared section spacing, hero stays unique per page)
4. New premium card system with layered shadows and subtle gold glows
5. Remove SCSS entirely

## Approach: Tailwind v4 (CSS-first config)

Tailwind v4 uses `@theme` in CSS instead of tailwind.config.js — maps perfectly to existing CSS custom properties in globals.css.

---

## DESIGN SYSTEM: "Odisha Luxe"

### 1. COLOR SYSTEM

**Background layers (dark ocean base):**

```
--color-bg-deepest:  #060a13    (page base, near-black ocean)
--color-bg-base:     #0c1220    (main background)
--color-bg-elevated: #111827    (raised sections, alternating)
--color-bg-surface:  #1a2332    (card background)
--color-bg-surface-hover: #212d3f (card hover)
```

**Gold accent (luxury warmth — sun on temple stone):**

```
--color-gold-50:  #fdf8ef
--color-gold-100: #f9edda
--color-gold-200: #f2d7b0
--color-gold-300: #e8b86d   (highlight text, badges)
--color-gold-400: #d4a254   (PRIMARY ACCENT — CTAs, active states)
--color-gold-500: #c4903d   (hover on gold)
--color-gold-600: #b07830
--color-gold-700: #8f5d24
--color-gold-800: #764c22
--color-gold-900: #3d2710
```

**Ocean blue (secondary, supporting depth):**

```
--color-ocean-300: #7cb3f4
--color-ocean-400: #4d94e8   (links, secondary actions)
--color-ocean-500: #3b82f6   (existing primary — demoted to secondary)
--color-ocean-600: #2563eb
--color-ocean-700: #1d4ed8
--color-ocean-800: #1e3a6e
--color-ocean-900: #0c1f42
```

**Text (warm whites — not cold):**

```
--color-text-primary:   #f1ede6  (headings, body on dark)
--color-text-secondary: #94a3b8  (descriptions, secondary info)
--color-text-muted:     #64748b  (labels, placeholders)
--color-text-on-gold:   #0c1220  (text on gold buttons/badges)
```

**Borders (barely-there edges):**

```
--border-subtle:  rgba(255,255,255, 0.05)
--border-default: rgba(255,255,255, 0.08)
--border-strong:  rgba(255,255,255, 0.14)
--border-gold:    rgba(212,162,84, 0.25)
```

**Gradients:**

```
--gradient-gold:   linear-gradient(135deg, #d4a254, #e8b86d)
--gradient-dark:   linear-gradient(180deg, #0c1220, #060a13)
--gradient-ocean:  linear-gradient(135deg, #1d4ed8, #3b82f6)
--gradient-card:   linear-gradient(145deg, #1a2332, #111827)
--gradient-hero:   linear-gradient(160deg, rgba(6,10,19,0.7) 0%, rgba(12,18,32,0.4) 50%, rgba(6,10,19,0.85) 100%)
--gradient-section-alt: linear-gradient(180deg, #111827 0%, #0c1220 100%)
```

### 2. GLASSMORPHISM SYSTEM

**Glass card (use sparingly — featured/stats/overlays only):**

```
bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl
```

**Glass navbar (scrolled state):**

```
bg-bg-base/80 backdrop-blur-2xl border-b border-white/[0.06]
```

**Glass badge (tags, labels on images):**

```
bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-full px-4 py-1.5
```

**When to use glass:**

- Floating stats over hero images
- Navbar on scroll
- Featured/highlighted card overlays
- Badges on image cards

**When NOT to use glass:**

- Regular content cards (use solid surface)
- Form inputs (use solid)
- Body sections (use solid bg)
- Anywhere with lots of text to read

### 3. SHADOW SYSTEM

**Dark theme shadows (need to be visible against dark backgrounds):**

```
--shadow-card:      0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.25)
--shadow-card-hover: 0 12px 40px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.35)
--shadow-elevated:  0 20px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4)
--shadow-gold-sm:   0 4px 16px rgba(212,162,84,0.12)
--shadow-gold:      0 8px 32px rgba(212,162,84,0.18)
--shadow-gold-lg:   0 16px 48px rgba(212,162,84,0.22)
--shadow-inner:     inset 0 1px 0 rgba(255,255,255,0.05)
```

**Usage tiers:**
| Level | Shadow | Use case |
|-------|--------|----------|
| Rest | shadow-card | All cards at rest |
| Hover | shadow-card-hover | Card hover state |
| CTA | shadow-gold | Gold buttons, featured cards |
| CTA Hover | shadow-gold-lg | Gold button hover |
| Modal | shadow-elevated | Modals, drawers, dropdowns |

### 4. GLOW SYSTEM

**Ambient section glows (pseudo-elements behind sections):**

```
/* Gold glow — bottom corners of CTA sections */
bg-[radial-gradient(600px_circle_at_50%_80%,rgba(212,162,84,0.06),transparent_70%)]

/* Ocean glow — behind hero, top of page */
bg-[radial-gradient(800px_circle_at_30%_20%,rgba(59,130,246,0.05),transparent_70%)]

/* Combined mesh for premium sections */
bg-[radial-gradient(600px_at_10%_90%,rgba(212,162,84,0.05),transparent_60%),radial-gradient(500px_at_90%_20%,rgba(59,130,246,0.04),transparent_60%)]
```

**Hover glow on cards:**

```
after:absolute after:inset-0 after:rounded-2xl after:opacity-0 hover:after:opacity-100
after:bg-[radial-gradient(circle_at_50%_50%,rgba(212,162,84,0.06),transparent_70%)]
after:transition-opacity after:duration-500
```

**CTA glow ring:**

```
shadow-gold hover:shadow-gold-lg transition-shadow duration-300
```

### 5. UI STRUCTURE

**Section alternation:**

- Even sections: `bg-bg-base` (#0c1220)
- Odd sections: `bg-bg-elevated` (#111827)
- CTA/featured: Gold accent glow overlay

**Card anatomy (image card):**

```
Container:  bg-bg-surface rounded-2xl overflow-hidden shadow-card border border-white/[0.06]
  Image:    relative h-52 overflow-hidden → img object-cover group-hover:scale-105
  Overlay:  absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
  Content:  p-6 space-y-3
    Title:  text-text-primary font-display font-bold text-lg
    Desc:   text-text-secondary text-sm leading-relaxed line-clamp-2
    Badge:  bg-gold-400/10 text-gold-300 text-xs font-mono px-3 py-1 rounded-full
    CTA:    text-gold-400 text-sm font-semibold hover:text-gold-300
```

**Section structure:**

```
<section className="py-section-y relative">
  {/* Optional ambient glow */}
  <div className="absolute inset-0 [glow gradient] pointer-events-none" />
  <div className="relative z-10 max-w-7xl mx-auto px-section-x">
    <SectionHeader />
    <Content />
  </div>
</section>
```

**CTA block:**

```
rounded-3xl bg-gradient-to-br from-bg-surface to-bg-elevated
border border-gold-400/15 p-12 md:p-16
shadow-card relative overflow-hidden
  → gold glow pseudo-element behind
  → heading + subtitle + gold button
```

### 6. COMPONENT STYLES

**Button — Primary (gold):**

```
bg-gradient-to-r from-gold-400 to-gold-500
text-bg-base font-semibold
px-7 py-3.5 rounded-xl
shadow-gold-sm hover:shadow-gold
hover:from-gold-500 hover:to-gold-600
transition-all duration-300
active:scale-[0.97]
```

**Button — Secondary (outline):**

```
bg-transparent border border-white/[0.12]
text-text-primary
px-7 py-3.5 rounded-xl
hover:bg-white/[0.05] hover:border-white/[0.2]
transition-all duration-300
```

**Button — Ghost (text link):**

```
text-gold-400 font-semibold
hover:text-gold-300
inline-flex items-center gap-2
transition-colors duration-200
```

**Card — Solid surface:**

```
bg-bg-surface rounded-2xl
border border-white/[0.06]
shadow-card
hover:shadow-card-hover hover:border-white/[0.1]
hover:-translate-y-1
transition-all duration-300
```

**Card — Featured (with gold accent):**

```
bg-bg-surface rounded-2xl
border border-gold-400/15
shadow-card
hover:shadow-gold hover:border-gold-400/25
hover:-translate-y-1.5
transition-all duration-300
ring-1 ring-gold-400/5
```

**Badge:**

```
/* Gold badge */   bg-gold-400/10 text-gold-300 border border-gold-400/15
/* Ocean badge */  bg-ocean-500/10 text-ocean-300 border border-ocean-500/15
/* Neutral badge */ bg-white/[0.06] text-text-secondary border border-white/[0.08]
/* All: */         text-xs font-mono font-medium px-3 py-1 rounded-full
```

**Input:**

```
bg-white/[0.04] border border-white/[0.1] rounded-xl
px-4 py-3 text-text-primary placeholder:text-text-muted
focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10
focus:bg-white/[0.06]
transition-all duration-200 outline-none
```

### 7. SPACING & RADIUS

**Spacing scale:**

```
Section vertical (py):  py-20 md:py-28 lg:py-32   (80→112→128px)
Section horizontal (px): px-5 md:px-8 lg:px-16     (20→32→64px)
Container:              max-w-7xl mx-auto           (1280px)
Section header margin:  mb-14                        (56px)
Card grid gap:          gap-6 lg:gap-8              (24→32px)
Card internal padding:  p-6 lg:p-8                  (24→32px)
Component gap (tight):  gap-3 (12px)
Component gap (normal): gap-4 (16px)
Component gap (loose):  gap-6 (24px)
```

**Border radius:**

```
Buttons:     rounded-xl    (12px)
Cards:       rounded-2xl   (16px)
Modals/CTA:  rounded-3xl   (24px)
Badges/pills: rounded-full (9999px)
Inputs:      rounded-xl    (12px)
Images:      rounded-xl    (12px)
```

### 8. MICRO-INTERACTIONS

**Card hover lift:**

```
hover:-translate-y-1 transition-transform duration-300 ease-out
/* Featured: */ hover:-translate-y-1.5
```

**Image zoom on card hover:**

```
group → img: transition-transform duration-700 ease-out group-hover:scale-105
```

**Button press:**

```
active:scale-[0.97] transition-transform duration-150
```

**Fade-up (Framer Motion — keep existing):**

```tsx
variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
transition={{ type: "spring", stiffness: 90, damping: 20 }}
```

**Smooth transitions (universal):**

```
transition-all duration-300 ease-out     (default)
transition-colors duration-200           (text/links)
transition-transform duration-700        (image zoom)
transition-opacity duration-500          (glows)
```

### 9. USAGE GUIDELINES

**Glass vs Solid:**

- Default: always solid `bg-bg-surface` cards
- Glass only: navbar, floating stats on images, featured overlays, badges on hero

**Glow + Shadow combo:**

- Regular cards: shadow only (shadow-card)
- Featured/gold cards: shadow-gold + gold border
- CTA sections: ambient glow pseudo + shadow-card on container
- Never: glow + glass + shadow all at once (pick 2 max)

**Consistency rules:**

- All sections: same py + container + header pattern
- All cards in a grid: same variant (don't mix solid + glass in one grid)
- Gold accent: only for CTAs, featured badges, active states, prices
- Ocean blue: links, secondary badges, info states
- Max 1 ambient glow per viewport height

**Avoiding clutter:**

- Limit to 2 visual effects per component (shadow + hover OR glow + border)
- White space is a feature — don't fill every gap
- Consistent 56px between header and content
- No more than 4 cards per row on any screen

---

## Phase 1: Tailwind Setup + Premium Theme

**Files:** package.json, postcss.config.mjs, globals.css, next.config.mjs

1. Install `tailwindcss` v4 + `@tailwindcss/postcss`
2. Create `postcss.config.mjs` with @tailwindcss/postcss plugin
3. Overhaul `globals.css`:
   - Add `@import "tailwindcss"`
   - Replace existing color tokens with new dark ocean + gold palette in `@theme` block
   - Map all design tokens (bg layers, gold scale, ocean scale, text colors, borders, shadows, glows, spacing, radii, fonts)
   - Keep base reset styles, update body bg to `--color-bg-deepest`
4. Verify build works with Tailwind active alongside existing SCSS (coexistence)

## Phase 2: Shared Layout Components

**Goal:** Create a consistent page wrapper and section component so all routes share identical spacing.

5. Create `src/components/ui/Section.tsx` — reusable section wrapper with standardized `py` (section-py) and container (max-w-7xl mx-auto px-section-x)
6. Create `src/components/ui/PageWrapper.tsx` — wraps all page content below navbar with consistent background, padding-top for fixed navbar offset
7. Create `src/components/ui/SectionHeader.tsx` — standardized overline + title + subtitle pattern (extract from repeated SCSS)
8. Create `src/components/ui/Container.tsx` — simple max-width + horizontal padding wrapper

## Phase 3: Migrate Components (Bottom-up, parallel-safe)

Migrate each component from SCSS module to Tailwind classes. Delete SCSS file after each migration. Group by independence:

**Batch A — Standalone components (parallel):** 9. trust-bar (trustBar.module.scss → Tailwind) — ~70 lines, simple marquee 10. whatsapp (whatsApp.module.scss → Tailwind) — ~20 lines, fixed button 11. call-button (callbutton.module.scss → Tailwind) — ~20 lines, fixed button 12. contact-details (contact-details.module.scss → Tailwind) — ~70 lines 13. heading (no SCSS, check if needs Tailwind classes)

**Batch B — Section components (parallel):** 14. faq (faq.module.scss → Tailwind) — accordion + items 15. get-in-touch (getInTouch.module.scss → Tailwind) — two-panel form 16. ratings (ratings.module.scss → Tailwind) — bento grid + cards 17. rfq-card (rfqCard.module.scss → Tailwind) — banner + stats card 18. why-choose (whyChoose.module.scss → Tailwind) — stats + features grid 19. our-services (ourServices.module.scss → Tailwind) — 3D hover cards 20. our-packages (ourPackages.module.scss → Tailwind) — carousel cards 21. signature-experiences (signatureExperiences.module.scss → Tailwind) — asymmetric grid 22. search-bar (searchBar.module.scss → Tailwind) — dark gradient section

**Batch C — Structural components (sequential, depends on Phase 2):** 23. navbar (navbar.module.scss → Tailwind) — fixed nav + drawer 24. footer (footer.module.scss → Tailwind) — dark footer grid 25. hero (hero.module.scss → Tailwind) — homepage hero only

**Batch D — Page-level styling (depends on Batches B+C):** 26. Home page (page.module.css → Tailwind, use PageWrapper) 27. About page (about.module.scss → Tailwind, use Section/SectionHeader) 28. Blog page (blog.module.scss → Tailwind) 29. Blog post page (blogPost.module.scss → Tailwind) 30. Car booking page (car-booking.module.scss → Tailwind) 31. Contact page (contact.module.scss → Tailwind) 32. Destinations page (destinations.module.scss → Tailwind) 33. Destination detail page (destinationDetails.module.scss → Tailwind) 34. Packages page (packages.module.scss → Tailwind) 35. Package detail page (packageDetails.module.scss → Tailwind) 36. Service detail page (style.module.scss → Tailwind)

## Phase 4: Cleanup

37. Remove sass dependency from package.json
38. Delete src/styles/\_mixins.scss
39. Remove any remaining .module.scss/.module.css files
40. Remove styled-components if unused elsewhere
41. Verify full build passes with `next build`

## Phase 5: Verification

42. Run `next build` — verify zero errors
43. Visual regression check on every route (manual):
    - / (home), /about, /blog, /blog/[slug], /car-booking, /contact
    - /destinations, /destinations/[city], /packages, /packages/[id]
    - /our-services/[id], /privacy, /terms
44. Test responsive at 480px, 768px, 1024px, 1440px
45. Verify navbar scroll state, drawer, animations all work
46. Check Framer Motion animations are preserved

---

## Consistent Spacing Rules (New Standard)

- **Page wrapper**: `pt-16` (navbar offset ~64px), `bg-bg-deepest`
- **Sections**: alternate `bg-bg-base` / `bg-bg-elevated`, `py-20 md:py-28 lg:py-32`
- **Containers**: `max-w-7xl mx-auto px-5 md:px-8 lg:px-16`
- **Section header bottom margin**: `mb-14` (56px)
- **Card gaps**: `gap-6 lg:gap-8` (24→32px)
- **Breakpoints**: sm:640, md:768, lg:1024, xl:1280 (Tailwind defaults)
- **Hero sections**: Remain unique per page, dark overlay gradients, full-viewport

## Tailwind Theme Mapping (globals.css @theme)

Map these tokens via @theme:

- Background: bg-deepest, bg-base, bg-elevated, bg-surface, bg-surface-hover
- Gold: 50–900 scale
- Ocean: 300–900 scale
- Text: primary, secondary, muted, on-gold
- Borders: subtle, default, strong, gold
- Shadows: card, card-hover, elevated, gold-sm, gold, gold-lg
- Radii: sm(8), md(12), lg(16), xl(20), 2xl(24), pill
- Fonts: display (Inter), main (Outfit), mono (JetBrains)
- Spacing: section-x, section-y scale

## Decisions

- Tailwind v4 (CSS-first config) over v3 — better fit for CSS custom props
- **Dark ocean theme replaces light SaaS** — better for luxury travel brand
- **Gold replaces amber as primary accent** — more premium than amber-500
- **Ocean blue demoted to secondary** — was primary, now supporting role
- Framer Motion stays — className Tailwind works with motion components
- Hero sections remain unique — only body sections get standardized spacing
- Glass used sparingly: navbar, hero stats, feature overlays only
- Complex CSS (backdrop gradients, pseudo-elements) uses Tailwind arbitrary values
- styled-components removed (only Sanity — Sanity has own styling)
- Privacy/Terms pages migrate to Tailwind too
