import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { useState } from "react";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About Us", to: "/studio" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy.", to: "/privacy-policy" },
  { label: "Terms & Conditions.", to: "/terms" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="section-card mx-[6px]" style={{ borderRadius: "20px 20px 0 0" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 md:pt-20">
        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <span className="font-bold text-foreground text-lg tracking-[0.05em] uppercase">
              The Anoma Company
            </span>
            <p className="mt-3 text-muted-foreground text-sm">{siteConfig.address}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm" style={{ lineHeight: 1.7 }}>
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm mb-3">Stay ahead of the curve.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Sign up
              </button>
            </div>
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
            <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Attribution</h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Built by The Anoma Company</p>
          </div>
        </div>

        <div className="mt-20 md:mt-32 text-right">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="mt-8 pb-8">
          <h2
            className="font-bold text-foreground uppercase tracking-tight select-none whitespace-nowrap text-center"
            style={{
              fontSize: "clamp(2rem, 8vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
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
