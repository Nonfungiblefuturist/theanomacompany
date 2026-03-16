export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
  savings: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Honestly didn't think AI could match our traditional shoots until I saw the results. Cut our production time from 3 weeks to 10 days and saved us $45K on our Q4 campaign.",
    author: "Mark L.",
    role: "Creative Director",
    project: "Product Launch Campaign",
    savings: "Saved $45K, 60% faster delivery",
  },
  {
    quote: "The character consistency blew my mind. We needed the same actor across 12 different scenes and Anoma delivered flawlessly.",
    author: "Diana G.",
    role: "Art Director",
    project: "Brand Commercial Series",
    savings: "25% better audience response",
  },
  {
    quote: "Their custom AI workflow integration transformed our entire content pipeline. We're now pushing out 3x more social content with the same team.",
    author: "Philip L.",
    role: "Head of Creative",
    project: "Workflow Automation",
    savings: "3x content output increase",
  },
  {
    quote: "Skeptical at first, but the photorealism is incredible. Our product photography now looks better than our $15K studio shoots.",
    author: "Jennifer W.",
    role: "Commercial Photographer",
    project: "Product Photography Suite",
    savings: "70% cost reduction vs studio",
  },
  {
    quote: "The speed is unreal. What used to take our team 2 months, Anoma delivered in 3 weeks. Same quality, faster turnaround.",
    author: "Ryan B.",
    role: "Advertising Producer",
    project: "Campaign Production",
    savings: "60% faster than traditional",
  },
  {
    quote: "Working with Anoma completely changed how we approach creative briefs. Our client approval rate went up 40%.",
    author: "Sarah M.",
    role: "Senior Copywriter",
    project: "Creative Concept Development",
    savings: "40% higher approval rate",
  },
];
