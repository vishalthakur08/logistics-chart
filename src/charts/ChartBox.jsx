export default function ChartBox({ size = "lg", children }) {
  const W = size === "sm" ? 200 : 280;   // sm = 200×228, lg = 280×228
  const H = 228;
  return (
    <div className="chart-wrap" style={{ width: W, height: H }}>
      {children}
    </div>
  );
}