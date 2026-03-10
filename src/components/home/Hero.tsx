import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    {/* Background image + overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-5 max-w-4xl">
      <ScrollReveal type="blur-fade">
        <h1
          className="font-['Anta'] text-foreground"
          style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}
        >
          Everything is noise.
        </h1>
      </ScrollReveal>

      <ScrollReveal type="fade-up" delay={0.1}>
        <p className="mt-4 text-muted-foreground text-lg md:text-xl" style={{ lineHeight: 1.7, fontWeight: 300 }}>
          We make the signal. AI-first creative studio.
        </p>
      </ScrollReveal>

      <ScrollReveal type="fade-up" delay={0.2}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/work"
            className="font-['Anta'] text-sm px-6 py-3 rounded-full border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="button-smooth font-['Anta'] text-sm px-6 py-3 rounded-full text-primary-foreground"
            style={{ background: "var(--gradient-spectral)" }}
          >
            Get In Touch
          </Link>
        </div>
      </ScrollReveal>
    </div>

    {/* Bottom elements */}
    <span className="absolute bottom-6 left-6 text-xs text-muted-foreground">© 2025</span>
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="text-foreground/40" size={20} />
    </motion.div>
  </section>
);

export default Hero;
