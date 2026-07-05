"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReduced } from "@/lib/gsapScroll";

/**
 * Directional slide, scrubbed to scroll. Used on the Work case studies so the
 * copy enters from the side opposite its visual — the panel assembles from both
 * edges toward the centre as you scroll, and parts again on the way up.
 */
export default function SlideIn({
  children,
  from = "left",
  distance = 64,
  className,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced()) {
      gsap.set(el, { opacity: 1, x: 0 });
      return;
    }

    const dx = from === "left" ? -distance : distance;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: dx },
        {
          opacity: 1,
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 52%",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [from, distance]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
