import { defineTool } from "@lovable.dev/mcp-js";
import { faqs } from "../../../data/faqs";

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "List The Anoma Company frequently asked questions and their answers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(faqs, null, 2) }],
    structuredContent: { count: faqs.length, faqs },
  }),
});
