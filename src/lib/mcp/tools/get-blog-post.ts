import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "../../../data/blogPosts";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Get the full content of one journal/blog post by slug.",
  inputSchema: { slug: z.string().trim().min(1).describe("Blog post slug.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        content: [{ type: "text", text: `No blog post with slug "${slug}".` }],
        isError: true,
      };
    }
    const payload = { ...post, url: `https://theanoma.company/blog/${post.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { post: payload },
    };
  },
});
