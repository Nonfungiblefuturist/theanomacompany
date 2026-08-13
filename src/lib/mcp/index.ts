import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import listFaqs from "./tools/list-faqs";
import getStudioInfo from "./tools/get-studio-info";
import submitInquiry from "./tools/submit-inquiry";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "theanomacompany",
  title: "theanomacompany",
  version: "0.1.0",
  instructions:
    "Tools for The Anoma Company, an AI-first creative studio. Browse portfolio case studies, journal articles, FAQs and studio info, and submit a project inquiry on behalf of the signed-in user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listProjects,
    getProject,
    listBlogPosts,
    getBlogPost,
    listFaqs,
    getStudioInfo,
    submitInquiry,
  ],
});
