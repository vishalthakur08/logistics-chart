const TICK = "#7C8794";

export const premiumLineOptions = (overrides = {}) => ({
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  animation: { duration: 250 },
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  layout: { padding: 0 },
  scales: {
    x: { grid: { display: false }, ticks: { color: TICK, font: { size: 10 }, maxRotation: 0, autoSkip: true } },
    y: { grid: { display: false, drawBorder: false }, ticks: { color: TICK, font: { size: 10 } } },
  },
  elements: { line: { capBezierPoints: true }, point: { hitRadius: 8 } },
  ...overrides,
});

export const premiumBarOptions = (overrides = {}) => ({
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: TICK, font: { size: 10 } } },
    y: { grid: { display: false, drawBorder: false }, ticks: { color: TICK, font: { size: 10 } } },
  },
  ...overrides,
});

export const premiumPieOptions = (overrides = {}) => ({
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  ...overrides,
});