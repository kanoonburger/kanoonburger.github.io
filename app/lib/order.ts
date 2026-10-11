import type { CartLine, FulfillmentMethod, Language, MenuItem } from "../types/menu";
import { addOnDescriptions, addOnTotal } from "./configure";
export type ResolvedCartLine = CartLine & { item: MenuItem };
type OrderDetails = { fulfillment: FulfillmentMethod; phone: string; address: string; notes: string };
type OrderMessageOptions = { includePrices?: boolean };
const text = {
  ar: { heading: "طلب جديد — كانون برغر وأكثر", quantity: "الكمية", choice: "الخيار", extras: "الإضافات", method: "طريقة الاستلام", pickup: "استلام من المطعم", delivery: "توصيل", phone: "هاتف الزبون", address: "عنوان التوصيل", notes: "ملاحظات الطلب", total: "الإجمالي", currency: "شيكل", priceConfirmation: "يتم تأكيد السعر النهائي من قِبل المطعم." },
  en: { heading: "New order — Kanoon Burger & More", quantity: "Quantity", choice: "Choice", extras: "Extras", method: "Fulfillment", pickup: "Restaurant pickup", delivery: "Delivery", phone: "Customer phone", address: "Delivery address", notes: "Order notes", total: "Total", currency: "NIS", priceConfirmation: "The final price will be confirmed by the restaurant." },
  he: { heading: "הזמנה חדשה — קאנון בורגר ועוד", quantity: "כמות", choice: "בחירה", extras: "תוספות", method: "אופן קבלה", pickup: "איסוף מהמסעדה", delivery: "משלוח", phone: "טלפון לקוח", address: "כתובת למשלוח", notes: "הערות להזמנה", total: "סה״כ", currency: "₪", priceConfirmation: "המחיר הסופי יאושר על ידי המסעדה." },
} as const;
export const lineUnitPrice = (line: ResolvedCartLine): number =>
  (line.item.prices[line.priceIndex]?.price ?? 0) + addOnTotal(line.item, line.addOns ?? []);
export const cartTotal = (lines: ResolvedCartLine[]) => lines.reduce((sum, line) => sum + lineUnitPrice(line) * line.quantity, 0);
export function buildOrderMessage(lines: ResolvedCartLine[], details: OrderDetails, language: Language, options: OrderMessageOptions = {}) {
  const copy = text[language];
  const includePrices = options.includePrices ?? true;
  const items = lines.map((line, index) => {
    const price = line.item.prices[line.priceIndex];
    const size = line.item.prices.length > 1 ? ` — ${price?.label[language] ?? ""}` : "";
    const choice = line.selectionIndex !== null && line.item.selection?.options[line.selectionIndex]
      ? `\n   ${copy.choice}: ${line.item.selection.options[line.selectionIndex][language]}` : "";
    const extras = addOnDescriptions(line.item, line.addOns ?? [], language);
    const extraText = extras.length ? `\n   ${copy.extras}: ${extras.join("، ")}` : "";
    const quantity = includePrices
      ? `${copy.quantity}: ${line.quantity} × ${lineUnitPrice(line)} ${copy.currency} = ${lineUnitPrice(line) * line.quantity} ${copy.currency}`
      : `${copy.quantity}: ${line.quantity}`;
    return `${index + 1}. ${line.item.name[language]}${size}\n   ${quantity}${choice}${extraText}`;
  });
  const deliveryDetails = details.fulfillment === "delivery" ? `\n${copy.phone}: ${details.phone.trim()}\n${copy.address}: ${details.address.trim()}` : "";
  const notes = details.notes.trim() ? `\n${copy.notes}:\n${details.notes.trim()}` : "";
  return [copy.heading, "", ...items.flatMap((item) => [item, ""]), "────────────", `${copy.method}: ${details.fulfillment === "delivery" ? copy.delivery : copy.pickup}${deliveryDetails}${notes}`, "────────────", includePrices ? `${copy.total}: ${cartTotal(lines)} ${copy.currency}` : copy.priceConfirmation].join("\n");
}
export const whatsappUrl = (phone: string, message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
