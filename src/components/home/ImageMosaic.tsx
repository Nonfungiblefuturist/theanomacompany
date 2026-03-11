import ScrollReveal from "@/components/shared/ScrollReveal";

const ImageMosaic = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden py-24">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
      <ScrollReveal type="blur-fade">
        <div className="text-center space-y-2 md:space-y-4">
          <p
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            <span className="text-foreground">Cinematic Vision</span>
            <span className="inline-flex align-middle mx-3 md:mx-5">
              <img
                src="https://images.unsplash.com/photo-1518675219903-c682c4b16b7e?w=200&h=130&fit=crop&fm=webp&q=75"
                alt="Vision"
                className="w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-2xl object-cover"
                style={{ transform: "rotate(-3deg)" }}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="text-muted-foreground">AI-Native Craft</span>
          </p>

          <p
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            <span className="inline-flex align-middle mx-3 md:mx-5">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=130&fit=crop&fm=webp&q=75"
                alt="Pipeline"
                className="w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-2xl object-cover"
                style={{ transform: "rotate(4deg)" }}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="text-foreground">Precision in Every Frame</span>
          </p>

          <p
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            <span className="text-muted-foreground">Create Without</span>
            <span className="inline-flex align-middle mx-3 md:mx-5">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&h=130&fit=crop"
                alt="Production"
                className="w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-2xl object-cover"
                style={{ transform: "rotate(-2deg)" }}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="text-foreground">Limits</span>
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ImageMosaic;
