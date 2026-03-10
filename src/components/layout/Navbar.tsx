import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About Us", to: "/studio" },
  { label: "Work", to: "/work" },
];

const NavFlipLink = ({ label, to, isActive }: { label: string; to: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`relative overflow-hidden inline-flex flex-col text-sm font-medium tracking-wide group/nav ${
      isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
    }`}
    style={{ height: "1.3em" }}
  >
    <span className="block transition-transform duration-300 group-hover/nav:-translate-y-full">{label}</span>
    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/nav:-translate-y-full">{label}</span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-border/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/images/anoma-logo.png"
              alt="The Anoma Company"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavFlipLink
                key={l.to}
                label={l.label}
                to={l.to}
                isActive={location.pathname.startsWith(l.to)}
              />
            ))}

            {/* Vertical separator */}
            <div className="w-px h-5" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />

            {/* Contact us — purple flip button */}
            <Link
              to="/contact"
              className="relative overflow-hidden inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2 rounded-[10px] text-foreground transition-all duration-300 border border-cosmic hover:text-background group/contact"
              style={{ background: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "hsl(var(--cosmic))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="relative overflow-hidden inline-flex flex-col" style={{ height: "1.3em" }}>
                <span className="block transition-transform duration-300 group-hover/contact:-translate-y-full">Contact us</span>
                <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/contact:-translate-y-full">Contact us</span>
              </span>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
