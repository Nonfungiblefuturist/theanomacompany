import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQ[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((faq, i) => (
      <ScrollReveal key={i} type="fade-up" delay={i * 0.05}>
        <AccordionItem value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="text-foreground font-semibold text-left text-base md:text-lg py-5 hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base pb-5" style={{ lineHeight: 1.7 }}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      </ScrollReveal>
    ))}
  </Accordion>
);

export default FAQAccordion;
