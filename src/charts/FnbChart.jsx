// src/charts/FnbChart.jsx
import "./setup";
import { Bar } from "react-chartjs-2";
import {
  premiumOptions,
  transparentBgPlugin,
  palette,
} from "./premiumOptions";

export default function FnbChart({ width = 300, height = 280 }) {
  const labels = ["Q1", "Q2", "Q3"];
  const data = {
    labels,
    datasets: [
      {
        label: "Ad Spend (₹)",
        data: [1, 1.2, 1.3],
        backgroundColor: "#94a3b8", // muted gray
        borderRadius: 6,
      },
      {
        label: "Return (₹)",
        data: [3, 6, 9],
        backgroundColor: palette.primary, // consistent premium blue
        borderRadius: 6,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    scales: {
      x: {
        ...premiumOptions.scales.x,
        grid: { display: false, drawBorder: false },
      },
      y: {
        ...premiumOptions.scales.y,
        display: false, // hide y-axis entirely
        grid: { display: false },
      },
    },
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
          label: (ctx) => `${ctx.dataset.label}: ₹${ctx.parsed.y}x`,
        },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Bar data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}