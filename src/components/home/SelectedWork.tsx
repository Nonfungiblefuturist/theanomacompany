import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import FlipButton from "@/components/shared/FlipButton";
import VideoLightbox from "@/components/shared/VideoLightbox";
import { projects } from "@/data/projects";

const selectedWorkOrder = [
  "music-video-1",
  "music-video-2",
  "animated-25-seconder",
] as const;

const videoProjects = selectedWorkOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project?.videoPreviewUrl));

/* ── Reusable video card ── */
const VideoCard = ({
  project,
  index,
  onWatch,
}: {
  project: (typeof videoProjects)[number];
  index: number;
  onWatch: (url: string) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="video-stack-card sticky top-0 mb-[6px]"
      style={{ height: "40vh", zIndex: index + 1 }}
    >
      <div
        className="video-stack-inner relative w-full h-full rounded-[20px] overflow-hidden"
        style={{ background: "hsl(var(--background))" }}
      >
        <video
          ref={videoRef}
          src={project.videoPreviewUrl}
          poster={project.thumbnail}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload={index === 0 ? "metadata" : "none"}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 xl:px-20 pb-6 md:pb-8 flex items-end justify-between">
          <div>
            <p
              className="text-[13px] uppercase tracking-[0.05em] mb-1 text-muted-foreground"
            >
              {project.category}
            </p>
            <h3
              className="font-semibold text-foreground"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => project.videoFullUrl && onWatch(project.videoFullUrl)}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground cursor-pointer transition-all duration-300 hover:scale-105 shrink-0 bg-white/10 backdrop-blur-xl border border-white/15"
          >
            Watch Project <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Side thumbnail nav ── */
const SideNav = ({
  visible,
  activeIndex,
}: {
  visible: boolean;
  activeIndex: number;
}) => (
  <div
    className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-[90] transition-opacity duration-400"
    style={{
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
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
            preload="none"
          />
        ) : (
          <div className="w-full h-full bg-muted/10" />
        )}
        <span
          className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 pointer-events-none text-muted-foreground"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          {p.title}
        </span>
      </button>
    ))}
  </div>
);

/* ── Floating bottom bar ── */
const FloatingBar = ({
  visible,
  currentProject,
  onWatch,
}: {
  visible: boolean;
  currentProject: (typeof videoProjects)[number] | undefined;
  onWatch: (url: string) => void;
}) => (
  <div
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-4 md:gap-6 px-5 md:px-6 py-3 rounded-full transition-opacity duration-400 bg-black/40 backdrop-blur-2xl border border-white/8"
    style={{
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
    }}
  >
    <span className="hidden md:inline text-[13px] whitespace-nowrap text-muted-foreground">
      Video Production · <strong className="text-foreground font-medium">{currentProject?.title}</strong>
    </span>

    <button
      onClick={() => currentProject?.videoFullUrl && onWatch(currentProject.videoFullUrl)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium text-foreground cursor-pointer transition-colors duration-300 bg-white/10 border border-white/12 hover:bg-white/20"
    >
      Watch Project <Play size={12} fill="currentColor" />
    </button>

    <FlipButton
      text="See All Projects"
      href="/work"
      variant="outline"
      className="!py-2 !px-4 !text-[13px] !border-white/20"
    />
  </div>
);

/* ── Main component ── */
const SelectedWork = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; url: string }>({ open: false, url: "" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

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

  const openLightbox = useCallback((url: string) => {
    setLightbox({ open: true, url });
  }, []);

  const currentProject = videoProjects[activeIndex];

  return (
    <>
      <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 flex items-center justify-between">
          <h2
            className="font-semibold text-foreground flex items-center gap-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cosmic inline-block" />
            Selected Work.
          </h2>
          <FlipButton text="See all work" href="/work" />
        </div>
      </section>

      <div ref={stackRef} className="video-card-stack relative mx-[6px]">
        {videoProjects.map((p, i) => (
          <VideoCard key={p.slug} project={p} index={i} onWatch={openLightbox} />
        ))}
      </div>

      <SideNav visible={sectionVisible} activeIndex={activeIndex} />
      <FloatingBar visible={sectionVisible} currentProject={currentProject} onWatch={openLightbox} />

      <VideoLightbox
        videoUrl={lightbox.url}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, url: "" })}
      />
    </>
  );
};

export default SelectedWork;
