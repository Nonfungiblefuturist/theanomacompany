import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { num: "01.", title: "Discovery & Strategy", desc: "We analyze your vision, brand identity, and requirements to develop a tailored AI-powered creative strategy." },
  { num: "02.", title: "Concept & Direction", desc: "Our team crafts concepts, selects AI models, and defines the creative direction before production begins." },
  { num: "03.", title: "Production & Execution", desc: "We blend human creativity with AI precision to develop your visual content, ensuring brand consistency and quality." },
  { num: "04.", title: "Delivery & Iteration", desc: "Every output undergoes quality checks and refinements. We iterate until it meets cinema-grade standards." },
];

const ProcessSteps = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
        <div>
          <ScrollReveal type="fade-up">
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              Our process
            </p>
          </ScrollReveal>
          <ScrollReveal type="blur-fade">
            <h2
              className="text-foreground font-semibold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Process.
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              Four steps to finished.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal type="fade-up" delay={0.15}>
          <Link to="/contact" className="text-sm text-primary hover:text-foreground transition-colors mt-4 md:mt-0">
            Let's get started →
          </Link>
        </ScrollReveal>
      </div>

      {/* Vertical stack */}
      <div className="space-y-0">
        {steps.map((s, i) => (
          <ScrollReveal key={i} type="fade-up" delay={i * 0.1}>
            <div className="py-8 md:py-10 border-t border-border grid grid-cols-1 md:grid-cols-[80px_200px_1fr] gap-4 md:gap-8 items-start">
              <span
                className="text-4xl md:text-5xl font-bold text-muted-foreground/20"
                style={{ lineHeight: 1 }}
              >
                {s.num}
              </span>
              <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground" style={{ lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
