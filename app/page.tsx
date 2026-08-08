"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CartDrawer } from "./components/cart-drawer";
import { ContactFooter } from "./components/contact-footer";
import { ProductCard } from "./components/product-card";
import { SiteHeader } from "./components/site-header";
import { ui } from "./data/ui";
import { useCart } from "./hooks/use-cart";
import type { ResolvedCartLine } from "./lib/order";
import { labels, menuCategories } from "./menu-data";
import type { Language, MenuItem } from "./types/menu";

const supportedLanguages: Language[] = ["ar", "en", "he"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [cartOpen, setCartOpen] = useState(false);
  const { lines, addItem, changeQuantity, removeItem, clearCart } = useCart();
  const direction = language === "en" ? "ltr" : "rtl";

  const allItems = useMemo(
    () => menuCategories.flatMap((category) => category.items),
    [],
  );
  const itemMap = useMemo(
    () => new Map<string, MenuItem>(allItems.map((item) => [item.id, item])),
    [allItems],
  );
  const resolvedLines = useMemo(
    () =>
      lines
        .map((line) => {
          const item = itemMap.get(line.itemId);
          return item ? ({ ...line, item } satisfies ResolvedCartLine) : null;
        })
        .filter((line): line is ResolvedCartLine => line !== null),
    [itemMap, lines],
  );
  const cartCount = lines.reduce((sum, line) => sum + line.quantity, 0);

  useEffect(() => {
    const saved = window.localStorage.getItem("kanoon-language") as Language | null;
    const frame = window.requestAnimationFrame(() => {
      if (saved && supportedLanguages.includes(saved)) setLanguage(saved);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("kanoon-language", nextLanguage);
  };

  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <main dir={direction} className="site-shell">
      <SiteHeader
        language={language}
        onLanguageChange={selectLanguage}
        onCartOpen={() => setCartOpen(true)}
        cartCount={cartCount}
      />

      <div className="category-bar" id="menu">
        <div className="category-inner">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>{category.name[language]}</a>
          ))}
          <button type="button" className="category-cart" onClick={() => setCartOpen(true)}>
            🛒 {ui.cartShort[language]} <strong>{cartCount}</strong>
          </button>
        </div>
      </div>

      <section className="menu-content" aria-label={labels.menu[language]}>
        {menuCategories.map((category, categoryIndex) => (
          <section className="menu-category" id={category.id} key={category.id}>
            <div className="section-heading">
              <div>
                <span className="section-number">{String(categoryIndex + 1).padStart(2, "0")}</span>
                <h2>{category.name[language]}</h2>
              </div>
              <p>{category.items.length} {labels.items[language]}</p>
            </div>

            <div className="product-grid">
              {category.items.map((item) => (
                <ProductCard key={item.id} item={item} language={language} onAdd={addItem} />
              ))}
            </div>
          </section>
        ))}
      </section>

      <ContactFooter language={language} />

      <button
        type="button"
        className={`floating-cart ${cartCount > 0 ? "visible" : ""}`}
        onClick={() => setCartOpen(true)}
        aria-label={ui.cart[language]}
      >
        <span aria-hidden="true">🛒</span>
        <strong>{ui.cartShort[language]}</strong>
        <b>{cartCount}</b>
      </button>

      <CartDrawer
        open={cartOpen}
        language={language}
        lines={resolvedLines}
        onClose={closeCart}
        onQuantityChange={changeQuantity}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </main>
  );
}
