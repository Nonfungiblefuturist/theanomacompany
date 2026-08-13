import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ContactOverlayProvider } from "./contexts/ContactOverlayContext";

const Index = lazy(() => import("./pages/Index"));
const Work = lazy(() => import("./pages/Work"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Studio = lazy(() => import("./pages/Studio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Login = lazy(() => import("./pages/Login"));
const OAuthConsent = lazy(() => import("./pages/OAuthConsent"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BackToSPictures = lazy(() => import("./components/BackToSPictures"));
const ContactOverlay = lazy(() => import("./components/layout/ContactOverlay"));

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lenis smooth scroll (deferred)
const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let rafId = 0;
    let disposed = false;
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;

    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (disposed) return;

      lenisInstance = new Lenis({ duration: 1.6, lerp: 0.08, smoothWheel: true });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    void start();

    return () => {
      disposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <ContactOverlayProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LenisProvider>
              <ScrollToTop />
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/:slug" element={<ProjectDetail />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogArticle />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Suspense fallback={null}>
                <BackToSPictures />
                <ContactOverlay />
              </Suspense>
            </LenisProvider>
          </BrowserRouter>
        </ContactOverlayProvider>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;