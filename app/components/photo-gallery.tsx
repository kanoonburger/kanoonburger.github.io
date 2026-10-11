"use client";
import { useEffect, useState } from "react";
import type { Language, LocalizedText } from "../types/menu";

type GalleryPhoto = { src: string; alt: LocalizedText };
const photos: { title: LocalizedText; photos: GalleryPhoto[] }[] = [
  { title: { ar: "من طلبياتنا", en: "From Our Orders", he: "מההזמנות שלנו" }, photos: [
    { src: "/gallery/kanoon-customer-order.webp", alt: { ar: "صورة طلبية برغر وسناك", en: "Burger and snack order", he: "הזמנת בורגרים ונשנושים" } },
    { src: "/gallery/kanoon-food-promo.webp", alt: { ar: "صورة ترويجية لبرغر كانون", en: "Kanoon burger promotional photo", he: "תמונת פרסום של בורגר קאנון" } },
  ] },
  { title: { ar: "موقعنا وصور من المكان", en: "Our Store & Surroundings", he: "המסעדה והסביבה" }, photos: [
    { src: "/gallery/kanoon-storefront.webp", alt: { ar: "واجهة مطعم كانون وبجانبه ChocoDose", en: "Kanoon storefront next to ChocoDose", he: "חזית קאנון ליד ChocoDose" } },
    { src: "/gallery/kanoon-street-promo.webp", alt: { ar: "صورة ترويجية لشارع نعلين", en: "Ni'lin street promotional image", he: "תמונת פרסום של רחוב נעלין" } },
    { src: "/gallery/kanoon-burger-street.webp", alt: { ar: "صورة ترويجية برغر مع خلفية الشارع", en: "Promotional burger photo with street scene", he: "צילום פרסומי של בורגר על רקע הרחוב" } },
  ] },
];
export function PhotoGallery({ language }: { language: Language }) {
  const [open, setOpen] = useState<GalleryPhoto | null>(null);
  useEffect(() => {
    if (!open) return;
    const handle = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open]);
  return <section id="gallery" className="photo-gallery" aria-label={({ar:"صور كانون",en:"Kanoon photos",he:"תמונות קאנון"})[language]}>
    <div className="gallery-intro">
      <span className="section-number">★</span>
      <h2>{({ar:"صور من كانون",en:"A Look at Kanoon",he:"תמונות מקאנון"})[language]}</h2>
      <p>{({ar:"من طلبياتنا ومن المكان — اضغط على الصورة لتكبيرها",en:"Orders and our location — tap a photo to enlarge",he:"הזמנות והמקום שלנו — לחצו להגדלת התמונה"})[language]}</p>
    </div>
    {photos.map((section) => <div className="gallery-section" key={section.title.en}>
      <h3>{section.title[language]}</h3>
      <div className="gallery-grid">{section.photos.map((photo) => <button type="button" className="gallery-photo" key={photo.src} onClick={() => setOpen(photo)} aria-label={photo.alt[language]}>
        <img src={photo.src} alt={photo.alt[language]} loading="lazy" />
      </button>)}</div>
    </div>)}
    {open && <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={open.alt[language]} onClick={() => setOpen(null)}>
      <button className="gallery-close" type="button" onClick={() => setOpen(null)} aria-label="Close">×</button>
      <img src={open.src} alt={open.alt[language]} onClick={(event) => event.stopPropagation()} />
    </div>}
  </section>;
}
