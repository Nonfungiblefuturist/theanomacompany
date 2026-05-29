import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ShowreelBanner from "@/components/home/ShowreelBanner";
import SelectedWork from "@/components/home/SelectedWork";
import AeriaSection from "@/components/home/AeriaSection";
import ServicesTabbed from "@/components/home/ServicesTabbed";
import ProcessSteps from "@/components/home/ProcessSteps";
import WorkflowShowcase from "@/components/home/WorkflowShowcase";
import BentoGrid from "@/components/home/BentoGrid";

import Testimonials from "@/components/home/Testimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import SEO from "@/components/shared/SEO";
import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const Home = () => (
  <div className="min-h-screen text-foreground" style={{ background: "#0F0F0F" }}>
    <SEO
      title="The Anoma Company — AI-First Production Studio"
      description="Toronto-based AI-first cinematic production studio. AI video, creative campaigns, branding, and custom AI tools for ambitious brands."
      path="/"
      jsonLd={faqJsonLd}
    />
    <NebulaEffects />
    <Navbar />
    <main>

    {/* 1 */}  <Hero />
    {/* 2 */}  <div className="mt-[6px]"><AboutPreview /></div>
    {/* 3 */}  <div className="mt-[6px]"><ShowreelBanner /></div>
    {/* 4 */}  <div className="mt-[6px]"><SelectedWork /></div>
    {/* 5 */}  <div className="mt-[6px]"><AeriaSection /></div>
    {/* 6 */}  <div className="mt-[6px]"><ServicesTabbed /></div>
    {/* 7 */}  <div className="mt-[6px]"><ProcessSteps /></div>
    {/* 8 */}  <div className="mt-[6px]"><WorkflowShowcase /></div>
    {/* 9 */}  <div className="mt-[6px]"><BentoGrid /></div>
    
    {/* 11 */} <div className="mt-[6px]"><Testimonials /></div>
    {/* 12 */} <div className="mt-[6px]"><HomeFAQ /></div>
    {/* 13 */} <div className="mt-[6px]"><CTABand /></div>

    </main>
    <div className="mt-[6px]"><Footer /></div>
  </div>
);

export default Home;
