const TripleVideoPreview = ({ videos, className = "" }: { videos: string[]; className?: string }) => (
  <div className={`flex gap-1 w-full h-full ${className}`}>
    {videos.slice(0, 3).map((src, i) => (
      <video
        key={i}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="flex-1 h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ minWidth: 0 }}
      />
    ))}
  </div>
);

export default TripleVideoPreview;
