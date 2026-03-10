import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/data/projects";

const brandingProjects = projects.filter((p) => p.filterTag === "Branding");

const BrandingShowcase = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <SectionHeader title="Branding." subtitle="Identity systems and creative campaigns." />

      {/* Masonry-like grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brandingProjects.map((p, i) => (
          <ScrollReveal
            key={p.slug}
            type="slide-up"
            delay={i * 0.1}
            viewportAmount={0.15}
            className={i === 0 ? "md:row-span-2" : ""}
          >
            <Link
              to={`/work/${p.slug}`}
              className="group block relative rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 h-full"
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-video"}`}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-['Anta'] text-lg text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{p.category}</p>
                  <span className="inline-block mt-2 text-sm text-foreground/70 group-hover:text-primary transition-colors">
                    View Project →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BrandingShowcase;
