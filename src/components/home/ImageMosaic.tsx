import ScrollReveal from "@/components/shared/ScrollReveal";

const mosaicItems = [
  {
    image: "https://images.unsplash.com/photo-1518675219903-c682c4b16b7e?w=600&h=800&fit=crop",
    label: "Cinematic Vision",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=800&fit=crop",
    label: "AI-Native Pipeline",
  },
  {
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=800&fit=crop",
    label: "End-to-End Production",
  },
];

const ImageMosaic = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mosaicItems.map((item, i) => (
          <ScrollReveal key={i} type="scale-in" delay={i * 0.1}>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                <span className="font-['Anta'] text-xl md:text-2xl text-foreground text-center">{item.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal type="blur-fade" delay={0.2}>
        <p
          className="mt-16 text-center font-['Anta'] text-muted-foreground/40"
          style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Everything else is noise.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ImageMosaic;
