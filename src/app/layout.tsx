import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";

// Display type — used with restraint, headlines only. Italic is the signature:
// the recurring "grounded" idea is always set in Fraunces italic.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

// Body type.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE Creative Agency — Brand, content & design in Accra",
  description:
    "ACE is a creative & digital agency in Accra doing brand, content, and design that's culturally grounded, not generic.",
  openGraph: {
    title: "ACE Creative Agency",
    description:
      "Brand, content, and design that's culturally grounded, not generic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
