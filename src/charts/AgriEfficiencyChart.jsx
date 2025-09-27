// src/charts/AgriEfficiencyChart.jsx
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette, tightY } from "./premiumOptions";

export default function AgriEfficiencyChart({ width = 300, height = 280 }) {
  const values = [70, 81];
  const { min, max } = tightY(Math.min(...values), Math.max(...values));

  const data = {
    labels: ["2024", "2025"],
    datasets: [
      {
        label: "Operational Efficiency",
        data: values,
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill,
        borderWidth: 2,
        tension: 0.35,
        fill: "start",         // <-- fill to the y-scale start (min), not to 0
        pointRadius: 3,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    scales: {
      x: { ...premiumOptions.scales.x, grid: { display: false }, ticks: { color: palette.text } },
      y: { ...premiumOptions.scales.y, display: false, min, max },  // hide but keep tight min/max
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}