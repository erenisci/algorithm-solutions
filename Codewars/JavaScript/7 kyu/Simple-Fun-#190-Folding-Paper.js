function folding(a, b) {
  let count = 0;

  while (a > 0 && b > 0) {
    count += Math.floor(a / b);
    a = a % b;
    if (a < b) [a, b] = [b, a];
  }

  return count;
}
