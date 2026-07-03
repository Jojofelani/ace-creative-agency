/**
 * ── EXAMPLE WIRING (not a drop-in file) ────────────────────────────────────
 * This shows how the pieces connect in a Next.js App Router project. Split
 * these into your real app/layout.tsx and app/page.tsx.
 * ───────────────────────────────────────────────────────────────────────────
 */

// ============================================================
// app/layout.tsx
// ============================================================
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import SmoothScroll from "@/providers/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

// ============================================================
// app/page.tsx
// ============================================================
// import Hero from "@/components/Hero";
//
// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       {/* next sections: case studies, services, contact — build these next */}
//       <section style={{ height: "100vh", background: "#0B0B0F" }} />
//     </main>
//   );
// }

// ── Notes ──────────────────────────────────────────────────
// • The Hero uses inline styles for portability. Move them into your CSS /
//   Tailwind setup once it's living in the real project.
// • If you use next/font as above, the font-family names in Hero.tsx should
//   reference the CSS variables instead:
//     fontFamily: "var(--font-fraunces), Georgia, serif"
//     fontFamily: "var(--font-hanken), system-ui, sans-serif"
export {};
