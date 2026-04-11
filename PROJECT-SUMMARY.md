# Holiday Planner — Project Summary

## What It Is

A full-featured travel agency website for **Holiday Planner**, a Bhubaneswar-based tour operator specializing in Odisha tourism. It serves as a marketing site, booking inquiry platform, and content hub for curated travel packages, car rentals, and destination guides across Odisha.

---

## Tech Stack

| Layer     | Technology                                         |
| --------- | -------------------------------------------------- |
| Framework | Next.js 16.1.6 (App Router)                        |
| Language  | TypeScript + React 19                              |
| Styling   | SCSS Modules + CSS Custom Properties (no Tailwind) |
| Animation | Framer Motion v12                                  |
| CMS       | Sanity v5 (headless)                               |
| Fonts     | Inter, Outfit, JetBrains Mono (Google Fonts)       |
| Images    | Cloudinary CDN                                     |
| Toast     | react-hot-toast                                    |
| Icons     | react-icons                                        |

---

## Route Structure

```
/                          → Homepage (Hero + all homepage sections) q
/packages                  → Package listing page (CMS-driven)
/packages/[id]             → Individual package detail (SSG, slug-based)
/destinations              → Destinations overview grid
/destinations/[city]       → City travel guide (SSG, slug-based)
/car-booking               → Car rental landing page
/our-services/[id]         → Service detail pages (3 static slugs):
  └── car-rental-and-booking
  └── luxury-car-wedding-car
  └── tempo-traveler-booking
/about                     → About the company
/contact                   → Contact form + details
/studio/[[...tool]]        → Embedded Sanity Studio (CMS admin)

API Routes:
/api/leads      POST  → Captures callback requests → writes to Sanity
/api/revalidate POST  → Sanity webhook → triggers ISR cache flush
```

---

## Homepage Section Flow

```
Navbar
  └── Hero (full-bleed background, search CTA)
  └── SearchBar
  └── OurServices       (6 service cards)
  └── OurPackages       (CMS-driven, fetched from Sanity)
  └── RFQCard           (Request a callback form)
  └── WhyChooseUs       (8 trust pillars)
  └── Ratings           (Google review cards)
  └── FAQ               (7 hardcoded Q&As)
  └── GetInTouch        (WhatsApp / phone CTA)
Footer
```

> Below-fold sections are **lazy-loaded** via `BelowFoldSections.tsx` with SSR disabled (performance optimization).

---

## Component Architecture Pattern

Every section follows a **Server → Client split**:

- `components/hero/index.tsx` — Server component (data fetching, metadata)
- `components/hero/HeroClient.tsx` — Client component (Framer Motion, interactivity)

This ensures SSR/SEO on the server while preserving client-side animations.

---

## CMS & Data Flow

**Sanity** is the content backend with two document types:

### `package`

Tour packages with:

- `title`, `slug`, `image`, `location`, `duration`
- Pricing: `originalPrice`, `discountedPrice`, `isOnSale`
- `category`, `highlights`, `overview`
- `included` / `excluded` lists
- `itinerary[]` — day-by-day breakdown (`day`, `title`, `description`)
- `order` — for manual sorting

### `lead`

Callback requests with:

- `name`, `number`, `message`
- `submittedAt`, `status` (default: `"new"`)
- All fields are read-only in Studio

### Data Flow for Packages

```
Sanity Studio
  → GROQ query (getAllPackages / getPackageBySlug)
  → Server Component (fetch + pass as props)
  → Client Component (render)
  → User
```

### Real-time ISR Updates

```
Content edited in Sanity Studio
  → Sanity webhook fires
  → POST /api/revalidate (validates x-sanity-webhook-secret header)
  → revalidateTag("sanity")
  → Next.js marks stale pages for rebuild
  → Next visitor gets fresh content (no redeploy needed)
```

---

## SEO Architecture

Every route has individually crafted metadata:

| Feature          | Implementation                                                                    |
| ---------------- | --------------------------------------------------------------------------------- |
| Title template   | `"%s \| Holiday Planner"` defined in `layout.tsx`                                 |
| Canonical URLs   | `alternates.canonical` on every page                                              |
| OpenGraph        | Title, description, image, URL, locale (`en_IN`)                                  |
| Twitter Cards    | `summary_large_image` on all pages                                                |
| Dynamic metadata | `generateMetadata()` on `[id]` and `[city]` dynamic routes                        |
| JSON-LD          | `FAQPage` schema injected on homepage via `<script type="application/ld+json">`   |
| Sitemap          | `sitemap.ts` — auto-generated XML with dynamic package + destination routes       |
| Robots           | `robots.ts` — allows all crawlers; blocks `/api/`, `/admin/`, `/leads-dashboard/` |
| Keywords         | Geo-targeted: "Odisha tours", "car rental Bhubaneswar", "Puri tour package", etc. |

### Sitemap Priority Tiers

| Route                                        | Priority | Change Freq |
| -------------------------------------------- | -------- | ----------- |
| `/`                                          | 1.0      | daily       |
| `/packages`, `/destinations`, `/car-booking` | 0.9      | weekly      |
| `/packages/[slug]`                           | 0.85     | weekly      |
| `/our-services/[id]`, `/destinations/[city]` | 0.8      | monthly     |
| `/about`, `/contact`                         | 0.7      | monthly     |

---

## Lead Capture Flow

```
User fills RFQ / Contact form
  → POST /api/leads { name, number, message }
  → Server validates:
      name  → /^[a-zA-Z\s]{3,60}$/
      phone → /^[6-9]\d{9}$/   (Indian mobile numbers only)
  → sanityWriteClient.create({ _type: "lead", status: "new", ... })
  → Lead appears in Sanity Studio under "Callback Requests"
```

---

## Services Offered

| #   | Service                 | CTA                                                  |
| --- | ----------------------- | ---------------------------------------------------- |
| 1   | Car Rental & Booking    | Detail page (`/our-services/car-rental-and-booking`) |
| 2   | Luxury / Wedding Car    | Detail page (`/our-services/luxury-car-wedding-car`) |
| 3   | Tempo Traveller Booking | Detail page (`/our-services/tempo-traveler-booking`) |
| 4   | Bus Travel Rental       | WhatsApp inquiry                                     |
| 5   | Package Service / Duty  | WhatsApp inquiry                                     |
| 6   | Resort Booking          | WhatsApp inquiry                                     |

---

## Business Identity

| Field            | Value                          |
| ---------------- | ------------------------------ |
| Name             | Holiday Planner                |
| Location         | Bhubaneswar, Odisha, India     |
| Phone / WhatsApp | +91 79780 65576                |
| Email            | holidayplannertravel@gmail.com |
| Website          | https://www.holidayplanner.in  |
| Established      | 2016                           |
| Rating           | 4.8★ Google (500+ travelers)   |
