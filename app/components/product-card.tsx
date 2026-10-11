"use client";

import { useState } from "react";
import { labels } from "../menu-data";
import { ui } from "../data/ui";
import { AddOnControls } from "./addon-controls";
import { addOnTotal, addOnsValid, normalizeAddOns } from "../lib/configure";
import type { CartAddOn, Language, MenuItem } from "../types/menu";

type ProductCardProps = {
  item: MenuItem;
  language: Language;
  onAdd: (itemId: string, priceIndex: number, selectionIndex: number | null, addOns?: CartAddOn[], quantity?: number, forceSeparate?: boolean) => void;
};

export function ProductCard({ item, language, onAdd }: ProductCardProps) {
  const [priceIndex, setPriceIndex] = useState(0);
  const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
  const [addOns, setAddOns] = useState<CartAddOn[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [resetVersion, setResetVersion] = useState(0);
  const needsSelection = Boolean(item.selection?.required && selectionIndex === null);
  const valid = !needsSelection && addOnsValid(item, addOns);
  const unitPrice = item.prices[priceIndex].price + addOnTotal(item, addOns);

  const addToCart = () => {
    if (!valid) return;
    onAdd(item.id, priceIndex, selectionIndex, normalizeAddOns(item, addOns), item.customOneAtATime ? 1 : quantity, item.customOneAtATime);
    // Start a fresh selection after EVERY successful add, not only custom burgers.
    // The cart keeps the submitted configuration; only this card resets.
    setPriceIndex(0);
    setSelectionIndex(null);
    setAddOns([]);
    setQuantity(1);
    setResetVersion((version) => version + 1);
  };

  return <article className="product-card">
    <div className="product-image">
      {item.image ? <img src={item.image} className={item.id.startsWith("FAMILY") || item.id === "KIDS001" ? "family-offer-photo" : undefined} alt={item.name[language]} loading="lazy" /> : <div className="product-image-placeholder" role="img" aria-label={item.name[language]}>
        <span aria-hidden="true">✦</span><strong>KANOON</strong><small>{({ar:"الصورة قريبًا",en:"Photo coming soon",he:"התמונה בקרוב"})[language]}</small>
      </div>}
      <span className="product-id">{item.id}</span>
      {item.badge && <span className="popular-badge">★ {item.badge[language]}</span>}
      {item.spicy && !item.badge && <span className="spicy-badge">🌶 {labels.spicy[language]}</span>}
    </div>
    <div className="product-body">
      <h3>{item.name[language]}</h3>
      {item.description && <p className="product-description">{item.description[language]}</p>}
      <div className="product-order-controls">
        {item.prices.length > 1 && <fieldset className="option-group">
          <legend>{ui.chooseSize[language]}</legend>
          <div className="option-pills">{item.prices.map((price, index) => <button key={`${item.id}-${index}`} type="button"
            className={priceIndex === index ? "active" : ""} onClick={() => setPriceIndex(index)} aria-pressed={priceIndex === index}>
            <span>{price.label[language]}</span><strong>{price.price}</strong>
          </button>)}</div>
        </fieldset>}
        {item.selection && <fieldset className="option-group">
          <legend>{item.selection.label[language]}</legend>
          <div className="option-pills choice-pills">{item.selection.options.map((option, index) => <button key={index} type="button" className={selectionIndex === index ? "active" : ""}
            onClick={() => setSelectionIndex(index)} aria-pressed={selectionIndex === index}>
            {option[language]}</button>)}</div>
          {needsSelection && <small>{ui.chooseRequired[language]}</small>}
        </fieldset>}
        <AddOnControls key={resetVersion} item={item} language={language} selections={addOns} onChange={setAddOns} />
        {item.allowBulkQuantity && !item.customOneAtATime && <div className="bulk-quantity">
          <span>{({ar:"الكمية بنفس المواصفات",en:"Quantity with same options",he:"כמות עם אותן תוספות"})[language]}</span>
          <div className="addon-stepper"><button type="button" onClick={() => setQuantity(Math.max(1,quantity-1))}>−</button><b>{quantity}</b><button type="button" onClick={() => setQuantity(quantity+1)}>+</button></div>
        </div>}
        <div className="add-row">
          <div className="selected-price"><strong>{unitPrice * (item.customOneAtATime ? 1 : quantity)}</strong><span>{labels.currency[language]}</span></div>
          <button type="button" className="add-button" onClick={addToCart} disabled={!valid}>
            <span aria-hidden="true">+</span>
            {item.customOneAtATime ? ({ar:"تأكيد وإضافة للسلة",en:"Confirm and add to cart",he:"אישור והוספה לסל"})[language] : ui.add[language]}
          </button>
        </div>
        {item.placeholderPrice && <small className="test-price-tag">{({ar:"سعر تجريبي — غير معتمد",en:"Test price — not finalized",he:"מחיר זמני לבדיקה"})[language]}</small>}
      </div>
    </div>
  </article>;
}
