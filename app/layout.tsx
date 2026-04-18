import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={cormorantGaramond.className}>
      <body>
        <div className="mx-auto min-h-screen max-w-[1120px] px-6 pt-12 pb-16 md:px-12 md:pt-20 lg:px-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            <Sidebar />
            <main className="w-full md:max-w-[800px]">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
