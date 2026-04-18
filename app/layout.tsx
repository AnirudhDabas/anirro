import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anirudh Dabas",
  description:
    "Computer Science at Waterloo. Co-founder at Trend Weavers Media.",
  metadataBase: new URL("https://anirudhdabas.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body>{children}</body>
    </html>
  );
}
