import "./setup";
import { Line } from "react-chartjs-2";
import ChartBox from "./ChartBox";
import { premiumLineOptions } from "./premiumOptions";

const BLUE = "#4F6FEA";
const BLUE_FILL = "rgba(79,111,234,0.12)";

export default function AgriEfficiencyChart({ size = "lg" }) {
  const data = {
    labels: ["2023555", "2024", "2025"],
    datasets: [
      {
        label: "Operational Efficiency (%)",
        data: [70, 80, 85],
        borderColor: BLUE,
        backgroundColor: BLUE_FILL,
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 3,
        fill: true,
      },
    ],
  };

  return (
    <ChartBox size={size}>
      <Line data={data} options={premiumLineOptions({
        scales: { y: { min: 0, max: 100, ticks: { callback: v => `${v}%` } } }
      })} />
    </ChartBox>
  );
}