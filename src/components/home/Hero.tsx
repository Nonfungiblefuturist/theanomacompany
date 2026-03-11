import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="section-card relative overflow-hidden mx-[6px] mt-[6px]"
      style={{ borderRadius: "20px", minHeight: "calc(100vh - 12px)" }}
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero-bg.mov"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light scrim for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Bottom text bar — parallax effect on scroll */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none px-6 md:px-10 pb-8 md:pb-12"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: THE ANOMA COMPANY — big */}
          <h1
            className="font-bold text-foreground select-none leading-[0.9]"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              letterSpacing: "-0.05em",
            }}
          >
            THE ANOMA<br />COMPANY
          </h1>

          {/* Right: tagline + description */}
          <div className="md:text-right md:max-w-[420px]">
            <p
              className="font-medium text-foreground"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Everything else is noise.
            </p>
            <p
              className="text-foreground/50 mt-3"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                lineHeight: 1.6,
              }}
            >
              We're an AI-first cinematic production studio dedicated to crafting bold, immersive experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
