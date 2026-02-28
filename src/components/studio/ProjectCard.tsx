import { useRef, useState, useCallback } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = ({ title, category, thumbnailUrl, videoUrl, link, className = "", style }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current && videoUrl) {
      if (!videoLoaded) {
        videoRef.current.src = videoUrl;
        setVideoLoaded(true);
      }
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl, videoLoaded]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`studio-card relative overflow-hidden block ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="project"
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="studio-card-img absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Video overlay */}
      {videoUrl && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[600ms] ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 35%, transparent 55%)",
        }}
      />

      {/* Info chip */}
      <div
        className={`studio-info-chip absolute bottom-4 left-4 z-10 px-[18px] py-[14px] rounded-lg transition-all duration-500 ease-out ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px] sm:opacity-0 sm:translate-y-[10px]"
        }`}
        style={{
          background: "rgba(60,60,55,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <p className="text-sm font-medium" style={{ color: "#f0efe8" }}>{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "#8a8a82" }}>{category}</p>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
