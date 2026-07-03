import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ace Creative Agency",
  description: "New design — work in progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
