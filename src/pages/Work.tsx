import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import ScrollReveal from "@/components/shared/ScrollReveal";
import VideoLightbox from "@/components/shared/VideoLightbox";
import TripleVideoPreview from "@/components/shared/TripleVideoPreview";
import { projects } from "@/data/projects";

const categories = [
  { label: "All", value: "all" },
  { label: "Video Production", value: "Video Production" },
  { label: "Creative Campaigns", value: "Branding" },
  { label: "AI Solutions", value: "Solutions" },
];

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";
  const [lightbox, setLightbox] = useState<{ open: boolean; url: string }>({ open: false, url: "" });

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.filterTag === activeFilter);

  const setFilter = (value: string) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <div className="min-h-screen text-foreground" style={{ background: "#0F0F0F" }}>
      <NebulaEffects />
      <Navbar />

      <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal type="blur-fade">
            <h1 className="text-foreground font-bold" style={{ fontSize: "clamp(2.75rem, 5vw, 6.5rem)", letterSpacing: "-0.03em" }}>
              Projects.
            </h1>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              From AI video to creative campaigns, each project is crafted to make an impact.
            </p>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal type="fade-up" delay={0.2}>
            <div className="flex flex-wrap gap-2 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/50 hover:text-foreground/80"
                  }`}
                  style={activeFilter !== cat.value ? { background: "rgba(255,255,255,0.08)" } : {}}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {filtered.map((p, i) => {
              const isExternal = !!p.externalLink;
              const isVideoLightbox = p.isVideoLightbox && p.videoFullUrl;

              const handleClick = (e: React.MouseEvent) => {
                if (isVideoLightbox) {
                  e.preventDefault();
                  setLightbox({ open: true, url: p.videoFullUrl! });
                }
              };

              const CardContent = (
                <>
                  <div className={`aspect-[16/10] rounded-2xl overflow-hidden relative ${isExternal ? "border border-cosmic/30" : ""}`}>
                    {p.tripleVideoPreview ? (
                      <TripleVideoPreview videos={p.tripleVideoPreview} />
                    ) : p.videoPreviewUrl ? (
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
                    {isExternal && p.filterTag === "Solutions" && (
                       <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cosmic/90 text-white text-xs font-medium flex items-center gap-1">
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
                      {isExternal ? (p.filterTag === "Solutions" ? "Launch App" : "Launch Project") : isVideoLightbox ? "Watch" : "View project"}{" "}
                      <ArrowUpRight size={14} className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </>
              );

              return (
                <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.05}>
                  {isExternal ? (
                    <a href={p.externalLink} target="_blank" rel="noopener noreferrer" className="group block">
                      {CardContent}
                    </a>
                  ) : isVideoLightbox ? (
                    <div className="group block cursor-pointer" onClick={handleClick}>
                      {CardContent}
                    </div>
                  ) : (
                    <Link to={`/work/${p.slug}`} className="group block">
                      {CardContent}
                    </Link>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-[6px]"><CTABand /></div>
      <div className="mt-[6px]"><Footer /></div>

      <VideoLightbox
        videoUrl={lightbox.url}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, url: "" })}
      />
    </div>
  );
};

export default Work;
