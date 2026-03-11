export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string;
  filterTag: "Solutions" | "Branding" | "Video Production" | "AI Video Production";
  thumbnailType: "image" | "video";
  thumbnail: string;
  summary: string;
  intro: string;
  metadata: {
    year: number;
    duration: string;
    client: string;
    category: string;
  };
  challenges: {
    heading: string;
    body: string;
  };
  solutions: {
    heading: string;
    body: string;
  };
  gallery: string[];
  externalLink?: string;
  videoPreviewUrl?: string;
  videoFullUrl?: string;
  isVideoLightbox?: boolean;
  tripleVideoPreview?: string[];
}

export const projects: Project[] = [
  // ── SOLUTIONS (5) ──
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    client: "Internal / Multi-client",
    year: 2026,
    category: "AI Agent",
    filterTag: "Solutions",
    thumbnailType: "image",
    thumbnail: "/images/ai-chatbot.webp",
    summary: "Conversational AI agents for client engagement",
    intro: "Businesses needed always-on client communication without scaling headcount. We built a conversational AI system that handles intake, qualification, and routing.",
    metadata: { year: 2026, duration: "3 Weeks", client: "Multi-client", category: "AI Agent" },
    challenges: {
      heading: "Most chatbot solutions felt robotic and generic, failing to capture brand voice or handle nuanced queries.",
      body: "Off-the-shelf chatbots created frustrating user experiences. Clients needed something that understood context, maintained personality, and escalated intelligently.",
    },
    solutions: {
      heading: "We engineered a custom conversational agent with brand-specific training, context memory, and smart handoff to human operators.",
      body: "The system adapts tone to match each client's brand, remembers conversation history within sessions, and routes complex queries to the right team member. Deployment takes under a week.",
    },
    gallery: [
      "/images/ai-chatbot.webp",
    ],
    externalLink: "https://chat-sage-gamma.vercel.app/",
  },
  {
    slug: "director-gpt",
    title: "DirectorGPT",
    client: "Internal",
    year: 2026,
    category: "AI Tool",
    filterTag: "Solutions",
    thumbnailType: "image",
    thumbnail: "/images/directorgpt-thumb.jpg",
    summary: "AI-powered film direction and scene planning assistant",
    intro: "DirectorGPT helps filmmakers pre-visualize scenes, generate shot lists, and plan productions with AI assistance.",
    metadata: { year: 2026, duration: "4 Weeks", client: "Internal", category: "AI Tool" },
    challenges: {
      heading: "Pre-production planning is time-consuming and requires expensive pre-visualization tools.",
      body: "Independent filmmakers and small studios lack access to professional pre-viz software, making it hard to communicate creative vision.",
    },
    solutions: {
      heading: "We built an AI director assistant that generates shot lists, storyboards, and scene breakdowns from natural language descriptions.",
      body: "DirectorGPT understands film grammar, camera angles, and lighting setups — turning text descriptions into actionable production plans.",
    },
    gallery: [
      "/images/directorgpt-thumb.jpg",
    ],
    externalLink: "https://directorgpt-720109186790.us-west1.run.app/",
  },
  {
    slug: "resume-match",
    title: "ResuMatch AI",
    client: "Intl Campus Admit",
    year: 2026,
    category: "AI Tool",
    filterTag: "Solutions",
    thumbnailType: "image",
    thumbnail: "/images/resume-match.webp",
    summary: "AI-powered resume screening and candidate matching",
    intro: "Admissions and HR teams were drowning in applications with no efficient way to surface the best-fit candidates.",
    metadata: { year: 2026, duration: "5 Weeks", client: "Intl Campus Admit", category: "AI Tool" },
    challenges: {
      heading: "Manual resume review was slow, inconsistent, and unable to scale with application volume.",
      body: "Reviewers spent hours on each batch. Qualified candidates were missed. Bias crept in from fatigue.",
    },
    solutions: {
      heading: "We developed an AI matching engine that scores candidates against role requirements, surfacing top matches instantly.",
      body: "The system parses resumes, extracts structured data, and ranks candidates on configurable criteria. Review time dropped by over 80%.",
    },
    gallery: [
      "/images/resume-match.webp",
    ],
    externalLink: "https://resumatch-ai-720109186790.us-west1.run.app/",
  },
  {
    slug: "work-schedule",
    title: "WorkBack",
    client: "Internal",
    year: 2026,
    category: "Productivity Tool",
    filterTag: "Solutions",
    thumbnailType: "image",
    thumbnail: "/images/work-schedule.webp",
    summary: "Intelligent scheduling and workflow optimization",
    intro: "Managing overlapping productions, contractor availability, and delivery deadlines across time zones needed a smarter system.",
    metadata: { year: 2026, duration: "4 Weeks", client: "Internal", category: "Productivity Tool" },
    challenges: {
      heading: "Spreadsheet-based scheduling created conflicts, missed deadlines, and zero visibility into team capacity.",
      body: "With contractors across multiple time zones and overlapping project timelines, manual coordination was breaking down.",
    },
    solutions: {
      heading: "We built an automated scheduler that factors in availability, dependencies, and deadlines — with real-time conflict detection.",
      body: "The tool syncs with team calendars, flags bottlenecks before they happen, and provides a visual timeline of all active productions.",
    },
    gallery: [
      "/images/work-schedule.webp",
    ],
    externalLink: "https://workback-720109186790.us-west1.run.app/",
  },
  {
    slug: "campus-convert",
    title: "Campus Convert",
    client: "Intl Campus Admit",
    year: 2026,
    category: "AI Tool",
    filterTag: "Solutions",
    thumbnailType: "image",
    thumbnail: "/images/campus-convert-thumb.jpg",
    summary: "Automated GPA conversion across global education systems",
    intro: "International admissions required converting grades from dozens of country-specific systems into a standardized format.",
    metadata: { year: 2026, duration: "3 Weeks", client: "Intl Campus Admit", category: "AI Tool" },
    challenges: {
      heading: "Each country uses a different grading scale, and manual conversion was error-prone and time-consuming.",
      body: "Admissions staff spent significant time cross-referencing conversion tables. Errors led to incorrect eligibility assessments.",
    },
    solutions: {
      heading: "We built an automated converter supporting 50+ global grading systems with instant, accurate results.",
      body: "The tool handles percentage-based, letter-grade, and point-based systems. It provides equivalency explanations and supports batch processing.",
    },
    gallery: [
      "/images/campus-education.webp",
    ],
    externalLink: "https://campus-convert-720109186790.us-west1.run.app/",
  },

  // ── BRANDING (4) ──
  {
    slug: "creator-con",
    title: "Creator Con",
    client: "Creator Con",
    year: 2025,
    category: "Logo Design",
    filterTag: "Branding",
    thumbnailType: "image",
    thumbnail: "/images/branding-creative.webp",
    externalLink: "https://www.instagram.com/reel/DNyYORtYvWv/",
    tripleVideoPreview: [
      "/videos/creator-con-1.mov",
      "/videos/creator-con-2.m4v",
      "/videos/creator-con-3.mov",
    ],
    summary: "Logo design for a creator economy conference brand",
    intro: "Creator Con needed a visual identity that felt bold, digital-native, and instantly recognizable across social and event signage.",
    metadata: { year: 2025, duration: "2 Weeks", client: "Creator Con", category: "Logo Design" },
    challenges: {
      heading: "The brand had no visual identity — just a name. It needed to feel premium but accessible, digital but human.",
      body: "The logo would live across screens, signage, merch, and social media — it had to be versatile and instantly recognizable at any scale.",
    },
    solutions: {
      heading: "We developed a bold, geometric wordmark with a dynamic color system that adapts across digital and physical contexts.",
      body: "The identity system includes primary and secondary lockups, a custom color palette, and usage guidelines. It launched across all conference materials.",
    },
    gallery: [
      "/images/branding-creative.webp",
    ],
  },
  {
    slug: "vaseline-campaign",
    title: "Vaseline",
    client: "Vaseline",
    year: 2024,
    category: "Creative Campaign",
    filterTag: "Branding",
    thumbnailType: "video",
    thumbnail: "/lovable-uploads/a2bc0601-961e-40cb-80c4-ee53a8664039.png",
    videoPreviewUrl: "/videos/vaseline-preview.mov",
    summary: "Creative marketing campaign with AI-enhanced visual assets",
    intro: "Vaseline needed a fresh campaign that stood out in a saturated personal care market using modern creative techniques.",
    metadata: { year: 2024, duration: "3 Weeks", client: "Vaseline", category: "Creative Campaign" },
    challenges: {
      heading: "The brand wanted to feel contemporary and innovative without alienating its trusted, heritage audience.",
      body: "Balancing tradition with innovation required careful creative direction — bold enough to turn heads, familiar enough to feel trusted.",
    },
    solutions: {
      heading: "We produced an AI-enhanced campaign that blended product photography with generative textures and environments.",
      body: "The campaign assets ran across social, digital display, and print. AI generation accelerated production while maintaining art-directed quality.",
    },
    gallery: [
      "/lovable-uploads/a2bc0601-961e-40cb-80c4-ee53a8664039.png",
    ],
    externalLink: "https://readymag.website/surzayon/5140874/",
  },
  {
    slug: "wine-label",
    title: "Wine Label",
    client: "CHCA Wines",
    year: 2024,
    category: "Packaging Design",
    filterTag: "Branding",
    thumbnailType: "video",
    thumbnail: "/lovable-uploads/a2bc0601-961e-40cb-80c4-ee53a8664039.png",
    videoPreviewUrl: "/videos/wine-label-preview.mp4",
    summary: "Label and packaging design for an artisanal wine brand",
    intro: "CHCA Wines needed a label that communicated craft, provenance, and shelf presence in a crowded retail environment.",
    metadata: { year: 2024, duration: "3 Weeks", client: "CHCA Wines", category: "Packaging Design" },
    challenges: {
      heading: "The existing label was forgettable on the shelf, blending into a sea of similar boutique wine branding.",
      body: "The wine itself was exceptional but the packaging told no story. Retailers and consumers weren't picking it up.",
    },
    solutions: {
      heading: "We designed a label system with bold typography, textured stock, and a distinctive color palette that commands attention.",
      body: "The final design tells the vineyard story through layered print techniques — embossing, foil, and custom illustration. Sales increased measurably after relaunch.",
    },
    gallery: [],
    externalLink: "https://www.s.pictures/design/chcawinelabel",
  },
  {
    slug: "youtube-pitch-deck",
    title: "Twenty Years of YouTube",
    client: "YouTube (concept)",
    year: 2025,
    category: "Pitch Deck",
    filterTag: "Branding",
    thumbnailType: "image",
    thumbnail: "/images/youtube-pitch-thumb.jpg",
    summary: "Investor and partnership pitch deck with cinematic visual storytelling",
    intro: "A pitch deck that needed to close rooms — not just inform, but persuade with visual authority.",
    metadata: { year: 2025, duration: "2 Weeks", client: "YouTube (concept)", category: "Pitch Deck" },
    challenges: {
      heading: "Standard pitch decks rely on bullet points and charts. This needed to feel cinematic — more film pitch than startup deck.",
      body: "The audience was senior decision-makers with no patience for generic slides. Every frame needed to earn its place.",
    },
    solutions: {
      heading: "We designed a narrative-driven deck with full-bleed visuals, minimal text, and a story arc that builds to the ask.",
      body: "The deck uses cinematic composition, data visualization with personality, and a clear narrative structure. It ships as both a presentation and a leave-behind PDF.",
    },
    gallery: [
      "/images/youtube-pitch-thumb.jpg",
    ],
    externalLink: "https://www.canva.com/design/DAGiFpnFNE4/sg7LVWncTVPlmwoQRmg09g/view?utm_content=DAGiFpnFNE4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9854372f9a",
  },

  // ── AI VIDEO PRODUCTION ──
  {
    slug: "comedy-mockumentary-teaser",
    title: "Comedy Mockumentary Teaser",
    client: "Internal",
    year: 2025,
    category: "Short Film",
    filterTag: "AI Video Production",
    thumbnailType: "video",
    thumbnail: "/videos/comedy-mockumentary-teaser.mp4",
    summary: "A comedy mockumentary teaser exploring the absurdity of being your own boss",
    intro: "A short-form comedy piece blending mockumentary style with AI-generated visuals.",
    metadata: { year: 2025, duration: "2 Weeks", client: "Internal", category: "Short Film" },
    challenges: {
      heading: "Creating authentic mockumentary tone with AI-generated footage required careful direction.",
      body: "The comedy needed to land naturally while using AI tools — balancing humor with visual quality.",
    },
    solutions: {
      heading: "We combined AI video generation with sharp writing and precise editing to deliver genuine laughs.",
      body: "The result is a punchy teaser that proves AI-native content can carry comedic timing and tonal nuance.",
    },
    gallery: [],
    videoPreviewUrl: "/videos/comedy-mockumentary-teaser.mp4",
    videoFullUrl: "/videos/comedy-mockumentary-teaser.mp4",
    isVideoLightbox: true,
  },
  {
    slug: "on-spec-ad",
    title: "On Spec Ad",
    client: "Internal",
    year: 2025,
    category: "Ad Spec",
    filterTag: "AI Video Production",
    thumbnailType: "video",
    thumbnail: "/videos/on-spec-ad.mp4",
    summary: "A spec ad created entirely using AI tools — Runway Gen-4, Midjourney, and more",
    intro: "A spec commercial demonstrating the full power of AI-native ad production.",
    metadata: { year: 2025, duration: "1 Week", client: "Internal", category: "Ad Spec" },
    challenges: {
      heading: "Producing a broadcast-quality spec ad using only AI tools pushed every pipeline to its limits.",
      body: "The ad needed to look indistinguishable from traditional production while being made entirely with generative AI.",
    },
    solutions: {
      heading: "We combined Runway Gen-4, Midjourney, and custom compositing to deliver a polished spec spot.",
      body: "The final piece demonstrates that AI-native production can match the quality bar of traditional ad filmmaking.",
    },
    gallery: [],
    videoPreviewUrl: "/videos/on-spec-ad.mp4",
    videoFullUrl: "/videos/on-spec-ad.mp4",
    isVideoLightbox: true,
  },
  {
    slug: "music-video-1",
    title: "F**k Them",
    client: "MAIA",
    year: 2025,
    category: "Music Video",
    filterTag: "AI Video Production",
    thumbnailType: "video",
    thumbnail: "/videos/music-video-1-full.mp4",
    summary: "AI-native music video with cinematic visual language",
    intro: "A music video that needed to feel like a short film — narrative-driven, visually dense, and completely original.",
    metadata: { year: 2025, duration: "5 Weeks", client: "MAIA", category: "Music Video" },
    challenges: {
      heading: "The artist wanted a visual world that didn't exist — surreal environments and impossible transitions that live-action alone couldn't deliver.",
      body: "Traditional VFX would have taken months and blown the budget. The creative vision demanded both speed and fidelity.",
    },
    solutions: {
      heading: "We combined AI video generation with live-action performance footage, creating seamless transitions between real and surreal.",
      body: "Each scene was pre-visualized in AI, then shot and composited to match. The result plays like a high-budget production at a fraction of the cost and timeline.",
    },
    gallery: [],
    videoPreviewUrl: "/videos/music-video-1-full.mp4",
    videoFullUrl: "/videos/music-video-1-full.mp4",
    isVideoLightbox: true,
  },
  {
    slug: "music-video-2",
    title: "Hide It — Teaser",
    client: "Artist (TBA)",
    year: 2025,
    category: "Music Video",
    filterTag: "AI Video Production",
    thumbnailType: "video",
    thumbnail: "/videos/music-video-2-full.mp4",
    summary: "AI-native music video with cinematic visual language — Part II",
    intro: "The second installment in a visual series exploring AI-generated worlds blended with live performance.",
    metadata: { year: 2025, duration: "4 Weeks", client: "TBA", category: "Music Video" },
    challenges: {
      heading: "Maintaining visual continuity with Part I while pushing into new creative territory required a refined pipeline.",
      body: "The sequel needed to feel connected yet distinct — evolving the visual language without repeating it.",
    },
    solutions: {
      heading: "We evolved the AI pipeline from Part I, introducing new generative techniques for environments and transitions.",
      body: "The result is a visual companion piece that stands alone while rewarding viewers who experience both parts together.",
    },
    gallery: [],
    videoPreviewUrl: "/videos/music-video-2-preview.mp4",
    videoFullUrl: "/videos/music-video-2-full.mp4",
    isVideoLightbox: true,
  },
  {
    slug: "animated-25-seconder",
    title: "Animated 25-Seconder",
    client: "Multi-client",
    year: 2025,
    category: "Animation",
    filterTag: "AI Video Production",
    thumbnailType: "video",
    thumbnail: "/videos/animated-25-seconder.mov",
    summary: "Short-form animated commercial spots for social and digital placement",
    intro: "Brands needed punchy, scroll-stopping 25-second spots optimized for Instagram, TikTok, and YouTube pre-roll.",
    metadata: { year: 2025, duration: "2 Weeks", client: "Multi-client", category: "Animation" },
    challenges: {
      heading: "Animated ads needed to hook in under 3 seconds, deliver a message in 30, and work without sound.",
      body: "Attention spans on social are brutal. The animations needed to be visually compelling enough to stop a thumb mid-scroll.",
    },
    solutions: {
      heading: "We developed a rapid-production pipeline for animated spots — from concept to delivery in under two weeks.",
      body: "Each spot uses bold motion design, kinetic typography, and AI-assisted asset generation. Text overlays ensure the message lands with or without audio.",
    },
    gallery: [
      "/images/animated-gallery.webp",
    ],
    videoPreviewUrl: "/videos/animated-25-seconder.mov",
    videoFullUrl: "/videos/animated-25-seconder.mov",
    isVideoLightbox: true,
  },
];

export function getRelatedProjects(currentSlug: string): Project[] {
  return projects
    .filter((p) => p.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
}

export function filterProjects(tag: string): Project[] {
  if (tag === "All") return projects;
  return projects.filter((p) => p.filterTag === tag);
}
