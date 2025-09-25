import { useMemo } from "react";
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CHART_SIZE, palette, basePlugins } from "./chartTheme";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function FnBROASChart({
  width = CHART_SIZE.width,
  height = CHART_SIZE.height,
}) {
  const labels = ["2023", "2024", "2025"];
  // Normalize ad spend to 1 unit each year; returns scale shows ROAS (3x, 6x, 9x)
  const spend = [1, 1, 1];
  const returns = [3, 6, 9];

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Ad Spend (units)",
        data: spend,
        backgroundColor: palette.barAlt,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Returns (units)",
        data: returns,
        backgroundColor: palette.bar,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      ...basePlugins,
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: ctx => {
            const v = ctx.parsed.y;
            if (ctx.datasetIndex === 1) {
              const roas = v / spend[ctx.dataIndex];
              return `Returns: ${v} (ROAS ${roas.toFixed(1)}x)`;
            }
            return `Ad Spend: ${v}`;
          }
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { stepSize: 2 },
        grid: { color: "rgba(0,0,0,0.06)" }
      }
    }
  }), []);

  return (
    <div style={{ width, height }}>
      <Bar data={data} options={options} />
    </div>
  );
}