export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 29, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "AI Tools Built" },
  { value: 3, suffix: "", label: "Countries" },
];
