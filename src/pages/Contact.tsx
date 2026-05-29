import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Contact — The Anoma Company"
      description="Talk to The Anoma Company about AI video production, creative campaigns, branding, or a custom AI build. Toronto-based, working worldwide."
      path="/contact"
    />
    <NebulaEffects />
    <Navbar />
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal type="blur-fade">
          <h1 className="text-foreground font-bold" style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}>
            Contact.
          </h1>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Brief in a campaign, scope an AI build, or just trade ideas. We reply to every inbound within one business day.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">Email</h2>
            <a href={`mailto:${siteConfig.email}`} className="text-foreground text-lg hover:underline">
              {siteConfig.email}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Best for project briefs, RFPs, and press.</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">WhatsApp</h2>
            <a href="https://wa.me/16475648106" target="_blank" rel="noopener noreferrer" className="block text-foreground text-lg hover:underline">
              {siteConfig.phone}
            </a>
            <a href="https://wa.me/918169863268" target="_blank" rel="noopener noreferrer" className="block text-foreground text-lg hover:underline mt-1">
              {siteConfig.phoneAlt}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Toronto & Mumbai lines.</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">Studio</h2>
            <p className="text-foreground text-lg">{siteConfig.address}</p>
            <p className="mt-2 text-sm text-muted-foreground">Working with brands across North America, South Asia, and the Middle East.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
