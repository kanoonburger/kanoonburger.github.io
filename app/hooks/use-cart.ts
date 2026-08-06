"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CartLine } from "../types/menu";

const STORAGE_KEY = "kanoon-cart-v2";
const LEGACY_STORAGE_KEY = "kanoon-cart-v1";

const isCartLine = (value: unknown): value is CartLine => {
  if (!value || typeof value !== "object") return false;
  const line = value as Partial<CartLine>;
  return (
    typeof line.key === "string" &&
    typeof line.itemId === "string" &&
    Number.isInteger(line.priceIndex) &&
    (line.selectionIndex === null || Number.isInteger(line.selectionIndex)) &&
    Number.isInteger(line.quantity) &&
    Number(line.quantity) > 0
  );
};

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const hasLoaded = useRef(false);

  useEffect(() => {
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const frame = window.requestAnimationFrame(() => {
      if (saved) {
        try {
          const parsed: unknown = JSON.parse(saved);
          if (Array.isArray(parsed)) setLines(parsed.filter(isCartLine));
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
      hasLoaded.current = true;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addItem = useCallback((itemId: string, priceIndex: number, selectionIndex: number | null) => {
    const key = `${itemId}:${priceIndex}:${selectionIndex ?? "none"}`;
    setLines((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...current, { key, itemId, priceIndex, selectionIndex, quantity: 1 }];
    });
  }, []);

  const changeQuantity = useCallback((key: string, delta: number) => {
    setLines((current) =>
      current
        .map((line) =>
          line.key === key ? { ...line, quantity: Math.max(0, line.quantity + delta) } : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setLines((current) => current.filter((line) => line.key !== key));
  }, []);

  const clearCart = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setLines([]);
  }, []);

  return { lines, addItem, changeQuantity, removeItem, clearCart };
}
