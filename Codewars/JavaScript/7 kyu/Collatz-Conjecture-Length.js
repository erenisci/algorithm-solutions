function collatz(n) {
  let steps = 1;
  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else if (n % 2 === 1) n = n * 3 + 1;
    steps++;
  }
  return steps;
}
