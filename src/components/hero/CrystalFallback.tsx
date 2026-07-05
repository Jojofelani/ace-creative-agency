/**
 * Static "still crystal" for low-power / save-data / reduced-motion / no-WebGL
 * devices, and the SSR poster while the 3D chunk loads on capable ones. Pure
 * CSS + inline SVG — no three.js, no canvas, near-zero cost. Keeps the brief's
 * "light through glass" read without a WebGL scene a mid-range Android can't run.
 */
export default function CrystalFallback() {
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
      {/* Refraction glow behind the facets */}
      <div
        style={{
          position: "absolute",
          width: "min(70vw, 620px)",
          aspectRatio: "1",
          borderRadius: "9999px",
          filter: "blur(80px)",
          opacity: 0.55,
          background:
            "radial-gradient(circle at 38% 32%, rgba(108,123,214,0.55), transparent 58%), radial-gradient(circle at 66% 70%, rgba(232,161,92,0.5), transparent 60%)",
        }}
      />

      {/* Faceted crystal silhouette */}
      <svg
        viewBox="-110 -130 220 260"
        style={{
          position: "relative",
          width: "min(52vw, 440px)",
          height: "auto",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient id="crystal-face" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C7BD6" stopOpacity="0.32" />
            <stop offset="52%" stopColor="#F5F3EF" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#E8A15C" stopOpacity="0.30" />
          </linearGradient>
        </defs>

        {/* Outer gem body */}
        <polygon
          points="0,-120 95,-52 95,52 0,120 -95,52 -95,-52"
          fill="url(#crystal-face)"
          stroke="rgba(245,243,239,0.22)"
          strokeWidth="1"
        />
        {/* Internal facets */}
        <g stroke="rgba(245,243,239,0.16)" strokeWidth="1" fill="none">
          <path d="M0,-120 L0,120" />
          <path d="M-95,-52 L95,52" />
          <path d="M95,-52 L-95,52" />
          <path d="M0,-120 L-95,52 M0,-120 L95,52" />
          <path d="M0,120 L-95,-52 M0,120 L95,-52" />
        </g>
        {/* Bright edge glints */}
        <g stroke="rgba(245,243,239,0.4)" strokeWidth="1.5" fill="none">
          <path d="M0,-120 L95,-52" />
          <path d="M-95,52 L0,120" />
        </g>
      </svg>
    </div>
  );
}
