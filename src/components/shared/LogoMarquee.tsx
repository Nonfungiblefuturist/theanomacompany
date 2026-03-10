const logos = [
  "Runway", "Midjourney", "Pika Labs", "Claude", "Stable Diffusion",
  "Eleven Labs", "Kling AI", "Luma AI", "Suno", "KREA",
  "Cursor", "Freepik", "Minimax",
];

const LogoMarquee = () => (
  <div className="relative overflow-hidden py-8">
    {/* Gradient masks */}
    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

    <div className="flex animate-marquee whitespace-nowrap">
      {[...logos, ...logos].map((name, i) => (
        <span
          key={i}
          className="mx-8 text-sm uppercase tracking-[0.15em] text-muted-foreground/50 font-medium select-none"
        >
          {name}
        </span>
      ))}
    </div>
  </div>
);

export default LogoMarquee;
