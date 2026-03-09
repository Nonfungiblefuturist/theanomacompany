import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface PillarCardProps {
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const PillarCard = ({ title, description, href, delay = 0 }: PillarCardProps) => (
  <ScrollReveal delay={delay}>
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-lg border border-[hsl(0_0%_13%)] bg-[hsl(0_0%_5%)] transition-all duration-400 hover:-translate-y-1 hover:border-transparent"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(193_100%_43%/0.3)] to-[hsl(330_85%_52%/0.3)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-[1px] rounded-lg bg-[hsl(0_0%_5%)]" />

      {/* Placeholder image area */}
      <div className="relative aspect-[16/9] bg-[hsl(0_0%_8%)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-jetbrains text-xs uppercase tracking-widest text-[hsl(0_0%_25%)]">
            {title}
          </span>
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="font-playfair text-2xl text-[hsl(0_0%_96%)]">{title}</h3>
        <p className="mt-2 font-inter text-sm leading-relaxed text-[hsl(0_0%_67%)]">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-inter text-sm text-[hsl(0_0%_96%)] transition-colors group-hover:text-[hsl(193_100%_43%)]">
          Learn More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  </ScrollReveal>
);

export default PillarCard;
