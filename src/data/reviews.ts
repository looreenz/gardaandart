export interface Review {
  name: string;
  country: string;
  flag: string;
  score: number;
  date: string;
  text: string;
  stayType: string;
}

export const reviews: Review[] = [
  {
    name: "Sophie M.",
    country: "France",
    flag: "🇫🇷",
    score: 9.8,
    date: "August 2024",
    text: "Exceptional apartment — the terrace with lake views was absolutely breathtaking. The art-themed interiors make every corner photogenic. Perfect for a romantic getaway.",
    stayType: "Couple",
  },
  {
    name: "Marco T.",
    country: "Germany",
    flag: "🇩🇪",
    score: 9.5,
    date: "July 2024",
    text: "Beautifully designed space with everything you need. Location is unbeatable — 2 minutes walk to the lake and old town. The hosts were super responsive and helpful.",
    stayType: "Couple",
  },
  {
    name: "Elena R.",
    country: "Spain",
    flag: "🇪🇸",
    score: 9.6,
    date: "June 2024",
    text: "We loved every detail of this apartment. The kitchen was fully equipped, the beds incredibly comfortable, and the terrace became our favourite spot every morning and evening.",
    stayType: "Family",
  },
  {
    name: "James K.",
    country: "United Kingdom",
    flag: "🇬🇧",
    score: 9.4,
    date: "September 2024",
    text: "Stunning art-inspired design, great location near the lake. The apartment is stylish and modern. Highly recommend for anyone looking for a unique stay at Lake Garda.",
    stayType: "Couple",
  },
];

export const overallScore = 9.6;
export const totalReviews = 87;
