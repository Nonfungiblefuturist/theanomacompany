import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FlipButton from "@/components/shared/FlipButton";
import VideoLightbox from "@/components/shared/VideoLightbox";
import { projects } from "@/data/projects";

const curatedSlugs = [
  "music-video-1",
  "ai-chatbot",
  "vaseline-campaign",
  "animated-30-seconder",
];
const featured = curatedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects;

const SelectedWork = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; url: string }>({ open: false, url: "" });

  return (
    <>
      <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <ScrollReveal type="fade-up">
                <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
                  Selected Work
                </p>
              </ScrollReveal>
              <ScrollReveal type="blur-fade">
                <h2
                  className="font-semibold"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  <span className="text-foreground">Selected </span>
                  <span style={{ color: "hsl(var(--cosmic))" }}>Work.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal type="fade-up" delay={0.1}>
                <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
                  Recent projects across all verticals.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal type="fade-up" delay={0.15}>
              <FlipButton text="View all" href="/work" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p, i) => {
              const isExternal = p.filterTag === "Solutions" && p.externalLink;
              const isVideoLightbox = p.isVideoLightbox && p.videoFullUrl;

              const handleClick = (e: React.MouseEvent) => {
                if (isVideoLightbox) {
                  e.preventDefault();
                  setLightbox({ open: true, url: p.videoFullUrl! });
                }
              };

              const cardContent = (
                <>
                  <div className={`aspect-[16/10] rounded-2xl overflow-hidden relative ${isExternal ? "border border-cosmic/30" : ""}`}>
                    {p.videoPreviewUrl ? (
                      <video
                        src={p.videoPreviewUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        poster={p.thumbnail}
                      />
                    ) : (
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    )}
                    {isExternal && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cosmic/90 text-background text-xs font-medium flex items-center gap-1">
                        Live App <ArrowUpRight size={10} />
                      </span>
                    )}
                  </div>
                  <div className="pt-4 pb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-lg text-foreground">{p.title}</h3>
                      <span className="text-sm text-muted-foreground">{p.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors mt-2 inline-flex items-center gap-1">
                      {isExternal ? "Launch App" : isVideoLightbox ? "Watch" : "View project"}{" "}
                      <ArrowUpRight size={14} className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </>
              );

              if (isExternal) {
                return (
                  <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.08}>
                    <a href={p.externalLink} target="_blank" rel="noopener noreferrer" className="group block">
                      {cardContent}
                    </a>
                  </ScrollReveal>
                );
              }

              if (isVideoLightbox) {
                return (
                  <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.08}>
                    <div className="group block cursor-pointer" onClick={handleClick}>
                      {cardContent}
                    </div>
                  </ScrollReveal>
                );
              }

              return (
                <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.08}>
                  <Link to={`/work/${p.slug}`} className="group block">
                    {cardContent}
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <VideoLightbox
        videoUrl={lightbox.url}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, url: "" })}
      />
    </>
  );
};

export default SelectedWork;
