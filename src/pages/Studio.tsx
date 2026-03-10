import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import ScrollReveal from "@/components/shared/ScrollReveal";

const Studio = () => (
  <div className="min-h-screen bg-background text-foreground">
    <NebulaEffects />
    <Navbar />
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal type="blur-fade">
          <h1 className="font-['Anta'] text-foreground" style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}>
            About Us.
          </h1>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Toronto-based AI-first creative studio. Building tools, brands, and films.
          </p>
        </ScrollReveal>
        <p className="mt-12 text-muted-foreground">Full studio page coming in Phase 2.</p>
      </div>
    </section>
    <CTABand />
    <Footer />
  </div>
);

export default Studio;
