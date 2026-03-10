import SectionHeader from "@/components/shared/SectionHeader";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { faqs } from "@/data/faqs";

const HomeFAQ = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-5 md:px-10">
      <SectionHeader title="FAQ." subtitle="Common questions." align="center" />
      <FAQAccordion items={faqs} />
    </div>
  </section>
);

export default HomeFAQ;
