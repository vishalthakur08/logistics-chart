import "./setup";
import { Bar } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

export default function DigitalChart({ width = 300, height = 280 }) {
  const values = [50, 58, 66];

  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "User Adoption (%)",
        data: values,
        backgroundColor: palette.primary,
        borderRadius: 8,
        // nicer sizing inside the card
        barThickness: "flex",
        categoryPercentage: 0.7,
        barPercentage: 0.7,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    scales: {
      ...premiumOptions.scales,
      y: { ...premiumOptions.scales.y, display: false },   // hide Y axis
      x: {
        ...premiumOptions.scales.x,
        grid: { display: false },
        ticks: { color: "#64748B", autoSkip: false, maxRotation: 0, padding: 2 },
      },
    },
    plugins: {
      ...premiumOptions.plugins,
      tooltip: {
        ...premiumOptions.plugins.tooltip,
        callbacks: { label: ctx => `${ctx.parsed.y}%` },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Bar data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}