function multiples(m, n) {
  return Array.from({ length: m }, (_, i) => (i + 1) * n);
}
