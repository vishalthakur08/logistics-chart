import "./setup";
import { Pie } from "react-chartjs-2";

export default function ManpowerChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["Logistics", "Aviation", "F&B", "AgriTech"],
    datasets: [
      {
        data: [30, 20, 15, 35],
        backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };
  const options = {
    responsive: false,
    plugins: { legend: { position: "bottom" } },
  };
  return <Pie data={data} options={options} width={width} height={height} />;
}