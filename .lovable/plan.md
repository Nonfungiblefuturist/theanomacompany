

# Complete Multi-Page Website Build

## Current State
- `/` — Existing Index page (long single-page site with services, testimonials, FAQ)
- `/studio` — Billy Boman-style grid page
- `/branding` + `/branding/:slug` — Branding hub with 13 projects (6 internal, 7 external)
- Fonts loaded: Anta, Instrument Serif, DM Sans, Oswald
- Brand colors already defined in CSS variables (primary cyan, accent magenta, cosmic violet)

## What Needs to Be Built

### New Shared Layout System
- `SiteLayout.tsx` — wraps all new pages with Navbar, Footer, film grain overlay, scroll-reveal observer
- `Navbar.tsx` — sticky nav with "the Anoma company" logo + gradient bar, dropdown menus for Solutions/Branding/Video Production, blur on scroll, mobile hamburger overlay with focus trap + Escape close
- `Footer.tsx` — single-line: "© 2026 The Anoma Company. Toronto." left, Instagram/YouTube/LinkedIn icons right
- `FilmGrain.tsx` — SVG feTurbulence filter at ~6% opacity, fixed overlay
- `ScrollReveal.tsx` — IntersectionObserver wrapper, fade up translateY(20px) over 0.6s

### New Pages (7 pages + 4 video sub-pages)

**Homepage `/home`** (new route, keeps existing `/` intact)
- Full-viewport hero with placeholder `<video>` + dark gradient overlay
- "Where AI Meets Cinema." in Playfair Display, subtitle in Inter, CTA button
- Three Pillars section: Solutions, Branding, Video Production cards with hover lift + gradient border
- Contact CTA: email link, "Get in Touch" mailto, "Book a Call" Calendly link

**Solutions `/solutions`**
- Hero banner, 3-column grid of 6 solution cards (AI Chatbot, Prompt Machine, Resume Match, Work Schedule, GPA Converter, AI Agents)
- Each card: icon area, title, description, external CTA link, hover gradient glow

**Video Production `/video`**
- Hero with placeholder showreel `<video>`
- 4 category sections: Storyboards, Showreel & Ads, Music Video, Animated 30-Seconder
- Each links to its sub-page

**Video Sub-Pages** `/video/storyboards`, `/video/showreel`, `/video/music-video`, `/video/animated`
- Portfolio layout: hero, description, media gallery (image grid or video embeds)
- "Back to Video Production" navigation

**About `/about`**
- Text-forward, 2-3 paragraphs about the studio
- Tech marquee strip (Runway, Midjourney, Kling AI, etc.)

**Contact `/contact`**
- Email with gradient underline, Calendly iframe embed
- Social links, contact form (Name, Email, Message, Submit)

**404 Update**
- Restyle to "Lost in the void." with link home, matching brand

### Fonts to Add
Playfair Display, Inter, JetBrains Mono (added to `index.html` Google Fonts link)

### Files to Create (~15)
- `src/components/site/SiteLayout.tsx`
- `src/components/site/Navbar.tsx`
- `src/components/site/Footer.tsx`
- `src/components/site/FilmGrain.tsx`
- `src/components/site/ScrollReveal.tsx`
- `src/components/site/HeroSection.tsx`
- `src/components/site/PillarCard.tsx`
- `src/components/site/SolutionCard.tsx`
- `src/components/site/VideoEmbed.tsx`
- `src/components/site/ContactForm.tsx`
- `src/components/site/CaseStudyLayout.tsx`
- `src/pages/Home.tsx`
- `src/pages/Solutions.tsx`
- `src/pages/Video.tsx`
- `src/pages/VideoProject.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`

### Files to Modify
- `src/App.tsx` — add all new routes with React.lazy + Suspense
- `index.html` — add Playfair Display, Inter, JetBrains Mono fonts
- `tailwind.config.ts` — add `playfair`, `inter`, `jetbrains` font families
- `src/index.css` — add site-page scoped styles, film grain, scroll-reveal animations
- `src/pages/NotFound.tsx` — restyle to brand

### Key Design Decisions
- All new pages wrapped in `SiteLayout` (Navbar + Footer + grain); existing `/`, `/studio`, `/branding` routes untouched
- Gradient `linear-gradient(135deg, #00B4D8, #E91E8C)` used sparingly: logo bar, CTA hover, section dividers, active nav
- Text colors: `#F5F5F5` headings, `#AAAAAA` body, `#666666` captions
- JetBrains Mono used only for section labels ("WHAT WE DO") and solution card tags
- 150ms route fade transitions via CSS
- Existing Branding pages keep their current studio-style design; the new Navbar will link to them

