import { Bot, Cpu, FileSearch, Calendar, GraduationCap, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ICONS: Record<string, typeof Bot> = {
  chatbot: Bot,
  prompt: Cpu,
  resume: FileSearch,
  schedule: Calendar,
  gpa: GraduationCap,
  agents: Workflow,
};

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  delay?: number;
}

const SolutionCard = ({ id, title, description, delay = 0 }: SolutionCardProps) => {
  const Icon = ICONS[id] || Bot;

  return (
    <ScrollReveal delay={delay}>
      <div
        id={id}
        className="group relative overflow-hidden rounded-lg border border-[hsl(0_0%_13%)] bg-[hsl(0_0%_5%)] p-6 transition-all duration-300 hover:border-transparent"
      >
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(193_100%_43%/0.2)] to-[hsl(330_85%_52%/0.2)] opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-[1px] rounded-lg bg-[hsl(0_0%_5%)]" />

        <div className="relative">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(0_0%_10%)]">
            <Icon size={24} className="text-[hsl(193_100%_43%)]" />
          </div>
          <h3 className="font-playfair text-xl text-[hsl(0_0%_96%)]">{title}</h3>
          <p className="mt-2 font-inter text-sm leading-relaxed text-[hsl(0_0%_67%)]">{description}</p>
          <a
            href="SOLUTION_LINK_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-inter text-sm text-[hsl(0_0%_96%)] transition-colors hover:text-[hsl(193_100%_43%)]"
          >
            Try it →
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SolutionCard;
