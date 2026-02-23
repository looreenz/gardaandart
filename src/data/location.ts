export interface Attraction {
  distance: string;
  icon: string;
}

export const nearbyAttractions: Attraction[] = [
  {
    distance: "150 m",
    icon: "waves",
  },
  {
    distance: "300 m",
    icon: "building",
  },
  {
    distance: "600 m",
    icon: "castle",
  },
  {
    distance: "10 km",
    icon: "wine",
  },
  {
    distance: "18 km",
    icon: "star",
  },
  {
    distance: "38 km",
    icon: "heart",
  },
  {
    distance: "32 km",
    icon: "landmark",
  },
  {
    distance: "150 km",
    icon: "anchor",
  },
];

export const propertyAddress = {
  street: "Via Roma",
  city: "Garda",
  province: "Verona",
  region: "Veneto",
  country: "Italy",
  coordinates: {
    lat: 45.574,
    lng: 10.713,
  },
};
