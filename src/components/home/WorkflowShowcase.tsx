import ScrollReveal from "@/components/shared/ScrollReveal";

const WorkflowShowcase = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="px-6 md:px-12 pt-10 md:pt-12 pb-2">
      {/* Header row */}
      <ScrollReveal type="fade-up">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <p className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            Our Workflow
          </p>
          <p className="text-[15px] text-muted-foreground/60 italic mt-2 md:mt-0">
            The system behind the craft.
          </p>
        </div>
      </ScrollReveal>

      {/* Image */}
      <ScrollReveal type="fade-up" delay={0.1}>
        <div
          className="relative w-full rounded-2xl overflow-hidden group cursor-default"
        >
          <img
            src="/images/workflow-nodegraph.png"
            alt="AI-first production workflow node graph"
            className="w-full block transition-transform duration-700 group-hover:scale-[1.02]"
            style={{
              height: "clamp(250px, 50vh, 600px)",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Bottom gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
            }}
          >
            <p
              className="max-w-[600px]"
              style={{
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
              }}
            >
              Every frame mapped. Every asset connected.
              <br />
              This is how AI-first production actually works.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WorkflowShowcase;
