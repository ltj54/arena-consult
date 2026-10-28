import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arena Consult | Første nettsideskisse",
  description: "Uforpliktende første nettsideskisse for Arena Consult Foredrag Event Treider.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nb"><body>{children}</body></html>;
}
