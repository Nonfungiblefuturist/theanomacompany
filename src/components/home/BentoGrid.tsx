import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import LogoMarquee from "@/components/shared/LogoMarquee";

const benefits = [
  { title: "AI-Native Pipeline", desc: "Every project built on AI from day one — not bolted on after.", span: "md:col-span-2" },
  { title: "Cinematic Quality", desc: "Cinema-grade output. PhotoVogue-featured visuals. No compromises.", span: "" },
  { title: "Fast Turnaround", desc: "3–5x faster than traditional production without sacrificing quality.", span: "" },
  { title: "End-to-End", desc: "Strategy, production, and delivery — all under one roof.", span: "md:col-span-2" },
  { title: "Hybrid Workflows", desc: "We know when to shoot and when to generate. The art is in the blend.", span: "md:row-span-2" },
  { title: "Creative Direction", desc: "AI handles execution. Humans steer the vision. Always.", span: "" },
];

const BentoGrid = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader title="Why Us." subtitle="What sets us apart." align="center" dotLabel="Why us" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benefits.map((b, i) => (
          <ScrollReveal key={i} type="fade-up" delay={i * 0.08} className={b.span}>
            <div className="p-6 md:p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-500 hover-lift-smooth h-full">
              <h3 className="font-semibold text-base text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-16">
        <LogoMarquee />
      </div>
    </div>
  </section>
);

export default BentoGrid;
