export interface Stat {
  value: string;
  variant: "dark" | "cyan" | "yellow" | "pink";
}

export const stats: Stat[] = [
  {
    value: "1º",
    variant: "dark",
  },
  {
    value: "50",
    variant: "cyan",
  },
  {
    value: "2",
    variant: "yellow",
  },
  {
    value: "1",
    variant: "pink",
  },
];
