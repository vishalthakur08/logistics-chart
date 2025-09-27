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
        fill: true,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    scales: {
      ...premiumOptions.scales,
      y: { ...premiumOptions.scales.y, min, max }, // <— tight fit
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}