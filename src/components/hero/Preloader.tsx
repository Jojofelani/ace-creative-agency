"use client";

import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

/**
 * Ink curtain over the hero while the 3D chunk + glyph asset load. Uses drei's
 * global loading state, holds a short minimum beat so the reveal has rhythm,
 * then lifts (eased) and hands off to the hero's push-in via `onDone`.
 * Only mounted on capable devices — reduced-motion / low-power never see it.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const { progress, active } = useProgress();
  const start = useRef(Date.now());
  const fired = useRef(false);
  const [lifting, setLifting] = useState(false);

  useEffect(() => {
    if (fired.current) return;
    // Ready once drei reports idle and everything is loaded.
    if (!active && progress >= 100) {
      fired.current = true;
      const MIN = 750;
      const wait = Math.max(0, MIN - (Date.now() - start.current));
      const t1 = setTimeout(() => {
        setLifting(true);
        onDone(); // start the push-in as the curtain begins to lift
      }, wait);
      return () => clearTimeout(t1);
    }
  }, [active, progress, onDone]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 20,
        background: "#0B0B0F",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        pointerEvents: lifting ? "none" : "auto",
        opacity: lifting ? 0 : 1,
        transform: lifting ? "scale(1.04)" : "scale(1)",
        transition:
          "opacity 900ms var(--ease-out-quint), transform 1200ms var(--ease-out-quint)",
      }}
    >
      <div
        style={{
          width: "min(52vw, 420px)",
          marginBottom: "16vh",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "rgba(245,243,239,0.5)",
          }}
        >
          ACE
        </span>
        {/* Refraction progress line — cool -> warm, filling with real progress. */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(245,243,239,0.12)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(progress, 100)}%`,
              background: "linear-gradient(90deg, #6C7BD6, #E8A15C)",
              transition: "width 300ms var(--ease-out-cubic)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
