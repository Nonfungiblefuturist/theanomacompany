import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About Us", to: "/studio" },
  { label: "Work", to: "/work" },
];

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
          <Link to="/" className="font-bold text-foreground text-sm md:text-base tracking-[0.05em] uppercase">
            The Anoma Company
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-opacity duration-300 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground
                  after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${location.pathname.startsWith(l.to) ? "text-foreground after:scale-x-100" : "text-foreground/70 hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            ))}

            {/* Vertical separator */}
            <div className="w-px h-5 bg-foreground/30" />

            {/* Contact us — outlined button */}
            <Link
              to="/contact"
              className="text-sm font-medium px-5 py-2 rounded-[10px] border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Contact us
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
