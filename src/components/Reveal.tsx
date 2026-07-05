"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll-CONTROLLED reveal. The content's opacity + rise are scrubbed to scroll
 * position, so it animates in as you scroll down and fully reverses as you
 * scroll back up — nothing is a fire-once fade. A second, gentler parallax layer
 * drifts the content continuously while it's on screen, so everything reads as
 * floating in space rather than pinned flat to the page.
 *
 * Reduced motion: content is shown immediately, no scrubbing, no drift.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  scale = 1,
  parallax = 6,
}: {
  children: React.ReactNode;
  className?: string;
  /** Small stagger — nudges the reveal band later for cascading rows. */
  delay?: number;
  y?: number;
  /** Start slightly scaled up (e.g. 1.06) for a clip-style reveal on visuals. */
  scale?: number;
  /** Parallax drift in %, 0 to disable. Larger = floats more. */
  parallax?: number;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = outer.current;
    const drift = inner.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const startPct = 90 - Math.min(delay, 0.4) * 20; // gentle cascade

    const ctx = gsap.context(() => {
      // Scrubbed reveal — reversible.
      gsap.fromTo(
        el,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: `top ${startPct}%`,
            end: "top 55%",
            scrub: true,
          },
        }
      );

      // Continuous parallax drift while on screen — the floating feel.
      if (parallax && drift) {
        gsap.fromTo(
          drift,
          { yPercent: parallax },
          {
            yPercent: -parallax,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, outer);

    return () => ctx.revert();
  }, [delay, y, scale, parallax]);

  // Start hidden so there's no flash before the reveal. Text still lives in the
  // DOM (opacity only), so it stays crawlable and accessible to screen readers.
  return (
    <div ref={outer} className={className} style={{ opacity: 0 }}>
      <div ref={inner}>{children}</div>
    </div>
  );
}
