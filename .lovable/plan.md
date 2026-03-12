

## Plan: Fix Navbar Logo Overlap + Match Pill Heights

### Problem
1. **Logo overflow**: Logo height `clamp(11rem, 20vw, 18rem)` (min 176px) exceeds nav container height `clamp(90px, 16vw, 140px)` (max 140px), causing overlap with hero content below
2. **No scroll-shrink on logo**: Only `top` changes on scroll, logo stays massive
3. **Pill height mismatch**: Glass nav pill uses `py-3`, Contact button uses `py-3.5`

### Changes — `src/components/layout/Navbar.tsx`

1. **Logo**: Add scroll-driven shrink + fade
   - Default: `clamp(7rem, 12vw, 10rem)` (smaller than current, fits nav)
   - Scrolled: `clamp(4rem, 6vw, 5.5rem)` with reduced opacity
   - Smooth transition via `transition: height 0.4s ease`

2. **Nav container height**: Make responsive to scroll
   - Default: `clamp(120px, 18vw, 160px)`
   - Scrolled: `clamp(70px, 10vw, 90px)`

3. **Contact button padding**: Change `py-3.5` → `py-3` to match nav pill

