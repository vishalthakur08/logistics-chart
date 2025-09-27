// src/charts/ManpowerChart.jsx
import "./setup";
import { Pie } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

export default function ManpowerChart({ width = 300, height = 280 }) {
  const data = {
    labels: ["Logistics", "Aviation", "F&B", "AgriTech"],
    datasets: [
      {
        data: [30, 20, 15, 35],
        backgroundColor: [
          palette.primary,      // blue
          "#10b981",            // green (you can move these into palette if you want)
          "#f59e0b",            // amber
          "#ef4444",            // red
        ],
        borderWidth: 0,
        hoverOffset: 8,
        cutout: "42%",          // donut look → feels more premium
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    plugins: {
      ...premiumOptions.plugins,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: palette.text,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          padding: 14,
        },
      },
      tooltip: {
        ...premiumOptions.plugins.tooltip,
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Pie data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}