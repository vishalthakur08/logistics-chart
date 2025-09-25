import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ShippingRoute from "./routes/ShippingRoute";
import AviationRoute from "./routes/AviationRoute";
import "./index.css";

function Index() {
  // Optional: a tiny index for manual testing
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h3>Charts</h3>
      <ul>
        <li><a href="/shipping">/shipping</a></li>
        <li><a href="/aviation">/aviation</a></li>
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shipping" element={<ShippingRoute />} />
        <Route path="/aviation" element={<AviationRoute />} />
        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);