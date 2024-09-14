function seven(m) {
  let steps = 0;
  while (m >= 100) {
    let lastDigit = m % 10;
    let remainingDigits = Math.floor(m / 10);
    m = remainingDigits - 2 * lastDigit;
    steps++;
  }
  return [m, steps];
}
