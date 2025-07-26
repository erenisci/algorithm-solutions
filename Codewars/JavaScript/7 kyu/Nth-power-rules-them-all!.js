function modifiedSum(a, n) {
  return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
}
