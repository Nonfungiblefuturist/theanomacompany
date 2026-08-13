import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "../../../data/blogPosts";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List The Anoma Company journal/blog posts with titles, excerpts and slugs.",
  inputSchema: {
    category: z.string().trim().min(1).optional().describe("Optional category filter, e.g. 'Process'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = blogPosts
      .filter((p) => !category || p.category.toLowerCase() === category.toLowerCase())
      .map(({ slug, title, excerpt, date, readTime, category: cat }) => ({
        slug,
        title,
        excerpt,
        date,
        readTime,
        category: cat,
        url: `https://theanoma.company/blog/${slug}`,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, posts: items },
    };
  },
});
