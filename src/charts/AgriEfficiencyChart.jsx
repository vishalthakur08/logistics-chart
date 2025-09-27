import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

export default function AgriEfficiencyChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["2023", "2024", "2028"],
    datasets: [
      {
        label: "Operational Efficiency",
        data: [70, 80, 85],
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill, // subtle area fill
        fill: true
      }
    ]
  };

  return (
    <div
      className="chartBox"
      style={{ width, height }}   // Framer: 280×228 or 200×228
    >
      <Line data={data} options={premiumOptions} plugins={[transparentBgPlugin]} />
    </div>
  );
}