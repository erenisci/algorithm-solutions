function squareUp(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result.push(0);
    }

    for (let j = i; j > 0; j--) {
      result.push(j);
    }
  }

  return result;
}
