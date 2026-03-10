import { useState } from "react";
import { Play } from "lucide-react";
import VideoLightbox from "@/components/shared/VideoLightbox";
import ScrollReveal from "@/components/shared/ScrollReveal";

const ShowreelBanner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
        <ScrollReveal type="fade-up">
          <div
            className="relative w-full overflow-hidden rounded-[20px] cursor-pointer group"
            style={{ height: "clamp(300px, 50vh, 600px)" }}
            onClick={() => setLightboxOpen(true)}
          >
            {/* Placeholder background — replace with <video> when assets are ready */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #111 0%, #0a0a0a 50%, #151515 100%)",
              }}
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.3)" }}
            />

            {/* Play Showreel button */}
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 px-8 py-4 rounded-full text-foreground font-medium transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15"
              style={{
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              <Play size={18} fill="currentColor" />
              Play Showreel
            </button>
          </div>
        </ScrollReveal>
      </section>

      <VideoLightbox
        videoUrl="/videos/showreel.mp4"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default ShowreelBanner;
