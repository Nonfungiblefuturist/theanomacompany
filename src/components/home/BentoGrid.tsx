import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import LogoMarquee from "@/components/shared/LogoMarquee";

const BentoGrid = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
        <div>
          <ScrollReveal type="fade-up">
            <p className="text-sm text-muted-foreground mb-4">Benefits</p>
          </ScrollReveal>
          <ScrollReveal type="blur-fade">
            <h2
              className="text-foreground font-semibold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Why Choose Anoma.
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              What sets us apart.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal type="fade-up" delay={0.15}>
          <Link to="/contact" className="text-sm text-primary hover:text-foreground transition-colors mt-4 md:mt-0">
            Let's talk →
          </Link>
        </ScrollReveal>
      </div>

      {/* 3-column asymmetric bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px]">
        {/* Col 1 — tall card spanning 2 rows */}
        <ScrollReveal type="fade-up" delay={0}>
          <div
            className="relative rounded-2xl border border-border overflow-hidden md:row-span-2 min-h-[420px] md:min-h-[500px]"
            style={{ background: "hsl(var(--card))" }}
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1000&fit=crop"
              alt="AI-Native Pipeline"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              loading="lazy"
            />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="font-bold text-foreground/10 select-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                >
                  AI-Native<br />Pipeline
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">AI-Native Pipeline</h3>
                <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
                  Every project built on AI from day one — not bolted on after.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Col 2, Row 1 — 24/7 Support */}
        <ScrollReveal type="fade-up" delay={0.05}>
          <div
            className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[220px]"
            style={{ background: "hsl(var(--card))" }}
          >
            <span className="text-2xl mb-4">✉</span>
            <h3 className="font-semibold text-lg text-foreground">24/7 Support</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
              Round-the-clock communication. We're always reachable during production.
            </p>
          </div>
        </ScrollReveal>

        {/* Col 3, Row 1 — Seamless Collaboration */}
        <ScrollReveal type="fade-up" delay={0.08}>
          <div
            className="relative rounded-2xl border border-border p-6 md:p-8 overflow-hidden min-h-[220px]"
            style={{ background: "hsl(var(--card))" }}
          >
            <h3 className="font-semibold text-lg text-foreground">Seamless Collaboration</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
              Real-time reviews, instant feedback loops, and transparent progress tracking.
            </p>
          </div>
        </ScrollReveal>

        {/* Col 2, Row 2 — Fast Turnarounds (tall with image) */}
        <ScrollReveal type="fade-up" delay={0.1}>
          <div
            className="relative rounded-2xl border border-border overflow-hidden min-h-[260px]"
            style={{ background: "hsl(var(--card))" }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
              alt="Fast Turnarounds"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full bg-gradient-to-t from-card via-card/70 to-transparent">
              <h3 className="font-semibold text-lg text-foreground">Fast Turnarounds</h3>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
                3–5x faster than traditional production without sacrificing quality.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Col 3, Row 2 — Future-Ready Solutions */}
        <ScrollReveal type="fade-up" delay={0.12}>
          <div
            className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[220px]"
            style={{ background: "hsl(var(--card))" }}
          >
            <span className="text-2xl mb-4">✦</span>
            <h3 className="font-semibold text-lg text-foreground">Future-Ready Solutions</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
              We build with tomorrow's tech today, so your content never feels dated.
            </p>
          </div>
        </ScrollReveal>

        {/* Full-width bottom card — Proven Expertise */}
        <ScrollReveal type="fade-up" delay={0.14}>
          <div
            className="md:col-span-3 rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ background: "hsl(var(--card))" }}
          >
            <div>
              <span className="text-2xl mb-2 block">◇</span>
              <h3 className="font-semibold text-lg text-foreground">Proven Expertise</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg" style={{ lineHeight: 1.7 }}>
                29+ projects delivered across 3 countries with 100% client retention. Cinema-grade output, every time.
              </p>
            </div>
            <Link
              to="/work"
              className="text-sm text-primary hover:text-foreground transition-colors shrink-0"
            >
              See our work →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Stat + Avatars row */}
      <ScrollReveal type="fade-up" delay={0.2}>
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground font-medium">200+ Satisfied Clients</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Logo marquee */}
      <div className="mt-8">
        <LogoMarquee />
      </div>
    </div>
  </section>
);

export default BentoGrid;
