import type { CartLine, FulfillmentMethod, Language, MenuItem } from "../types/menu";

export type ResolvedCartLine = CartLine & {
  item: MenuItem;
};

type OrderDetails = {
  fulfillment: FulfillmentMethod;
  phone: string;
  address: string;
  notes: string;
};

const text = {
  ar: {
    heading: "🔥 طلب جديد — كانون برغر وأكثر",
    quantity: "الكمية",
    choice: "الخيار",
    method: "طريقة الاستلام",
    pickup: "استلام من المطعم",
    delivery: "توصيل",
    phone: "هاتف الزبون",
    address: "عنوان التوصيل",
    notes: "ملاحظات الطلب",
    total: "الإجمالي",
    currency: "شيكل",
  },
  en: {
    heading: "🔥 New order — Kanoon Burger & More",
    quantity: "Quantity",
    choice: "Choice",
    method: "Fulfillment",
    pickup: "Restaurant pickup",
    delivery: "Delivery",
    phone: "Customer phone",
    address: "Delivery address",
    notes: "Order notes",
    total: "Total",
    currency: "NIS",
  },
  he: {
    heading: "🔥 הזמנה חדשה — קאנון בורגר ועוד",
    quantity: "כמות",
    choice: "בחירה",
    method: "אופן קבלה",
    pickup: "איסוף מהמסעדה",
    delivery: "משלוח",
    phone: "טלפון לקוח",
    address: "כתובת למשלוח",
    notes: "הערות להזמנה",
    total: "סה״כ",
    currency: "₪",
  },
} as const;

export const cartTotal = (lines: ResolvedCartLine[]) =>
  lines.reduce((sum, line) => {
    const price = line.item.prices[line.priceIndex]?.price ?? 0;
    return sum + price * line.quantity;
  }, 0);

export function buildOrderMessage(
  lines: ResolvedCartLine[],
  details: OrderDetails,
  language: Language,
) {
  const copy = text[language];
  const items = lines.map((line, index) => {
    const price = line.item.prices[line.priceIndex];
    const lineTotal = price.price * line.quantity;
    const size = line.item.prices.length > 1 ? ` — ${price.label[language]}` : "";
    const choice =
      line.selectionIndex !== null && line.item.selection
        ? `\n   ${copy.choice}: ${line.item.selection.options[line.selectionIndex][language]}`
        : "";

    return `${index + 1}. ${line.item.name[language]}${size}\n   ${copy.quantity}: ${line.quantity} × ${price.price} ${copy.currency} = ${lineTotal} ${copy.currency}${choice}`;
  });

  const deliveryDetails =
    details.fulfillment === "delivery"
      ? `\n${copy.phone}: ${details.phone.trim()}\n${copy.address}: ${details.address.trim()}`
      : "";
  const notes = details.notes.trim() ? `\n${copy.notes}:\n${details.notes.trim()}` : "";

  return [
    copy.heading,
    "",
    ...items.flatMap((item) => [item, ""]),
    "────────────",
    `${copy.method}: ${details.fulfillment === "delivery" ? copy.delivery : copy.pickup}${deliveryDetails}${notes}`,
    "────────────",
    `${copy.total}: ${cartTotal(lines)} ${copy.currency}`,
  ].join("\n");
}

export const whatsappUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
