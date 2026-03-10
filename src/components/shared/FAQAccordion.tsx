import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQ[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => (
  <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
    {items.map((faq, i) => (
      <ScrollReveal key={i} type="fade-up" delay={i * 0.05}>
        <AccordionItem
          value={`faq-${i}`}
          className="border border-border rounded-2xl bg-card px-5 md:px-6 data-[state=open]:border-primary/30 transition-colors"
        >
          <AccordionTrigger className="text-foreground font-medium text-left text-base md:text-lg py-5 hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary hover:no-underline">
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
