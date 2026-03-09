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
  { icon: "hanger", category: "comfort" },
  { icon: "blinds", category: "comfort" },
  { icon: "wardrobe", category: "comfort" },
  // Kitchen
  { icon: "utensils", category: "kitchen" },
  { icon: "refrigerator", category: "kitchen" },
  { icon: "freezer", category: "kitchen" },
  { icon: "microwave", category: "kitchen" },
  { icon: "oven", category: "kitchen" },
  { icon: "kettle", category: "kitchen" },
  { icon: "diningTable", category: "kitchen" },
  // Outdoor
  { icon: "sun", category: "outdoor" },
  { icon: "sunbed", category: "outdoor" },
  { icon: "outdoorFurniture", category: "outdoor" },
  { icon: "outdoorDining", category: "outdoor" },
  // Services
  { icon: "wind", category: "services" },
  { icon: "shower", category: "services" },
  { icon: "soap", category: "services" },
  { icon: "car", category: "services" },
  { icon: "key", category: "services" },
];
