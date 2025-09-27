import "./setup";
import { Line } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

const tightY = (vals, pad = 0.12) => {
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = Math.max(max - min, 1);
  const p = span * pad;
  return { min: Math.floor(min - p), max: Math.ceil(max + p) };
};

export default function AviationChart({ width = 280, height = 228 }) {
  const values = [3, 6, 9];
  const { min, max } = tightY(values, 0.18);

  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "ROAS (x)",
        data: values,
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill,
        tension: 0.35,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    ...premiumOptions,
    maintainAspectRatio: false,
    scales: {
      ...premiumOptions.scales,
      y: { ...premiumOptions.scales.y, min, max },
    },
    plugins: {
      ...premiumOptions.plugins,
      tooltip: {
        ...premiumOptions.plugins.tooltip,
        callbacks: { label: ctx => `${ctx.parsed.y}×` },
      },
    },
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      <Line data={data} options={options} plugins={[transparentBgPlugin]} />
    </div>
  );
}