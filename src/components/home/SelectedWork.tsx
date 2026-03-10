import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
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
  <section className="py-20 md:py-28">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <SectionHeader
        title="Selected Work."
        subtitle="Recent projects across all verticals."
        link={{ label: "View all", to: "/work" }}
        dotLabel="Selected Work"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((p, i) => (
          <ScrollReveal key={p.slug} type="slide-up" delay={i * 0.1} viewportAmount={0.15}>
            <Link
              to={`/work/${p.slug}`}
              className="group block rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Large thumbnail */}
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              {/* Info bar */}
              <div className="p-5 md:p-6 bg-card flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
