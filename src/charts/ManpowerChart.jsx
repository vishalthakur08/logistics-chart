// src/charts/ManpowerChart.jsx
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

export default function ManpowerChart({ width = 300, height = 280 }) {
  const data = {
    labels: ["Logistics", "Aviation", "F&B", "AgriTech"],
    datasets: [
      {
        data: [30, 20, 15, 35],
        backgroundColor: ["#4C8DF6", "#10b981", "#f59e0b", "#ef4444"],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    cutout: "58%",                  // premium doughnut look
    scales: {},                     // <-- NO axes at all
    layout: { padding: 8 },
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
          padding: 12,
        },
      },
      tooltip: {
        ...premiumOptions.plugins.tooltip,
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}`,
        },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Doughnut data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}