import LuxuryAviationChart from "../charts/LuxuryAviationChart";

export default function AviationRoute() {
  return (
    <div style={{
      width: 280, height: 228, padding: 8,
      background: "transparent", margin: "0 auto"
    }}>
      <LuxuryAviationChart width={280} height={228} />
    </div>
  );
}