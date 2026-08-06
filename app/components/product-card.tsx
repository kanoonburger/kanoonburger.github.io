"use client";

import { useState } from "react";
import { labels } from "../menu-data";
import { ui } from "../data/ui";
import type { Language, MenuItem } from "../types/menu";

type ProductCardProps = {
  item: MenuItem;
  language: Language;
  onAdd: (itemId: string, priceIndex: number, selectionIndex: number | null) => void;
};

export function ProductCard({ item, language, onAdd }: ProductCardProps) {
  const [priceIndex, setPriceIndex] = useState(0);
  const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
  const [added, setAdded] = useState(false);
  const needsSelection = Boolean(item.selection?.required && selectionIndex === null);

  const choosePrice = (index: number) => {
    setPriceIndex(index);
    setAdded(false);
  };

  const chooseSelection = (index: number) => {
    setSelectionIndex(index);
    setAdded(false);
  };

  const addToCart = () => {
    if (needsSelection) return;
    onAdd(item.id, priceIndex, selectionIndex);
    setAdded(true);
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={item.image} alt={item.name[language]} loading="lazy" />
        <span className="product-id">{item.id}</span>
        {item.badge && <span className="popular-badge">★ {item.badge[language]}</span>}
        {item.spicy && !item.badge && (
          <span className="spicy-badge">🌶 {labels.spicy[language]}</span>
        )}
      </div>

      <div className="product-body">
        <h3>{item.name[language]}</h3>
        {item.description && <p className="product-description">{item.description[language]}</p>}

        <div className="product-order-controls">
          {item.prices.length > 1 && (
            <fieldset className="option-group">
              <legend>{ui.chooseSize[language]}</legend>
              <div className="option-pills">
                {item.prices.map((price, index) => (
                  <button
                    key={`${item.id}-${price.label.en}`}
                    type="button"
                    className={priceIndex === index ? "active" : ""}
                    onClick={() => choosePrice(index)}
                    aria-pressed={priceIndex === index}
                  >
                    <span>{price.label[language]}</span>
                    <strong>{price.price}</strong>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {item.selection && (
            <fieldset className="option-group">
              <legend>{item.selection.label[language]}</legend>
              <div className="option-pills choice-pills">
                {item.selection.options.map((option, index) => (
                  <button
                    key={option.en}
                    type="button"
                    className={selectionIndex === index ? "active" : ""}
                    onClick={() => chooseSelection(index)}
                    aria-pressed={selectionIndex === index}
                  >
                    {index === 1 ? "🌶 " : ""}{option[language]}
                  </button>
                ))}
              </div>
              {needsSelection && <small>{ui.chooseRequired[language]}</small>}
            </fieldset>
          )}

          <div className="add-row">
            <div className="selected-price">
              <strong>{item.prices[priceIndex].price}</strong>
              <span>{labels.currency[language]}</span>
            </div>
            <button
              type="button"
              className={`add-button ${added ? "added" : ""}`}
              onClick={addToCart}
              disabled={needsSelection}
            >
              <span aria-hidden="true">{added ? "✓" : "+"}</span>
              {added ? ui.added[language] : ui.add[language]}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
