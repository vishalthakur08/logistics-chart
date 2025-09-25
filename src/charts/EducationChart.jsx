import "./setup";
import { Line } from "react-chartjs-2";

export default function EducationChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Enrollments",
        data: [120, 240, 360],
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(29,78,216,0.15)",
        fill: true,
        tension: 0.35,
        pointRadius: 4,
      },
    ],
  };
  const options = {
    responsive: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  };
  return <Line data={data} options={options} width={width} height={height} />;
}