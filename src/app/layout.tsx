import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import Nav from "@/components/Nav";
import SpaceBackground from "@/components/SpaceBackground";
import Cursor from "@/components/ui/Cursor";
import ScrollCue from "@/components/ui/ScrollCue";

// Display type — used with restraint, headlines only. Italic is the signature:
// the one key phrase each statement turns on is always set in Fraunces italic.
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
  title: "Ace Creative Agency | Powered by 360 Graphics",
  description:
    "A bold, fashion-forward, strategy-driven creative studio building digital experiences for global brands and ambitious startups.",
  openGraph: {
    title: "Ace Creative Agency | Powered by 360 Graphics",
    description: "A bold, fashion-forward, strategy-driven creative studio.",
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
        <SpaceBackground />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        {/* Fixed-position overlays live OUTSIDE the pinned hero so their
            position:fixed isn't broken by GSAP's pin transform. */}
        <Cursor />
        <ScrollCue />
      </body>
    </html>
  );
}
