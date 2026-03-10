import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/data/projects";

const solutions = projects.filter((p) => p.filterTag === "Solutions");

const SolutionsGrid = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <SectionHeader title="Solutions." subtitle="AI-powered tools built to solve real problems." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((p, i) => (
          <ScrollReveal key={p.slug} type="slide-up" delay={i * 0.1} viewportAmount={0.15}>
            <Link
              to={`/work/${p.slug}`}
              className="group block rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover-lift-smooth bg-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Anta'] text-lg text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1" style={{ lineHeight: 1.6 }}>
                  {p.summary}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsGrid;
