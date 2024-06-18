function squareDigits(num) {
  return +String(num)
    .split('')
    .map(x => x ** 2)
    .join('');
}
