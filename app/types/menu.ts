export type Language = "ar" | "en" | "he";
export type LocalizedText = Record<Language, string>;

export type PriceOption = { label: LocalizedText; price: number };
export type ProductSelection = { label: LocalizedText; options: LocalizedText[]; required?: boolean };

export type AddOnOption = { id: string; label: LocalizedText; price: number };
export type AddOnGroup = {
  id: string;
  label: LocalizedText;
  kind: "toggle" | "quantity" | "single";
  options: AddOnOption[];
  required?: boolean;
};
export type CartAddOn = { groupId: string; optionId: string; quantity: number };

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
  addOnGroups?: AddOnGroup[];
  customOneAtATime?: boolean;
  allowBulkQuantity?: boolean;
  placeholderPrice?: boolean;
};
export type MenuCategory = { id: string; name: LocalizedText; items: MenuItem[] };
export type CartLine = {
  key: string;
  itemId: string;
  priceIndex: number;
  selectionIndex: number | null;
  addOns?: CartAddOn[];
  quantity: number;
};
export type FulfillmentMethod = "pickup" | "delivery";
