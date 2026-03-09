export interface Attraction {
  distance: string;
  icon: string;
}

export const nearbyAttractions: Attraction[] = [
  {
    distance: "2 km",
    icon: "castle",
  },
  {
    distance: "5 km",
    icon: "waves",
  },
  {
    distance: "5 km",
    icon: "building",
  },
  {
    distance: "5 km",
    icon: "waves",
  },
  {
    distance: "15 min",
    icon: "trees",
  },
  {
    distance: "15 km",
    icon: "waves",
  },
  {
    distance: "35 km",
    icon: "landmark",
  },
  {
    distance: "80 km",
    icon: "heart",
  },
];

export const propertyAddress = {
  street: "Bolognano-Vignole",
  city: "Arco",
  province: "Trento",
  region: "Trentino-Alto Adige",
  country: "Italy",
  coordinates: {
    lat: 45.9134,
    lng: 10.901,
  },
};
