

## Plan: Footer Brand Text Scroll Effect + Match About/Contact Inner Cards

### Problem 1: Footer "THE ANOMA COMPANY" overlapping
The giant brand text at the bottom of the footer is too prominent and can overlap with content above during scroll. We'll add a scroll-driven effect that scales and fades the text as the user scrolls toward it, making it feel like it recedes.

### Problem 2: About Us and Contact Us inner card mismatch
The inner card containers differ in styling:
- **About Us**: `rounded-[20px]`, `bg-card`, `p-4 md:p-6`, no border
- **Contact Us (CTA)**: `rounded-2xl` (16px), `bg-card`, cosmic purple border, no explicit padding

We'll unify them so both use the same border-radius, padding, and optional cosmic border treatment.

### Changes

**`src/components/layout/Footer.tsx`**
- Convert the giant "THE ANOMA COMPANY" heading into a scroll-reactive element using `useEffect` + `useRef` with IntersectionObserver or scroll listener
- As the element scrolls into view, it starts large and scales down (e.g. scale 1 → 0.7) with reducing opacity (1 → 0.3), creating a subtle "receding" effect
- Uses `transform: scale()` and `opacity` for GPU-accelerated animation

**`src/components/home/AboutPreview.tsx`**
- Change inner card from `rounded-[20px]` to `rounded-2xl` to match CTABand
- Add the same cosmic border: `border: 2px solid hsl(var(--cosmic) / 0.4)`
- Align padding to match CTABand's visual weight

