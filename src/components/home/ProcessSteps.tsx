import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { num: "01", title: "Discovery & Strategy", desc: "We analyze your vision, brand identity, and requirements to develop a tailored AI-powered creative strategy." },
  { num: "02", title: "Concept & Direction", desc: "Our team crafts concepts, selects AI models, and defines the creative direction before production begins." },
  { num: "03", title: "Production & Execution", desc: "We blend human creativity with AI precision to develop your visual content, ensuring brand consistency and quality." },
  { num: "04", title: "Delivery & Iteration", desc: "Every output undergoes quality checks and refinements. We iterate until it meets cinema-grade standards." },
];

const ProcessSteps = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader title="Process." subtitle="Four steps to finished." dotLabel="Process" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={i} type="fade-up" delay={i * 0.1}>
            <div className="relative">
              <span className="text-5xl font-bold text-primary/20">{s.num}</span>
              <h3 className="font-semibold text-lg text-foreground mt-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
