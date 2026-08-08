import { restaurant } from "../data/restaurant";
import { ui } from "../data/ui";
import { labels } from "../menu-data";
import type { Language } from "../types/menu";

const languages: { code: Language; label: string }[] = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "he", label: "עברית" },
];

type SiteHeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onCartOpen: () => void;
  cartCount: number;
};

export function SiteHeader({
  language,
  onLanguageChange,
  onCartOpen,
  cartCount,
}: SiteHeaderProps) {
  return (
    <header className="hero" id="top">
      <div className="hero-noise" aria-hidden="true" />
      <nav className="topbar" aria-label={labels.language[language]}>
        <a className="wordmark" href="#top" aria-label={restaurant.name[language]}>
          <img src={restaurant.images.logo} alt="" />
          <span>
            <strong>KANOON</strong>
            <small>BURGER &amp; MORE</small>
          </span>
        </a>

        <div className="topbar-actions">
          <div className="language-switcher">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={language === item.code ? "active" : ""}
                onClick={() => onLanguageChange(item.code)}
                aria-pressed={language === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button type="button" className="header-cart" onClick={onCartOpen}>
            <span aria-hidden="true">🛒</span>
            {ui.cartShort[language]}
            <strong>{cartCount}</strong>
          </button>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-actions">
            <a className="menu-cta" href="#menu">
              {labels.menu[language]} <span aria-hidden="true">↓</span>
            </a>
            <p>{ui.customerJourney[language]}</p>
          </div>
        </div>

        <div className="hero-identity">
          <div className="brand-collage">
            <div className="collage-food" aria-hidden="true">
              <img className="wings-shot" src={restaurant.images.wings} alt="" />
              <img className="burgers-shot" src={restaurant.images.burgers} alt="" />
            </div>
            <div className="collage-logo">
              <img src={restaurant.images.logo} alt={restaurant.name[language]} />
            </div>
          </div>

          <div className="hero-order-panel">
            <div className="hero-address">
              <span aria-hidden="true">📍</span>
              <p><small>{ui.addressLabel[language]}</small><strong>{restaurant.address[language]}</strong></p>
            </div>
            <button type="button" className="hero-cart-cta" onClick={onCartOpen}>
              <span className="hero-cart-icon" aria-hidden="true">🛒</span>
              <span className="hero-cart-copy">
                <strong>{ui.heroCartTitle[language]}</strong>
                <small>{cartCount > 0 ? ui.heroCartHint[language] : ui.heroCartEmpty[language]}</small>
              </span>
              <b>{cartCount}</b>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
