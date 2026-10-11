import type { CartAddOn, MenuItem, Language } from "../types/menu";

export function normalizeAddOns(item: MenuItem, selections: CartAddOn[] = []): CartAddOn[] {
  const output: CartAddOn[] = [];
  for (const group of item.addOnGroups ?? []) {
    const selected = selections.filter((entry) => entry.groupId === group.id);
    for (const option of group.options) {
      const found = selected.find((entry) => entry.optionId === option.id);
      if (!found) continue;
      const quantity = group.kind === "quantity" ? Math.max(0, Math.floor(found.quantity)) : found.quantity > 0 ? 1 : 0;
      if (quantity) output.push({ groupId: group.id, optionId: option.id, quantity });
    }
  }
  return output;
}

export function addOnsValid(item: MenuItem, selections: CartAddOn[] = []): boolean {
  return (item.addOnGroups ?? []).every((group) => !group.required || selections.some((entry) => entry.groupId === group.id && entry.quantity > 0));
}

export function addOnTotal(item: MenuItem, selections: CartAddOn[] = []): number {
  return selections.reduce((sum, entry) => {
    const option = item.addOnGroups?.find((group) => group.id === entry.groupId)?.options.find((value) => value.id === entry.optionId);
    return sum + (option?.price ?? 0) * entry.quantity;
  }, 0);
}

export function addOnDescriptions(item: MenuItem, selections: CartAddOn[] = [], language: Language): string[] {
  return selections.flatMap((entry) => {
    const option = item.addOnGroups?.find((group) => group.id === entry.groupId)?.options.find((value) => value.id === entry.optionId);
    if (!option) return [];
    return [`${option.label[language]}${entry.quantity > 1 ? ` × ${entry.quantity}` : ""}`];
  });
}

export function configKey(itemId: string, priceIndex: number, selectionIndex: number | null, addOns: CartAddOn[]): string {
  const extras = [...addOns].sort((a,b) => `${a.groupId}:${a.optionId}`.localeCompare(`${b.groupId}:${b.optionId}`));
  return JSON.stringify([itemId, priceIndex, selectionIndex, extras]);
}
