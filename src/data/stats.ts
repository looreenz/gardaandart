export interface Stat {
  label: string;
  value: string;
  variant: "dark" | "cyan" | "yellow" | "pink";
}

export const stats: Stat[] = [
  {
    label: "FLOOR",
    value: "1st",
    variant: "dark",
  },
  {
    label: "SQ METERS",
    value: "50m²",
    variant: "cyan",
  },
  {
    label: "BEDROOMS",
    value: "2",
    variant: "yellow",
  },
  {
    label: "BATHROOMS",
    value: "1",
    variant: "pink",
  },
];
