"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, AdaptiveDpr } from "@react-three/drei";
import GlassCrystal from "@/components/GlassCrystal";

/**
 * The original hero crystal, repurposed as a small, warm-lit idle accent in the
 * Contact section. Its own lightweight Canvas (own chunk). No scroll drive —
 * a fixed zero ref keeps it purely idling so it never competes with the hero.
 */
export default function CrystalAccentScene() {
  const zero = useRef(0);
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <AdaptiveDpr pixelated />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 5]} intensity={1} />

      {/* Warm-weighted to sit inside Contact's warm glow. */}
      <Environment resolution={128} background={false}>
        <Lightformer intensity={2.6} color="#E8A15C" position={[-3, 1, 3]} scale={[6, 6, 1]} />
        <Lightformer intensity={1.3} color="#6C7BD6" position={[3, -1, 3]} scale={[6, 6, 1]} />
        <Lightformer intensity={1.8} color="#F5F3EF" position={[0, 3, -3]} scale={[8, 3, 1]} />
      </Environment>

      <GlassCrystal scrollProgress={zero} reducedMotion={false} />
    </Canvas>
  );
}
