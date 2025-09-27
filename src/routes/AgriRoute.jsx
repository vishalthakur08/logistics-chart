// src/routes/AgriRoute.jsx
import React from "react";
import AgriEfficiencyChart from "../charts/AgriEfficiencyChart";

export default function AgriRoute() {
  const W = 280;      // 200 for the smaller cards
  const H = 228;

  return (
    <div
      style={{
        width: W,
        height: H,
        margin: 0,
        padding: 0,
        overflow: "hidden",      // <— hard clamp
        background: "transparent",
        boxSizing: "border-box",
      }}
    >
      <AgriEfficiencyChart width={W} height={H} />
    </div>
  );
}