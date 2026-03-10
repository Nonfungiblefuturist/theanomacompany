import { useParams } from "react-router-dom";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NebulaEffects />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1 className="text-foreground font-bold text-4xl">Project: {slug}</h1>
          <p className="mt-4 text-muted-foreground">Full project detail page coming in Phase 2.</p>
        </div>
      </section>
      <CTABand />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
