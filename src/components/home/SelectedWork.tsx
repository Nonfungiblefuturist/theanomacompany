import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
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
  const stackRef = useRef<HTMLDivElement>(null);

  // Track which card is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const stack = stackRef.current;
      if (!stack) return;
      const cards = stack.querySelectorAll<HTMLDivElement>(".video-stack-card");
      let current = 0;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 10) current = i;
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track section visibility for floating UI
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(stack);
    return () => observer.disconnect();
  }, []);

  const currentProject = videoProjects[activeIndex];

  return (
    <>
      {/* Header */}
      <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 flex items-center justify-between">
          <h2 className="font-semibold text-foreground flex items-center gap-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}>
            <span className="w-2.5 h-2.5 rounded-full bg-cosmic inline-block" />
            Selected Work.
          </h2>
          <FlipButton text="See all work" href="/work" />
        </div>
      </section>

      {/* Sticky card stack */}
      <div ref={stackRef} className="video-card-stack relative mx-[6px]">
        {videoProjects.map((p, i) => (
          <div
            key={p.slug}
            className="video-stack-card sticky top-0 mb-[6px]"
            style={{ height: "40vh", zIndex: i + 1 }}
          >
            <div className="video-stack-inner relative w-full h-full rounded-[20px] overflow-hidden" style={{ background: "#0a0a0a" }}>
              <video
                src={p.videoPreviewUrl}
                autoPlay={i === 0}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                preload={i === 0 ? "metadata" : "none"}
                ref={(el) => {
                  if (!el) return;
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) { el.play().catch(() => {}); }
                      else { el.pause(); }
                    },
                    { threshold: 0.3 }
                  );
                  observer.observe(el);
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 60%)",
                }}
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 xl:px-20 pb-6 md:pb-8 flex items-end justify-between">
                <div>
                  <p className="text-[13px] uppercase tracking-[0.05em] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {p.category}
                  </p>
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                  >
                    {p.title}
                  </h3>
                </div>
                <button
                  onClick={() => p.videoFullUrl && setLightbox({ open: true, url: p.videoFullUrl })}
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground cursor-pointer transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Watch Project <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
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
            <span
              className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 pointer-events-none"
              style={{
                color: "rgba(255,255,255,0.6)",
                opacity: i === activeIndex ? 1 : 0,
              }}
            >
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* Floating bottom pill bar */}
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

        <FlipButton text="See All Projects" href="/work" variant="outline" className="!py-2 !px-4 !text-[13px] !border-white/20" />
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
