"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * The signature element: a faceted glass crystal.
 *
 * Three animation layers, kept separate on purpose:
 *   1. Idle   -> <Float> (slow bob) + a slow base rotation in useFrame
 *   2. Cursor -> tilts toward the pointer, DAMPED (never snaps)
 *   3. Scroll -> driven from the parent via the `scrollProgress` ref
 *
 * The one rule: everything eases. THREE.MathUtils.damp does the easing here.
 */
export default function GlassCrystal({
  scrollProgress,
  reducedMotion = false,
}: {
  // 0 -> 1 across the hero scroll. A ref so we don't re-render on scroll.
  scrollProgress: React.MutableRefObject<number>;
  reducedMotion?: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    if (reducedMotion) {
      mesh.current.rotation.set(0.2, 0.4, 0);
      return;
    }

    const { pointer, clock } = state;

    // 1. Idle base rotation — slow, continuous.
    const baseY = clock.elapsedTime * 0.15;

    // 3. Scroll adds rotation + a downward drift as you scroll the hero.
    const p = scrollProgress.current;
    const scrollY = p * Math.PI * 0.9;
    const driftY = -p * 1.4;

    // 2. Cursor tilt — target derived from pointer, then DAMPED toward it.
    const targetX = pointer.y * 0.35;
    const targetY = baseY + scrollY + pointer.x * 0.5;

    mesh.current.rotation.x = THREE.MathUtils.damp(
      mesh.current.rotation.x,
      targetX,
      3,
      delta
    );
    mesh.current.rotation.y = THREE.MathUtils.damp(
      mesh.current.rotation.y,
      targetY,
      3,
      delta
    );
    mesh.current.position.y = THREE.MathUtils.damp(
      mesh.current.position.y,
      driftY,
      3,
      delta
    );
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.2}
      rotationIntensity={0}
      floatIntensity={reducedMotion ? 0 : 0.6}
    >
      <mesh ref={mesh}>
        {/*
          Faceted crystal. detail={0} = sharp facets that catch refraction.
          Bump detail to 1–2 for a smoother, more liquid form. Swap for
          <torusKnotGeometry /> or an imported model to change the vibe.
        */}
        <icosahedronGeometry args={[1.4, 0]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={1.2}
          roughness={0.08}
          ior={1.5}
          chromaticAberration={0.05}
          clearcoat={1}
          attenuationDistance={2}
          attenuationColor="#f5f3ef"
          color="#ffffff"
          samples={4}
          resolution={256}
        />
      </mesh>
    </Float>
  );
}
