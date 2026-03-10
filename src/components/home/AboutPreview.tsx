import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatsCounter from "@/components/shared/StatsCounter";
import { stats } from "@/data/stats";

const AboutPreview = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Dot label */}
      <ScrollReveal type="fade-up">
        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          About us
        </p>
      </ScrollReveal>

      {/* Two-tone large paragraph */}
      <ScrollReveal type="blur-fade">
        <p
          className="text-foreground max-w-4xl"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", lineHeight: 1.4, letterSpacing: "-0.01em" }}
        >
          <span className="text-foreground">We're a Toronto-based AI-first creative studio. We build tools, brands, and films</span>
          <span className="text-muted-foreground"> — using AI as the engine and human direction as the compass. Every project follows our CTRL+AI methodology: human control, AI execution.</span>
        </p>
      </ScrollReveal>

      {/* Stats left + Image right */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16 mt-16 items-start">
        {/* Left: Vertical stats */}
        <div className="space-y-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} type="fade-up" delay={0.1 + i * 0.1}>
              <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
            </ScrollReveal>
          ))}

          <ScrollReveal type="fade-up" delay={0.5}>
            <Link to="/studio" className="inline-flex items-center gap-1 text-sm text-primary hover:text-foreground transition-colors">
              More about us <span>→</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right: Large image */}
        <ScrollReveal type="scale-in">
          <div className="aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1000&fit=crop"
              alt="The Anoma Company studio"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutPreview;
