import { useParams } from "react-router-dom";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";

const BlogArticle = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NebulaEffects />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <h1 className="font-['Anta'] text-foreground text-4xl">Article: {slug}</h1>
          <p className="mt-4 text-muted-foreground">Full article page coming in Phase 2.</p>
        </div>
      </section>
      <CTABand />
      <Footer />
    </div>
  );
};

export default BlogArticle;
