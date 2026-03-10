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
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    content: "AI is not replacing filmmakers — it's removing the barriers that kept great ideas from becoming great productions...",
  },
  {
    slug: "ctrl-ai-methodology",
    title: "The CTRL+AI Methodology: Our Creative Framework",
    excerpt: "Human control. AI execution. A structured approach to creative production that scales without losing soul.",
    date: "Feb 2025",
    readTime: "8 min read",
    category: "Process",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    content: "Every project at The Anoma Company follows the same framework — CTRL+AI...",
  },
  {
    slug: "hybrid-workflows",
    title: "Hybrid Workflows: When to Shoot, When to Generate",
    excerpt: "Not everything should be AI-generated. Not everything needs a camera. The art is knowing which tool fits which moment.",
    date: "Jan 2025",
    readTime: "5 min read",
    category: "Workflow",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
    content: "The best productions in 2025 aren't purely AI or purely traditional — they're hybrid...",
  },
  {
    slug: "building-ai-first-studio",
    title: "Building an AI-First Studio from Scratch",
    excerpt: "What it took to build a creative studio where AI isn't a feature — it's the foundation.",
    date: "Dec 2024",
    readTime: "7 min read",
    category: "Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    content: "When we started The Anoma Company, the question wasn't whether to use AI — it was how to build everything around it...",
  },
];
