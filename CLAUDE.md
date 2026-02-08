# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a **prototype/demo site** for client presentation purposes. The goal is to showcase potential designs that align with Elite Eats Inc.'s new brand direction.

### About Elite Eats Inc

Elite Eats is a **sports nutrition catering marketplace** connecting professional sports teams with vetted food vendors ("fueling partners").

**What they do:**

- Marketplace for athlete catering—helping team dietitians and staff find trusted vendors who understand professional athletes' nutritional needs
- Streamlines ordering, expense tracking, and communication between teams and vendors

**Scale:**

- 150 professional teams across 8 leagues: MLB, NHL, NFL, MLS, NBA, WNBA, NWSL, MLR
- 65 cities
- 760 fueling partners

**Founder:** Jennifer Gibson, MS, RD, CSSD—performance dietitian with 18 years of experience

### Key Domain Terms

- **Fueling partners** - Vetted food vendors on the platform
- **Team dietitians/staff** - Primary users who order catering for athletes
- **Athlete catering** - Food service tailored to professional athletes' nutritional requirements

## Design Direction

Target aesthetic: **"Clean Wellness" / "Premium Minimalism" / "Performance Minimalism"**

Reference brands: sweetgreen, AG1, Alphalete

### Visual Language

- **Typography:** Geometric sans-serif. Confident but not cold.
- **Whitespace:** Generous. Let elements breathe.
- **Photography style:** Crisp, almost documentary-feeling. Not glossy or aspirational in the old fitness-magazine way.

### Color Strategy

**Principle: Restrained base + strategic pops**

The previous approach of "all muted, all the time" resulted in a bland, lifeless palette. Taking cues from sweetgreen's rebrand (by Collins), we now embrace **contrast through restraint + punctuation**:

1. **Deep anchor color** — A rich, saturated dark tone (forest green, deep teal) that grounds the brand and conveys premium quality
2. **Warm neutral foundation** — Cream/off-white backgrounds (not stark white) that feel organic and inviting
3. **Electric accent** — One vibrant, unapologetic pop color used sparingly for CTAs, highlights, and energy

**Sweetgreen reference palette:**
- `#00473C` Aqua Deep (dark forest green) — depth, premium
- `#F4F3E7` Spring Wood (warm cream) — welcoming, organic
- `#E6FF55` Canary (electric yellow-green) — energy, freshness, action

**Color usage principles:**
- **Backgrounds:** Warm neutrals dominate. Use deep colors for section contrast, not grey.
- **Text:** Near-black with warmth (not pure #000). Strong hierarchy through weight, not color variety.
- **Accents:** One vibrant color, used intentionally. Buttons, highlights, hover states. Less is more.
- **Avoid:** Multiple competing accent colors, grey-heavy sections, pure white backgrounds, pure black text.

**What makes this work:**
- The vibrant accent *earns* attention because everything else is restrained
- Deep forest tones feel premium and food-adjacent (natural, organic)
- Warm cream feels alive where stark white feels sterile

### Brand Message

We're selling **optimization and intentionality**, not transformation or escape.

- **Not this:** "Change your life" / before-after imagery / bold aggressive typography
- **This:** "Refine your system" / assumes the user already gets it and just needs the right inputs

### Cultural Positioning

The design borrows credibility signifiers from three places:

1. **Silicon Valley** — Data-driven, functional
2. **Scandinavia** — Understated quality, design-forward
3. **Medicine/Pharma** — Precision, efficacy (AG1's packaging feels almost pharmaceutical; sweetgreen's stores feel like a WeWork for salads)

### Implementation Notes

- Avoid old-school fitness aesthetics (aggressive type, transformation messaging, gratuitous color)
- Components should feel premium and restrained, but not lifeless
- UI should convey trust, expertise, and quiet confidence
- **Color rule of thumb:** If removing the accent color makes the page feel dead, you're using color correctly. If it barely changes anything, the accent isn't earning its place.

## Build & Development Commands

```bash
# Development server (with hot reload)
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Lint code
bun run lint
```

Note: This project uses Bun as the package manager (bun.lock present).

## Architecture

This is a **Next.js 16** application using the **App Router** pattern with **React 19**.

### Key Technologies

- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling (utility-first)
- **ESLint 9** with flat config format, extending Next.js Core Web Vitals rules

### Project Structure

- `src/app/` - App Router pages and layouts (Server Components by default)
- `public/` - Static assets
- Path alias: `@/*` maps to `./src/*`

### Styling Approach

- Tailwind CSS with CSS custom properties for theming
- Dark mode via `prefers-color-scheme` media query
- Geist font family via Next.js font optimization
