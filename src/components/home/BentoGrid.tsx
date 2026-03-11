import ScrollReveal from "@/components/shared/ScrollReveal";
import FlipButton from "@/components/shared/FlipButton";
import LogoMarquee from "@/components/shared/LogoMarquee";


const BentoGrid = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
        <div>
          <ScrollReveal type="fade-up">
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
              Benefits
            </p>
          </ScrollReveal>
          <ScrollReveal type="blur-fade">
            <h2
              className="font-semibold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              <span className="text-foreground">Why Choose </span>
              <span style={{ color: "hsl(var(--cosmic))" }}>Anoma.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              What sets us apart.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal type="fade-up" delay={0.15}>
          <FlipButton text="Let's talk" href="/contact" variant="cosmic" />
        </ScrollReveal>
      </div>

      {/* 3-column bento grid — desktop */}
      <ScrollReveal type="fade-up">
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "200px 260px 160px",
            gap: "12px",
          }}
        >
          {/* Card 1 — TALL left, spans 2 rows — AI-Native Pipeline */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
              gridColumn: "1",
              gridRow: "1 / 3",
            }}
          >
            <img
              src="/images/cutting-edge-creativity.png"
              alt="Cutting-Edge Creativity"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
              loading="lazy"
            />
            <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full">
              <h3
                className="select-none"
                style={{
                  fontSize: "clamp(2rem, 3vw, 3.5rem)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Cutting-Edge{" "}
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Creativity</span>
              </h3>
              <div>
                <h4 className="font-semibold text-lg text-foreground">AI-Native Pipeline</h4>
                <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>
                  Every project built on AI from day one — not bolted on after.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Top middle — 24/7 Support */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src="/images/bento-support.webp"
              alt="24/7 Support"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-xl text-foreground">24/7 Support</h4>
                <span className="text-muted-foreground">⏱</span>
              </div>
              <p className="text-sm text-muted-foreground" style={{ lineHeight: 1.5 }}>
                Round-the-clock communication with guaranteed 24-hour response times. Your project never stalls.
              </p>
            </div>
          </div>

          {/* Card 3 — Top right, spans 2 rows — Seamless Collaboration */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
              gridColumn: "3",
              gridRow: "1 / 3",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop&fm=webp&q=75"
              alt="Seamless Collaboration"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-medium text-xl text-foreground mb-2">Seamless Collaboration</h4>
                <p className="text-sm text-muted-foreground" style={{ lineHeight: 1.5 }}>
                  Real-time updates, transparent feedback loops, and efficient revision cycles. We work as an extension of your team.
                </p>
              </div>
              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--cosmic))" }} />
                  <span className="text-xs text-muted-foreground">Live sync</span>
                </div>
                <div className="h-1 rounded-full bg-border overflow-hidden">
                  <div className="h-full w-3/4 rounded-full" style={{ background: "hsl(var(--cosmic))" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Middle center — Fast Turnarounds */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&fm=webp&q=75"
              alt="Fast Turnarounds"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
              <h4 className="font-semibold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>
                Fast & Efficient Turnarounds
              </h4>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.5 }}>
                3–5x faster than traditional production without sacrificing quality. AI-accelerated workflows deliver on deadline, every time.
              </p>
            </div>
          </div>

          {/* Card 5 — Bottom left */}
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col justify-center"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-xl text-foreground">Proven Expertise</h4>
              <span className="text-muted-foreground">◇</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.5 }}>
              29+ projects delivered across video, branding, and AI solutions — with 100% client retention.
            </p>
          </div>

          {/* Card 6 — Bottom right, spans 2 columns */}
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col justify-center"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.06)",
              gridColumn: "2 / 4",
            }}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-xl text-foreground">Future-Ready Solutions</h4>
              <span className="text-muted-foreground">✦</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.5 }}>
              Our designs grow with your brand, ensuring long-term success and adaptability. Built to scale, engineered to last.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {[
          { title: "AI-Native Pipeline", desc: "Every project built on AI from day one — not bolted on after.", icon: "" },
          { title: "24/7 Support", desc: "Round-the-clock communication with guaranteed 24-hour response times.", icon: "⏱" },
          { title: "Seamless Collaboration", desc: "Real-time updates, transparent feedback loops, and efficient revision cycles.", icon: "" },
          { title: "Fast & Efficient Turnarounds", desc: "3–5x faster than traditional production without sacrificing quality.", icon: "" },
          { title: "Proven Expertise", desc: "29+ projects delivered across video, branding, and AI solutions.", icon: "◇" },
          { title: "Future-Ready Solutions", desc: "Our designs grow with your brand, ensuring long-term success and adaptability.", icon: "✦" },
        ].map((card, i) => (
          <ScrollReveal key={i} type="fade-up" delay={i * 0.05}>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-lg text-foreground">{card.title}</h4>
                {card.icon && <span className="text-muted-foreground">{card.icon}</span>}
              </div>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Stat + Avatars + Logo marquee row */}
      <ScrollReveal type="fade-up" delay={0.2}>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">100+ Satisfied Clients</p>
          </div>
          <div className="flex-1 max-w-[500px]">
            <LogoMarquee />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BentoGrid;
