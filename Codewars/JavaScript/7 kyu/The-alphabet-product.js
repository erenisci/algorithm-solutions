function alphabet(ns) {
  const sorted = ns.sort((a, b) => a - b);
  return sorted[7] / sorted[sorted[0] * sorted[1] === sorted[2] ? 3 : 2];
}
