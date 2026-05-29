import { Link } from "react-router-dom";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/shared/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Blog — Insights from The Anoma Company"
      description="Essays on AI-native production, hybrid workflows, the CTRL+AI methodology, and what an AI-first studio looks like in practice."
      path="/blog"
    />
    <NebulaEffects />
    <Navbar />
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal type="blur-fade">
          <h1 className="text-foreground font-bold" style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}>
            Blog.
          </h1>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Field notes from an AI-first cinematic production studio — how we build, what we ship, and where the craft is headed.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} type="fade-up" delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-foreground font-semibold text-2xl md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground text-base" style={{ lineHeight: 1.7 }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTABand />
    <Footer />
  </div>
);

export default Blog;
