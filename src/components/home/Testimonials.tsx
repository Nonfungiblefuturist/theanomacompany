import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader title="Testimonials." subtitle="What our clients say." dotLabel="Testimonials" />

        <ScrollReveal type="fade-up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 pr-6">
                  <div className="p-6 rounded-lg border border-border bg-card h-full flex flex-col">
                    <p className="text-muted-foreground text-sm flex-1" style={{ lineHeight: 1.7 }}>
                      "{t.quote}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground text-sm">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
