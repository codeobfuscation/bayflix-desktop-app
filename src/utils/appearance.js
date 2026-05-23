// ── Accent colour presets & helpers ──────────────────────────────────────────
// Kept in a separate file so both App.jsx and SettingsPage.jsx can import
// without creating a circular dependency.

export const ACCENT_PRESETS = [
  { id: "red",    label: "Red",    color: "#e50914", color2: "#ff1a24", dim: "rgba(229,9,20,0.15)",    glow: "0 0 30px rgba(229,9,20,0.3)" },
  { id: "blue",   label: "Blue",   color: "#2563eb", color2: "#3b82f6", dim: "rgba(37,99,235,0.15)",   glow: "0 0 30px rgba(37,99,235,0.3)" },
  { id: "purple", label: "Purple", color: "#7c3aed", color2: "#8b5cf6", dim: "rgba(124,58,237,0.15)",  glow: "0 0 30px rgba(124,58,237,0.3)" },
  { id: "green",  label: "Green",  color: "#059669", color2: "#10b981", dim: "rgba(5,150,105,0.15)",   glow: "0 0 30px rgba(5,150,105,0.3)" },
  { id: "orange", label: "Orange", color: "#d97706", color2: "#f59e0b", dim: "rgba(217,119,6,0.15)",   glow: "0 0 30px rgba(217,119,6,0.3)" },
  { id: "pink",   label: "Pink",   color: "#db2777", color2: "#ec4899", dim: "rgba(219,39,119,0.15)",  glow: "0 0 30px rgba(219,39,119,0.3)" },
];

export function applyAccentColor(presetId) {
  const preset = ACCENT_PRESETS.find((p) => p.id === presetId) ?? ACCENT_PRESETS[0];
  const root = document.documentElement;
  root.style.setProperty("--red",      preset.color);
  root.style.setProperty("--red2",     preset.color2);
  root.style.setProperty("--red-dim",  preset.dim);
  root.style.setProperty("--red-glow", preset.glow);
}
