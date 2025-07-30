function generatePairs(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result.push([i, j]);
    }
  }
  return result;
}
