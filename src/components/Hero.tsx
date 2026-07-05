"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AceFallback from "./hero/AceFallback";
import Preloader from "./hero/Preloader";
import { canRun3D } from "@/lib/canRun3D";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Code-split: three / drei live in this chunk, never in the main bundle. The
// fallback stands in while the chunk loads (and forever on low-power devices).
const CrystalScene = dynamic(() => import("./hero/CrystalScene"), {
  ssr: false,
  loading: () => <AceFallback />,
});

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const crystalRef = useRef<HTMLDivElement>(null);
  // Scroll + intro progress live in refs so neither triggers a React re-render.
  const scrollProgress = useRef(0);
  const intro = useRef(0);
  const [render3D, setRender3D] = useState(false);
  // Copy is revealed after the push-in settles (or immediately on the fallback).
  const [copyIn, setCopyIn] = useState(false);

  // Capability decision (re-evaluated if the reduced-motion preference changes).
  useEffect(() => {
    const decide = () => setRender3D(canRun3D());
    decide();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", decide);
    return () => mq.removeEventListener("change", decide);
  }, []);

  // On the 2D fallback there's no preloader/zoom — show the copy right away.
  useEffect(() => {
    if (!render3D) setCopyIn(true);
  }, [render3D]);

  // Scroll drives the crystal + portal wash only when the scene is running.
  useEffect(() => {
    if (!render3D || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the hero so the ACE finishes zooming into the portal *before* the
      // page moves on. scrub makes it fully reversible scrubbing up and down.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // Refresh this pin BEFORE the section triggers below it, so its spacer
        // is in place when they measure their start/end — otherwise every later
        // scrub (the Intro zoom especially) is calculated ~1400px too early.
        refreshPriority: 1,
        onUpdate: (self) => {
          const p = self.progress;
          scrollProgress.current = p;
          // Ramp the refraction wash as the letters bloom into the portal.
          if (washRef.current) {
            washRef.current.style.opacity = String(0.22 + p * 0.7);
            washRef.current.style.transform = `scale(${1 + p * 0.4})`;
          }
          // Copy lifts + fades out as the portal takes over.
          if (copyRef.current) {
            copyRef.current.style.opacity = String(Math.max(0, 1 - p * 1.7));
            copyRef.current.style.transform = `translateY(${-p * 42}px)`;
          }
          // Near the end, dissolve the letters into the wash so the next
          // section resolves out of the bloom instead of hard-cutting.
          if (crystalRef.current) {
            const fade = p < 0.8 ? 1 : 1 - (p - 0.8) / 0.2;
            crystalRef.current.style.opacity = String(Math.max(0.12, fade));
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [render3D]);

  // Preloader hands off here: ease `intro` 0 -> 1 (the push-in) and stagger the copy.
  const handleReady = () => {
    gsap.to(intro, {
      current: 1,
      duration: 1.6,
      ease: "expo.out",
      onStart: () => {
        gsap.delayedCall(0.5, () => setCopyIn(true));
      },
    });
  };

  const reveal = (delay: number, to = 1) => ({
    opacity: copyIn ? to : 0,
    transform: copyIn ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 900ms ${delay}s var(--ease-out-quint), transform 900ms ${delay}s var(--ease-out-quint)`,
  });

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        background: "#0B0B0F",
        overflow: "hidden",
      }}
    >
      {/* Crystal layer — decorative, hidden from assistive tech. WebGL on capable
          devices; a static "ACE" wordmark everywhere else. */}
      <div ref={crystalRef} style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        {render3D ? (
          <CrystalScene scrollProgress={scrollProgress} intro={intro} />
        ) : (
          <AceFallback />
        )}
      </div>

      {/* Refraction wash — the letters' light spilling down, blooming on scroll. */}
      <div
        ref={washRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.22,
          background:
            "radial-gradient(120% 90% at 50% 118%, rgba(108,123,214,0.28), rgba(232,161,92,0.16) 42%, transparent 68%)",
        }}
      />

      {render3D && <Preloader onDone={handleReady} />}

      {/* Copy layer — pointerEvents none so the cursor still reaches the canvas */}
      <div
        ref={copyRef}
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "clamp(3rem, 12vh, 9rem)",
          paddingInline: "clamp(1.5rem, 6vw, 6rem)",
          pointerEvents: "none",
          color: "#F5F3EF",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            margin: 0,
            ...reveal(0, 0.6),
          }}
        >
          Powered by 360 Graphics
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            margin: "0.4em 0 0",
            maxWidth: "18ch",
            textWrap: "balance",
            ...reveal(0.08),
          }}
        >
          Moving brands{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(100deg, #6C7BD6, #F5F3EF 52%, #E8A15C)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            forward.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            lineHeight: 1.55,
            color: "rgba(245,243,239,0.72)",
            maxWidth: "42ch",
            margin: "1.4rem 0 0",
            ...reveal(0.16),
          }}
        >
          We are Ace — a strategy-driven creative studio building bold digital
          experiences for global brands and ambitious startups.
        </p>

        {/* CTAs — pointerEvents re-enabled so they stay clickable over the canvas */}
        <div
          style={{ pointerEvents: "auto", marginTop: "2rem", ...reveal(0.24) }}
          className="flex flex-wrap items-center gap-5"
        >
          <a
            href="#contact"
            className="press rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink hover:bg-white"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="text-sm text-paper/80 underline decoration-paper/30 underline-offset-8 transition-colors hover:text-paper hover:decoration-paper"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
