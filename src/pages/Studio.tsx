import { useState, useEffect, useCallback, useRef } from "react";
import ProjectCard from "@/components/studio/ProjectCard";
import CustomCursor from "@/components/studio/CustomCursor";
import PageLoader from "@/components/studio/PageLoader";
import chcaWineLabel from "@/assets/chca-wine-label.jpg";

// ── Project Data ──────────────────────────────────────────────
const heroProjects = [
  {
    title: "AI Short Film — Instagram Reel",
    category: "AI Short Film",
    thumbnailUrl: "/lovable-uploads/ai-short-film-wallet.png",
    link: "https://www.instagram.com/reel/DPdUvTuDoAi/?igsh=ZGVhYnhkOXc5dWJx",
  },
  {
    title: "AI Photography — PhotoVogue",
    category: "AI Photography",
    thumbnailUrl: "/lovable-uploads/8185e138-3528-4a94-b901-5e66b4f98b8a.png",
    link: "https://www.vogue.com/photovogue/photographers/167071/gallery#4039408",
  },
  {
    title: "Vaseline — AI Spec Ad",
    category: "Brand Campaign",
    thumbnailUrl: "/lovable-uploads/a2bc0601-961e-40cb-80c4-ee53a8664039.png",
    link: "https://readymag.website/surzayon/5140874/",
  },
  {
    title: "CHCA Wine Label Design",
    category: "AI Design",
    thumbnailUrl: chcaWineLabel,
    link: "https://www.s.pictures/design/chcawinelabel",
  },
];

const belowFoldProjects = [
  {
    title: "How I Made This Using AI",
    category: "Ad Spec",
    thumbnailUrl: "/lovable-uploads/c40680e6-8093-4681-8fcf-e6b6356d9ef2.png",
    link: "https://youtu.be/XlaBgDLMuGQ",
  },
  {
    title: "AI Mockumentary: Behind the Scenes",
    category: "AI Mockumentary",
    thumbnailUrl: "/lovable-uploads/71af5afa-9fe1-4527-acee-8f0ea355d8d4.png",
    link: "https://youtu.be/QenWLMUnC18",
  },
  {
    title: "Event Flyer Design",
    category: "Instagram Design",
    thumbnailUrl: "/lovable-uploads/e0cb3268-c7ec-4136-9335-3de792e7898f.png",
    link: "https://www.instagram.com/p/DI1gNCHOD-g/",
  },
  {
    title: "Snickers — The Traffic Jam",
    category: "AI Commercial",
    thumbnailUrl: "/lovable-uploads/af959056-775b-4b0e-8dc1-ca9596729b39.png",
  },
  {
    title: "Red Bull — Gives You Wings",
    category: "AI Commercial",
    thumbnailUrl: "/lovable-uploads/instagram-short-film.png",
  },
];

// ── Navigation ────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ── Component ─────────────────────────────────────────────────
const Studio = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const belowFoldRef = useRef<HTMLDivElement>(null);

  const handleLoaderComplete = useCallback(() => setLoaded(true), []);

  // Scroll progress tracker
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for below-fold cards
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll(".studio-scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("studio-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div className="studio-page" style={{ background: "#0a0a0a", color: "#f0efe8", minHeight: "100vh" }}>
      <CustomCursor />
      {!loaded && <PageLoader onComplete={handleLoaderComplete} />}

      {/* ═══ HERO GRID ═══ */}
      <section className="studio-hero-grid" style={{ opacity: loaded ? 1 : 0 }}>
        {/* Column 1 — Text */}
        <div className="studio-hero-text">
          <div className={`studio-entrance ${loaded ? "studio-entrance-visible" : ""}`} style={{ animationDelay: "0.6s" }}>
            <h2
              className="font-oswald uppercase tracking-[3px] text-[13px] font-bold"
              style={{ color: "#f0efe8" }}
            >
              THE ANOMA COMPANY
            </h2>
            <p className="font-oswald uppercase tracking-[2px] text-[10px] mt-1" style={{ color: "#8a8a82" }}>
              AI PRODUCTIONS
            </p>
          </div>

          {/* Scroll progress bar */}
          <div
            className={`mt-6 studio-entrance ${loaded ? "studio-entrance-visible" : ""}`}
            style={{ animationDelay: "0.7s" }}
          >
            <div style={{ width: 180, height: 3, background: "rgba(240,239,232,0.1)", borderRadius: 2 }}>
              <div
                style={{
                  width: `${scrollProgress}%`,
                  height: "100%",
                  background: "#f0efe8",
                  borderRadius: 2,
                  transition: "width 0.3s linear",
                }}
              />
            </div>
          </div>

          {/* Headline + description */}
          <div
            className={`mt-auto studio-entrance ${loaded ? "studio-entrance-visible" : ""}`}
            style={{ animationDelay: "0.85s" }}
          >
            <h1 className="font-instrument-serif text-[clamp(38px,4.5vw,68px)] leading-[1.05] tracking-[-1.5px]">
              <em style={{ color: "#d4d3cb" }}>AI powered</em>
              <br />
              Content Studio
            </h1>
            <p className="mt-4 text-sm leading-relaxed max-w-[340px] font-dm-sans" style={{ color: "#8a8a82" }}>
              Professional AI-powered visual content creation. Studio-grade campaigns,
              commercials, and film scenes delivered fast.
            </p>
          </div>

          {/* CTA */}
          <div
            id="contact"
            className={`mt-8 mb-8 studio-entrance ${loaded ? "studio-entrance-visible" : ""}`}
            style={{ animationDelay: "1s" }}
          >
            <p className="uppercase tracking-[2px] text-[11px] font-dm-sans font-medium" style={{ color: "#5a5a54" }}>
              Let's Talk
            </p>
            <a
              href="mailto:surzayon@theanoma.company"
              className="text-sm font-dm-sans mt-1 block hover:underline transition-colors"
              style={{ color: "#f0efe8" }}
              data-cursor="nav"
            >
              surzayon@theanoma.company
            </a>
          </div>
        </div>

        {/* Hero project cards */}
        {heroProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            className={`studio-hero-card studio-card-entrance ${loaded ? "studio-card-entrance-visible" : ""}`}
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          />
        ))}

        {/* Nav pills — floating top-right */}
        <nav
          className={`studio-nav-pills studio-entrance ${loaded ? "studio-entrance-visible" : ""}`}
          style={{ animationDelay: "0.8s" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="studio-pill"
              data-cursor="nav"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      {/* ═══ BELOW-FOLD GRID ═══ */}
      <section id="work" ref={belowFoldRef} className="studio-below-grid">
        {belowFoldProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            className={`studio-scroll-reveal ${i === 0 || i === 3 ? "studio-wide" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          />
        ))}
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        id="about"
        className="flex items-center justify-center gap-8 py-12 font-dm-sans"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] transition-colors hover:text-white"
            style={{ color: "#8a8a82" }}
            data-cursor="nav"
          >
            {link.label}
          </a>
        ))}
      </footer>
    </div>
  );
};

export default Studio;
