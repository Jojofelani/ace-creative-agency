"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, AdaptiveDpr, Preload } from "@react-three/drei";
import AceType3D from "./AceType3D";

/**
 * The WebGL hero, isolated so it can be code-split out of the main bundle
 * (loaded via next/dynamic with ssr:false) and mounted only on capable devices.
 * Nothing here ships to a low-power / save-data / reduced-motion visitor.
 */
export default function CrystalScene({
  scrollProgress,
  intro,
}: {
  scrollProgress: React.MutableRefObject<number>;
  intro: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9.2], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <AdaptiveDpr pixelated />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Custom light sources in the ACE palette — warm on one side, cool on the
          other, bright paper rims — so the glass refracts colour, not black.
          These also become the rim-light streaks as the letters bloom to portal. */}
      <Environment resolution={256} background={false}>
        <Lightformer intensity={2.6} color="#E8A15C" position={[-4, 1, 3]} scale={[7, 7, 1]} />
        <Lightformer intensity={2.6} color="#6C7BD6" position={[4, -1, 3]} scale={[7, 7, 1]} />
        <Lightformer intensity={2.2} color="#F5F3EF" position={[0, 4, -3]} scale={[12, 4, 1]} />
        <Lightformer intensity={1.4} color="#F5F3EF" position={[0, -4, 2]} scale={[10, 3, 1]} />
      </Environment>

      <Suspense fallback={null}>
        <AceType3D scrollProgress={scrollProgress} intro={intro} reducedMotion={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
