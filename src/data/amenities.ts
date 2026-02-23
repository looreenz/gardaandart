export interface Amenity {
  icon: string;
  category: "connectivity" | "comfort" | "kitchen" | "outdoor" | "services";
}

export const amenities: Amenity[] = [
  // Connectivity
  { icon: "wifi", category: "connectivity" },
  { icon: "tv", category: "connectivity" },
  // Comfort
  { icon: "snowflake", category: "comfort" },
  { icon: "thermometer", category: "comfort" },
  { icon: "bed", category: "comfort" },
  { icon: "shirt", category: "comfort" },
  // Kitchen
  { icon: "utensils", category: "kitchen" },
  { icon: "coffee", category: "kitchen" },
  { icon: "microwave", category: "kitchen" },
  { icon: "refrigerator", category: "kitchen" },
  // Outdoor
  { icon: "sun", category: "outdoor" },
  { icon: "waves", category: "outdoor" },
  { icon: "trees", category: "outdoor" },
  // Services
  { icon: "key", category: "services" },
  { icon: "shield", category: "services" },
  { icon: "wind", category: "services" },
  { icon: "car", category: "services" },
  { icon: "baby", category: "services" },
];
