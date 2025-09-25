import AgriEfficiencyChart from "../charts/AgriEfficiencyChart";

export default function AgriRoute() {
  return (
    <div style={{ width: 280, height: 228, padding: 8, margin: "0 auto", background: "transparent" }}>
      <AgriEfficiencyChart width={280} height={228} />
    </div>
  );
}