import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About Us", to: "/studio" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

const offices = [
  { city: "Toronto", coords: { top: "32%", left: "24%" } },
  { city: "Mumbai", coords: { top: "48%", left: "67%" } },
  { city: "Dubai", coords: { top: "42%", left: "59%" } },
];

const Footer = () => {
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
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Where We Are</p>
            {/* Mini world map with pins */}
            <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden" style={{ background: "hsl(var(--card))", border: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Simplified world map SVG */}
              <svg viewBox="0 0 200 100" className="w-full h-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified continents */}
                <ellipse cx="45" cy="40" rx="25" ry="18" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
                <ellipse cx="55" cy="65" rx="12" ry="15" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
                <ellipse cx="105" cy="35" rx="30" ry="22" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
                <ellipse cx="120" cy="65" rx="15" ry="12" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
                <ellipse cx="165" cy="60" rx="18" ry="15" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
              </svg>
              {/* City pins */}
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="absolute flex flex-col items-center"
                  style={{ top: office.coords.top, left: office.coords.left, transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "hsl(var(--cosmic))" }} />
                  <span className="text-[9px] font-medium text-foreground/70 mt-0.5 whitespace-nowrap">{office.city}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Get in Touch</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/16475648106`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              +1 (647) 564-8106
            </a>
            <a
              href={`https://wa.me/918169863268`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              +91 81698 63268
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Socials</h4>
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

          <div className="md:text-right">
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>Built by The Anoma Company</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} All Rights Reserved</p>
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
