// src/charts/premiumOptions.js
import { Chart as ChartJS } from "chart.js";

// --- Soft, premium palette (feel free to tweak) ---
export const palette = {
  primary:    "#4C8DF6", // blue
  primaryFill:"rgba(76,141,246,.16)",
  text:       "#64748B", // slate-500
  border:     "rgba(148,163,184,.24)" // slate-300/20
};

// --- Make the canvas fully transparent (removes black bg) ---
export const transparentBgPlugin = {
  id: "transparentBg",
  beforeDraw(chart) {
    const {ctx, width, height} = chart;
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.restore();
  }
};

// --- Reusable premium options (no gridlines, no legend, nice tooltip) ---
export const premiumOptions = {
  responsive: true,
  maintainAspectRatio: false,        // critical: removes scrollbars when parent has fixed size
  layout: { padding: 8 },

  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(17,24,39,.92)", // near-black
      titleColor: "#fff",
      bodyColor: "#fff",
      displayColors: false,
      padding: 10,
      cornerRadius: 8
    }
  },

  // Remove grid lines & keep axes minimal
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { color: palette.text, maxRotation: 0, autoSkip: true }
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        color: palette.text,
        // Use % for your percentage charts; adjust per chart if needed
        callback: (v) => `${v}%`
      }
    }
  },

  elements: {
    point: { radius: 3, hoverRadius: 4, borderWidth: 0, backgroundColor: palette.primary },
    line:  { borderWidth: 2, tension: 0.35, borderColor: palette.primary }
  },

  animation: { duration: 450 }
};