export interface Amenity {
  icon: string;
  label: string;
  category: "connectivity" | "comfort" | "kitchen" | "outdoor" | "services";
}

export const amenities: Amenity[] = [
  // Connectivity
  { icon: "wifi", label: "Free WiFi", category: "connectivity" },
  { icon: "tv", label: "Smart TV", category: "connectivity" },
  // Comfort
  { icon: "snowflake", label: "Air Conditioning", category: "comfort" },
  { icon: "thermometer", label: "Heating", category: "comfort" },
  { icon: "bed", label: "Premium Bedding", category: "comfort" },
  { icon: "shirt", label: "Washing Machine", category: "comfort" },
  // Kitchen
  { icon: "utensils", label: "Full Kitchen", category: "kitchen" },
  { icon: "coffee", label: "Coffee Machine", category: "kitchen" },
  { icon: "microwave", label: "Microwave", category: "kitchen" },
  { icon: "refrigerator", label: "Refrigerator", category: "kitchen" },
  // Outdoor
  { icon: "sun", label: "Private Terrace", category: "outdoor" },
  { icon: "waves", label: "Lake Views", category: "outdoor" },
  { icon: "trees", label: "Garden Access", category: "outdoor" },
  // Services
  { icon: "key", label: "Self Check-in", category: "services" },
  { icon: "shield", label: "In-room Safe", category: "services" },
  { icon: "wind", label: "Hair Dryer", category: "services" },
  { icon: "car", label: "Parking Nearby", category: "services" },
  { icon: "baby", label: "Baby Cot Available", category: "services" },
];
