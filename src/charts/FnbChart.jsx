import "./setup";
import { Bar } from "react-chartjs-2";

export default function FnbChart({ width = 280, height = 228 }) {
  const labels = ["Q1", "Q2", "Q3"];
  const data = {
    labels,
    datasets: [
      { label: "Ad Spend (₹)", data: [1, 1.2, 1.3], backgroundColor: "#94a3b8" },
      { label: "Return (₹)", data: [3, 6, 9], backgroundColor: "#2563eb" },
    ],
  };
  const options = {
    responsive: false,
    plugins: { legend: { position: "bottom" } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: v => `₹${v}x` } },
    },
  };
  return <Bar data={data} options={options} width={width} height={height} />;
}