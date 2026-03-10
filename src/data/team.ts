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
    image: "",
  },
  {
    name: "Sreejeeta",
    role: "Co-Founder, Head of Business Operations",
    image: "",
  },
  {
    name: "Diana",
    role: "Head of Internal Operations",
    image: "",
  },
  {
    name: "Aeria",
    role: "AI Influencer",
    image: "",
    isAI: true,
  },
];
