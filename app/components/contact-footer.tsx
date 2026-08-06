import { restaurant } from "../data/restaurant";
import { ui } from "../data/ui";
import { labels } from "../menu-data";
import type { Language } from "../types/menu";

export function ContactFooter({ language }: { language: Language }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={restaurant.images.logo} alt={restaurant.name[language]} />
        <div>
          <strong>{restaurant.name[language]}</strong>
          <p>{labels.footer[language]}</p>
        </div>
      </div>

      <div className="footer-contact">
        <h3>{ui.contact[language]}</h3>
        <a href={`https://wa.me/${restaurant.whatsappNumber}`} target="_blank" rel="noreferrer">
          <span>{ui.whatsapp[language]}</span>
          <strong dir="ltr">{restaurant.whatsappDisplay}</strong>
        </a>
        <p><span>{ui.addressLabel[language]}</span>{restaurant.address[language]}</p>
      </div>

      <div className="footer-socials">
        <h3>{ui.followUs[language]}</h3>
        <div>
          {restaurant.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">{social.label} ↗</a>
          ))}
        </div>
        <a className="back-top" href="#top">{labels.backToTop[language]} ↑</a>
      </div>
    </footer>
  );
}
