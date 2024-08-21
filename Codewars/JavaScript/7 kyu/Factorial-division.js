function factorialDivision(n, d) {
  let result = BigInt(1);
  for (let i = d + 1n; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}
