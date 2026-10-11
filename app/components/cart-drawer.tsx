"use client";

import { useEffect, useMemo, useState } from "react";
import { restaurant } from "../data/restaurant";
import { ui } from "../data/ui";
import { buildOrderMessage, cartTotal, lineUnitPrice, type ResolvedCartLine, whatsappUrl } from "../lib/order";
import { AddOnControls } from "./addon-controls";
import { addOnDescriptions, addOnsValid, normalizeAddOns } from "../lib/configure";
import { labels } from "../menu-data";
import type { CartAddOn, FulfillmentMethod, Language } from "../types/menu";

type CartDrawerProps = {
  open: boolean;
  language: Language;
  lines: ResolvedCartLine[];
  onClose: () => void;
  onQuantityChange: (key: string, delta: number) => void;
  onRemove: (key: string) => void;
  onUpdateOne: (key: string, priceIndex: number, selectionIndex: number | null, addOns: CartAddOn[]) => void;
  onClear: () => void;
};

type Stage = "cart" | "details" | "review" | "success";

export function CartDrawer({
  open,
  language,
  lines,
  onClose,
  onQuantityChange,
  onRemove,
  onUpdateOne,
  onClear,
}: CartDrawerProps) {
  const [stage, setStage] = useState<Stage>("cart");
  const [fulfillment, setFulfillment] = useState<FulfillmentMethod>("pickup");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState(0);
  const [editSelection, setEditSelection] = useState<number | null>(null);
  const [editAddOns, setEditAddOns] = useState<CartAddOn[]>([]);
  const editingLine = editingKey ? lines.find((line) => line.key === editingKey) : undefined;
  const canSave = editingLine && (!editingLine.item.selection?.required || editSelection !== null) && addOnsValid(editingLine.item, editAddOns);
  const startEdit = (line: ResolvedCartLine) => {
    setEditingKey(line.key);
    setEditPrice(line.priceIndex);
    setEditSelection(line.selectionIndex);
    setEditAddOns([...(line.addOns ?? [])]);
  };
  const saveEdit = () => {
    if (!editingLine || !canSave) return;
    onUpdateOne(editingLine.key, editPrice, editSelection, normalizeAddOns(editingLine.item, editAddOns));
    setEditingKey(null);
  };

  const total = cartTotal(lines);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const whatsappLanguage: Language = language === "he" ? "en" : language;
  const previewMessage = useMemo(
    () => buildOrderMessage(lines, { fulfillment, phone, address, notes }, language),
    [address, fulfillment, language, lines, notes, phone],
  );
  const whatsappMessage = useMemo(
    () => buildOrderMessage(
      lines,
      { fulfillment, phone, address, notes },
      whatsappLanguage,
      { includePrices: false },
    ),
    [address, fulfillment, lines, notes, phone, whatsappLanguage],
  );

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  const closeDrawer = () => {
    setStage("cart");
    setEditingKey(null);
    setError("");
    onClose();
  };

  const review = (event: React.FormEvent) => {
    event.preventDefault();
    if (fulfillment === "delivery" && (!phone.trim() || !address.trim())) {
      setError(ui.deliveryRequired[language]);
      return;
    }
    setError("");
    setStage("review");
  };

  const completeOrder = () => {
    window.open(whatsappUrl(restaurant.whatsappNumber, whatsappMessage), "_blank", "noopener,noreferrer");
    onClear();
    setPhone("");
    setAddress("");
    setNotes("");
    setFulfillment("pickup");
    setStage("success");
  };

  const startNewOrder = () => {
    onClear();
    setPhone("");
    setAddress("");
    setNotes("");
    setFulfillment("pickup");
    closeDrawer();
  };

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-backdrop" type="button" onClick={closeDrawer} aria-label={ui.close[language]} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className="drawer-header">
          <div>
            <span>{itemCount} {labels.items[language]}</span>
            <h2 id="cart-title">
              {stage === "review" ? ui.previewOrder[language] : stage === "success" ? ui.whatsappReady[language] : ui.cart[language]}
            </h2>
          </div>
          <button type="button" className="icon-button" onClick={closeDrawer} aria-label={ui.close[language]}>×</button>
        </header>

        {stage === "cart" && (
          <>
            {editingLine ? <div className="cart-edit-panel">
              <h3>{({ar:"تعديل برغر واحد",en:"Edit one item",he:"עריכת פריט אחד"})[language]}</h3>
              <p>{editingLine.item.name[language]}</p>
              {editingLine.item.prices.length > 1 && <fieldset className="option-group"><legend>{ui.chooseSize[language]}</legend>
                <div className="option-pills">{editingLine.item.prices.map((price, index) => <button key={index} type="button" className={editPrice === index ? "active" : ""} onClick={() => setEditPrice(index)}>
                  {price.label[language]} — {price.price} ₪
                </button>)}</div>
              </fieldset>}
              {editingLine.item.selection && <fieldset className="option-group"><legend>{editingLine.item.selection.label[language]}</legend>
                <div className="option-pills">{editingLine.item.selection.options.map((choice, index) => <button key={index} type="button" className={editSelection === index ? "active" : ""} onClick={() => setEditSelection(index)}>{choice[language]}</button>)}</div>
              </fieldset>}
              <AddOnControls item={editingLine.item} language={language} selections={editAddOns} onChange={setEditAddOns} />
              {editingLine.quantity > 1 && <p className="edit-one-note">{({ar:"سيتم تعديل قطعة واحدة فقط؛ باقي الكمية تبقى كما هي.",en:"Only one item will change; the rest stay as they are.",he:"רק פריט אחד ישתנה; היתר יישארו ללא שינוי."})[language]}</p>}
              <div className="drawer-actions"><button className="secondary-button" type="button" onClick={() => setEditingKey(null)}>{({ar:"إلغاء",en:"Cancel",he:"ביטול"})[language]}</button>
                <button className="primary-button" type="button" disabled={!canSave} onClick={saveEdit}>{({ar:"حفظ تعديل قطعة واحدة",en:"Save one item",he:"שמירת פריט אחד"})[language]}</button></div>
            </div> : lines.length === 0 ? (
              <div className="empty-cart">
                <span aria-hidden="true">🍔</span>
                <h3>{ui.emptyCart[language]}</h3>
                <p>{ui.emptyCartHint[language]}</p>
                <button type="button" className="primary-button" onClick={closeDrawer}>{ui.continueShopping[language]}</button>
              </div>
            ) : (
              <>
                <div className="cart-lines">
                  {lines.map((line) => {
                    const price = line.item.prices[line.priceIndex];
                    const selection =
                      line.selectionIndex !== null && line.item.selection
                        ? line.item.selection.options[line.selectionIndex]?.[language]
                        : null;
                    const extras = addOnDescriptions(line.item, line.addOns ?? [], language);
                    return (
                      <article className="cart-line" key={line.key}>
                        {line.item.image ? <img src={line.item.image} alt="" /> : <div className="cart-thumb-placeholder" aria-hidden="true">✦</div>}
                        <div className="cart-line-copy">
                          <h3>{line.item.name[language]}</h3>
                          <p>
                            {line.item.prices.length > 1 && <span>{price.label[language]}</span>}
                            {selection && <span>{selection}</span>}
                            {extras.map((extra) => <span key={extra}>+ {extra}</span>)}
                          </p>
                          <div className="cart-line-actions">
                            <button type="button" onClick={() => startEdit(line)}>{({ar:"تعديل",en:"Edit",he:"עריכה"})[language]}</button>
                            <button type="button" onClick={() => onRemove(line.key)}>{ui.remove[language]}</button>
                          </div>
                        </div>
                        <div className="cart-line-side">
                          <strong>{lineUnitPrice(line) * line.quantity} <small>{labels.currency[language]}</small></strong>
                          {line.item.customOneAtATime ? <span className="cart-single-unit">×1</span> : <div className="quantity-control" aria-label={ui.cart[language]}>
                            <button type="button" onClick={() => onQuantityChange(line.key, -1)} aria-label="−">−</button>
                            <span>{line.quantity}</span>
                            <button type="button" onClick={() => onQuantityChange(line.key, 1)} aria-label="+">+</button>
                          </div>}
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div className="cart-summary">
                  <p className="saved-note">✓ {ui.cartSaved[language]}</p>
                  <div className="total-row">
                    <span>{ui.subtotal[language]}</span>
                    <strong>{total} <small>{labels.currency[language]}</small></strong>
                  </div>
                  <button type="button" className="primary-button" onClick={() => setStage("details")}>{ui.proceed[language]}</button>
                </div>
              </>
            )}
          </>
        )}

        {stage === "details" && (
          <form className="order-form" onSubmit={review}>
            <div className="stage-intro">
              <h3>{ui.orderDetails[language]}</h3>
            </div>
            <div className="fulfillment-options">
              <button type="button" className={fulfillment === "pickup" ? "active" : ""} onClick={() => { setFulfillment("pickup"); setError(""); }}>
                <span aria-hidden="true">🏪</span>
                <strong>{ui.pickup[language]}</strong>
                <small>{ui.pickupHint[language]}</small>
              </button>
              <button type="button" className={fulfillment === "delivery" ? "active" : ""} onClick={() => setFulfillment("delivery")}>
                <span aria-hidden="true">🛵</span>
                <strong>{ui.delivery[language]}</strong>
                <small>{ui.deliveryHint[language]}</small>
              </button>
            </div>

            {fulfillment === "delivery" && (
              <div className="delivery-fields">
                <label>
                  <span>{ui.phone[language]} *</span>
                  <input value={phone} onChange={(event) => setPhone(event.target.value)} inputMode="tel" placeholder={ui.phonePlaceholder[language]} />
                </label>
                <label>
                  <span>{ui.address[language]} *</span>
                  <textarea value={address} onChange={(event) => setAddress(event.target.value)} rows={3} placeholder={ui.addressPlaceholder[language]} />
                </label>
              </div>
            )}

            <label className="notes-field">
              <span>{ui.notes[language]}</span>
              <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={5} placeholder={ui.notesPlaceholder[language]} />
            </label>
            {error && <p className="form-error" role="alert">{error}</p>}

            <div className="drawer-actions">
              <button type="button" className="secondary-button" onClick={() => setStage("cart")}>{ui.backToEdit[language]}</button>
              <button type="submit" className="primary-button">{ui.previewOrder[language]}</button>
            </div>
          </form>
        )}

        {stage === "review" && (
          <div className="review-order">
            <p>{ui.previewHint[language]}</p>
            <pre dir={language === "en" ? "ltr" : "rtl"}>{previewMessage}</pre>
            <div className="whatsapp-notice"><span aria-hidden="true">ⓘ</span><p>{ui.whatsappNotice[language]}</p></div>
            <div className="drawer-actions">
              <button type="button" className="secondary-button" onClick={() => setStage("details")}>{ui.backToEdit[language]}</button>
              <button type="button" className="whatsapp-button" onClick={completeOrder}><span aria-hidden="true">◉</span>{ui.openWhatsapp[language]}</button>
            </div>
          </div>
        )}

        {stage === "success" && (
          <div className="order-success">
            <div className="success-icon" aria-hidden="true">✓</div>
            <h3>{ui.whatsappReady[language]}</h3>
            <p>{ui.whatsappReadyHint[language]}</p>
            <button type="button" className="primary-button" onClick={startNewOrder}>{ui.newOrder[language]}</button>
            <button type="button" className="text-button" onClick={closeDrawer}>{ui.close[language]}</button>
          </div>
        )}
      </aside>
    </div>
  );
}
