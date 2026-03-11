export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  thumbnail: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-reshaping-commercial-production",
    title: "How AI Is Reshaping Commercial Production",
    excerpt: "The tools have changed. The standards haven't. Here's how AI-native studios are delivering cinema-grade work at startup speed.",
    date: "Mar 2025",
    readTime: "6 min read",
    category: "Industry",
    thumbnail: "/images/filmmaking.webp",
    content: "AI is not replacing filmmakers — it's removing the barriers that kept great ideas from becoming great productions...",
  },
  {
    slug: "ctrl-ai-methodology",
    title: "The CTRL+AI Methodology: Our Creative Framework",
    excerpt: "Human control. AI execution. A structured approach to creative production that scales without losing soul.",
    date: "Feb 2025",
    readTime: "8 min read",
    category: "Process",
    thumbnail: "/images/bento-tech.webp",
    content: "Every project at The Anoma Company follows the same framework — CTRL+AI...",
  },
  {
    slug: "hybrid-workflows",
    title: "Hybrid Workflows: When to Shoot, When to Generate",
    excerpt: "Not everything should be AI-generated. Not everything needs a camera. The art is knowing which tool fits which moment.",
    date: "Jan 2025",
    readTime: "5 min read",
    category: "Workflow",
    thumbnail: "/images/mosaic-production.webp",
    content: "The best productions in 2025 aren't purely AI or purely traditional — they're hybrid...",
  },
  {
    slug: "building-ai-first-studio",
    title: "Building an AI-First Studio from Scratch",
    excerpt: "What it took to build a creative studio where AI isn't a feature — it's the foundation.",
    date: "Dec 2024",
    readTime: "7 min read",
    category: "Behind the Scenes",
    thumbnail: "/images/blog-ai-studio.webp",
    content: "When we started The Anoma Company, the question wasn't whether to use AI — it was how to build everything around it...",
  },
];
