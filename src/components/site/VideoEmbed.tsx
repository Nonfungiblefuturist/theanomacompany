interface VideoEmbedProps {
  src?: string;
  title?: string;
  poster?: string;
}

const VideoEmbed = ({ src, title = "Video", poster }: VideoEmbedProps) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[hsl(0_0%_5%)]">
    {src ? (
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
    ) : (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-jetbrains text-xs uppercase tracking-widest text-[hsl(0_0%_25%)]">
          {title} — Video Placeholder
        </span>
      </div>
    )}
  </div>
);

export default VideoEmbed;
