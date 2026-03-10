import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FlipButtonProps {
  text: string;
  href: string;
  variant?: "outline" | "cosmic" | "filled";
  external?: boolean;
  className?: string;
}

const FlipButton = ({ text, href, variant = "outline", external, className = "" }: FlipButtonProps) => {
  const baseClass = `
    inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[10px] text-sm font-medium
    cursor-pointer no-underline overflow-hidden transition-all duration-300
    group/flip
    ${variant === "cosmic"
      ? "border border-cosmic text-foreground hover:bg-cosmic hover:text-background"
      : variant === "filled"
        ? "bg-foreground text-background hover:opacity-90"
        : "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background"
    }
    ${className}
  `.trim();

  const inner = (
    <>
      {/* Text flip container */}
      <span className="relative overflow-hidden inline-flex flex-col" style={{ height: "1.2em" }}>
        <span className="block transition-transform duration-300 group-hover/flip:-translate-y-full">{text}</span>
        <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/flip:-translate-y-full">{text}</span>
      </span>
      {/* Arrow flip container */}
      <span className="relative overflow-hidden inline-flex flex-col" style={{ height: 14, width: 14 }}>
        <span className="block transition-transform duration-300 group-hover/flip:-translate-y-full"><ArrowUpRight size={14} /></span>
        <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/flip:-translate-y-full"><ArrowUpRight size={14} /></span>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className={baseClass}>
      {inner}
    </Link>
  );
};

export default FlipButton;
