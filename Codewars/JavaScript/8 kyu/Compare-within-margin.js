function closeCompare(a, b, margin = 0) {
  if (!margin) return a > b ? 1 : a < b ? -1 : 0;
  return a > b + margin ? 1 : a + margin < b ? -1 : 0;
}
