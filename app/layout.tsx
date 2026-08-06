import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanoon Burger & More | المنيو والطلبات",
  description: "المنيو الرسمي لمطعم كانون برغر وأكثر — تصفّح الأصناف وأرسل طلبك عبر واتساب.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Kanoon Burger & More",
    description: "تصفّح منيو كانون وأرسل طلبك مباشرة عبر واتساب.",
    images: ["/brand/hero-burgers.webp"],
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
