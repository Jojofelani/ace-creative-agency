"use client";

import { useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";

/**
 * The signature element: the word ACE, extruded from the real Fraunces glyph
 * outlines (public/fonts/ace.svg) into frosted transmission glass.
 *
 * Three animation layers, kept separate on purpose (same discipline as the old
 * GlassCrystal, which now lives on as a quiet accent in Contact):
 *   1. Idle   -> <Float> (slow bob)
 *   2. Cursor -> damped tilt toward the pointer (never snaps)
 *   3. Scroll -> the parent's `scrollProgress` flies the camera INTO the letters
 *                until they bloom to a full-bleed refraction portal.
 * Plus a one-shot load push-in, gated on `intro` (0 -> 1, eased by the parent's
 * `started` flag).
 *
 * The one rule: everything eases. THREE.MathUtils.damp does the work here.
 */

const REST_Z = 4.6; // settled hero framing
const FAR_Z = 9.2; // where the load push-in starts
const PORTAL_Z = 0.55; // how far the scroll dolly pushes into the letters

export default function AceType3D({
  scrollProgress,
  intro,
  reducedMotion = false,
}: {
  scrollProgress: React.MutableRefObject<number>;
  // 0 -> 1 load push-in, driven by the parent (GSAP). 1 = settled.
  intro: React.MutableRefObject<number>;
  reducedMotion?: boolean;
}) {
  const group = useRef<THREE.Group>(null!);
  const { camera } = useThree();

  const data = useLoader(SVGLoader, "/fonts/ace.svg");

  // Build the extruded geometry once. SVG units (~1456 tall) -> world units.
  const { geometry, scale } = useMemo(() => {
    const shapes: THREE.Shape[] = [];
    for (const path of data.paths) {
      shapes.push(...SVGLoader.createShapes(path));
    }
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 210,
      bevelEnabled: true,
      bevelThickness: 22,
      bevelSize: 14,
      bevelSegments: 4,
      curveSegments: 10,
    });
    geo.center();
    geo.computeVertexNormals();
    // Target ~1.55 world units tall — large and dominant, but the whole word
    // reads with breathing room at the sides.
    const s = 1.55 / 1456;
    return { geometry: geo, scale: s };
  }, [data]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    const p = THREE.MathUtils.clamp(scrollProgress.current, 0, 1);

    if (reducedMotion) {
      g.rotation.set(0, 0, 0);
      camera.position.z = REST_Z;
      return;
    }

    const t = intro.current; // 0..1 push-in

    // 2. Cursor tilt — damped, and eased out as the portal takes over.
    const { pointer } = state;
    const cursorAmt = (1 - p) * 0.9;
    const targetX = pointer.y * 0.16 * cursorAmt;
    const targetY = pointer.x * 0.26 * cursorAmt;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 3, delta);

    // Load push-in assembles scale from 0.82 -> 1.
    const introScale = THREE.MathUtils.lerp(0.82, 1, t);
    g.scale.setScalar(introScale);

    // 1+3. Camera: far -> rest (load), then rest -> portal (scroll).
    const preZ = THREE.MathUtils.lerp(FAR_Z, REST_Z, t);
    const targetZ = THREE.MathUtils.lerp(preZ, PORTAL_Z, p);
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetZ,
      6,
      delta
    );
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={0}
      floatIntensity={reducedMotion ? 0 : 0.5}
    >
      {/* Y-flip (SVG is y-down) baked into the scale; DoubleSide keeps the
          transmission read correct through the flipped winding. */}
      <group ref={group}>
        <mesh geometry={geometry} scale={[scale, -scale, scale]}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={0.6}
            roughness={0.5}
            ior={1.45}
            chromaticAberration={0.03}
            anisotropicBlur={0.4}
            distortion={0.1}
            distortionScale={0.25}
            temporalDistortion={0.05}
            clearcoat={0.6}
            attenuationDistance={3}
            attenuationColor="#f5f3ef"
            color="#eef0ff"
            backside
            samples={6}
            resolution={512}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}
