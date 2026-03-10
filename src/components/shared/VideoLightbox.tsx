import { useState, useRef, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

interface VideoLightboxProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoLightbox = ({ videoUrl, isOpen, onClose }: VideoLightboxProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-[1200px]"
        style={{ aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted={isMuted}
          playsInline
          className="w-full h-full object-contain rounded-xl"
        />

        {/* Mute toggle */}
        <button
          onClick={() => {
            setIsMuted(!isMuted);
            if (videoRef.current) videoRef.current.muted = !isMuted;
          }}
          className="absolute bottom-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-white/10"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-white/10"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoLightbox;
