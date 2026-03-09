import SiteLayout from "@/components/site/SiteLayout";
import ScrollReveal from "@/components/site/ScrollReveal";

const TOOLS = [
  "Runway", "Midjourney", "Kling AI", "Luma AI",
  "DaVinci Resolve", "After Effects", "Blender", "ElevenLabs",
];

const About = () => (
  <SiteLayout>
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <ScrollReveal>
        <h1 className="font-playfair text-5xl text-[hsl(0_0%_96%)] md:text-6xl">
          About The Anoma Company
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-10 space-y-6 font-inter text-[hsl(0_0%_67%)] leading-relaxed">
          <p>
            The Anoma Company is an AI-first cinematic production studio based in Toronto. We sit at the intersection of filmmaking, design, and artificial intelligence — building tools, brands, and stories that move culture forward.
          </p>
          <p>
            Our work spans branded content, commercial production, identity systems, and AI-powered software solutions. We believe the future of creative production is hybrid: human intuition amplified by machine capability.
          </p>
          <p>
            From concept to final delivery, every project we take on is designed to be unforgettable. We work with brands, artists, and institutions who share our conviction that the best creative work hasn't been made yet.
          </p>
        </div>
      </ScrollReveal>
    </section>

    {/* Tech marquee */}
    <section className="overflow-hidden border-t border-[hsl(0_0%_13%)] py-8">
      <div className="site-marquee">
        <div className="site-marquee-track">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} className="mx-8 whitespace-nowrap font-inter text-sm text-[hsl(0_0%_30%)]">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default About;
