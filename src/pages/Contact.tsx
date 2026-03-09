import { Instagram, Youtube, Linkedin } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import ContactForm from "@/components/site/ContactForm";
import ScrollReveal from "@/components/site/ScrollReveal";

const Contact = () => (
  <SiteLayout>
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <ScrollReveal>
        <h1 className="font-playfair text-5xl text-[hsl(0_0%_96%)] md:text-6xl">
          Start a Conversation.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-10">
          <a
            href="mailto:surzayon@theanoma.company"
            className="inline-block bg-gradient-to-r from-[hsl(193_100%_43%)] to-[hsl(330_85%_52%)] bg-clip-text font-inter text-lg text-transparent decoration-2 underline-offset-4 hover:underline"
          >
            surzayon@theanoma.company
          </a>

          {/* Social */}
          <div className="mt-6 flex gap-4">
            <a href="https://instagram.com/controlplusai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@CTRLplusAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
              <Youtube size={20} />
            </a>
            <a href="https://linkedin.com/company/theanomacompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Calendly */}
      <ScrollReveal delay={200}>
        <div className="mt-16">
          <h2 className="mb-4 font-playfair text-2xl text-[hsl(0_0%_96%)]">Book a Call</h2>
          <div className="overflow-hidden rounded-lg border border-[hsl(0_0%_13%)]">
            <iframe
              src="https://calendly.com/surzayon/the-anoma-company-consultation"
              title="Book a consultation"
              className="h-[600px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Contact form */}
      <ScrollReveal delay={300}>
        <div className="mt-16">
          <h2 className="mb-6 font-playfair text-2xl text-[hsl(0_0%_96%)]">Send a Message</h2>
          <ContactForm />
        </div>
      </ScrollReveal>
    </section>
  </SiteLayout>
);

export default Contact;
