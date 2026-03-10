

# Updated Plan: Foundation + Home Page (15 Sections)

Good catch. The homepage section order is updated to include **SelectedWork** and **ServicesTabbed**, making 15 sections total.

## Corrected Home Page Section Order

1. **Hero** — "Everything is noise." + video bg
2. **Three Pillars** — Solutions / Branding / Video Production cards
3. **Solutions Grid** — 6 solution project cards
4. **Branding Showcase** — 5 branding project cards (masonry)
5. **Video Production Grid** — 4 video production cards
6. **Selected Work** — 6 featured project cards (2-col grid) + "View all →"
7. **About Preview** — Stats + image
8. **Services Tabbed** — 3 numbered items with cross-fade image swap
9. **Image Mosaic** — 3 images with text overlays
10. **Process Steps** — 4 steps
11. **Benefits Bento Grid** — 6 cards + logo marquee
12. **Testimonials** — Carousel
13. **FAQ Accordion** — 7 items
14. **Blog Preview** — 3 cards
15. **CTA Band + Footer**

## Execution Summary

Everything else from the approved plan remains unchanged — same file structure, same components, same animation system, same data files. The only change is the section render order in `Home.tsx` now includes all 15 sections with SelectedWork at position 6 and ServicesTabbed at position 8.

### Files to create (same as before)
- `src/data/` — siteConfig, projects, team, testimonials, faqs, blogPosts, stats
- `src/components/shared/` — ScrollReveal, SectionHeader, StatsCounter, LogoMarquee, FAQAccordion, VideoEmbed, NebulaEffects
- `src/components/layout/` — Navbar, MobileMenu, Footer, CTABand, PageTransition
- `src/components/home/` — Hero, ThreePillars, SolutionsGrid, BrandingShowcase, VideoProductionGrid, **SelectedWork**, AboutPreview, **ServicesTabbed**, ImageMosaic, ProcessSteps, BentoGrid, Testimonials, HomeFAQ, BlogPreview
- `src/pages/` — Home (15 sections), Work, ProjectDetail, Studio, Blog, BlogArticle, Contact, PrivacyPolicy, Terms, NotFound (updated)

### Files to modify
- `src/App.tsx` — New routing, Lenis, AnimatePresence
- `src/index.css` — Add Lenis, remove studio-page styles
- `index.html` — Remove Billy Boman fonts
- `tailwind.config.ts` — Remove unused font families

### Files to remove/replace
- `src/components/studio/CustomCursor.tsx`, `PageLoader.tsx`, `ProjectCard.tsx` — Billy Boman components replaced
- `src/pages/Studio.tsx` — Replaced with new shell
- `src/pages/Index.tsx` — Replaced by Home.tsx (Index re-exports Home)

