import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatsCounter from "@/components/shared/StatsCounter";
import { stats } from "@/data/stats";

const whiteWords = "We blend cinematic vision with AI-native craft, transforming bold ideas".split(" ");
const grayWords = "into immersive brand experiences, precision-engineered campaigns, and standout digital content.".split(" ");

const AboutPreview = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Dot label + offset paragraph */}
      <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr] gap-6 lg:gap-12">
        {/* Left: label */}
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            About us
          </p>
        </ScrollReveal>

        {/* Right: two-tone large paragraph — word-by-word */}
        <ScrollReveal type="blur-fade">
          <p
            className="font-medium"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)", lineHeight: 1.25, letterSpacing: "-0.02em" }}
          >
            {whiteWords.map((w, i) => (
              <span key={`w-${i}`} className="text-foreground">{w} </span>
            ))}
            {grayWords.map((w, i) => (
              <span key={`g-${i}`} className="text-muted-foreground">{w} </span>
            ))}
          </p>
        </ScrollReveal>
      </div>

      {/* Stats left + Image right */}
      <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-12 lg:gap-16 mt-16 items-start">
        {/* Left: Vertical stats */}
        <div>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} type="fade-up" delay={0.1 + i * 0.1}>
              <div className={`py-6 ${i > 0 ? "border-t border-border" : ""}`}>
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

        {/* Right: Image — contained, not oversized */}
        <ScrollReveal type="scale-in">
          <div className="aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden">
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
  </section>
);

export default AboutPreview;
