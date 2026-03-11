import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { useContactOverlay } from "@/contexts/ContactOverlayContext";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About Us", to: "/studio" },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

const Footer = () => {
  const { setContactOpen } = useContactOverlay();

  return (
    <footer className="section-card mx-[6px]" style={{ borderRadius: "20px 20px 0 0" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 md:pt-20">
        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <span className="font-bold text-foreground text-lg tracking-[0.05em] uppercase">
              The Anoma Company
            </span>
            <p className="mt-3 text-muted-foreground text-sm">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Pages</h4>
            <ul className="space-y-2">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setContactOpen(true)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Get in Touch</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href="https://wa.me/16475648106"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              +1 (647) 564-8106
            </a>
            <a
              href="https://wa.me/918169863268"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              +91 81698 63268
            </a>

            <div className="mt-6">
              <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">Socials</h4>
              <ul className="space-y-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>Built by The Anoma Company</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pb-8">
          <h2
            className="font-bold text-foreground uppercase tracking-tight select-none text-center"
            style={{
              fontSize: "clamp(2rem, 8vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              whiteSpace: "nowrap",
              padding: "0 6px",
            }}
          >
            THE ANOMA COMPANY
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
