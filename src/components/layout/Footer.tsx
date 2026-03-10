import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";

const footerLinks = [
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <span className="font-['Anta'] text-lg tracking-[0.05em] uppercase gradient-text">
            The Anoma Company
          </span>
          <p className="mt-4 text-muted-foreground text-sm max-w-sm" style={{ lineHeight: 1.7 }}>
            {siteConfig.description}
          </p>
          <p className="mt-4 text-muted-foreground text-sm">{siteConfig.email}</p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-['Anta'] text-sm uppercase tracking-widest text-muted-foreground mb-4">Pages</h4>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-['Anta'] text-sm uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
          <ul className="space-y-2">
            {Object.entries(siteConfig.socials).map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {legalLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
