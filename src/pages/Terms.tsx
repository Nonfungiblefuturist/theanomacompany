import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background text-foreground">
    <NebulaEffects />
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <h1 className="text-foreground font-bold text-4xl">Terms & Conditions</h1>
        <p className="mt-4 text-muted-foreground">Content coming soon.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;
