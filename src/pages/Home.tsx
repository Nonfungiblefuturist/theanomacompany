import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesTabbed from "@/components/home/ServicesTabbed";
import ProcessSteps from "@/components/home/ProcessSteps";
import BentoGrid from "@/components/home/BentoGrid";
import Testimonials from "@/components/home/Testimonials";
import ImageMosaic from "@/components/home/ImageMosaic";
import HomeFAQ from "@/components/home/HomeFAQ";

const Home = () => (
  <div className="min-h-screen bg-background text-foreground">
    <NebulaEffects />
    <Navbar />

    {/* 1 */}  <Hero />
    {/* 2 */}  <AboutPreview />
    {/* 3 */}  <ServicesTabbed />
    {/* 4 */}  <SelectedWork />
    {/* 5 */}  <ProcessSteps />
    {/* 6 */}  <BentoGrid />
    {/* 7 */}  <Testimonials />
    {/* 8 */}  <ImageMosaic />
    {/* 9 */}  <HomeFAQ />
    {/* 10 */} <CTABand />

    <Footer />
  </div>
);

export default Home;
