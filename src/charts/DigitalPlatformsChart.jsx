import { useMemo } from "react";
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CHART_SIZE, palette, basePlugins, baseScales } from "./chartTheme";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DigitalPlatformsChart({
  width = CHART_SIZE.width,
  height = CHART_SIZE.height,
}) {
  const labels = ["2023", "2024", "2025"];
  // Adoption rate (% of active users adopting key features)
  const values = [50, 58, 67]; // ≈ +15% YoY improvement

  const data = useMemo(() => ({
    labels,
    datasets: [{
      label: "Adoption Rate",
      data: values,
      backgroundColor: palette.bar,
      borderRadius: 6,
      borderSkipped: false,
    }],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: basePlugins,
    scales: baseScales("%", 0, 80, 20),
  }), []);

  return (
    <div style={{ width, height }}>
      <Bar data={data} options={options} />
    </div>
  );
}