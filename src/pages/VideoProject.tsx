import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import VideoEmbed from "@/components/site/VideoEmbed";
import ScrollReveal from "@/components/site/ScrollReveal";

const DATA: Record<string, { title: string; description: string; type: "video" | "images" }> = {
  storyboards: {
    title: "Storyboards",
    description: "Pre-visualization and narrative design for every frame. Each storyboard maps out camera angles, lighting, and pacing before a single frame is shot or generated.",
    type: "images",
  },
  showreel: {
    title: "Showreel & Full-Length Ads",
    description: "Our complete showreel and full-length commercial work — from concept to final delivery, blending traditional cinema craft with AI-accelerated production.",
    type: "video",
  },
  "music-video": {
    title: "Music Video",
    description: "Cinematic music video production blending live-action footage with AI-generated visuals for a look that pushes creative boundaries.",
    type: "video",
  },
  animated: {
    title: "Animated 30-Seconder",
    description: "Punchy 30-second animated spots designed for social feeds and broadcast — maximum impact in minimal time.",
    type: "video",
  },
};

const VideoProject = () => {
  const { slug } = useParams();
  const project = DATA[slug || ""];

  if (!project) {
    return (
      <SiteLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="font-inter text-[hsl(0_0%_40%)]">Project not found.</p>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <Link
          to="/video"
          className="inline-flex items-center gap-2 font-inter text-sm text-[hsl(0_0%_50%)] transition-colors hover:text-[hsl(0_0%_96%)]"
        >
          <ArrowLeft size={14} /> Back to Video Production
        </Link>

        <ScrollReveal>
          <h1 className="mt-8 font-playfair text-4xl text-[hsl(0_0%_96%)] md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl font-inter text-[hsl(0_0%_67%)] leading-relaxed">{project.description}</p>
        </ScrollReveal>

        {/* Media gallery */}
        <div className="mt-12">
          {project.type === "video" ? (
            <div className="space-y-6">
              <VideoEmbed title={project.title} />
              <VideoEmbed title={`${project.title} — BTS`} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="aspect-[4/3] rounded-lg bg-[hsl(0_0%_8%)] flex items-center justify-center">
                  <span className="font-jetbrains text-[10px] uppercase tracking-widest text-[hsl(0_0%_25%)]">
                    Frame {n}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default VideoProject;
