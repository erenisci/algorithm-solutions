function sumin(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * (2 * n - 2 * i + 1);
  }
  return sum;
}

function sumax(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * (2 * i - 1);
  }
  return sum;
}

function sumsum(n) {
  return n * n * (n + 1);
}
