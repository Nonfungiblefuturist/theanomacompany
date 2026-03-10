import ScrollReveal from "@/components/shared/ScrollReveal";
import StatsCounter from "@/components/shared/StatsCounter";
import FlipButton from "@/components/shared/FlipButton";
import LogoMarquee from "@/components/shared/LogoMarquee";
import { stats } from "@/data/stats";

const whiteWords = "We blend cinematic vision with AI-native craft, transforming bold ideas".split(" ");
const grayWords = "into immersive brand experiences, precision-engineered campaigns, and standout digital content.".split(" ");

const avatarUrls = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
];

const AboutPreview = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-24 md:py-32">
      {/* Top row: "About us" label left, two-tone paragraph right */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-6 md:gap-12">
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            About us
          </p>
        </ScrollReveal>

        <ScrollReveal type="blur-fade">
          <p
            className="font-normal"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)", lineHeight: 1.3, letterSpacing: "-0.02em" }}
          >
            {whiteWords.map((w, i) => (
              <span key={`w-${i}`} className="text-foreground">{w} </span>
            ))}
            {grayWords.map((w, i) => (
              <span key={`g-${i}`} style={{ color: "rgb(117, 117, 117)" }}>{w} </span>
            ))}
          </p>
        </ScrollReveal>
      </div>

      {/* Stats + Image inner container */}
      <div className="mt-16 rounded-[20px] bg-card p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-6">
          {/* Left: Vertical stats */}
          <div className="p-4 md:p-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} type="fade-up" delay={0.1 + i * 0.1}>
                <div className={`py-5 ${i > 0 ? "border-t border-border" : ""}`}>
                  <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
                </div>
              </ScrollReveal>
            ))}

            {/* 100+ Satisfied Clients */}
            <ScrollReveal type="fade-up" delay={0.1 + stats.length * 0.1}>
              <div className="py-5 border-t border-border">
                <div className="flex items-center -space-x-2 mb-2">
                  {avatarUrls.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 object-cover"
                      style={{ borderColor: "hsl(var(--card))" }}
                      loading="lazy"
                    />
                  ))}
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-foreground"
                    style={{ backgroundColor: "hsl(var(--cosmic))", borderColor: "hsl(var(--card))", borderWidth: 2 }}
                  >
                    +
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  100<span className="text-muted-foreground">+</span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground uppercase tracking-widest">Satisfied Clients</p>
              </div>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.5}>
              <div className="mt-6">
                <FlipButton text="More about us" href="/studio" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <ScrollReveal type="scale-in">
            <div className="rounded-2xl overflow-hidden h-full min-h-[280px] max-h-[460px]">
              <img
                src="/images/studio-hero.jpg"
                alt="The Anoma Company studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
        </div>
      </div>

      {/* Client Marquee */}
      <div className="mt-8">
        <LogoMarquee />
      </div>
    </div>
  </section>
);

export default AboutPreview;
