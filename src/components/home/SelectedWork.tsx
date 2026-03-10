import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { projects } from "@/data/projects";

const curatedSlugs = [
  "jaipur-living",
  "ai-chatbot",
  "vaseline-campaign",
  "lincoln-university",
  "stand-store",
  "prompt-machine",
];
const featured = curatedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects;

const SelectedWork = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
      {/* Header with View all button */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
        <div>
          <ScrollReveal type="fade-up">
            <p className="text-sm text-muted-foreground mb-4">Selected Work</p>
          </ScrollReveal>
          <ScrollReveal type="blur-fade">
            <h2
              className="text-foreground font-semibold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Selected Work.
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              Recent projects across all verticals.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal type="fade-up" delay={0.15}>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium mt-4 md:mt-0 px-5 py-2.5 rounded-[10px] border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            View all
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((p, i) => (
          <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.08}>
            <Link to={`/work/${p.slug}`} className="group block">
              {/* Large cinematic thumbnail */}
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              {/* Info — clean text, no bar */}
              <div className="pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg text-foreground">{p.title}</h3>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors mt-2 inline-block">
                  View project{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;
