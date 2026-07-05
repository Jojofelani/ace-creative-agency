/**
 * Decide once, on the client, whether this device should run a WebGL scene.
 * Shared by the hero and the (quieter) Contact crystal accent so both make the
 * same call: reduced-motion, save-data, slow connection, low memory/cores, or
 * no WebGL all fall back to a static treatment.
 */
export function canRun3D(): boolean {
  if (typeof window === "undefined") return false;
  // Reduced-motion is always honoured, even when forcing.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const hasWebGL = () => {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      return false;
    }
  };

  // QA escape hatch: ?force3d bypasses every heuristic but still requires WebGL.
  if (window.location.search.includes("force3d")) return hasWebGL();

  if (!hasWebGL()) return false;

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  // Honour an explicit Data Saver preference on any device.
  if (nav.connection?.saveData) return false;

  // The connection / memory / core heuristics are meant to spare mid-range
  // phones on slow data — NOT desktops that momentarily report a conservative
  // connection. So only apply them to touch / small-screen devices; a WebGL-
  // capable desktop always runs the full scene.
  const lowPowerClass =
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 820px)").matches;

  if (lowPowerClass) {
    if (/(^|-)(2g|slow-2g|3g)$/.test(nav.connection?.effectiveType ?? "")) return false;
    if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;
    if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency < 4)
      return false;
  }

  return true;
}
