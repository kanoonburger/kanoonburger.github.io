"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CartAddOn, CartLine } from "../types/menu";
import { configKey } from "../lib/configure";
import { menuCategories } from "../menu-data";

const STORAGE_KEY = "kanoon-cart-v3";
const PREVIOUS_STORAGE_KEY = "kanoon-cart-v2";
const LEGACY_STORAGE_KEY = "kanoon-cart-v1";

const isCartLine = (value: unknown): value is CartLine => {
  if (!value || typeof value !== "object") return false;
  const line = value as Partial<CartLine>;
  return typeof line.key === "string" && typeof line.itemId === "string" &&
    Number.isInteger(line.priceIndex) && (line.selectionIndex === null || Number.isInteger(line.selectionIndex)) &&
    Number.isInteger(line.quantity) && Number(line.quantity) > 0 &&
    (line.addOns === undefined || (Array.isArray(line.addOns) && line.addOns.every((entry) =>
      typeof entry?.groupId === "string" && typeof entry.optionId === "string" && Number.isInteger(entry.quantity) && entry.quantity >= 1)));
};

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const hasLoaded = useRef(false);
  const sequence = useRef(0);

  useEffect(() => {
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    const prior = !window.localStorage.getItem(STORAGE_KEY);
    const saved = window.localStorage.getItem(STORAGE_KEY) ?? window.localStorage.getItem(PREVIOUS_STORAGE_KEY);
    const frame = window.requestAnimationFrame(() => {
      if (saved) {
        try {
          const parsed: unknown = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const known = new Set(menuCategories.flatMap((category) => category.items.map((item) => item.id)));
            setLines(parsed.filter(isCartLine).filter((line: CartLine) => known.has(line.itemId)).map((line: CartLine) => prior && line.itemId === "FRIES003" && line.priceIndex === 1
            ? { ...line, priceIndex: 2, key: `${line.key}:migrated-large` } : line));
          }
        } catch { window.localStorage.removeItem(STORAGE_KEY); }
      }
      hasLoaded.current = true;
      // Preserve previous local carts; old chips size index 1 was Large before Medium was inserted.
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    if (!hasLoaded.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    window.localStorage.removeItem(PREVIOUS_STORAGE_KEY);
  }, [lines]);

  const uniqueKey = (base: string) => `${base}:unique:${Date.now()}:${++sequence.current}`;

  const addItem = useCallback((itemId: string, priceIndex: number, selectionIndex: number | null, addOns: CartAddOn[] = [], quantity = 1, forceSeparate = false) => {
    const base = configKey(itemId, priceIndex, selectionIndex, addOns);
    const key = forceSeparate ? uniqueKey(base) : base;
    setLines((current) => {
      const existing = forceSeparate ? undefined : current.find((line) => line.key === key);
      if (existing) return current.map((line) => line.key === key ? { ...line, quantity: line.quantity + quantity } : line);
      return [...current, { key, itemId, priceIndex, selectionIndex, addOns, quantity }];
    });
  }, []);

  const changeQuantity = useCallback((key: string, delta: number) => {
    setLines((current) => current.map((line) => line.key === key ? { ...line, quantity: Math.max(0, line.quantity + delta) } : line).filter((line) => line.quantity > 0));
  }, []);
  const removeItem = useCallback((key: string) => setLines((current) => current.filter((line) => line.key !== key)), []);

  // Editing a grouped line always splits off exactly ONE burger, preserving all other units.
  const updateOneItem = useCallback((key: string, priceIndex: number, selectionIndex: number | null, addOns: CartAddOn[]) => {
    setLines((current) => {
      const line = current.find((entry) => entry.key === key);
      if (!line) return current;
      const changed: CartLine = { ...line, key: uniqueKey(configKey(line.itemId, priceIndex, selectionIndex, addOns)), priceIndex, selectionIndex, addOns, quantity: 1 };
      return [...current.flatMap((entry) => entry.key !== key ? [entry] : entry.quantity > 1 ? [{ ...entry, quantity: entry.quantity - 1 }] : []), changed];
    });
  }, []);
  const clearCart = useCallback(() => { window.localStorage.removeItem(STORAGE_KEY); setLines([]); }, []);
  return { lines, addItem, changeQuantity, removeItem, updateOneItem, clearCart };
}
