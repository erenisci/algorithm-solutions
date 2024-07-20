function stairsIn20(s) {
  return 20 * s.reduce((a, b) => a + b.reduce((a, c) => a + c, 0), 0);
}
