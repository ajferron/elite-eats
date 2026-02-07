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

- **Color palette:** Muted, desaturated tones—greens, creams, blacks, sage. Avoid bold or saturated colors.
- **Typography:** Geometric sans-serif. Confident but not cold.
- **Whitespace:** Generous. Let elements breathe.
- **Photography style:** Crisp, almost documentary-feeling. Not glossy or aspirational in the old fitness-magazine way.

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

- Avoid old-school fitness aesthetics (bold colors, aggressive type, transformation messaging)
- Components should feel premium and restrained
- UI should convey trust, expertise, and quiet confidence

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
