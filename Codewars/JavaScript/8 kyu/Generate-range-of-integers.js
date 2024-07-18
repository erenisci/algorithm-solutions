function generateRange(min, max, step) {
  return Array.from({ length: (max - min) / step + 1 }, (_, i) => min + step * i);
}
