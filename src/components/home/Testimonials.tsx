import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="flex-none w-[350px] md:w-[420px] p-6 rounded-lg border border-border bg-card mx-3">
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
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <SectionHeader title="Testimonials." subtitle="What our clients say." dotLabel="Testimonials" />
      </div>

      {/* Row 1 — scrolls left */}
      <ScrollReveal type="fade-up">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Row 2 — scrolls right */}
      <ScrollReveal type="fade-up" delay={0.1}>
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            className="flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Testimonials;
