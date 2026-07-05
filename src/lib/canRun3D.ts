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

  // QA escape hatch: ?force3d bypasses the bandwidth/hardware heuristics (some
  // environments misreport a slow connection) but still requires real WebGL.
  if (window.location.search.includes("force3d")) return hasWebGL();

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  if (nav.connection?.saveData) return false;
  if (/(^|-)(2g|slow-2g|3g)$/.test(nav.connection?.effectiveType ?? "")) return false;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency < 4)
    return false;

  return hasWebGL();
}
