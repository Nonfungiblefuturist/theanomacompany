import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const pillars = [
  {
    num: "01",
    title: "Solutions",
    desc: "AI-powered tools built to solve real problems.",
    image: "/images/ai-chatbot.webp",
    filter: "Solutions",
  },
  {
    num: "02",
    title: "Branding",
    desc: "Identity systems and creative campaigns.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=800&fit=crop&fm=webp&q=75",
    filter: "Branding",
  },
  {
    num: "03",
    title: "Video Production",
    desc: "From storyboard to final cut.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=800&fit=crop&fm=webp&q=75",
    filter: "Video Production",
  },
];

const ThreePillars = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader title="What We Do." subtitle="Three verticals. One integrated pipeline." dotLabel="What we do" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <ScrollReveal key={p.title} type="slide-up" delay={i * 0.15} viewportAmount={0.15}>
            <Link
              to={`/work?filter=${encodeURIComponent(p.filter)}`}
              className="group relative block overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-500 hover-lift-smooth"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium">{p.num}</span>
                  <h3 className="font-semibold text-2xl text-foreground mt-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                  <span className="inline-block mt-3 text-sm text-foreground/70 group-hover:text-primary transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ThreePillars;
