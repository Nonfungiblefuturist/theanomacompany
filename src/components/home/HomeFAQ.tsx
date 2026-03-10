import SectionHeader from "@/components/shared/SectionHeader";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { faqs } from "@/data/faqs";

const HomeFAQ = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="FAQ." subtitle="Common questions." align="center" dotLabel="FAQ" />
        <FAQAccordion items={faqs} />
      </div>
    </div>
  </section>
);

export default HomeFAQ;
