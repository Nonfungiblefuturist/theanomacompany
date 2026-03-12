import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useContactOverlay } from "@/contexts/ContactOverlayContext";

const navLinks = [
  { label: "About Us", to: "/studio" },
  { label: "Work", to: "/work" },
];

const NavFlipLink = ({ label, to }: { label: string; to: string }) => (
  <Link
    to={to}
    className="relative overflow-hidden inline-flex flex-col font-medium text-foreground no-underline cursor-pointer group/nav"
    style={{ fontSize: "clamp(16px, 1.4vw, 20px)", height: "1.2em", lineHeight: "1.2" }}
  >
    <span className="block transition-transform duration-300 group-hover/nav:-translate-y-full">{label}</span>
    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/nav:-translate-y-full">{label}</span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { setContactOpen } = useContactOverlay();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16"
        style={{
          top: scrolled ? 8 : 24,
          transition: "all 0.4s ease",
          height: scrolled ? "clamp(70px, 10vw, 90px)" : "clamp(120px, 18vw, 160px)",
        }}
      >
        {/* Logo — left */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/anoma-logo.png"
            alt="The Anoma Company"
            style={{
              height: scrolled ? "clamp(4rem, 6vw, 5.5rem)" : "clamp(7rem, 12vw, 10rem)",
              transition: "height 0.4s ease, opacity 0.4s ease",
              opacity: scrolled ? 0.5 : 1,
            }}
            className="w-auto"
          />
        </Link>

        {/* Glass pill — center (desktop) */}
        <div
          className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-400"
          style={{
            background: scrolled ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {navLinks.map((l) => (
            <NavFlipLink key={l.to} label={l.label} to={l.to} />
          ))}
        </div>

        {/* Contact pill — right (desktop) */}
        <button
          onClick={() => setContactOpen(true)}
          className="hidden md:inline-flex relative overflow-hidden items-center gap-1.5 font-medium px-8 py-3 rounded-full text-foreground cursor-pointer transition-all duration-300 group/contact"
          style={{
            fontSize: "clamp(16px, 1.4vw, 20px)",
            background: "transparent",
            border: "1px solid hsl(var(--cosmic))",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--cosmic))"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          <span className="relative overflow-hidden inline-flex flex-col" style={{ height: "1.2em", lineHeight: "1.2" }}>
            <span className="block transition-transform duration-300 group-hover/contact:-translate-y-full">Contact us</span>
            <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/contact:-translate-y-full">Contact us</span>
          </span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setMenuOpen(false)}
            onContactOpen={() => { setMenuOpen(false); setContactOpen(true); }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
