export interface Attraction {
  name: string;
  distance: string;
  time: string;
  icon: string;
  description: string;
}

export const nearbyAttractions: Attraction[] = [
  {
    name: "Lake Garda Shore",
    distance: "150 m",
    time: "2 min walk",
    icon: "waves",
    description: "Crystal-clear waters and promenade for morning strolls.",
  },
  {
    name: "Garda Old Town",
    distance: "300 m",
    time: "4 min walk",
    icon: "building",
    description: "Charming medieval centre with restaurants, cafés and shops.",
  },
  {
    name: "La Rocca di Garda",
    distance: "600 m",
    time: "8 min walk",
    icon: "castle",
    description: "Historic hilltop fortress with panoramic lake views.",
  },
  {
    name: "Bardolino Wine Region",
    distance: "10 km",
    time: "15 min drive",
    icon: "wine",
    description: "DOC wine country with tastings and cellars.",
  },
  {
    name: "Gardaland",
    distance: "18 km",
    time: "20 min drive",
    icon: "star",
    description: "Italy's largest amusement park — perfect for families.",
  },
  {
    name: "Verona",
    distance: "38 km",
    time: "40 min drive",
    icon: "heart",
    description: "Romeo & Juliet's city — UNESCO World Heritage Site.",
  },
  {
    name: "Sirmione",
    distance: "32 km",
    time: "35 min drive",
    icon: "landmark",
    description: "Scenic peninsula with Roman ruins and thermal baths.",
  },
  {
    name: "Venice",
    distance: "150 km",
    time: "1h 30min drive",
    icon: "anchor",
    description: "La Serenissima — the iconic floating city of Italy.",
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
