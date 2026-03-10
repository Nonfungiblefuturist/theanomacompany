export interface TeamMember {
  name: string;
  role: string;
  image: string;
  isAI?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Surzayon",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Srijita",
    role: "Co-Founder, Head of Business Operations",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Diana",
    role: "Head of Internal Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Aeria",
    role: "AI Influencer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    isAI: true,
  },
];
