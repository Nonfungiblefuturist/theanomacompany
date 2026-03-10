import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatsCounter from "@/components/shared/StatsCounter";
import { stats } from "@/data/stats";

const whiteWords = "We blend cinematic vision with AI-native craft, transforming bold ideas".split(" ");
const grayWords = "into immersive brand experiences, precision-engineered campaigns, and standout digital content.".split(" ");

const AboutPreview = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-24 md:py-32">
      {/* Top row: "About us" label left, two-tone paragraph right — same line */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-6 md:gap-12">
        <ScrollReveal type="fade-up">
          <p className="text-sm text-muted-foreground">About us</p>
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

            <ScrollReveal type="fade-up" delay={0.5}>
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 text-sm font-medium mt-6 px-5 py-2.5 rounded-[10px] border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                More about us <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <ScrollReveal type="scale-in">
            <div className="rounded-2xl overflow-hidden h-full min-h-[280px] max-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                alt="The Anoma Company studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
