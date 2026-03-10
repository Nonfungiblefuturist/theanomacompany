import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  link?: { label: string; to: string };
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ title, subtitle, link, className = "", align = "left" }: SectionHeaderProps) => (
  <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""} ${className}`}>
    <ScrollReveal type="blur-fade">
      <h2
        className="font-['Anta'] text-foreground"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </ScrollReveal>
    {subtitle && (
      <ScrollReveal type="fade-up" delay={0.1}>
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
          {subtitle}
        </p>
      </ScrollReveal>
    )}
    {link && (
      <ScrollReveal type="fade-up" delay={0.15}>
        <Link
          to={link.to}
          className="inline-block mt-4 text-sm text-primary hover:text-foreground transition-colors duration-300"
        >
          {link.label} →
        </Link>
      </ScrollReveal>
    )}
  </div>
);

export default SectionHeader;
