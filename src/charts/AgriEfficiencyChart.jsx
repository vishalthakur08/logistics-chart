import { Line } from "react-chartjs-2";
import "./setup";

/** premium-like colors (same across all charts) */
const palette = {
  line: "#3B82F6",             // blue-500
  lineFill: "rgba(59,130,246,.12)",
  point: "#1D4ED8",            // blue-700
  tick: "#6B7280",             // gray-500
  tooltipBg: "#111827",        // gray-900
  tooltipTitle: "#F9FAFB",     // gray-50
  tooltipBody: "#E5E7EB",      // gray-200
};

const options = {
  maintainAspectRatio: false,   // IMPORTANT when passing width/height
  responsive: false,            // we’re controlling exact px size
  layout: { padding: 0 },
  interaction: { mode: "index", intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: palette.tooltipBg,
      titleColor: palette.tooltipTitle,
      bodyColor: palette.tooltipBody,
      cornerRadius: 8,
      padding: 10,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { color: palette.tick, font: { size: 11 } },
    },
    y: {
      grid: { display: false, drawBorder: false }, // No grid lines
      ticks: {
        color: palette.tick,
        font: { size: 11 },
        callback: (v) => `${v}%`,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
  elements: {
    point: {
      radius: 3,
      hoverRadius: 4,
      backgroundColor: palette.point,
      borderWidth: 0,
    },
    line: {
      borderWidth: 2,
      tension: 0.35,
    },
  },
};

export default function AgriEfficiencyChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["2023", "2024"],  // keep short labels (prevents wrap/overflow)
    datasets: [
      {
        label: "Operational Efficiency (%)",
        data: [70, 80],
        borderColor: palette.line,
        backgroundColor: palette.lineFill,
        fill: true,
      },
    ],
  };

  return (
    <div
      className="chartbox"
      style={{ width: `${width}px`, height: `${height}px` }}   // exact px
    >
      <Line data={data} options={options} width={width} height={height} />
    </div>
  );
}