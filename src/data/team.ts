export interface TeamMember {
  name: string;
  role: string;
  image: string;
  isHiring?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Surzayon",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Co-Founder",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Business Relations",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Mihir",
    role: "Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Reid",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Your Name Here",
    role: "We're Hiring",
    image: "",
    isHiring: true,
  },
  {
    name: "Your Name Here",
    role: "We're Hiring",
    image: "",
    isHiring: true,
  },
];
