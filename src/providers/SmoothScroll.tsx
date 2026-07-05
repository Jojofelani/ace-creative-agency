"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Momentum smooth-scroll (Lenis) driven by GSAP's ticker and synced to
 * ScrollTrigger. Wrap the app in this once. Respects reduced-motion by
 * simply not initialising Lenis (native scroll stays).
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // ScrollTrigger positions are measured at mount, but the Fraunces/Hanken web
    // fonts and the code-split 3D chunk land later and reflow the page — which
    // shifts every trigger's start/end. Recalculate once those settle so scrubs
    // (especially the pinned hero and the Intro zoom below it) line up.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 2000);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
