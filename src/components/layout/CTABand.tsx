import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FlipButton from "@/components/shared/FlipButton";

const socials = [
  { label: "Twitter / X", href: siteConfig.socials.twitter },
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

const CTABand = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <ScrollReveal type="fade-up">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "hsl(var(--card))", border: "2px solid hsl(var(--cosmic) / 0.4)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[500px]">
            {/* Left column */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <h2
                className="text-foreground font-bold"
                style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Let's Build Something.
              </h2>

              <p className="text-muted-foreground mt-4 text-base max-w-md" style={{ lineHeight: 1.7 }}>
                Ready to bring your next project to life with AI-first creative production? Let's talk.
              </p>

              <div className="mt-8">
                <FlipButton text="Get in touch" href="/contact" className="w-full justify-center py-4 rounded-2xl" />
              </div>

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

            {/* Right column — dark card with video placeholder */}
            <div className="hidden lg:flex relative rounded-2xl m-3 overflow-hidden flex-col justify-end" style={{ background: "rgb(15,15,15)" }}>
              {/* Ambient gradient placeholder for video */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #111 100%)" }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "var(--gradient-spectral)" }}
              />
              <div className="relative z-10 p-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  AI-First Creative Studio
                </p>
                <p
                  className="font-bold text-foreground/80 uppercase select-none"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  The Anoma<br />Company
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
