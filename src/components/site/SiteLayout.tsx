import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FilmGrain from "./FilmGrain";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => (
  <div className="min-h-screen bg-[hsl(0_0%_3%)] text-foreground font-inter">
    <Navbar />
    <FilmGrain />
    <main id="main-content">{children}</main>
    <Footer />
  </div>
);

export default SiteLayout;
