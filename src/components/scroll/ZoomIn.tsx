"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReduced } from "@/lib/gsapScroll";

/**
 * Scrubbed scale-down: content starts oversized and settles to its normal size
 * as it scrolls up into place. Used on the Intro right after the hero, so the
 * portal fly-through resolves straight into big text that pulls back to rest —
 * one continuous zoom. Reversible.
 */
export default function ZoomIn({
  children,
  className,
  from = 1.3,
  origin = "left top",
  start = "top bottom",
  end = "top 42%",
}: {
  children: React.ReactNode;
  className?: string;
  from?: number;
  origin?: string;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced()) {
      gsap.set(el, { scale: 1, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: from, opacity: 0.25 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start, end, scrub: true },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [from, start, end]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformOrigin: origin, opacity: 0.25, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
