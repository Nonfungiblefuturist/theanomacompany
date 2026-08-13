import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../../../data/projects";

export default defineTool({
  name: "get_project",
  title: "Get project",
  description: "Get the full case-study details for one portfolio project by slug.",
  inputSchema: { slug: z.string().trim().min(1).describe("Project slug, e.g. 'ai-chatbot'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return {
        content: [
          {
            type: "text",
            text: `No project with slug "${slug}". Use list_projects to see available slugs.`,
          },
        ],
        isError: true,
      };
    }
    const payload = { ...project, url: `https://theanoma.company/work/${project.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { project: payload },
    };
  },
});
