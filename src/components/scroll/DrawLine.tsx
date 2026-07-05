"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReduced } from "@/lib/gsapScroll";

/**
 * A refraction line that DRAWS on scroll — a cool→warm beam that grows from one
 * end as its section enters, and retracts on the way up. Horizontal for the
 * Services dividers, vertical for the About rule. Reversible (scrubbed).
 */
export default function DrawLine({
  vertical = false,
  className,
  style,
}: {
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced()) {
      gsap.set(el, { scaleX: 1, scaleY: 1 });
      return;
    }

    const from = vertical ? { scaleY: 0 } : { scaleX: 0 };
    const to = vertical ? { scaleY: 1 } : { scaleX: 1 };

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 52%",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [vertical]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        transformOrigin: vertical ? "top center" : "left center",
        transform: vertical ? "scaleY(0)" : "scaleX(0)",
        ...style,
      }}
    />
  );
}
