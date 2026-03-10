import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/shared/ScrollReveal";

const socials = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "Twitter / X", href: siteConfig.socials.twitter },
];

const CTABand = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text + contact */}
        <div>
          <ScrollReveal type="blur-fade">
            <h2
              className="text-foreground font-semibold"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              Let's Build Something.
            </h2>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.1}>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal type="fade-up" delay={0.2}>
            <Link
              to="/contact"
              className="inline-block mt-8 button-smooth text-sm font-medium px-8 py-3 rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-spectral)" }}
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>

        {/* Right: large studio name */}
        <ScrollReveal type="blur-fade" delay={0.2}>
          <div className="hidden lg:block">
            <p
              className="font-bold text-foreground/10 uppercase select-none text-right"
              style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}
            >
              The Anoma<br />Company
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CTABand;
