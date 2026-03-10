export interface TeamMember {
  name: string;
  role: string;
  image: string;
  isAI?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Uday Ghosh",
    role: "Chairman Emeritus",
    image: "/images/uday-ghosh.jpg",
  },
  {
    name: "Surzayon",
    role: "Founder & Creative Director",
    image: "/images/surzayon.png",
  },
  {
    name: "Sreejeeta",
    role: "Co-Founder, Head of Business Operations",
    image: "/images/sreejeeta.jpg",
  },
  {
    name: "Diana",
    role: "Head of Internal Operations",
    image: "/images/diana.png",
  },
  {
    name: "Aeria",
    role: "AI Influencer",
    image: "/images/aeria-portrait.png",
    isAI: true,
  },
];
