function sumMul(n, m) {
  if (m <= n) return 'INVALID';
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
