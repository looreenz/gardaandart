export interface AboutFeature {
  title: string;
  description: string;
  variant: "cyan" | "yellow" | "pink";
}

export const aboutFeatures: AboutFeature[] = [
  {
    title: "MASTER SUITE",
    description: "Spacious main bedroom with panoramic lake views and premium bedding.",
    variant: "cyan",
  },
  {
    title: "ART & DESIGN",
    description: "Curated interiors with original artworks, bold colors and premium fixtures.",
    variant: "yellow",
  },
  {
    title: "PRIVATE TERRACE",
    description: "Sun-drenched outdoor space with lake views — perfect for morning coffee or sunset aperitivo.",
    variant: "pink",
  },
];
