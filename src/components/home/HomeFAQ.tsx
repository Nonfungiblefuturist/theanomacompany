import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { faqs } from "@/data/faqs";

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="w-full text-left rounded-2xl border border-border bg-card p-5 md:p-6 transition-colors hover:border-primary/20"
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
);

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const col1 = faqs.slice(0, 4);
  const col2 = faqs.slice(4);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <ScrollReveal type="fade-up">
              <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                FAQs
              </p>
            </ScrollReveal>
            <ScrollReveal type="blur-fade">
              <h2
                className="text-foreground font-semibold"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Frequently Asked Questions.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal type="fade-up" delay={0.15}>
            <Link to="/contact" className="text-sm text-primary hover:text-foreground transition-colors mt-4 md:mt-0">
              Contact us →
            </Link>
          </ScrollReveal>
        </div>

        {/* Two-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {col1.map((faq, i) => (
              <ScrollReveal key={i} type="fade-up" delay={i * 0.05}>
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </ScrollReveal>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {col2.map((faq, i) => {
              const idx = i + 4;
              return (
                <ScrollReveal key={idx} type="fade-up" delay={i * 0.05}>
                  <FAQItem
                    faq={faq}
                    isOpen={openIndex === idx}
                    onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
