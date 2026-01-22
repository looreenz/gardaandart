export interface AboutFeature {
  title: string;
  description: string;
  variant: "cyan" | "yellow" | "pink";
}

export const aboutFeatures: AboutFeature[] = [
  {
    title: "MASTER SUITE",
    description: "Main room with panoramic views.",
    variant: "cyan",
  },
  {
    title: "DESIGN",
    description: "Modern accents and premium fixtures.",
    variant: "yellow",
  },
  {
    title: "TERRACE",
    description: 'Impressive outdoor space inspired by "ART" palette.',
    variant: "pink",
  },
];
