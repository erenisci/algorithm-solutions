function squarePi(digits) {
  const piDigits =
    '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

  const sumOfSquares = [...piDigits.slice(0, digits)]
    .map(d => Number(d) ** 2)
    .reduce((a, b) => a + b, 0);

  return Math.ceil(Math.sqrt(sumOfSquares));
}
