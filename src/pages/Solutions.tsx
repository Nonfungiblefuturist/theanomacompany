import SiteLayout from "@/components/site/SiteLayout";
import SolutionCard from "@/components/site/SolutionCard";
import ScrollReveal from "@/components/site/ScrollReveal";

const SOLUTIONS = [
  { id: "chatbot", title: "AI Chatbot", description: "Conversational AI agents that handle admissions, support, and onboarding 24/7." },
  { id: "prompt", title: "Prompt Machine", description: "Structured prompt engineering tool for consistent, high-quality AI outputs." },
  { id: "resume", title: "Resume Match", description: "AI-powered resume screening that matches candidates to roles in seconds." },
  { id: "schedule", title: "Work Schedule", description: "Intelligent shift scheduling that balances team needs and business constraints." },
  { id: "gpa", title: "GPA Converter", description: "Instant international GPA conversion across global grading systems." },
  { id: "agents", title: "AI Agents", description: "Custom autonomous agents built for your specific workflows and data." },
];

const Solutions = () => (
  <SiteLayout>
    {/* Hero */}
    <section className="flex items-end px-6 pb-16 pt-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="font-playfair text-5xl text-[hsl(0_0%_96%)] md:text-6xl">Solutions</h1>
          <p className="mt-4 max-w-xl font-inter text-lg text-[hsl(0_0%_67%)]">
            AI tools and agents built for real-world impact.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Grid */}
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <SolutionCard key={s.id} {...s} delay={i * 80} />
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Solutions;
