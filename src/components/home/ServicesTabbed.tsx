import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const services = [
  {
    num: "01",
    title: "AI Solutions",
    desc: "Custom AI tools, autonomous agents, and platforms that automate workflows and solve real operational problems. From chatbots to scheduling engines.",
    timeline: "2 – 6 weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    num: "02",
    title: "Creative Campaigns",
    desc: "Identity systems, campaign visuals, pitch decks, and packaging — crafted with AI-enhanced creative pipelines for speed and precision.",
    timeline: "2 – 4 weeks",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    num: "03",
    title: "AI Video Production",
    desc: "Cinematic commercials, music videos, and animated spots — from storyboard to final cut using hybrid AI + live-action workflows.",
    timeline: "3 – 8 weeks",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  },
];

const ServicesTabbed = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <ScrollReveal type="fade-up">
            <p className="text-sm text-muted-foreground mb-4">Services</p>
          </ScrollReveal>
          <ScrollReveal type="blur-fade">
            <h2
              className="text-foreground font-semibold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              What We Offer.
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              Three verticals. One integrated pipeline.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: numbered list */}
          <div>
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left py-6 border-t border-border flex items-start justify-between gap-4 transition-all duration-300 ${
                  active === i
                    ? "opacity-100 bg-foreground/[0.03] border-l-2 border-l-primary pl-4 -ml-4"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex-1">
                  <span className="text-muted-foreground text-sm">{s.num}</span>
                  <h3 className="font-medium text-xl text-foreground mt-1">{s.title}</h3>
                  {/* Description + timeline only for active */}
                  <AnimatePresence mode="wait">
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-muted-foreground mt-3" style={{ lineHeight: 1.7 }}>
                          {s.desc}
                        </p>
                        <div className="mt-3">
                          <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Timeline</span>
                          <p className="text-sm text-foreground font-medium mt-1">{s.timeline}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="text-foreground/50 text-lg mt-1">→</span>
              </button>
            ))}

            <ScrollReveal type="fade-up" delay={0.3}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-foreground transition-colors mt-6"
              >
                Get in touch <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: cross-fade image — sticky */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative sticky top-24">
            {services.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400"
                style={{ opacity: active === i ? 1 : 0 }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabbed;
