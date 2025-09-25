// src/charts/ShippingChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// 1) IMPORTANT: register controllers/elements you use
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export default function ShippingChart({
  width = 280,
  height = 228,
}) {
  // 2) Put the chart inside a fixed-size container so it has height
  const containerStyle = {
    width,
    height,
  };

  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Logistics Cost Reduction (%)",
        data: [10, 12, 14], // or your preferred 10 → 12 → 15
        borderColor: "#1e40af", // indigo-800
        backgroundColor: "rgba(30, 64, 175, 0.15)",
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 5,
        fill: true, // enables area fill
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 3) allow the parent div to control height
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "nearest",
        intersect: false,
        callbacks: {
          label: (ctx) => `${ctx.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (v) => `${v}%`,
        },
        grid: { color: "rgba(15, 23, 42, 0.08)" }, // subtle slate grid
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div style={containerStyle}>
      <Line data={data} options={options} />
    </div>
  );
}