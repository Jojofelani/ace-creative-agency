"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Track whether an element is on (or near) screen. Used to pause the WebGL
 * render loops when their canvas scrolls out of view — a heavy transmission
 * scene must not keep rendering every frame while the user reads text elsewhere.
 * A generous rootMargin resumes rendering just before the canvas re-enters, so
 * there's no blank frame.
 */
export function useInViewport<T extends HTMLElement>(rootMargin = "300px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
