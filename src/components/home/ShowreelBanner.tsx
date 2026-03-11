import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const ShowreelBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayShowreel = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.muted = false;
      video.loop = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.play();
    setIsPlaying(false);
  };

  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
      <ScrollReveal type="fade-up">
        <div
          className="relative w-full overflow-hidden rounded-[20px] cursor-pointer group"
          style={{
            aspectRatio: isPlaying ? "16 / 9" : undefined,
            height: isPlaying ? "auto" : "clamp(450px, 65vh, 750px)",
            maxHeight: isPlaying ? "90vh" : undefined,
            transition: "all 0.6s ease",
          }}
          onClick={handlePlayShowreel}
        >
          {/* Video background */}
          <video
            ref={videoRef}
            src="/videos/showreel.mov"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: isPlaying ? "contain" : "cover", background: "#000" }}
          />

          {/* Dark overlay — fades out when playing */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "rgba(0,0,0,0.3)",
              opacity: isPlaying ? 0 : 1,
            }}
          />

          {/* Play / Pause button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 px-8 py-4 rounded-full text-foreground font-medium transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "16px",
              letterSpacing: "-0.02em",
              opacity: isPlaying ? 0.6 : 1,
            }}
          >
            {isPlaying ? (
              <>
                <Pause size={18} fill="currentColor" />
                Pause
              </>
            ) : (
              <>
                <Play size={18} fill="currentColor" />
                Play Showreel
              </>
            )}
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ShowreelBanner;
