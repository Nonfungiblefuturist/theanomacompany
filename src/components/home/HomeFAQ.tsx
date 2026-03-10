import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { faqs } from "@/data/faqs";

const FAQItem = ({ faq, isOpen, onToggle, delay }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void; delay: number }) => (
  <ScrollReveal type="fade-up" delay={delay}>
    <button
      onClick={onToggle}
      className="w-full text-left rounded-2xl border border-border bg-card p-5 md:p-6 transition-colors hover:border-foreground/20"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-medium text-foreground text-sm md:text-base">{faq.question}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 mt-1 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <p className="mt-4 text-sm text-muted-foreground" style={{ lineHeight: 1.7 }}>
          {faq.answer}
        </p>
      )}
    </button>
  </ScrollReveal>
);

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
          {/* Left: Title + CTA */}
          <div>
            <ScrollReveal type="blur-fade">
              <h2
                className="text-foreground font-semibold"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Frequently Asked Questions.
              </h2>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.1}>
              <p className="mt-4 text-muted-foreground text-base" style={{ lineHeight: 1.7 }}>
                Have more questions? Reach out to us.
              </p>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium mt-6 px-5 py-2.5 rounded-[10px] border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Contact us <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Accordion cards */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
