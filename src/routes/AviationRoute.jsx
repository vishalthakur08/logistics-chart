import AviationChart from "../charts/AviationChart";

export default function AviationRoute() {
  return (
    <div style={{ width: 280, height: 228, padding: 8, margin: "0 auto", background: "transparent" }}>
      <AviationChart width={280} height={228} />
    </div>
  );
}