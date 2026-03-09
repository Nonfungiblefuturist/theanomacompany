import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI Chatbot", href: "/solutions#chatbot" },
      { label: "Prompt Machine", href: "/solutions#prompt" },
      { label: "Resume Match", href: "/solutions#resume" },
      { label: "AI Agents", href: "/solutions#agents" },
    ],
  },
  {
    label: "Branding",
    href: "/branding",
    children: [
      { label: "Logo Design", href: "/branding/logo" },
      { label: "Website Design", href: "/branding/website" },
      { label: "Creative Marketing", href: "/branding/marketing" },
      { label: "Pitch Decks", href: "/branding/pitch-deck" },
    ],
  },
  {
    label: "Video Production",
    href: "/video",
    children: [
      { label: "Storyboards", href: "/video/storyboards" },
      { label: "Showreel & Ads", href: "/video/showreel" },
      { label: "Music Video", href: "/video/music-video" },
      { label: "Animated Spots", href: "/video/animated" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Escape key
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, handleKey]);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
        Skip to content
      </a>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[hsl(0_0%_3%/0.85)] backdrop-blur-xl border-b border-[hsl(0_0%_13%)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/home" className="group flex flex-col">
            <span className="font-playfair text-lg tracking-wide text-[hsl(0_0%_96%)]">the Anoma company</span>
            <span className="mt-0.5 h-[2px] w-full rounded-full bg-gradient-to-r from-[hsl(193_100%_43%)] to-[hsl(330_85%_52%)]" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`font-inter text-sm transition-colors ${
                    isActive(link.href) ? "text-[hsl(0_0%_96%)]" : "text-[hsl(0_0%_67%)] hover:text-[hsl(0_0%_96%)]"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[hsl(193_100%_43%)] to-[hsl(330_85%_52%)]" />
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[200px] rounded-lg border border-[hsl(0_0%_15%)] bg-[hsl(0_0%_5%/0.95)] p-2 backdrop-blur-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-md px-3 py-2 font-inter text-sm text-[hsl(0_0%_67%)] transition-colors hover:bg-[hsl(0_0%_10%)] hover:text-[hsl(0_0%_96%)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[hsl(0_0%_3%)] p-6 pt-20">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-6 top-6 text-foreground"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="font-playfair text-2xl text-[hsl(0_0%_96%)]"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="font-inter text-sm text-[hsl(0_0%_50%)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
