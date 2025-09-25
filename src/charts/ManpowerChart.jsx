import { useMemo } from "react";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { CHART_SIZE, palette } from "./chartTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ManpowerChart({
  width = CHART_SIZE.width,
  height = CHART_SIZE.height,
}) {
  const labels = ["Logistics", "Aviation", "Digital", "Agri", "F&B", "Education"];
  // % distribution of placements by vertical (sums to 100)
  const values = [25, 15, 20, 18, 12, 10];

  const data = useMemo(() => ({
    labels,
    datasets: [{
      data: values,
      backgroundColor: palette.pie,
      borderWidth: 0,
    }],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 10 } },
      tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed}%` } },
    },
  }), []);

  return (
    <div style={{ width, height }}>
      <Pie data={data} options={options} />
    </div>
  );
}