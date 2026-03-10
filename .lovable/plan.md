

# Billy Boman-Style Studio Page — New Route `/studio`

## Key Decision
This will be a **new page at `/studio`**, keeping your existing Anoma homepage completely intact.

## Addressing Your Feedback

### 1. No destructive overwrite
The current `Index.tsx` remains untouched. A new `Studio.tsx` page is created and added to the router.

### 2. caseStudies field mapping
Your existing data uses `title`, `description`, `type`, `link`, `image`, `youtubeId`. The new design needs `title`, `category`, `thumbnailUrl`, `videoUrl`. An adapter will map:
- `type` → `category`
- `image` → `thumbnailUrl`
- `youtubeId` → converted to YouTube embed URL for hover video
- Items without `image` will use a dark placeholder

### 3. Email confirmed
`surzayon@theanoma.company` with `mailto:` link, matching your current setup.

### 4. Pure CSS instead of Framer Motion
Agreed — the entrance animations are simple staggered fades/scales. Using CSS `@keyframes` + `animation-delay` instead of Framer Motion. No extra bundle weight.

### 5. Nav pill styling (was missing)
Explicitly specced:
- `background: rgba(255,255,255,0.08)`
- `backdrop-filter: blur(12px)`
- `border-radius: 50px`
- `padding: 8px 20px`
- `font-size: 13px`, uppercase, letter-spacing 1.5px
- Hover: `background: rgba(255,255,255,0.18)`
- 8px gap between pills
- Absolutely positioned top-right of the grid

### 6. Scroll progress bar (was underspecified)
Functional scroll tracker:
```
fillWidth = (scrollY / (documentHeight - viewportHeight)) * 100%
```
Updates on scroll event. 180px wide, 3px tall, white fill, `transition: width 0.3s linear`.

---

## Files to Create

### `src/pages/Studio.tsx`
The full Billy Boman-style single-page layout:
- Page loader overlay (progress bar, fades out after 0.9s)
- Unified hero grid: 3 columns x 2 rows, 100vh
  - Column 1 (spans both rows): Logo ("THE ANOMA COMPANY" in Oswald), scroll progress bar, headline ("AI powered Content Studio" in Instrument Serif italic), description, LET'S TALK + mailto link
  - Columns 2-3: 4 project cards from your caseStudies data
- Frosted nav pills (Home, Work, About, Contact) floating top-right
- Below-fold project grid: 3 columns, first card spans 2 cols, same 6px gap
- Footer: centered nav links, top border `rgba(255,255,255,0.05)`

### `src/components/studio/ProjectCard.tsx`
Reusable card component:
- Full-bleed thumbnail (`object-fit: cover`, `brightness(0.88)`)
- On hover: image `scale(1.04) + brightness(0.72)`, 0.7s ease
- Video lazy-load on first hover (set src from data attribute, play, fade to opacity 1)
- Gradient overlay (always visible, pointer-events none)
- Info chip: frosted glass (`rgba(60,60,55,0.65)`, `backdrop-filter: blur(16px)`, `border-radius: 8px`), slides up from `translateY(10px)` on hover
- Mobile: info chip always visible, no video

### `src/components/studio/CustomCursor.tsx`
Desktop only (hidden on touch):
- Dot: 6px white circle, `mix-blend-mode: difference`, instant mouse follow
- Ring: 32px, 1px border `rgba(240,239,232,0.35)`, LERP follow (`rx += (mouseX - rx) * 0.12` per rAF frame)
- Hover states: nav/links = 50px ring, project cards = 70px ring with brighter border

### `src/components/studio/PageLoader.tsx`
- Full-screen `#0a0a0a` overlay, z-50
- 120px progress bar fills 0-100% over 0.8s
- Fades out after 0.9s
- Triggers staggered entrance of hero elements via CSS animation-delay

## Files to Modify

### `src/App.tsx`
- Add route: `<Route path="/studio" element={<Studio />} />`

### `index.html`
- Add Google Fonts: Instrument Serif, DM Sans, Oswald

### `src/index.css`
- Add studio-specific CSS variables scoped under a `.studio-page` class (does NOT touch existing variables)
- Add card hover keyframes, entrance animations, cursor styles

### `tailwind.config.ts`
- Add font families: `instrument-serif`, `dm-sans`, `oswald`

---

## Entrance Animation Sequence (Pure CSS)

All using `@keyframes` + `animation-delay`, no Framer Motion:

1. Loader progress bar fills (0-0.8s), loader fades out (0.9s)
2. Hero cards stagger in: 0.3s, 0.45s, 0.55s, 0.65s delay — `opacity 0 + scale(0.97)` to visible
3. Hero text staggers: logo 0.6s, progress bar 0.7s, headline 0.85s, CTA 1.0s — `opacity 0 + translateY(20px)` to visible
4. Nav pills slide down from `translateY(-10px)` at 0.8s
5. Below-fold: IntersectionObserver, threshold 0.08, +80ms stagger per card

## Responsive

- **Desktop (1024px+)**: Full 3-column hero grid
- **Tablet (640-1024px)**: Hero text full-width top, 2x2 cards below, below-fold 2 columns
- **Mobile (< 640px)**: Single column, 280px cards, info chips always visible, no cursor, no video autoplay
