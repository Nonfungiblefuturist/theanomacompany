import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    num: "01",
    title: "Solutions",
    desc: "Custom AI tools, agents, and platforms that automate workflows and solve real operational problems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    num: "02",
    title: "Branding",
    desc: "Identity systems, campaign visuals, and pitch decks crafted with AI-enhanced creative pipelines.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    num: "03",
    title: "Video Production",
    desc: "Cinematic commercials, music videos, and animated spots — from storyboard to final cut.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  },
];

const ServicesTabbed = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader title="What We Do." subtitle="Three verticals. One integrated pipeline." dotLabel="What We Do" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-0">
            {services.map((s, i) => (
              <ScrollReveal key={i} type="fade-up" delay={i * 0.1}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-6 border-t border-border group transition-colors duration-300 ${
                    active === i ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className="text-primary text-sm font-medium">{s.num}</span>
                  <h3 className="font-semibold text-xl md:text-2xl text-foreground mt-1">{s.title}</h3>
                  <AnimatePresence mode="wait">
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground text-sm mt-2 overflow-hidden"
                        style={{ lineHeight: 1.7 }}
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal type="fade-up" delay={0.2}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
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
