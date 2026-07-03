"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCrystal from "./GlassCrystal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Scroll progress lives in a ref so scroll never triggers a React re-render.
  const scrollProgress = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        background: "#0B0B0F",
        overflow: "hidden",
      }}
    >
      {/* 3D layer — decorative, hidden from assistive tech (the copy below is
          the real, crawlable content). */}
      <div style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <AdaptiveDpr pixelated />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          {/*
            The refraction color comes from the environment, not the material.
            "studio" is a safe built-in. Swap for an .hdr from Poly Haven, or
            build a gradient env to push the warm/cool ACE refraction palette.
          */}
          <Environment preset="studio" background={false} />

          <GlassCrystal
            scrollProgress={scrollProgress}
            reducedMotion={reducedMotion}
          />
        </Canvas>
      </div>

      {/* Refraction wash — the crystal's light spilling down into the page.
          Color comes from the glass, not a painted surface. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "screen",
          background:
            "radial-gradient(120% 90% at 50% 128%, rgba(108,123,214,0.22), rgba(232,161,92,0.12) 42%, transparent 68%)",
        }}
      />

      {/* Copy layer — pointerEvents none so the cursor still reaches the canvas */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(1.5rem, 6vw, 6rem)",
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
            opacity: 0.6,
            margin: 0,
          }}
        >
          ACE Creative Agency
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            margin: "0.4em 0 0",
            maxWidth: "14ch",
          }}
        >
          We make things
          <br />
          <span
            style={{
              fontStyle: "italic",
              background:
                "linear-gradient(100deg, #6C7BD6, #F5F3EF 52%, #E8A15C)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            worth looking at.
          </span>
        </h1>
      </div>
    </section>
  );
}
