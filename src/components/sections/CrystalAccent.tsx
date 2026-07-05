"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { canRun3D } from "@/lib/canRun3D";

const CrystalAccentScene = dynamic(() => import("./CrystalAccentScene"), {
  ssr: false,
});

/**
 * Capability-gated wrapper for the repurposed crystal. Decorative and quiet:
 * absolutely positioned, non-interactive, hidden from assistive tech, and never
 * mounted on low-power / reduced-motion devices.
 */
export default function CrystalAccent() {
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(canRun3D()), []);
  if (!ok) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] max-w-xl opacity-70 md:block"
    >
      <CrystalAccentScene />
    </div>
  );
}
