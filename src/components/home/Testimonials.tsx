import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { testimonials } from "@/data/testimonials";

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="flex-none w-[350px] md:w-[420px] p-6 rounded-2xl border border-border mx-2" style={{ background: "hsl(var(--card))" }}>
    <p className="text-muted-foreground text-sm flex-1" style={{ lineHeight: 1.7 }}>
      "{t.quote}"
    </p>
    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
      <div>
        <p className="font-semibold text-foreground text-sm">{t.author}</p>
        <p className="text-xs text-muted-foreground">{t.role}</p>
      </div>
      <span className="text-xs text-primary font-medium">{t.savings}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 mb-12">
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            Testimonials
          </p>
        </ScrollReveal>
        <ScrollReveal type="blur-fade">
          <h2
            className="text-foreground font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Testimonials.
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-3 text-muted-foreground text-base md:text-lg" style={{ lineHeight: 1.7 }}>
            What our clients say.
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 — scrolls left, pauses on hover */}
      <div
        className="relative overflow-hidden group/row1"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <motion.div
          className="flex group-hover/row1:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right, pauses on hover */}
      <div
        className="relative overflow-hidden mt-4 group/row2"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <motion.div
          className="flex group-hover/row2:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
