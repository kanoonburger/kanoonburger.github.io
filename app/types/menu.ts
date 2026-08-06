export type Language = "ar" | "en" | "he";

export type LocalizedText = Record<Language, string>;

export type PriceOption = {
  label: LocalizedText;
  price: number;
};

export type ProductSelection = {
  label: LocalizedText;
  options: LocalizedText[];
  required?: boolean;
};

export type MenuItem = {
  id: string;
  slug: string;
  name: LocalizedText;
  description?: LocalizedText;
  image: string;
  prices: PriceOption[];
  badge?: LocalizedText;
  spicy?: boolean;
  selection?: ProductSelection;
};

export type MenuCategory = {
  id: string;
  name: LocalizedText;
  items: MenuItem[];
};

export type CartLine = {
  key: string;
  itemId: string;
  priceIndex: number;
  selectionIndex: number | null;
  quantity: number;
};

export type FulfillmentMethod = "pickup" | "delivery";
