import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "submit_inquiry",
  title: "Submit inquiry",
  description:
    "Send a new project inquiry to The Anoma Company. Creates a contact submission the studio team will follow up on.",
  inputSchema: {
    name: z.string().trim().min(1).max(100).describe("Contact name."),
    email: z.string().trim().email().max(255).describe("Contact email address."),
    message: z.string().trim().min(1).max(2000).describe("What the project is about."),
    company: z.string().trim().max(150).optional(),
    phone: z.string().trim().max(40).optional(),
    service_interest: z
      .string()
      .trim()
      .max(120)
      .optional()
      .describe("Service of interest, e.g. 'AI Video Production'."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { error } = await supabase.from("contact_submissions").insert({
      name: input.name,
      email: input.email,
      message: input.message,
      company: input.company ?? null,
      phone: input.phone ?? null,
      service_interest: input.service_interest ?? null,
    });
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: "Inquiry submitted. The studio will be in touch shortly." }],
      structuredContent: { submitted: true },
    };
  },
});
