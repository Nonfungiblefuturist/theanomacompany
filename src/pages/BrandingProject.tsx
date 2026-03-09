import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CustomCursor from "@/components/studio/CustomCursor";

import brandingCreatorCon from "@/assets/branding-creator-con.jpg";
import brandingStandStore from "@/assets/branding-stand-store.jpg";
import brandingLincolnUniversity from "@/assets/branding-lincoln-university.jpg";
import brandingCampusAdmin from "@/assets/branding-campus-admin.jpg";
import chcaWineLabel from "@/assets/chca-wine-label.jpg";
import brandingYoutubePitch from "@/assets/branding-youtube-pitch.jpg";

interface ProjectData {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  details: string[];
}

const projectData: Record<string, ProjectData> = {
  logo: {
    title: "Creator Con",
    category: "Logo Design",
    description: "Event identity design for a creator economy conference. Bold, vibrant branding that captures the energy and innovation of the digital creator community.",
    heroImage: brandingCreatorCon,
    details: [
      "Brand Identity System",
      "Logo Design & Variations",
      "Color Palette & Typography",
      "Event Collateral & Merch",
    ],
  },
  website: {
    title: "Stand Store",
    category: "Website Design",
    description: "End-to-end UX/UI design for a modern e-commerce platform. Clean, conversion-focused design with intuitive navigation and seamless checkout experience.",
    heroImage: brandingStandStore,
    details: [
      "UX Research & Wireframing",
      "UI Design System",
      "Responsive Web Design",
      "E-commerce Flow Optimization",
    ],
  },
  "lincoln-university": {
    title: "Lincoln University",
    category: "Website Design",
    description: "University website redesign creating a modern digital experience for prospective students, faculty, and alumni. Focus on accessibility and information architecture.",
    heroImage: brandingLincolnUniversity,
    details: [
      "Information Architecture",
      "Responsive Design",
      "Student Portal UX",
      "Accessibility Standards",
    ],
  },
  "campus-admin": {
    title: "Campus Admin",
    category: "Website Design",
    description: "Administration portal and dashboard design for campus management. Data-driven interface with analytics, scheduling, and resource management modules.",
    heroImage: brandingCampusAdmin,
    details: [
      "Dashboard Design",
      "Data Visualization",
      "Admin Workflow Optimization",
      "User Role Management UI",
    ],
  },
  design: {
    title: "Wine Label (CHCA)",
    category: "Design",
    description: "Premium label design for CHCA Winery. Elegant visual identity that communicates heritage, craftsmanship, and the terroir of the vineyard.",
    heroImage: chcaWineLabel,
    details: [
      "Label Design",
      "Brand Identity",
      "Print Production",
      "Packaging Design",
    ],
  },
  "pitch-deck": {
    title: "YouTube Pitch",
    category: "Pitch Deck",
    description: "Investor-ready pitch deck design for a content brand. Strategic storytelling through data visualization, clear value propositions, and compelling narrative flow.",
    heroImage: brandingYoutubePitch,
    details: [
      "Pitch Strategy",
      "Slide Design",
      "Data Visualization",
      "Presentation Flow",
    ],
  },
};

const BrandingProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="studio-page flex items-center justify-center" style={{ background: "#0a0a0a", color: "#f0efe8", minHeight: "100vh" }}>
        <div className="text-center">
          <h1 className="font-instrument-serif text-4xl mb-4">Project Not Found</h1>
          <Link to="/branding" className="font-dm-sans text-sm underline" style={{ color: "#8a8a82" }}>
            Back to Branding
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="studio-page" style={{ background: "#0a0a0a", color: "#f0efe8", minHeight: "100vh" }}>
      <CustomCursor />

      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-6">
        <Link
          to="/branding"
          className="flex items-center gap-2 font-dm-sans text-sm transition-colors hover:opacity-80"
          style={{ color: "#8a8a82" }}
          data-cursor="nav"
        >
          <ArrowLeft size={16} />
          Back to Branding
        </Link>
        <p className="font-oswald uppercase tracking-[2px] text-[11px]" style={{ color: "#8a8a82" }}>
          {project.category}
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative w-full" style={{ height: "60vh", minHeight: 400 }}>
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.8) saturate(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 60%)" }}
        />
        <div className="absolute bottom-0 left-0 px-6 sm:px-10 pb-10">
          <h1 className="font-instrument-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-1px]">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="px-6 sm:px-10 py-16 max-w-3xl">
        <p className="font-dm-sans text-base leading-relaxed" style={{ color: "#b0afa8" }}>
          {project.description}
        </p>

        <div className="mt-12">
          <h3 className="font-oswald uppercase tracking-[2px] text-[11px] mb-6" style={{ color: "#5a5a54" }}>
            Project Scope
          </h3>
          <ul className="space-y-3">
            {project.details.map((detail) => (
              <li key={detail} className="font-dm-sans text-sm flex items-center gap-3" style={{ color: "#8a8a82" }}>
                <span className="w-1 h-1 rounded-full" style={{ background: "#f0efe8" }} />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex items-center justify-center gap-8 py-12 font-dm-sans"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <Link to="/studio" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#8a8a82" }} data-cursor="nav">
          Studio
        </Link>
        <Link to="/branding" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#f0efe8" }} data-cursor="nav">
          Branding
        </Link>
        <a href="mailto:surzayon@theanoma.company" className="text-[13px] transition-colors hover:opacity-100" style={{ color: "#8a8a82" }} data-cursor="nav">
          Contact
        </a>
      </footer>
    </div>
  );
};

export default BrandingProject;
