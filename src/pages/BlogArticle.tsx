import { useParams, Link } from "react-router-dom";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import SEO from "@/components/shared/SEO";
import { blogPosts } from "@/data/blogPosts";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SEO
          title="Article not found — The Anoma Company"
          description="This article could not be found."
          path={`/blog/${slug ?? ""}`}
        />
        <NebulaEffects />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="max-w-[720px] mx-auto px-6 md:px-10">
            <h1 className="text-foreground font-bold text-4xl">Article not found</h1>
            <Link to="/blog" className="mt-4 inline-block text-primary hover:text-foreground">
              ← Back to the blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://theanoma.company${post.thumbnail}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "The Anoma Company" },
    publisher: {
      "@type": "Organization",
      name: "The Anoma Company",
      logo: { "@type": "ImageObject", url: "https://theanoma.company/images/anoma-logo.png" },
    },
    mainEntityOfPage: `https://theanoma.company/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${post.title} — The Anoma Company`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        image={`https://theanoma.company${post.thumbnail}`}
        jsonLd={articleJsonLd}
      />
      <NebulaEffects />
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-[760px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="mt-4 text-foreground font-bold"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            {post.title}
          </h1>
          <p className="mt-5 text-muted-foreground text-lg" style={{ lineHeight: 1.7 }}>
            {post.excerpt}
          </p>

          <div className="mt-10 rounded-2xl overflow-hidden aspect-[16/9]">
            <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="mt-10 text-foreground/90 text-base md:text-lg" style={{ lineHeight: 1.85 }}>
            {post.content.split("\n").map((p, i) => (
              <p key={i} className="mb-5">{p}</p>
            ))}
          </div>

          <Link to="/blog" className="inline-block mt-12 text-sm text-primary hover:text-foreground">
            ← Back to all articles
          </Link>
        </div>
      </article>
      <CTABand />
      <Footer />
    </div>
  );
};

export default BlogArticle;
