import React from "react";
import './index.css';
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import ShippingRoute from "./routes/ShippingRoute";
import AviationRoute from "./routes/AviationRoute";
import DigitalRoute from "./routes/DigitalRoute";
import EducationRoute from "./routes/EducationRoute";
import ManpowerRoute from "./routes/ManpowerRoute";
import AgriRoute from "./routes/AgriRoute";
import FnbRoute from "./routes/FnbRoute";

function NotFound() {
  return (
    <div style={{ fontFamily: "Inter, system-ui", padding: 16, color: "#475569" }}>
      <strong>404</strong> — Chart route not found.
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* HashRouter works everywhere without server rewrites */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/shipping" replace />} />
        <Route path="/shipping" element={<ShippingRoute />} />
        <Route path="/aviation" element={<AviationRoute />} />
        <Route path="/digital" element={<DigitalRoute />} />
        <Route path="/education" element={<EducationRoute />} />
        <Route path="/manpower" element={<ManpowerRoute />} />
        <Route path="/agri" element={<AgriRoute />} />
        <Route path="/fnb" element={<FnbRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);