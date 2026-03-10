import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/shared/ScrollReveal";

const socials = [
  { label: "Twitter / X", href: siteConfig.socials.twitter },
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

const CTABand = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <ScrollReveal type="fade-up">
        <div
          className="rounded-2xl border-2 border-cosmic/40 overflow-hidden"
          style={{ background: "hsl(var(--card))" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[500px]">
            {/* Left column */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <h2
                className="text-foreground font-semibold"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Let's Build Something.
              </h2>

              <p className="text-muted-foreground mt-4 text-base max-w-md" style={{ lineHeight: 1.7 }}>
                Ready to bring your next project to life with AI-first creative production? Let's talk.
              </p>

              <Link
                to="/contact"
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get in touch
                <span>→</span>
              </Link>

              <div className="border-t border-border mt-8 pt-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
                <p className="text-sm text-muted-foreground mt-1">{siteConfig.phone}</p>
              </div>

              <div className="border-t border-border mt-6 pt-6 flex flex-wrap gap-5">
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
            </div>

            {/* Right column — dark card with brand text */}
            <div className="hidden lg:flex relative rounded-2xl m-3 overflow-hidden items-center justify-center" style={{ background: "hsl(0 0% 5%)" }}>
              {/* Ambient gradient overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: "var(--gradient-spectral)" }}
              />
              <div className="relative z-10 text-center px-8">
                <p
                  className="font-bold text-foreground/80 uppercase select-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 4rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  The Anoma<br />Company
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-4">
                  AI-First Creative Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABand;
