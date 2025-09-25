import { useMemo } from "react";
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_SIZE, palette, basePlugins, baseScales } from "./chartTheme";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function EducationChart({
  width = CHART_SIZE.width,
  height = CHART_SIZE.height,
}) {
  const labels = ["2023", "2024", "2025"];
  // Enrollments for logistics/supply-chain programs (illustrative)
  const values = [120, 220, 360];

  const data = useMemo(() => ({
    labels,
    datasets: [{
      label: "Program Enrollments",
      data: values,
      fill: true,
      tension: 0.35,
      borderColor: palette.line,
      backgroundColor: palette.fill,
      borderWidth: 3,
      pointRadius: 4,
    }],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: basePlugins,
    scales: baseScales("", 0, 400, 100),
  }), []);

  return (
    <div style={{ width, height }}>
      <Line data={data} options={options} />
    </div>
  );
}