import ManpowerChart from "../charts/ManpowerChart";

export default function ManpowerRoute() {
  return (
    <div style={{ width: 280, height: 228, padding: 8, margin: "0 auto", background: "transparent" }}>
      <ManpowerChart width={280} height={228} />
    </div>
  );
}