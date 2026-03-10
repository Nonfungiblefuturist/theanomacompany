

# Navbar Redesign + Routing Cleanup

## What Changes

The prompt refines the navbar to match a secretlevel.co-inspired design and clarifies that the homepage should live at `/`. Most pages are already built — this is primarily a **navbar upgrade** and **routing adjustment**.

### 1. Navbar Redesign (`src/components/site/Navbar.tsx`)

Current navbar is functional but basic. The new spec adds:

- **Logo**: Switch from Playfair to Inter 600 weight; gradient bar fixed at 60px width, 2px height
- **Desktop links**: Uppercase, `letter-spacing: 0.15em`, `font-size: 0.7rem`, Inter 500, `rgba(255,255,255,0.7)` color with hover underline that animates in from left (gradient-colored, `width: 0→100%`)
- **"Get in Touch" CTA**: Pill-shaped button after nav links — gradient border, transparent fill, white text; hover fills with gradient
- **Dropdowns**: Dark bg `rgba(12,12,12,0.95)`, no visible border, subtle shadow, fade + `translateY(-4px→0)` animation over 0.2s, same uppercase link style
- **Scroll behavior**: Threshold 50px (currently 40px), `rgba(8,8,8,0.85)` bg, `backdrop-filter: blur(12px)`, bottom border `rgba(255,255,255,0.06)`
- **Z-index**: nav=1000, mobile overlay=1001 (currently z-50 and z-100)
- **Mobile**: "Menu" text label + hamburger icon instead of just icon; full-screen overlay with Playfair 2.5rem links with **staggered fade-in** (50ms delay per link); category labels above grouped links; "Get in Touch" button at bottom

### 2. Routing Change

- Move `Home` component from `/home` to `/` — the homepage IS the root
- Keep existing `Index.tsx` accessible at `/legacy` or remove it (it's the old single-page site)
- Update logo link from `/home` to `/`

### 3. CSS Additions (`src/index.css`)

- Navbar underline animation keyframes (width 0→100%)
- Mobile overlay staggered fade-in animation
- Dropdown fade+slide animation

### Files Modified

| File | Change |
|------|--------|
| `src/components/site/Navbar.tsx` | Full rewrite with secretlevel.co-inspired design |
| `src/App.tsx` | Swap `/` and `/home` routes — Home becomes root |
| `src/index.css` | Add navbar animation CSS |

### No Changes To

All other pages (Solutions, Branding, Video, About, Contact, NotFound) and components (SiteLayout, Footer, FilmGrain, ScrollReveal, PillarCard, SolutionCard, etc.) remain unchanged.

