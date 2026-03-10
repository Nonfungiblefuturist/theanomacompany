import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ImageMosaic from "@/components/home/ImageMosaic";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesTabbed from "@/components/home/ServicesTabbed";
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
    {/* 2 */}  <AboutPreview />
    {/* 3 */}  <ImageMosaic />
    {/* 4 */}  <SelectedWork />
    {/* 5 */}  <ServicesTabbed />
    {/* 6 */}  <ProcessSteps />
    {/* 7 */}  <BentoGrid />
    {/* 8 */}  <Testimonials />
    {/* 9 */}  <HomeFAQ />
    {/* 10 */} <BlogPreview />
    {/* 11 */} <CTABand />

    <Footer />
  </div>
);

export default Home;
