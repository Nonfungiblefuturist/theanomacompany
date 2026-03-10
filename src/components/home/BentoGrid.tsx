import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import LogoMarquee from "@/components/shared/LogoMarquee";

const benefits = [
  {
    title: "AI-Native Pipeline",
    desc: "Every project built on AI from day one — not bolted on after.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Cinematic Quality",
    desc: "Cinema-grade output. PhotoVogue-featured visuals. No compromises on craft.",
  },
  {
    title: "Fast Turnaround",
    desc: "3–5x faster than traditional production without sacrificing quality.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    title: "End-to-End Production",
    desc: "Strategy, production, and delivery — all under one roof.",
  },
  {
    title: "Hybrid Workflows",
    desc: "We know when to shoot and when to generate. The art is in the blend.",
  },
  {
    title: "Creative Direction",
    desc: "AI handles execution. Humans steer the vision. Always.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=600&fit=crop", aspect: "aspect-[2/3]" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop", aspect: "aspect-[3/2]" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop", aspect: "aspect-[2/3]" },
];

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

      {/* Asymmetric bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ gridAutoRows: "minmax(200px, auto)" }}>
        {/* Card 1 — tall left with image */}
        <ScrollReveal type="fade-up" delay={0}>
          <div className="relative rounded-2xl border border-border overflow-hidden md:min-h-[440px]" style={{ background: "hsl(var(--card))" }}>
            <img src={benefits[0].image} alt={benefits[0].title} className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full bg-gradient-to-t from-card via-card/80 to-transparent">
              <h3 className="font-semibold text-xl text-foreground">{benefits[0].title}</h3>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[0].desc}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2 — top right */}
        <ScrollReveal type="fade-up" delay={0.05}>
          <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[200px]" style={{ background: "hsl(var(--card))" }}>
            <h3 className="font-semibold text-lg text-foreground">{benefits[1].title}</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[1].desc}</p>
          </div>
        </ScrollReveal>

        {/* Card 3 — end-to-end */}
        <ScrollReveal type="fade-up" delay={0.08}>
          <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[200px]" style={{ background: "hsl(var(--card))" }}>
            <h3 className="font-semibold text-lg text-foreground">{benefits[3].title}</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[3].desc}</p>
          </div>
        </ScrollReveal>

        {/* Card 4 — fast turnaround with image */}
        <ScrollReveal type="fade-up" delay={0.1}>
          <div className="relative rounded-2xl border border-border overflow-hidden min-h-[220px]" style={{ background: "hsl(var(--card))" }}>
            <img src={benefits[2].image} alt={benefits[2].title} className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full bg-gradient-to-t from-card via-card/80 to-transparent">
              <h3 className="font-semibold text-lg text-foreground">{benefits[2].title}</h3>
              <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[2].desc}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 5 — hybrid */}
        <ScrollReveal type="fade-up" delay={0.12}>
          <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[200px]" style={{ background: "hsl(var(--card))" }}>
            <h3 className="font-semibold text-lg text-foreground">{benefits[4].title}</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[4].desc}</p>
          </div>
        </ScrollReveal>

        {/* Card 6 — creative direction */}
        <ScrollReveal type="fade-up" delay={0.14}>
          <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-end min-h-[200px]" style={{ background: "hsl(var(--card))" }}>
            <h3 className="font-semibold text-lg text-foreground">{benefits[5].title}</h3>
            <p className="text-sm text-muted-foreground mt-2" style={{ lineHeight: 1.7 }}>{benefits[5].desc}</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Gallery row */}
      <ScrollReveal type="fade-up" delay={0.2}>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`${img.aspect} rounded-2xl overflow-hidden`}>
              <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Stat + Marquee */}
      <ScrollReveal type="fade-up" delay={0.3}>
        <div className="mt-12 text-center">
          <p className="text-4xl md:text-5xl font-bold text-foreground">200+</p>
          <p className="text-sm text-muted-foreground mt-2">Satisfied Clients</p>
        </div>
      </ScrollReveal>

      <div className="mt-8">
        <LogoMarquee />
      </div>
    </div>
  </section>
);

export default BentoGrid;
