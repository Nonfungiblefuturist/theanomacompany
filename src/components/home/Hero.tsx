import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

const Hero = () => (
  <section
    className="relative overflow-hidden mx-2 md:mx-3 mt-2 md:mt-3"
    style={{ borderRadius: "20px", minHeight: "calc(100vh - 24px)" }}
  >
    {/* Video background */}
    <div className="absolute inset-0">
      <iframe
        src={`https://www.youtube.com/embed/${siteConfig.showreelYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.showreelYoutubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ border: 0 }}
        allow="autoplay; encrypted-media"
        title="Background video"
      />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="relative z-10 flex items-center justify-center min-h-[inherit] text-center px-5">
      <div className="max-w-5xl">
        <ScrollReveal type="blur-fade">
          <h1
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            Everything is noise.
          </h1>
        </ScrollReveal>

        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl" style={{ lineHeight: 1.7 }}>
            We make the signal. AI-first creative studio.
          </p>
        </ScrollReveal>

        <ScrollReveal type="fade-up" delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/work"
              className="text-sm font-medium px-6 py-3 rounded-full border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="button-smooth text-sm font-medium px-6 py-3 rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-spectral)" }}
            >
              Get In Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>

    <span className="absolute bottom-6 left-6 text-xs text-muted-foreground z-10">© 2025</span>
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="text-foreground/40" size={20} />
    </motion.div>
  </section>
);

export default Hero;
