"use client";
import type { CartAddOn, Language, MenuItem } from "../types/menu";

type Props = { item: MenuItem; language: Language; selections: CartAddOn[]; onChange: (value: CartAddOn[]) => void };

export function AddOnControls({ item, language, selections, onChange }: Props) {
  const select = (groupId: string, optionId: string, quantity: number, exclusive: boolean) => {
    const rest = selections.filter((entry) => entry.groupId !== groupId || (!exclusive && entry.optionId !== optionId));
    onChange(quantity > 0 ? [...rest, { groupId, optionId, quantity }] : rest);
  };
  const renderGroup = (group: NonNullable<MenuItem["addOnGroups"]>[number]) => {
    const count = selections.filter((entry) => entry.groupId === group.id).reduce((sum, entry) => sum + entry.quantity, 0);
    const inner = <div className="addon-options">{group.options.map((option) => {
      const current = selections.find((entry) => entry.groupId === group.id && entry.optionId === option.id)?.quantity ?? 0;
      const exclusive = group.kind === "single";
      return <div className="addon-option" key={option.id}>
        {group.kind === "quantity" ? <>
          <span>{option.label[language]} <small>+{option.price} ₪</small></span>
          <div className="addon-stepper">
            <button type="button" onClick={() => select(group.id, option.id, Math.max(0, current - 1), false)} disabled={current === 0} aria-label="−">−</button>
            <b>{current}</b>
            <button type="button" onClick={() => select(group.id, option.id, current + 1, false)} aria-label="+">+</button>
          </div>
        </> : <label>
          <input type={exclusive ? "radio" : "checkbox"} name={exclusive ? `${item.id}-${group.id}` : undefined}
            checked={current > 0} onChange={() => select(group.id, option.id, exclusive ? 1 : current ? 0 : 1, exclusive)} />
          <span>{option.label[language]} <small>+{option.price} ₪</small></span>
        </label>}
      </div>;
    })}</div>;
    const needChoice = group.required && count === 0;
    const hint = needChoice && <small className="required-hint">{({ ar: "اختر خيارًا واحدًا", en: "Choose one option", he: "יש לבחור אפשרות אחת" })[language]}</small>;
    if (group.id === "extra-beef") return <details className="beef-addon-details" key={group.id}>
      <summary>{group.label[language]} {count > 0 && <b>({count})</b>}</summary>
      {inner}
    </details>;
    return <fieldset className="option-group addon-group" key={group.id}>
      <legend>{group.label[language]} {group.required ? "*" : ""}</legend>{inner}{hint}
    </fieldset>;
  };
  return <>{(item.addOnGroups ?? []).map(renderGroup)}</>;
}
