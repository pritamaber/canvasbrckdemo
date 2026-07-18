import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Canvas & Brick — Luxury Interior Design Studio, Kolkata",
    template: "%s — Canvas & Brick",
  },
  description:
    "Turnkey luxury interiors, custom furniture and renovation in Kolkata. Five decades of timber heritage, reimagined as a contemporary design studio. Est. 1974, Rajarhat.",
  openGraph: {
    title: "Canvas & Brick — Luxury Interior Design Studio, Kolkata",
    description:
      "From timber to timeless spaces. Turnkey interiors, custom furniture and renovation — built on fifty years of craftsmanship.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Canvas & Brick — luxury interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas & Brick — Luxury Interior Design Studio, Kolkata",
    description:
      "From timber to timeless spaces. Turnkey interiors, custom furniture and renovation — built on fifty years of craftsmanship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
