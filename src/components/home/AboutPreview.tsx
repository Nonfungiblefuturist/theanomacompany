import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import StatsCounter from "@/components/shared/StatsCounter";
import { stats } from "@/data/stats";

const AboutPreview = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <SectionHeader title="About Us." />
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg" style={{ lineHeight: 1.7 }}>
              We're a Toronto-based AI-first creative studio. We build tools, brands, and films — using AI as the engine and human direction as the compass. Every project follows our CTRL+AI methodology: human control, AI execution.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} type="fade-up" delay={0.15 + i * 0.1}>
                <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal type="fade-up" delay={0.4}>
            <Link to="/studio" className="inline-block mt-8 text-sm text-primary hover:text-foreground transition-colors">
              More about us →
            </Link>
          </ScrollReveal>
        </div>

        {/* Right — large image */}
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
