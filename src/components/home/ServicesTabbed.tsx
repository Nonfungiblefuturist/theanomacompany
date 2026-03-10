import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    num: "01",
    title: "Solutions",
    desc: "Custom AI tools, autonomous agents, and platforms that automate workflows and solve real operational problems. From chatbots to scheduling engines.",
    timeline: "2 – 6 weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    num: "02",
    title: "Branding",
    desc: "Identity systems, campaign visuals, pitch decks, and packaging — crafted with AI-enhanced creative pipelines for speed and precision.",
    timeline: "2 – 4 weeks",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    num: "03",
    title: "Video Production",
    desc: "Cinematic commercials, music videos, and animated spots — from storyboard to final cut using hybrid AI + live-action workflows.",
    timeline: "3 – 8 weeks",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  },
];

const ServicesTabbed = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <SectionHeader
          title="What We Offer."
          subtitle="Three verticals. One integrated pipeline."
          dotLabel="Services"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: numbered list + description */}
          <div>
            <div className="space-y-0">
              {services.map((s, i) => (
                <ScrollReveal key={i} type="fade-up" delay={i * 0.1}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left py-5 border-t border-border transition-colors duration-300 ${
                      active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <span className="text-primary text-sm font-medium">{s.num}</span>
                    <h3 className="font-semibold text-xl md:text-2xl text-foreground mt-1">{s.title}</h3>
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* Description + timeline for active service */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-border"
              >
                <p className="text-muted-foreground text-sm" style={{ lineHeight: 1.7 }}>
                  {services[active].desc}
                </p>
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Timeline</span>
                  <p className="text-sm text-foreground font-medium mt-1">{services[active].timeline}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <ScrollReveal type="fade-up" delay={0.3}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-foreground transition-colors mt-6"
              >
                Get in touch <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: cross-fade image */}
          <ScrollReveal type="fade-up" delay={0.2}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative sticky top-32">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={services[active].image}
                  alt={services[active].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabbed;
