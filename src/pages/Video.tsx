import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import VideoEmbed from "@/components/site/VideoEmbed";
import ScrollReveal from "@/components/site/ScrollReveal";

const CATEGORIES = [
  {
    slug: "storyboards",
    title: "Storyboards",
    description: "Pre-visualization and narrative design for every frame.",
    type: "images" as const,
  },
  {
    slug: "showreel",
    title: "Showreel & Full-Length Ads",
    description: "Our complete showreel and full-length commercial work.",
    type: "video" as const,
  },
  {
    slug: "music-video",
    title: "Music Video",
    description: "Cinematic music video production blending live-action and AI.",
    type: "video" as const,
  },
  {
    slug: "animated",
    title: "Animated 30-Seconder",
    description: "Punchy 30-second animated spots for social and broadcast.",
    type: "video" as const,
  },
];

const Video = () => (
  <SiteLayout>
    {/* Hero with showreel placeholder */}
    <section className="relative flex h-[70vh] items-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay muted loop playsInline
        aria-hidden="true"
      >
        <source src="SHOWREEL_URL" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_3%)] via-[hsl(0_0%_3%/0.4)] to-transparent" />
      <div className="relative z-10 px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-playfair text-5xl text-[hsl(0_0%_96%)] md:text-6xl">Video Production</h1>
          <p className="mt-4 max-w-xl font-inter text-lg text-[hsl(0_0%_67%)]">
            From storyboard to screen. AI-accelerated cinema.
          </p>
        </div>
      </div>
    </section>

    {/* Category sections */}
    <section className="mx-auto max-w-7xl space-y-20 px-6 py-24">
      {CATEGORIES.map((cat, i) => (
        <ScrollReveal key={cat.slug} delay={i * 100}>
          <div>
            <h2 className="font-playfair text-3xl text-[hsl(0_0%_96%)]">{cat.title}</h2>
            <p className="mt-2 font-inter text-[hsl(0_0%_67%)]">{cat.description}</p>

            {cat.type === "images" ? (
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="aspect-[4/3] rounded-lg bg-[hsl(0_0%_8%)] flex items-center justify-center">
                    <span className="font-jetbrains text-[10px] uppercase tracking-widest text-[hsl(0_0%_25%)]">Frame {n}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <VideoEmbed title={cat.title} />
              </div>
            )}

            <Link
              to={`/video/${cat.slug}`}
              className="mt-4 inline-flex items-center gap-1 font-inter text-sm text-[hsl(0_0%_96%)] transition-colors hover:text-[hsl(193_100%_43%)]"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </section>
  </SiteLayout>
);

export default Video;
