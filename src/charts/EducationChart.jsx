// src/charts/EducationChart.jsx
import "./setup";
import { Line } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette, tightY } from "./premiumOptions";

export default function EducationChart({ width = 300, height = 280 }) {
  const values = [120, 240, 360];
  const { min, max } = tightY(values, 0.18);

  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Enrollments",
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
      // keep the minimal x-axis; remove grid already handled in premiumOptions
      x: { ...premiumOptions.scales.x },
      // hide y-axis, tighten the range
      y: { ...premiumOptions.scales.y, display: false, min, max },
    },
    plugins: {
      ...premiumOptions.plugins,
      tooltip: {
        ...premiumOptions.plugins.tooltip,
        callbacks: { label: (ctx) => `${ctx.parsed.y}` },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}