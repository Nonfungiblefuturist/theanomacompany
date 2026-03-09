

# Updated Branding Plan — External Links for Portfolio Projects

## Core Idea

Instead of building internal case study sub-pages for every branding project, some projects will link directly to your external portfolio sites (s.pictures, Readymag). The card on the Branding hub grid looks identical — but clicking it opens the external URL in a new tab instead of navigating to an internal route.

## How It Works

Each project in the data array gets a `linkType` field: either `"internal"` (renders `/branding/:slug` sub-page) or `"external"` (opens URL in new tab). The `ProjectCard` component checks this and renders either a `<Link>` or an `<a target="_blank">`.

## Updated Branding Projects (13 total)

| # | Title | Category | Link Type | URL |
|---|-------|----------|-----------|-----|
| 1 | Creator Con | Logo Design | internal | `/branding/logo` |
| 2 | Stand Store | Website Design | internal | `/branding/website` |
| 3 | Lincoln University | Website Design | internal | `/branding/lincoln-university` |
| 4 | Campus Admin | Website Design | internal | `/branding/campus-admin` |
| 5 | **Vaseline** | Creative Marketing | **external** | `https://readymag.website/surzayon/5140874/4/` |
| 6 | Duolingo | Creative Marketing | external | `https://www.s.pictures/design/duolingo` |
| 7 | Toronto Zoo | Creative Marketing | external | `https://www.s.pictures/design/toronto-zoo` |
| 8 | Patagonia Worn Wear | Creative Marketing | external | `https://www.s.pictures/design/patagonia` |
| 9 | Amnesty | Creative Marketing | external | `https://www.s.pictures/design/amnesty` |
| 10 | Vice | Creative Marketing | external | `https://www.s.pictures/design/vice` |
| 11 | Wine Label (CHCA) | Design | internal | `/branding/design` |
| 12 | U Music | Design | external | `https://www.s.pictures/design/u-music` |
| 13 | YouTube Pitch | Pitch Deck | internal | `/branding/pitch-deck` |

## What Changes vs. Previous Plan

- **Vaseline** now uses the Readymag link you provided instead of an internal page
- **6 s.pictures projects** (Duolingo, Toronto Zoo, Patagonia, Amnesty, Vice, U Music) link externally to your existing portfolio — no need to rebuild those case studies
- **6 projects remain internal** (Creator Con, Stand Store, Lincoln University, Campus Admin, Wine Label, YouTube Pitch) — these get the `CaseStudyLayout` sub-pages as originally planned
- The `ProjectCard` component gains a simple `external` prop: if true, renders `<a href={url} target="_blank" rel="noopener noreferrer">` instead of `<Link to={slug}>`
- External cards get a small external-link icon in the corner so users know they're leaving the site

## Everything Else

The full multi-page build (Homepage, Solutions, Video Production, About, Contact, shared layout, nav, footer, grain overlay, animations) proceeds exactly as previously approved. This change only affects the Branding hub data and the ProjectCard component.

