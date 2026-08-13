import { defineTool } from "@lovable.dev/mcp-js";
import { siteConfig } from "../../../data/siteConfig";
import { team } from "../../../data/team";
import { stats } from "../../../data/stats";

export default defineTool({
  name: "get_studio_info",
  title: "Get studio info",
  description:
    "Get The Anoma Company studio overview: positioning, contact details, social links, team and headline stats.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { site: siteConfig, team, stats, website: "https://theanoma.company" };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
