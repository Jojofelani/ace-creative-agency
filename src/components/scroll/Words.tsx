"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReduced } from "@/lib/gsapScroll";

/**
 * The thesis "writes itself": each word lifts from dim to lit, staggered and
 * scrubbed to scroll, so a statement illuminates left-to-right as you scroll in
 * and dims back out on the way up. Takes a plain string; compose around inline
 * accents by splitting the sentence into multiple <Words> around the accent.
 */
export default function Words({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll<HTMLElement>("[data-word]");

    if (prefersReduced()) {
      gsap.set(spans, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { opacity: 0.12, y: 14 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          stagger: 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 38%",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const words = children.split(/\s+/).filter(Boolean);
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span
            data-word
            style={{ display: "inline-block", willChange: "opacity, transform" }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
