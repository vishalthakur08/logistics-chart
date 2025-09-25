import FnbChart from "../charts/FnbChart";

export default function FnbRoute() {
  return (
    <div style={{ width: 280, height: 228, padding: 8, margin: "0 auto", background: "transparent" }}>
      <FnbChart width={280} height={228} />
    </div>
  );
}