import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Route components (your existing files)
import ShippingRoute from "./routes/ShippingRoute";
import AviationRoute from "./routes/AviationRoute";
import DigitalRoute from "./routes/DigitalRoute";
import EducationRoute from "./routes/EducationRoute";
import ManpowerRoute from "./routes/ManpowerRoute";
import AgriRoute from "./routes/AgriRoute";
import FnBRoute from "./routes/FnBRoute";

// Tiny 404 for tidy embeds
function NotFound() {
  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        fontSize: 14,
        color: "#475569",
        padding: 16,
        lineHeight: 1.5,
      }}
    >
      <strong>404</strong> — Chart route not found.
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Use BrowserRouter for Vite + Vercel SPA rewrites */}
    <BrowserRouter>
      <Routes>
        {/* Default chart on the bare domain */}
        <Route path="/" element={<ShippingRoute />} />

        {/* Individual chart routes */}
        <Route path="/shipping" element={<ShippingRoute />} />
        <Route path="/aviation" element={<AviationRoute />} />
        <Route path="/digital" element={<DigitalRoute />} />
        <Route path="/education" element={<EducationRoute />} />
        <Route path="/manpower" element={<ManpowerRoute />} />
        <Route path="/agri" element={<AgriRoute />} />
        <Route path="/fnb" element={<FnBRoute />} />

        {/* Optional: normalize trailing slashes */}
        <Route path="/shipping/" element={<Navigate to="/shipping" replace />} />
        <Route path="/aviation/" element={<Navigate to="/aviation" replace />} />
        <Route path="/digital/" element={<Navigate to="/digital" replace />} />
        <Route path="/education/" element={<Navigate to="/education" replace />} />
        <Route path="/manpower/" element={<Navigate to="/manpower" replace />} />
        <Route path="/agri/" element={<Navigate to="/agri" replace />} />
        <Route path="/fnb/" element={<Navigate to="/fnb" replace />} />

        {/* 404 for anything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);