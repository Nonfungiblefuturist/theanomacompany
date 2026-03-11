import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FlipButton from "@/components/shared/FlipButton";
import VideoLightbox from "@/components/shared/VideoLightbox";
import { projects } from "@/data/projects";

// Only video production projects for the full-screen scroll
const videoProjects = projects.filter(
  (p) => p.filterTag === "AI Video Production" && p.videoPreviewUrl
);

const SelectedWork = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; url: string }>({ open: false, url: "" });
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <section className="relative" style={{ height: "100vh" }}>
        {/* Scroll container */}
        <div
          ref={containerRef}
          className="h-full overflow-y-scroll"
          style={{
            scrollSnapType: "y mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {videoProjects.map((p, i) => (
            <div
              key={p.slug}
              className="relative w-full overflow-hidden"
              style={{
                height: "100vh",
                scrollSnapAlign: "start",
              }}
            >
              {/* Background video */}
              <video
                src={p.videoPreviewUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 60%)",
                }}
              />

              {/* Bottom overlay content */}
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 xl:px-20 pb-12 md:pb-16 flex items-end justify-between">
                <div>
                  <p
                    className="text-[13px] uppercase tracking-[0.05em] mb-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {p.category}
                  </p>
                  <h2
                    className="font-semibold text-foreground"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-md">{p.summary}</p>
                </div>

                <button
                  onClick={() => {
                    if (p.videoFullUrl) {
                      setLightbox({ open: true, url: p.videoFullUrl });
                    }
                  }}
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
                onClick={() => {
                  if (p.videoFullUrl) {
                    setLightbox({ open: true, url: p.videoFullUrl });
                  }
                }}
                className="md:hidden absolute bottom-6 right-6 flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground cursor-pointer"
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

        {/* Scroll progress dots */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {videoProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const container = containerRef.current;
                if (container) {
                  container.scrollTo({ top: i * container.clientHeight, behavior: "smooth" });
                }
              }}
              className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                background: i === activeIndex ? "hsl(var(--cosmic))" : "rgba(255,255,255,0.25)",
                transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Scroll hint on first slide */}
        {activeIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none"
          >
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
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
