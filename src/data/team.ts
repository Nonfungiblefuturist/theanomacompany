export interface TeamMember {
  name: string;
  role: string;
  image: string;
  isAI?: boolean;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Uday K Ghosh",
    role: "Chairman Emeritus",
    image: "/images/uday-ghosh.jpg",
    linkedin: "https://www.linkedin.com/in/udoayghosh/",
  },
  {
    name: "Surzayon",
    role: "Founder & Creative Director",
    image: "/images/surzayon.png",
    linkedin: "https://www.linkedin.com/in/surzayon/",
  },
  {
    name: "Sreejeeta",
    role: "Co-Founder, Head of Strategy and Creative Development",
    image: "/images/sreejeeta.jpg",
    linkedin: "https://www.linkedin.com/in/sreejeeta-ghosh/",
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
