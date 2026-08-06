import type { LocalizedText } from "../types/menu";

type SocialLink = {
  label: string;
  url: string;
};

export const restaurant = {
  name: {
    ar: "كانون برغر وأكثر",
    en: "Kanoon Burger & More",
    he: "קאנון בורגר ועוד",
  } satisfies LocalizedText,
  whatsappDisplay: "+972 56-968-7360",
  whatsappNumber: "972569687360",
  address: {
    ar: "نعلين - الشارع الرئيسي - جانب HAMADA SPORT",
    en: "Ni'lin – Main Street – next to HAMADA SPORT",
    he: "נעלין – הרחוב הראשי – ליד HAMADA SPORT",
  } satisfies LocalizedText,
  images: {
    logo: "/brand/kanoon-logo.webp",
    wings: "/brand/hero-wings.webp",
    burgers: "/brand/hero-burgers.webp",
  },
  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/kanoonresturant.2024/#",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/kanoonresturant.2024",
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@burger.kanoon",
    },
  ] satisfies SocialLink[],
} as const;
