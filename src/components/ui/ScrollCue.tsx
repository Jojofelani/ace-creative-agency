"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The reference's two quiet scroll affordances: a "scroll to explore" cue that
 * fades on first scroll, and a thin cool->warm page-progress line. Both are
 * decorative and skipped under reduced-motion.
 */
export default function ScrollCue() {
  const bar = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);

    let raf = 0;
    const onScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* "scroll to explore", bottom-left of the hero */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "clamp(1.5rem, 6vw, 6rem)",
          bottom: "2rem",
          zIndex: 30,
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(245,243,239,0.55)",
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? "translateY(8px)" : "translateY(0)",
          transition:
            "opacity 500ms var(--ease-out-quint), transform 500ms var(--ease-out-quint)",
          pointerEvents: "none",
        }}
      >
        Scroll to explore
      </div>

      {/* Page progress line, bottom-center */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          zIndex: 30,
          pointerEvents: "none",
        }}
      >
        <div
          ref={bar}
          style={{
            height: "100%",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            background: "linear-gradient(90deg, #6C7BD6, #E8A15C)",
            opacity: 0.7,
          }}
        />
      </div>
    </>
  );
}
