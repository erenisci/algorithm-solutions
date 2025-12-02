function arithmeticSequenceElements(a, d, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(a + i * d);
  }

  return result.join(', ');
}
