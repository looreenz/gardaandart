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
    name: "Vincenzo",
    country: "Italia",
    flag: "🇮🇹",
    score: 10.0,
    date: "Gennaio 2026",
    text: "Nicola e la sua famiglia sono stati gentilissimi e professionali con noi. La casa perfetta, mi sono sentito veramente a casa, per il resto sia posizione e confort impeccabili. Lo consiglio vivamente.",
    stayType: "Famiglia",
  },
  {
    name: "Roberta",
    country: "Italia",
    flag: "🇮🇹",
    score: 10.0,
    date: "Dicembre 2025",
    text: "Piacevole soggiorno da consigliare. In 5 ci siamo trovati molto comodi, buon punto di partenza per località o escursioni. Host molto disponibile.",
    stayType: "Gruppo",
  },
  {
    name: "Markus",
    country: "Germania",
    flag: "🇩🇪",
    score: 10.0,
    date: "Agosto 2025",
    text: "Abbiamo trascorso un soggiorno molto piacevole nel nuovissimo appartamento moderno. La dotazione è di alta qualità e ben studiata, la posizione eccellente e la vista davvero bella. Tutto era molto pulito.",
    stayType: "Coppia",
  },
  {
    name: "Kianek",
    country: "Polonia",
    flag: "🇵🇱",
    score: 10.0,
    date: "Agosto 2025",
    text: "Alloggio confortevole, nuovo, ben attrezzato, pulito, spazioso e accogliente con posto auto gratuito. Il proprietario era sempre disponibile, la comunicazione è andata liscia. Consigliato.",
    stayType: "Coppia",
  },
  {
    name: "Noah",
    country: "Germania",
    flag: "🇩🇪",
    score: 10.0,
    date: "Ottobre 2025",
    text: "Ci siamo trovati molto bene a casa di Nicolas!",
    stayType: "Coppia",
  },
  {
    name: "Giovanni",
    country: "Italia",
    flag: "🇮🇹",
    score: 10.0,
    date: "Dicembre 2025",
    text: "Tutto perfetto.",
    stayType: "Coppia",
  },
];

export const overallScore = 9.8;
export const totalReviews = 9;
