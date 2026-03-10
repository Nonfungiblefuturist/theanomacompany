import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { blogPosts } from "@/data/blogPosts";

const BlogPreview = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
      <SectionHeader
        title="News & Insights."
        subtitle="Thoughts from the studio."
        link={{ label: "View all", to: "/blog" }}
        dotLabel="Blog"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, i) => (
          <ScrollReveal key={post.slug} type="slide-up" delay={i * 0.1} viewportAmount={0.15}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6 bg-card">
                <span className="text-xs text-muted-foreground">{post.date} · {post.readTime}</span>
                <h3 className="font-semibold text-base md:text-lg text-foreground mt-2">{post.title}</h3>
                <p className="text-sm text-primary mt-3 group-hover:text-foreground transition-colors">
                  Read article →
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
