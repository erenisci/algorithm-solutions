function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
