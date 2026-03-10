import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import Hero from "@/components/home/Hero";
import ThreePillars from "@/components/home/ThreePillars";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import BrandingShowcase from "@/components/home/BrandingShowcase";
import VideoProductionGrid from "@/components/home/VideoProductionGrid";
import SelectedWork from "@/components/home/SelectedWork";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesTabbed from "@/components/home/ServicesTabbed";
import ImageMosaic from "@/components/home/ImageMosaic";
import ProcessSteps from "@/components/home/ProcessSteps";
import BentoGrid from "@/components/home/BentoGrid";
import Testimonials from "@/components/home/Testimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import BlogPreview from "@/components/home/BlogPreview";

const Home = () => (
  <div className="min-h-screen bg-background text-foreground">
    <NebulaEffects />
    <Navbar />

    {/* 1 */}  <Hero />
    {/* 2 */}  <ThreePillars />
    {/* 3 */}  <SolutionsGrid />
    {/* 4 */}  <BrandingShowcase />
    {/* 5 */}  <VideoProductionGrid />
    {/* 6 */}  <SelectedWork />
    {/* 7 */}  <AboutPreview />
    {/* 8 */}  <ServicesTabbed />
    {/* 9 */}  <ImageMosaic />
    {/* 10 */ } <ProcessSteps />
    {/* 11 */ } <BentoGrid />
    {/* 12 */ } <Testimonials />
    {/* 13 */ } <HomeFAQ />
    {/* 14 */ } <BlogPreview />
    {/* 15 */ } <CTABand />

    <Footer />
  </div>
);

export default Home;
