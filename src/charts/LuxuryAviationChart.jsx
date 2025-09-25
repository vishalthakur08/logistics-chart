import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LuxuryAviationChart = () => {
  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "ROAS (x)",
        data: [3, 6, 9],
        borderColor: "#2563eb", // blue
        backgroundColor: "rgba(37, 99, 235, 0.2)", // light blue fill
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#2563eb",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Achieved 9x ROAS in Luxury Aviation Campaigns",
        font: { size: 14, weight: "bold" },
        color: "#1e293b",
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          callback: (value) => `${value}x`,
        },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div style={{ width: "280px", height: "228px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LuxuryAviationChart;