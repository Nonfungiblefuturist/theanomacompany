import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/shared/SEO";
import { projects, getRelatedProjects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const related = slug ? getRelatedProjects(slug) : [];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SEO
          title="Project not found — The Anoma Company"
          description="This project could not be found."
          path={`/work/${slug ?? ""}`}
        />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <h1 className="text-foreground font-bold text-4xl">Project not found</h1>
            <Link to="/work" className="mt-4 inline-block text-primary hover:text-foreground transition-colors">
              ← Back to all projects
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: `https://theanoma.company${project.gallery[0] || project.thumbnail}`,
    creator: { "@type": "Organization", name: "The Anoma Company" },
    dateCreated: String(project.year),
    genre: project.category,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${project.title} — ${project.category} | The Anoma Company`}
        description={project.summary}
        path={`/work/${project.slug}`}
        type="article"
        image={`https://theanoma.company${project.gallery[0] || project.thumbnail}`}
        jsonLd={projectJsonLd}
      />
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Hero image */}
          <ScrollReveal type="fade-up">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={project.gallery[0] || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Title + Summary */}
          <ScrollReveal type="fade-up" delay={0.1}>
            <h1
              className="text-foreground font-semibold mt-10"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              {project.title}
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl" style={{ lineHeight: 1.7 }}>
              {project.summary}
            </p>
          </ScrollReveal>

          {/* Introduction */}
          <ScrollReveal type="fade-up" delay={0.15}>
            <div className="mt-16">
              <h2 className="text-foreground font-semibold text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground text-base max-w-3xl" style={{ lineHeight: 1.8 }}>
                {project.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Metadata row */}
          <ScrollReveal type="fade-up" delay={0.2}>
            <div
              className="mt-10 flex flex-wrap gap-6 md:gap-10 py-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { label: "Year", value: String(project.metadata.year) },
                { label: "Duration", value: project.metadata.duration },
                { label: "Client", value: project.metadata.client },
                { label: "Category", value: project.metadata.category },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Full-width image */}
          {project.gallery.length > 0 && (
            <ScrollReveal type="fade-up" delay={0.1}>
              <div className="mt-16 rounded-2xl overflow-hidden">
                <img
                  src={project.gallery[0]}
                  alt={`${project.title} showcase`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Challenges */}
          <ScrollReveal type="fade-up" delay={0.1}>
            <div className="mt-20">
              <h2 className="text-foreground font-semibold text-2xl mb-4">Challenges</h2>
              <h3 className="text-foreground font-medium text-lg mb-3">{project.challenges.heading}</h3>
              <p className="text-muted-foreground text-base max-w-3xl" style={{ lineHeight: 1.8 }}>
                {project.challenges.body}
              </p>
            </div>
          </ScrollReveal>

          {/* Two side-by-side images */}
          {project.gallery.length > 1 && (
            <ScrollReveal type="fade-up" delay={0.1}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.slice(1, 3).map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Solutions */}
          <ScrollReveal type="fade-up" delay={0.1}>
            <div className="mt-20">
              <h2 className="text-foreground font-semibold text-2xl mb-4">Solutions</h2>
              <h3 className="text-foreground font-medium text-lg mb-3">{project.solutions.heading}</h3>
              <p className="text-muted-foreground text-base max-w-3xl" style={{ lineHeight: 1.8 }}>
                {project.solutions.body}
              </p>
            </div>
          </ScrollReveal>

          {/* External link */}
          {project.externalLink && (
            <ScrollReveal type="fade-up" delay={0.1}>
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-foreground transition-colors"
              >
                View live project <span>↗</span>
              </a>
            </ScrollReveal>
          )}

          {/* View More */}
          <div className="mt-28">
            <ScrollReveal type="fade-up">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2
                    className="text-foreground font-semibold"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
                  >
                    View More.
                  </h2>
                  <p className="text-muted-foreground text-base mt-2">Explore more of our work.</p>
                </div>
                <Link
                  to="/work"
                  className="text-sm text-primary hover:text-foreground transition-colors"
                >
                  View all →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} type="fade-up" delay={i * 0.08}>
                  <Link to={`/work/${p.slug}`} className="group block">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg text-foreground">{p.title}</h3>
                        <span className="text-sm text-muted-foreground">{p.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABand />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
