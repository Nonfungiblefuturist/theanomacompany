import { siteConfig } from "@/data/siteConfig";

const Hero = () => (
  <section
    className="section-card relative overflow-hidden mx-[6px] mt-[6px]"
    style={{ borderRadius: "20px", minHeight: "calc(100vh - 12px)" }}
  >
    {/* Video background — no overlay */}
    <div className="absolute inset-0">
      <iframe
        src={`https://www.youtube.com/embed/${siteConfig.showreelYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.showreelYoutubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ border: 0 }}
        allow="autoplay; encrypted-media"
        title="Background video"
      />
      {/* Light scrim for text readability only */}
      <div className="absolute inset-0 bg-black/40" />
    </div>

    {/* Bottom text bar — tagline left, brand name right */}
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 md:px-10 pb-6 md:pb-10 pointer-events-none">
      {/* Left: tagline */}
      <p className="text-[13px] text-white/50">
        Everything is noise.
      </p>

      {/* Right: brand name + description */}
      <div className="text-right">
        <h1
          className="font-semibold text-white/90 hidden md:block"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          THE ANOMA COMPANY
        </h1>
        <h1
          className="font-semibold text-white/90 md:hidden"
          style={{
            fontSize: "clamp(1.5rem, 8vw, 3rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          THE ANOMA COMPANY
        </h1>
        <p className="text-white/50 text-sm mt-3 max-w-[400px] ml-auto" style={{ lineHeight: 1.6 }}>
          We're an AI-first cinematic production studio dedicated to crafting bold, immersive experiences.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
