function increasingNumber(x, n) {
  for (let i = 1; i <= n; i++) {
    if (x % i !== 0) x = Math.ceil(x / i) * i;
  }
  return x;
}
