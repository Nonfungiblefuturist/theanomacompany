import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { motion } from "framer-motion";
import FlipButton from "@/components/shared/FlipButton";
import VideoLightbox from "@/components/shared/VideoLightbox";
import { projects } from "@/data/projects";

const videoProjects = projects.filter(
  (p) => p.filterTag === "AI Video Production" && p.videoPreviewUrl
);

const SelectedWork = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; url: string }>({ open: false, url: "" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Track active index via scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const index = Math.round(scrollTop / height);
      setActiveIndex(Math.min(index, videoProjects.length - 1));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Track section visibility for floating UI
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: i * container.clientHeight, behavior: "smooth" });
    }
  };

  const currentProject = videoProjects[activeIndex];

  return (
    <>
      <section ref={sectionRef} className="relative" style={{ height: "100vh" }}>
        {/* Scroll container */}
        <div
          ref={containerRef}
          className="h-full overflow-y-scroll"
          style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
        >
          {videoProjects.map((p, i) => (
            <div
              key={p.slug}
              className="relative w-full overflow-hidden"
              style={{ height: "100vh", scrollSnapAlign: "start" }}
            >
              <video
                src={p.videoPreviewUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 60%)",
                }}
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 xl:px-20 pb-20 md:pb-16 flex items-end justify-between">
                <div>
                  <p className="text-[13px] uppercase tracking-[0.05em] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {p.category}
                  </p>
                  <h2
                    className="font-semibold text-foreground"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                  >
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-md">{p.summary}</p>
                </div>
                <button
                  onClick={() => p.videoFullUrl && setLightbox({ open: true, url: p.videoFullUrl })}
                  className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-foreground cursor-pointer transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Watch Project <ArrowUpRight size={14} />
                </button>
              </div>
              {/* Mobile watch button */}
              <button
                onClick={() => p.videoFullUrl && setLightbox({ open: true, url: p.videoFullUrl })}
                className="md:hidden absolute bottom-20 right-6 flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Watch <ArrowUpRight size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Side thumbnail navigator — desktop only */}
        <div
          className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-[90] transition-opacity duration-400"
          style={{
            opacity: sectionVisible ? 1 : 0,
            pointerEvents: sectionVisible ? "auto" : "none",
          }}
        >
          {videoProjects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => scrollToIndex(i)}
              className="relative group w-16 h-10 rounded-md overflow-hidden cursor-pointer transition-all duration-300 border-2 p-0 bg-transparent"
              style={{
                opacity: i === activeIndex ? 1 : 0.4,
                borderColor: i === activeIndex ? "hsl(var(--cosmic))" : "transparent",
              }}
            >
              {p.videoPreviewUrl ? (
                <video
                  src={p.videoPreviewUrl}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              ) : (
                <div className="w-full h-full" style={{ background: "rgba(255,255,255,0.08)" }} />
              )}
              {/* Label on hover / active */}
              <span
                className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 pointer-events-none"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  opacity: i === activeIndex ? 1 : 0,
                }}
              >
                <span className="group-hover:opacity-100">{p.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Persistent bottom bar */}
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-4 md:gap-6 px-5 md:px-6 py-3 rounded-full transition-opacity duration-400"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
            opacity: sectionVisible ? 1 : 0,
            pointerEvents: sectionVisible ? "auto" : "none",
          }}
        >
          {/* Info — desktop only */}
          <span className="hidden md:inline text-[13px] whitespace-nowrap" style={{ color: "rgba(255,255,255,0.6)" }}>
            Video Production · <strong className="text-foreground font-medium">{currentProject?.title}</strong>
          </span>

          <button
            onClick={() => currentProject?.videoFullUrl && setLightbox({ open: true, url: currentProject.videoFullUrl })}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium text-foreground cursor-pointer transition-colors duration-300"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            Watch Project <Play size={12} fill="currentColor" />
          </button>

          <Link
            to="/work"
            className="text-[13px] no-underline transition-colors duration-300"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            See all work ↗
          </Link>
        </div>

        {/* Scroll hint on first slide */}
        {activeIndex === 0 && sectionVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none"
          >
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown size={16} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* See all work link */}
      <div className="section-card mx-[6px] rounded-[20px] overflow-hidden">
        <div className="flex justify-center py-12">
          <FlipButton text="See all work" href="/work" />
        </div>
      </div>

      <VideoLightbox
        videoUrl={lightbox.url}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, url: "" })}
      />
    </>
  );
};

export default SelectedWork;
