const clients = [
  "Claude", "Levi's", "Maia Vision", "Lincoln University",
  "George Brown College", "San Jose Quakes", "T Series",
];

const LogoMarquee = () => (
  <div className="relative overflow-hidden py-12 md:py-16">
    {/* Gradient masks */}
    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

    <p className="text-center text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground/50 mb-8 font-medium">
      Trusted by
    </p>

    <div className="flex animate-marquee whitespace-nowrap">
      {[...clients, ...clients, ...clients].map((name, i) => (
        <span
          key={i}
          className="mx-14 md:mx-16 text-base md:text-lg uppercase tracking-[0.2em] text-muted-foreground/50 font-medium select-none"
        >
          {name}
        </span>
      ))}
    </div>
  </div>
);

export default LogoMarquee;
