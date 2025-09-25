export const CHART_SIZE = { width: 280, height: 228 };

export const palette = {
  line: "#1F5BAE",
  fill: "rgba(31, 91, 174, 0.10)",
  bar: "#2C7BE5",
  barAlt: "#6FD3C5",
  pie: ["#2C7BE5", "#6FD3C5", "#845EF7", "#FF922B", "#20C997", "#F06595"],
  grid: "rgba(0,0,0,0.06)",
};

export const basePlugins = {
  legend: { display: false },
  tooltip: { displayColors: false },
};

export const baseScales = (ySuffix = "", min, max, step) => ({
  x: { grid: { display: false } },
  y: {
    suggestedMin: min,
    suggestedMax: max,
    ticks: {
      stepSize: step,
      callback: v => `${v}${ySuffix}`,
    },
    grid: { color: palette.grid },
  },
});