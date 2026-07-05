"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReduced } from "@/lib/gsapScroll";

/**
 * Mask rise: the content slides up from behind a hard clip edge as it enters —
 * the classic, composed agency reveal. Scrubbed and reversible. `delay`
 * staggers stacked lines (eyebrow, then heading). A little bottom padding keeps
 * descenders from clipping at rest.
 */
export default function RiseMask({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;

    if (prefersReduced()) {
      gsap.set(i, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        i,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: o,
            start: `top ${86 - Math.min(delay, 0.4) * 12}%`,
            end: "top 54%",
            scrub: true,
          },
        }
      );
    }, outer);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={outer}
      className={className}
      style={{ overflow: "hidden", paddingBottom: "0.14em" }}
    >
      <div ref={inner} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
