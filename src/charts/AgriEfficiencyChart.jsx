// src/charts/AgriEfficiencyChart.jsx
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  premiumOptions,
  transparentBgPlugin,
  palette,
  tightY, // <-- expects an array of numbers
} from "./premiumOptions";

export default function AgriEfficiencyChart({ width = 300, height = 280 }) {
  const values = [70, 81];
  const { min, max } = tightY(values, 0.18); // <-- pass the array

  const data = {
    labels: ["2024", "2025"],
    datasets: [
      {
        label: "Operational Efficiency",
        data: values,
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill,
        fill: true,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    scales: {
      ...premiumOptions.scales,
      y: { ...premiumOptions.scales.y, min, max }, // tight vertical fit
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}