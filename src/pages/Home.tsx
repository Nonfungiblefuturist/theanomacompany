import SiteLayout from "@/components/site/SiteLayout";
import PillarCard from "@/components/site/PillarCard";
import ScrollReveal from "@/components/site/ScrollReveal";

const Home = () => (
  <SiteLayout>
    {/* Hero */}
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Video bg */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="HERO_VIDEO_URL" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)]" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="font-playfair text-[clamp(3rem,6vw,5rem)] leading-[1.1] text-[hsl(0_0%_96%)]">
          Where AI Meets Cinema.
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-inter text-lg text-[hsl(0_0%_67%)]">
          AI-powered production for brands that move culture.
        </p>
        <a
          href="#pillars"
          className="mt-8 inline-block rounded-lg bg-[hsl(0_0%_96%)] px-8 py-3 font-inter text-sm font-medium text-[hsl(0_0%_3%)] transition-colors hover:bg-[hsl(330_85%_52%)] hover:text-white"
        >
          Explore Our Work →
        </a>
      </div>
    </section>

    {/* Three Pillars */}
    <section id="pillars" className="mx-auto max-w-7xl px-6 py-24">
      <ScrollReveal>
        <span className="font-jetbrains text-xs uppercase tracking-[0.2em] text-[hsl(0_0%_40%)]">
          WHAT WE DO
        </span>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <PillarCard
          title="Solutions"
          description="AI-powered tools and agents that solve real business problems."
          href="/solutions"
          delay={0}
        />
        <PillarCard
          title="Branding"
          description="Logos, websites, campaigns, and pitch decks that make you unforgettable."
          href="/branding"
          delay={100}
        />
        <PillarCard
          title="Video Production"
          description="Storyboards to showreels. Ads to music videos. Cinema-grade, AI-accelerated."
          href="/video"
          delay={200}
        />
      </div>
    </section>

    {/* Contact CTA */}
    <section className="border-t border-[hsl(0_0%_13%)] px-6 py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-playfair text-4xl text-[hsl(0_0%_96%)]">Have a story to tell?</h2>
          <a
            href="mailto:surzayon@theanoma.company"
            className="mt-4 inline-block bg-gradient-to-r from-[hsl(193_100%_43%)] to-[hsl(330_85%_52%)] bg-clip-text font-inter text-lg text-transparent decoration-2 underline-offset-4 hover:underline"
          >
            surzayon@theanoma.company
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:surzayon@theanoma.company"
              className="rounded-lg bg-[hsl(0_0%_96%)] px-6 py-3 font-inter text-sm font-medium text-[hsl(0_0%_3%)] transition-colors hover:bg-[hsl(330_85%_52%)] hover:text-white"
            >
              Get in Touch →
            </a>
            <a
              href="https://calendly.com/surzayon/the-anoma-company-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[hsl(0_0%_20%)] px-6 py-3 font-inter text-sm text-[hsl(0_0%_96%)] transition-colors hover:border-[hsl(193_100%_43%)]"
            >
              Book a Call →
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </SiteLayout>
);

export default Home;
