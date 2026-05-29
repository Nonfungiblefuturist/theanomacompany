import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Privacy Policy — The Anoma Company"
      description="How The Anoma Company collects, uses, and protects information from visitors and clients."
      path="/privacy-policy"
    />
    <NebulaEffects />
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h1 className="text-foreground font-bold text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Content coming soon.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
