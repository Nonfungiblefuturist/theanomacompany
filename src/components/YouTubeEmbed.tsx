import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title, className = "" }: YouTubeEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  if (isPlaying) {
    return (
      <div className={`relative w-full ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
    >
      <img 
        src={thumbnailUrl} 
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
        <div className="bg-accent/90 hover:bg-accent text-accent-foreground rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;