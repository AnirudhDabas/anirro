import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://anirro.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorantGaramond.className}>
      <body>
        <div className="mx-auto min-h-screen max-w-[1120px] px-6 pt-6 pb-16 md:px-12 md:pt-20 lg:px-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            <Sidebar />
            <main className="w-full md:max-w-[800px]">
              {children}
              <footer className="attribution mt-16 mb-6 text-[0.65rem] text-[var(--muted)] opacity-45">
                <div>
                  inspired by{" "}
                  <a
                    href="https://www.zacharyyu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    zachary yu
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "6px",
                  }}
                >
                  <a href="https://cs.uwatering.com/#anirro.com?nav=prev">←</a>
                  <a
                    href="https://cs.uwatering.com/#anirro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/cs-webring.svg"
                      alt="CS Webring"
                      style={{ width: "24px", height: "auto", opacity: 0.8 }}
                    />
                  </a>
                  <a href="https://cs.uwatering.com/#anirro.com?nav=next">→</a>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
