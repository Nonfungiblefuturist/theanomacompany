import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FlipButton from "@/components/shared/FlipButton";
import { faqs } from "@/data/faqs";

const FAQItem = ({ faq, isOpen, onToggle, delay }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void; delay: number }) => (
  <ScrollReveal type="fade-up" delay={delay}>
    <button
      onClick={onToggle}
      className="w-full text-left rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const q = searchQuery.toLowerCase();
    return faqs.filter((faq) => faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-16 lg:gap-20">
          {/* Left: Title + Search */}
          <div>
            <ScrollReveal type="fade-up">
              <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
                FAQs
              </p>
            </ScrollReveal>
            <ScrollReveal type="blur-fade">
              <h2
                className="text-foreground font-semibold"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Frequently Asked Questions.
              </h2>
            </ScrollReveal>

            {/* Search bar */}
            <ScrollReveal type="fade-up" delay={0.1}>
              <div className="relative mt-6 max-w-[360px]">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  style={{ opacity: 0.4 }}
                />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setOpenIndex(null);
                  }}
                  className="w-full py-3.5 pl-11 pr-5 rounded-xl text-foreground text-[15px] font-sans outline-none transition-colors placeholder:text-muted-foreground"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.15}>
              <p className="mt-6 text-sm text-muted-foreground">
                Can't find what you're looking for?
              </p>
              <div className="mt-2">
                <FlipButton text="Contact us" href="/contact" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Accordion cards */}
          <div className="flex flex-col gap-3">
            {filteredFaqs.length === 0 ? (
              <p className="text-muted-foreground text-sm py-8">No matching questions found.</p>
            ) : (
              filteredFaqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  delay={i * 0.05}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
