"use client";

import { useEffect, useRef } from "react";

/**
 * A quiet field of drifting dust/stars fixed behind the whole page. The
 * transparent sections sit over it, so the content reads as floating in space
 * rather than flat on ink. Two depth layers parallax at different rates against
 * scroll; a slow idle drift keeps it alive even when still.
 *
 * Cheap and decorative: a single capped-DPR canvas, aria-hidden, and it goes
 * fully static (one paint, no rAF) under prefers-reduced-motion.
 */
type Star = { x: number; y: number; z: number; r: number; a: number };

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let stars: Star[] = [];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Density scales with area but stays modest for low-power devices.
      const count = Math.min(150, Math.round((w * h) / 14000));
      stars = Array.from({ length: count }, () => {
        const z = Math.random(); // depth 0..1 (near = brighter, more parallax)
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.4 + z * 1.3,
          a: 0.15 + z * 0.5,
        };
      });
    };

    // Colour: mostly paper, a few cool/warm refraction motes.
    const tint = (i: number) =>
      i % 11 === 0 ? "232,161,92" : i % 7 === 0 ? "108,123,214" : "245,243,239";

    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        // Parallax by scroll (near layers move more) + slow idle drift.
        const par = -scrollY * (0.02 + s.z * 0.08);
        const drift = reduce ? 0 : Math.sin(t * 0.0001 + s.x) * (2 + s.z * 4);
        let y = ((s.y + par + drift) % (h + 40) + (h + 40)) % (h + 40);
        y -= 20;
        const twinkle = reduce ? 1 : 0.7 + 0.3 * Math.sin(t * 0.0012 + i);
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tint(i)},${s.a * twinkle})`;
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    build();
    window.addEventListener("resize", build);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reduce) {
      draw(0); // single static paint
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
