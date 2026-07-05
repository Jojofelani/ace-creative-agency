"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom refraction cursor: a soft dot that trails the pointer with easing and
 * swells over interactive elements. Desktop, fine-pointer, motion-OK only —
 * touch and reduced-motion keep the native cursor. Decorative (aria-hidden).
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...pos };
    let hovering = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = e.target as HTMLElement | null;
      hovering = !!el?.closest("a, button, [data-cursor]");
    };

    const tick = () => {
      // Ease toward the pointer (damped follow — never snaps).
      cur.x += (pos.x - cur.x) * 0.2;
      cur.y += (pos.y - cur.y) * 0.2;
      const el = dot.current;
      if (el) {
        const s = hovering ? 2.4 : 1;
        el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%) scale(${s})`;
        el.style.opacity = hovering ? "0.35" : "0.9";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 14,
        height: 14,
        borderRadius: "9999px",
        background: "rgba(245,243,239,0.9)",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "opacity 200ms var(--ease-out-quint)",
        willChange: "transform",
      }}
    />
  );
}
