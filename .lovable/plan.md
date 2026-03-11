

# Accessibility & Legibility Audit — Implementation Plan

## Summary

Apply a focused set of accessibility, legibility, and design-agnostic improvements across the codebase. The site already uses CSS variables and has `focus-visible` on UI primitives, but lacks global focus styles, reduced-motion support, semantic landmarks, and proper touch targets.

## Changes

### 1. Global CSS additions (`src/index.css`)
- Add global `:focus-visible` outline (`2px solid hsl(var(--ring))`) as a catch-all for any interactive element not covered by Radix primitives.
- Add `@media (prefers-reduced-motion: reduce)` to disable all CSS animations and transitions site-wide.
- Set base font size to `16px` on `html`, ensure `line-height: 1.5` on `body`.
- Add minimum touch-target rule: all `button`, `a`, `input`, `select`, `textarea` get `min-height: 44px; min-width: 44px` (via a utility class or base layer).
- Ensure `font-display: swap` is already handled (it is, via Google Fonts URL — confirmed).

### 2. Semantic HTML landmarks
- **`src/components/layout/Navbar.tsx`**: The `<nav>` is correct. Add `aria-label="Main navigation"`.
- **`src/components/layout/Footer.tsx`**: Already uses `<footer>`. Add `aria-label="Site footer"`.
- **`src/pages/Home.tsx`** (and other page components): Wrap main page content in `<main>` if not already present. Add `role` attributes only where HTML5 semantics are insufficient.

### 3. Reduced-motion support in JS animations
- **`src/components/home/Hero.tsx`**: Wrap the parallax scroll listener in a `prefers-reduced-motion` check — skip `setScrollY` if user prefers reduced motion.
- **Framer Motion components** (MobileMenu, ScrollReveal, etc.): Add a global `MotionConfig` wrapper with `reducedMotion="user"` in `App.tsx` so Framer Motion respects the OS setting automatically.

### 4. Contrast & muted-foreground check
- `--muted-foreground: 0 0% 75%` on black background = `#BFBFBF` on `#000` = contrast ratio ~13:1 (passes AAA). No change needed.
- Footer inline `rgba(255,255,255,0.4)` = ~2.5:1 ratio — **fails AA**. Bump to `rgba(255,255,255,0.6)` (~4.8:1, passes AA).

### 5. Delete unused `App.css`
- `src/App.css` contains leftover Vite boilerplate (logo spin, card padding). Remove it and any import reference.

### 6. `index.html` cleanup
- Remove invalid `<link rel="preload" ... as="video" type="video/mp4">` for `.mov` file (browsers don't preload video this way effectively; it may cause a warning). Replace with a simple `<link rel="prefetch">` or remove entirely.

## Files to modify
- `src/index.css` — global focus, reduced-motion, touch targets, line-height
- `src/App.tsx` — wrap with `MotionConfig reducedMotion="user"`, remove App.css import, ensure `<main>` wrapping
- `src/components/layout/Navbar.tsx` — add `aria-label`
- `src/components/layout/Footer.tsx` — add `aria-label`, fix low-contrast text
- `src/components/home/Hero.tsx` — reduced-motion guard on scroll
- `index.html` — remove broken video preload
- `src/App.css` — delete file

