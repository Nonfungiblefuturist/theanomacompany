import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import CustomCursor from "@/components/studio/CustomCursor";

import brandingCreatorCon from "@/assets/branding-creator-con.jpg";
import brandingStandStore from "@/assets/branding-stand-store.jpg";
import brandingLincolnUniversity from "@/assets/branding-lincoln-university.jpg";
import brandingCampusAdmin from "@/assets/branding-campus-admin.jpg";
import brandingVaseline from "@/assets/branding-vaseline.jpg";
import brandingDuolingo from "@/assets/branding-duolingo.jpg";
import brandingTorontoZoo from "@/assets/branding-toronto-zoo.jpg";
import brandingPatagonia from "@/assets/branding-patagonia.jpg";
import brandingAmnesty from "@/assets/branding-amnesty.jpg";
import brandingVice from "@/assets/branding-vice.jpg";
import chcaWineLabel from "@/assets/chca-wine-label.jpg";
import brandingUMusic from "@/assets/branding-u-music.jpg";
import brandingYoutubePitch from "@/assets/branding-youtube-pitch.jpg";

interface BrandingProject {
  title: string;
  category: string;
  thumbnailUrl: string;
  linkType: "internal" | "external";
  url: string;
  span?: boolean; // spans 2 columns
}

const projects: BrandingProject[] = [
  {
    title: "Creator Con",
    category: "Logo Design",
    thumbnailUrl: brandingCreatorCon,
    linkType: "internal",
    url: "/branding/logo",
    span: true,
  },
  {
    title: "Stand Store",
    category: "Website Design",
    thumbnailUrl: brandingStandStore,
    linkType: "internal",
    url: "/branding/website",
  },
  {
    title: "Lincoln University",
    category: "Website Design",
    thumbnailUrl: brandingLincolnUniversity,
    linkType: "internal",
    url: "/branding/lincoln-university",
  },
  {
    title: "Campus Admin",
    category: "Website Design",
    thumbnailUrl: brandingCampusAdmin,
    linkType: "internal",
    url: "/branding/campus-admin",
    span: true,
  },
  {
    title: "Vaseline",
    category: "Creative Marketing",
    thumbnailUrl: brandingVaseline,
    linkType: "external",
    url: "https://readymag.website/surzayon/5140874/4/",
  },
  {
    title: "Duolingo",
    category: "Creative Marketing",
    thumbnailUrl: brandingDuolingo,
    linkType: "external",
    url: "https://www.s.pictures/design/duolingo",
  },
  {
    title: "Toronto Zoo",
    category: "Creative Marketing",
    thumbnailUrl: brandingTorontoZoo,
    linkType: "external",
    url: "https://www.s.pictures/design/toronto-zoo",
    span: true,
  },
  {
    title: "Patagonia Worn Wear",
    category: "Creative Marketing",
    thumbnailUrl: brandingPatagonia,
    linkType: "external",
    url: "https://www.s.pictures/design/patagonia",
  },
  {
    title: "Amnesty",
    category: "Creative Marketing",
    thumbnailUrl: brandingAmnesty,
    linkType: "external",
    url: "https://www.s.pictures/design/amnesty",
  },
  {
    title: "Vice",
    category: "Creative Marketing",
    thumbnailUrl: brandingVice,
    linkType: "external",
    url: "https://www.s.pictures/design/vice",
  },
  {
    title: "Wine Label (CHCA)",
    category: "Design",
    thumbnailUrl: chcaWineLabel,
    linkType: "internal",
    url: "/branding/design",
    span: true,
  },
  {
    title: "U Music",
    category: "Design",
    thumbnailUrl: brandingUMusic,
    linkType: "external",
    url: "https://www.s.pictures/design/u-music",
  },
  {
    title: "YouTube Pitch",
    category: "Pitch Deck",
    thumbnailUrl: brandingYoutubePitch,
    linkType: "internal",
    url: "/branding/pitch-deck",
  },
];

const Branding = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll reveal for cards
  useEffect(() => {
    const els = document.querySelectorAll(".branding-card-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("branding-card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="studio-page" style={{ background: "#0a0a0a", color: "#f0efe8", minHeight: "100vh" }}>
      <CustomCursor />

      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-6">
        <Link
          to="/studio"
          className="flex items-center gap-2 font-dm-sans text-sm transition-colors hover:opacity-80"
          style={{ color: "#8a8a82" }}
          data-cursor="nav"
        >
          <ArrowLeft size={16} />
          Back to Studio
        </Link>
        <h2
          className="font-oswald uppercase tracking-[3px] text-[13px] font-bold"
          style={{ color: "#f0efe8" }}
        >
          THE ANOMA COMPANY
        </h2>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-8 pb-16">
        <h1 className="font-instrument-serif text-[clamp(42px,5vw,72px)] leading-[1.05] tracking-[-1.5px]">
          <em style={{ color: "#d4d3cb" }}>Branding</em>
          <br />
          & Design
        </h1>
        <p className="mt-4 text-sm leading-relaxed max-w-[480px] font-dm-sans" style={{ color: "#8a8a82" }}>
          Logo design, website experiences, creative marketing campaigns, and pitch decks — 
          a curated selection of branding work across industries.
        </p>
      </section>

      {/* Project Grid — Masonry-like */}
      <section ref={gridRef} className="branding-grid px-2 sm:px-4 pb-20">
        {projects.map((project, i) => {
          const isExternal = project.linkType === "external";

          const cardContent = (
            <>
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="branding-card-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 35%, transparent 55%)",
                }}
              />
              {/* Info chip */}
              <div
                className="branding-info-chip absolute bottom-4 left-4 z-10 px-[18px] py-[14px] rounded-lg"
                style={{
                  background: "rgba(60,60,55,0.65)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium" style={{ color: "#f0efe8" }}>{project.title}</p>
                  {isExternal && <ExternalLink size={12} style={{ color: "#8a8a82" }} />}
                </div>
                <p className="text-xs mt-0.5" style={{ color: "#8a8a82" }}>{project.category}</p>
              </div>
            </>
          );

          const className = `branding-card branding-card-reveal relative overflow-hidden block ${
            project.span ? "branding-wide" : ""
          }`;

          if (isExternal) {
            return (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={{ transitionDelay: `${i * 60}ms` }}
                data-cursor="project"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link
              key={project.title}
              to={project.url}
              className={className}
              style={{ transitionDelay: `${i * 60}ms` }}
              data-cursor="project"
            >
              {cardContent}
            </Link>
          );
        })}
      </section>

      {/* Footer */}
      <footer
        className="flex items-center justify-center gap-8 py-12 font-dm-sans"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <Link to="/studio" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#8a8a82" }} data-cursor="nav">
          Studio
        </Link>
        <Link to="/branding" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#f0efe8" }} data-cursor="nav">
          Branding
        </Link>
        <a href="mailto:surzayon@theanoma.company" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#8a8a82" }} data-cursor="nav">
          Contact
        </a>
      </footer>
    </div>
  );
};

export default Branding;
