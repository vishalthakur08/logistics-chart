// src/charts/premiumOptions.js
import { Chart as ChartJS } from "chart.js";

export const palette = {
  primary:     "#4C8DF6",
  primaryFill: "rgba(76,141,246,.16)",
  text:        "#64748B",
};

export const transparentBgPlugin = {
  id: "transparentBg",
  beforeDraw(chart) {
    const { ctx, width, height } = chart;
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.restore();
  },
};

// ---------- SHARED “TIGHT” OPTIONS ----------
export const premiumOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { top: 2, right: 2, bottom: 2, left: 2 } },

  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(17,24,39,.92)",
      titleColor: "#fff",
      bodyColor: "#fff",
      displayColors: false,
      padding: 10,
      cornerRadius: 8,
    },
    title: { display: false },
  },

  // Remove grid lines; keep only a very light X axis
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: {
        color: palette.text,
        autoSkip: false,      // <— show all labels (important when there are only 2–3)
        maxRotation: 0,
        padding: 0,
      },
    },
    y: {
      display: false,        // <— no Y axis
      grid: { display: false, drawBorder: false },
      ticks: { display: false },
    },
  },

  elements: {
    point: { radius: 3, hoverRadius: 4, borderWidth: 0, backgroundColor: palette.primary },
    line:  { borderWidth: 2, tension: 0.35, borderColor: palette.primary, fill: true },
  },

  animation: { duration: 450 },
};

// ---------- TIGHT RANGE HELPERS ----------
/** Fit the Y range tightly around your data (with small padding) */
export function tightY(min, max, pad = 0.06) {
  const range = max - min || 1;
  const p = range * pad;
  return { min: Math.floor(min - p), max: Math.ceil(max + p) };
}

/** Good defaults for bars in small cards */
export const barTight = {
  categoryPercentage: 0.68,
  barPercentage: 0.72,
  borderRadius: 6,
};

/** Good defaults for pie/doughnut in small cards */
export const pieTight = {
  cutout: "55%",  // doughnut look; remove for full pie
};