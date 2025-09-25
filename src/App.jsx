import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend);

export default function App() {
  // Labels & data (index-style; replace with your real points)
  const labels = ["2019", "2020", "2021", "2022", "2023", "2024"];
  const lastYear = [0, 3, 6, 8, 10, 12]; // “reduction %” trend to 12%

  const data = {
    labels,
    datasets: [
      {
        label: "Logistics cost reduction",
        data: lastYear,
        tension: 0.35,
        borderColor: "#0B5CAB",
        backgroundColor: "rgba(11, 92, 171, 0.14)",
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: 2,
        fill: "origin",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // let the parent control height
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false }, // cleaner card
      tooltip: {
        backgroundColor: "#1f2937",
        cornerRadius: 8,
        padding: 10,
        displayColors: false,
        callbacks: {
          label(ctx) {
            const v = ctx.parsed.y ?? 0;
            return ` ${v}%`;
          },
        },
      },
      // If you want a small title inside the card, enable this:
      // title: { display: true, text: "Reduced Logistics Cost by 12% YoY", align: "start" },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgba(0,0,0,.65)" },
      },
      y: {
        min: 0,
        max: 15,
        ticks: {
          stepSize: 5,
          color: "rgba(0,0,0,.65)",
          callback: (v) => `${v}%`,
        },
        grid: { color: "rgba(0,0,0,.07)" },
      },
    },
    layout: { padding: { top: 6, right: 8, bottom: 0, left: 6 } },
  };

  return (
    <div
      style={{
        height: 280,                 // set height to match your Framer card (adjust)
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        padding: 16,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}
    >
      <div style={{ fontWeight: 700, color: "#0b1b2b", marginBottom: 8 }}>
        Reduced Logistics Cost by 12% YoY
      </div>
      <div style={{ position: "relative", height: "calc(100% - 28px)" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}