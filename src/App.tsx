import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));
import Studio from "./pages/Studio";
import Branding from "./pages/Branding";
import BrandingProject from "./pages/BrandingProject";
import BackToSPictures from "./components/BackToSPictures";

// Lazy-loaded new pages
const Home = lazy(() => import("./pages/Home"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Video = lazy(() => import("./pages/Video"));
const VideoProject = lazy(() => import("./pages/VideoProject"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="flex h-screen items-center justify-center bg-[hsl(0_0%_3%)]">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[hsl(0_0%_20%)] border-t-[hsl(193_100%_43%)]" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/branding/:slug" element={<BrandingProject />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/video" element={<Video />} />
            <Route path="/video/:slug" element={<VideoProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BackToSPictures />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
