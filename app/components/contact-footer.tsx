import { restaurant } from "../data/restaurant";
import { ui } from "../data/ui";
import { labels } from "../menu-data";
import type { Language } from "../types/menu";

function BrandIcon({ name }: { name: string }) {  if (name === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4a8.4 8.4 0 1 1 15.6-4.4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.1.5 0 .7.7 1.2 1.7 2.1 3 2.7.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.4-.9 1.9-.6.5-1.5.8-2.5.5-1.1-.3-2.5-.8-4.2-2.3-1.4-1.3-2.4-2.8-2.7-3.8-.4-1.2 0-2.4.4-2.9l.5-.3Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 21v-8h2.8l.5-3.2h-3.3V7.7c0-.9.3-1.6 1.7-1.6h1.8V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.3H7.3V13h2.9v8h3.5Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.4 3c.3 2.3 1.6 3.7 3.8 3.9v3.2a7.2 7.2 0 0 1-3.8-1.2v6.2a5.8 5.8 0 1 1-5-5.7v3.3a2.6 2.6 0 1 0 1.8 2.4V3h3.2Z" fill="currentColor" />
    </svg>
  );
}

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
        <a className="whatsapp-link" href={`https://wa.me/${restaurant.whatsappNumber}`} target="_blank" rel="noreferrer">
          <span className="social-icon" aria-hidden="true"><BrandIcon name="WhatsApp" /></span>
          <span className="contact-link-copy">
            <span>{ui.whatsapp[language]}</span>
            <strong dir="ltr">{restaurant.whatsappDisplay}</strong>
          </span>
        </a>
        <p><span>{ui.addressLabel[language]}</span>{restaurant.address[language]}</p>
      </div>

      <div className="footer-socials">
        <h3>{ui.followUs[language]}</h3>
        <div>
          {restaurant.socials.map((social) => (
            <a
              key={social.label}
              className={`social-link social-${social.label.toLowerCase()}`}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon" aria-hidden="true"><BrandIcon name={social.label} /></span>
              <span>{social.label}</span>
              <span className="external-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <a className="back-top" href="#top">{labels.backToTop[language]} ↑</a>
      </div>
    </footer>
  );
}
