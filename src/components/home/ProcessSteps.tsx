import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery & Strategy", desc: "Understanding your vision, audience, and creative direction to define the production roadmap." },
  { num: "02", title: "Concept & Design", desc: "Storyboards, mood boards, and visual direction refined into a cinematic blueprint." },
  { num: "03", title: "Production & Execution", desc: "Live-action, 3D, and AI video workflows converge into the final cut." },
  { num: "04", title: "Delivery & Optimization", desc: "Final renders, format delivery, and performance optimization across platforms." },
];

const ProcessSteps = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden" style={{ position: "relative" }}>
    {/* Background node graph */}
    <img
      src="/images/workflow-nodegraph.png"
      alt=""
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120%",
        height: "120%",
        objectFit: "cover",
        opacity: 0.06,
        filter: "blur(1px)",
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28" style={{ position: "relative", zIndex: 1 }}>
      <div className="mb-12 md:mb-16">
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            Our Process
          </p>
        </ScrollReveal>
        <ScrollReveal type="blur-fade">
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            <span className="text-foreground">Our </span>
            <span style={{ color: "hsl(var(--cosmic))" }}>Process.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Two-column: sticky left, steps right */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
        {/* Left — sticky */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ScrollReveal type="blur-fade">
            <h3
              className="font-semibold text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Precision at every stage.
            </h3>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-4 text-muted-foreground text-base" style={{ lineHeight: 1.7 }}>
              Our four-step framework ensures every project moves from concept to delivery with clarity, speed, and craft.
            </p>
          </ScrollReveal>
        </div>

        {/* Right — steps */}
        <div>
          {steps.map((s, i) => (
            <ScrollReveal key={i} type="fade-up" delay={i * 0.1}>
              <div
                className="py-8 md:py-10 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="font-semibold"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)", letterSpacing: "-0.05em", lineHeight: 1, color: "rgba(255,255,255,0.1)" }}
                >
                  {s.num}
                </span>
                <div>
                  <h4 className="font-medium text-xl md:text-2xl text-foreground">{s.title}</h4>
                  <p className="text-base text-muted-foreground mt-3 max-w-lg" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSteps;
