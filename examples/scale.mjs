const measurements = process.argv.slice(2).map(Number);

if (measurements.length < 2 || measurements.some((value) => !Number.isFinite(value) || value <= 0)) {
  console.error("Usage: node examples/scale.mjs <positive value> <positive value> [...]");
  process.exitCode = 1;
} else {
  const maximum = Math.max(...measurements);
  const result = measurements.map((value) => ({
    value,
    relativePercent: Number(((value / maximum) * 100).toFixed(2)),
  }));

  console.table(result);
}
