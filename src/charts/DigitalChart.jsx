import "./setup";
import { Bar } from "react-chartjs-2";

export default function DigitalChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "User Adoption (%)",
        data: [50, 58, 66],
        backgroundColor: "#2563eb",
        borderRadius: 6,
      },
    ],
  };
  const options = {
    responsive: false,
    plugins: { legend: { display: false } },
    scales: { y: { ticks: { callback: v => `${v}%` }, min: 0, max: 80 } },
  };
  return <Bar data={data} options={options} width={width} height={height} />;
}