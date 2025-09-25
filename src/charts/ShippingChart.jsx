// src/ShippingChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

export default function ShippingChart({
  width = 280,
  height = 228,
  dataPoints = [10, 12, 14],            // 2023, 2024, 2025 (% reduction)
  labels = ["2023", "2024", "2025"],
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "Logistics Cost Reduction (%)",
        data: dataPoints,
        tension: 0.35,
        borderColor: "#165D9C",             // deep blue
        backgroundColor: "rgba(22, 93, 156, 0.16)", // soft area fill
        pointBackgroundColor: "#165D9C",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 3.5,
        fill: "origin",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,            // allow fixed container size
    devicePixelRatio: 2,                   // crisp on retina
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y}%`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: { color: "#6B7280" },        // neutral-500
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 16,                            // gives headroom above 14%
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: {
          stepSize: 5,
          color: "#6B7280",
          callback: (v) => `${v}%`,
        },
      },
    },
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Line data={data} options={options} />
    </div>
  );
}