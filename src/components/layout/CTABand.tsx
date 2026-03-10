import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CTABand = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
      <ScrollReveal type="blur-fade">
        <h2
          className="font-['Anta'] text-foreground"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em" }}
        >
          Let's Build Something.
        </h2>
      </ScrollReveal>
      <ScrollReveal type="fade-up" delay={0.15}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="button-smooth font-['Anta'] text-sm px-8 py-3 rounded-full text-primary-foreground"
            style={{ background: "var(--gradient-spectral)" }}
          >
            Get In Touch
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABand;
