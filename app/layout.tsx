import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAYLORIS GROUP | Excellence & Governance",
  description: "Digital Twin of Corporate Governance. Stability, Mathematical Precision, and Financial Excellence.",
  keywords: ["Tayloris Group", "Investissement", "Gouvernance", "Finance", "Holding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-slate-dark bg-slate-light selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}