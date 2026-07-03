"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll-triggered reveal. Fades + eases content up as it enters the viewport,
 * synced to the existing Lenis/ScrollTrigger setup. The one rule holds here too:
 * everything eases (power3.out), nothing snaps.
 *
 * Reduced motion: content is shown immediately, no animation.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale = 1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Start slightly scaled up (e.g. 1.06) for a clip-style reveal on visuals. */
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: scale === 1 ? 1 : 1.3,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y, scale]);

  // Start hidden so there's no flash before the reveal. Text still lives in the
  // DOM (opacity only), so it stays crawlable and accessible to screen readers.
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
