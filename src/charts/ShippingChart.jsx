import "./setup";
import { Line } from "react-chartjs-2";
import {
  premiumOptions,
  transparentBgPlugin,
  palette,
  // if you exported it—see the helper below
} from "./premiumOptions";

// helper for a “tight” y range (paste here or export from chartPremium)
const tightY = (vals, pad = 0.12) => {
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = Math.max(max - min, 1);
  const p = span * pad;
  return { min: Math.floor(min - p), max: Math.ceil(max + p) };
};

export default function ShippingChart({ width = 300, height = 280 }) {
  const values = [10, 12, 14];
  const { min, max } = tightY(values, 0.18);

  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Reduced Logistics Cost (%)",
        data: values,
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill,
        tension: 0.35,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    ...premiumOptions,                                // no grid, no Y axis, nice tooltip
    maintainAspectRatio: false,
    scales: {
      ...premiumOptions.scales,
      y: { ...premiumOptions.scales.y, min, max },    // tighten the line vertically
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
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}