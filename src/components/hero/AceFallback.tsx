/**
 * Static "ACE" wordmark for low-power / save-data / reduced-motion / no-WebGL
 * devices, and the SSR poster while the 3D chunk loads on capable ones. Pure
 * CSS/SVG — no three.js, near-zero cost. Keeps the "light through glass" read
 * (the refraction glow behind big Fraunces letters) without a WebGL scene a
 * mid-range Android can't run.
 */
export default function AceFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Refraction glow behind the letters */}
      <div
        style={{
          position: "absolute",
          width: "min(78vw, 720px)",
          aspectRatio: "1",
          borderRadius: "9999px",
          filter: "blur(90px)",
          opacity: 0.5,
          background:
            "radial-gradient(circle at 38% 34%, rgba(108,123,214,0.55), transparent 58%), radial-gradient(circle at 66% 68%, rgba(232,161,92,0.5), transparent 60%)",
        }}
      />

      {/* Big Fraunces ACE, glass-tinted */}
      <span
        style={{
          position: "relative",
          fontFamily: "var(--font-display), Georgia, serif",
          fontWeight: 600,
          fontSize: "clamp(6rem, 32vw, 26rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          background:
            "linear-gradient(120deg, rgba(108,123,214,0.85), rgba(245,243,239,0.95) 52%, rgba(232,161,92,0.85))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        ACE
      </span>
    </div>
  );
}
