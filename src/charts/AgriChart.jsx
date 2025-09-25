import { useMemo } from "react";
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_SIZE, palette, basePlugins, baseScales } from "./chartTheme";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function AgriChart({
  width = CHART_SIZE.width,
  height = CHART_SIZE.height,
}) {
  const labels = ["2023", "2024", "2025"];
  // Process efficiency (%) for zero-to-one launches
  const values = [70, 78, 85];

  const data = useMemo(() => ({
    labels,
    datasets: [{
      label: "Operational Efficiency",
      data: values,
      tension: 0.35,
      borderColor: palette.line,
      backgroundColor: "transparent",
      borderWidth: 3,
      pointRadius: 4,
    }],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: basePlugins,
    scales: baseScales("%", 60, 90, 10),
  }), []);

  return (
    <div style={{ width, height }}>
      <Line data={data} options={options} />
    </div>
  );
}