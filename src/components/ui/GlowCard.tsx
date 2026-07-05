"use client";

import { useRef } from "react";
import { prefersReduced } from "@/lib/gsapScroll";

/**
 * Interactive card wrapper: on hover, cool→gold→warm light lines trace the
 * card's edges (masked gradient border in `.glow-card`, globals.css) and the
 * card parallax-tilts toward the pointer. Driven by CSS custom properties set on
 * pointer move — cheap, no rAF. Reduced motion keeps the glow but drops the tilt.
 */
export default function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    // Cursor position feeds the radial that lights only the nearest edge.
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--glow", "1");
    if (!prefersReduced()) {
      el.style.setProperty("--rx", `${(0.5 - py) * 6}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * 7}deg`);
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow", "0");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`glow-card ${className}`}
    >
      {children}
    </div>
  );
}
