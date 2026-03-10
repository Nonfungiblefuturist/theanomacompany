import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "Solutions",
    href: "/solutions",
    group: "Solutions",
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
    group: "Branding",
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
    group: "Video",
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
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, handleKey]);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <nav
        ref={navRef}
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? "nav-scrolled"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className="font-inter text-lg font-semibold tracking-wide text-white">
              the Anoma company
            </span>
            <span className="mt-0.5 h-[2px] w-[60px] rounded-full bg-gradient-to-r from-[hsl(193_100%_43%)] to-[hsl(330_85%_52%)]" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`nav-link-desktop font-inter text-[0.7rem] font-medium uppercase tracking-[0.15em] transition-colors ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="nav-dropdown min-w-[200px] rounded-lg p-2 shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-md px-3 py-2 font-inter text-[0.7rem] uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="nav-cta-pill ml-2 rounded-full border border-transparent bg-transparent px-5 py-2 font-inter text-[0.7rem] font-medium uppercase tracking-[0.15em] text-white transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile: "Menu" label + hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-2 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="font-inter text-[0.7rem] font-medium uppercase tracking-[0.15em] text-white/70">
              Menu
            </span>
            {mobileOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 flex flex-col bg-[hsl(0_0%_3%)] px-8 pt-24 pb-10"
          style={{ zIndex: 1001 }}
          role="dialog"
          aria-modal="true"
        >
          <button
            ref={firstFocusRef}
            onClick={() => setMobileOpen(false)}
            className="absolute right-6 top-6 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-1 flex-col gap-8 overflow-y-auto">
            {/* Grouped links */}
            {NAV_LINKS.filter((l) => l.children).map((group, gi) => (
              <div key={group.label}>
                <span className="mb-3 block font-inter text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
                  {group.group}
                </span>
                <Link
                  to={group.href}
                  className="nav-mobile-link block font-playfair text-[2.5rem] leading-tight text-white"
                  style={{ animationDelay: `${gi * 50}ms` }}
                >
                  {group.label}
                </Link>
                <div className="mt-2 ml-1 flex flex-col gap-1">
                  {group.children!.map((child, ci) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="nav-mobile-link font-inter text-sm text-white/40"
                      style={{ animationDelay: `${gi * 50 + (ci + 1) * 30}ms` }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Non-grouped links */}
            {NAV_LINKS.filter((l) => !l.children).map((link, i) => (
              <Link
                key={link.label}
                to={link.href}
                className="nav-mobile-link font-playfair text-[2.5rem] leading-tight text-white"
                style={{ animationDelay: `${(NAV_LINKS.filter((l) => l.children).length + i) * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="nav-cta-pill mt-6 self-start rounded-full border border-transparent bg-transparent px-6 py-3 font-inter text-sm font-medium uppercase tracking-[0.15em] text-white transition-all"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
