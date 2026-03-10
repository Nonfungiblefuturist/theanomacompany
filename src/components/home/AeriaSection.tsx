const AeriaSection = () => {
  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
      <div className="p-[6px]">
        <a
          href="https://www.instagram.com/be_aeria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full rounded-2xl overflow-hidden cursor-pointer group no-underline"
        >
          {/* Looping video background — no audio, no controls */}
          <video
            src="/videos/aeria-intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover object-center transition-transform duration-[600ms] group-hover:scale-[1.03]"
            style={{ height: "clamp(400px, 60vh, 700px)" }}
          />

          {/* Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row md:justify-between md:items-end p-6 md:p-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }}
          >
            <div>
              <span className="flex items-center gap-2 text-[13px] text-white/60 uppercase tracking-wide mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "hsl(var(--cosmic))" }}
                />
                Introducing
              </span>
              <h2
                className="font-semibold text-white leading-[1.1] mb-2"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Aeria.
              </h2>
              <p className="text-[15px] text-white/50">
                AI influencer. Built by Anoma.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="inline-block text-sm font-medium text-white border border-white/30 px-5 py-2.5 rounded-[10px] transition-all duration-300 whitespace-nowrap group-hover:bg-white group-hover:text-[#0a0a0a] group-hover:border-white">
                Follow on Instagram ↗
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AeriaSection;
