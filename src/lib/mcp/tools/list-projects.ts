import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../../../data/projects";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List The Anoma Company portfolio projects, optionally filtered by category (Solutions, Branding, Video Production, AI Video Production).",
  inputSchema: {
    filterTag: z
      .enum(["Solutions", "Branding", "Video Production", "AI Video Production"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ filterTag }) => {
    const items = projects
      .filter((p) => !filterTag || p.filterTag === filterTag)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        client: p.client,
        year: p.year,
        category: p.category,
        filterTag: p.filterTag,
        summary: p.summary,
        url: `https://theanoma.company/work/${p.slug}`,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, projects: items },
    };
  },
});
