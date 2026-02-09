function numbersWithDigitInside(x, d) {
  const digit = String(d);

  let count = 0;
  let sum = 0;
  let product = 1;

  for (let i = 1; i <= x; i++) {
    if (String(i).includes(digit)) {
      count++;
      sum += i;
      product *= i;
    }
  }

  if (count === 0) return [0, 0, 0];

  return [count, sum, product];
}
