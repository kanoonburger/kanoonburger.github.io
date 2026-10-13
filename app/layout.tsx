import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kanoonburger.github.io";
const shareImage = "/brand/hero-burgers.webp";
const shareTitle = "Kanoon Burger & More | منيو كانون";
const shareDescription = "تصفّح منيو كانون، اختر وجبتك وإضافاتك، وأرسل طلبك عبر واتساب.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kanoon Burger & More | المنيو والطلبات",
  description: "المنيو الرسمي لمطعم كانون برغر وأكثر — تصفّح الأصناف وأرسل طلبك عبر واتساب.",
  alternates: {
    canonical: "/",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Kanoon Burger & More",
    locale: "ar_PS",
    title: shareTitle,
    description: shareDescription,
    images: [{
      url: shareImage,
      width: 1280,
      height: 853,
      alt: "Kanoon Burger & More — Burger menu",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
