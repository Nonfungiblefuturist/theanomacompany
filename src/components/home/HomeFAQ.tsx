import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { faqs } from "@/data/faqs";

const HomeFAQ = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-3xl mx-auto">
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
        <FAQAccordion items={faqs} />
      </div>
    </div>
  </section>
);

export default HomeFAQ;
