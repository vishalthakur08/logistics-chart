import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { premiumOptions, transparentBgPlugin, palette } from "./premiumOptions";

export default function AgriEfficiencyChart({ width = 280, height = 228 }) {
  const data = {
    labels: ["2024", "2028"],
    datasets: [
      {
        label: "Operational Efficiency",
        data: [70, 81],
        borderColor: palette.primary,
        backgroundColor: palette.primaryFill,
        fill: true
      }
    ]
  };

  return (
    <div className="chartBox" style={{ width, height }}>
      {/* IMPORTANT: no width/height props here */}
      <Line data={data} options={premiumOptions} plugins={[transparentBgPlugin]} />
    </div>
  );
}