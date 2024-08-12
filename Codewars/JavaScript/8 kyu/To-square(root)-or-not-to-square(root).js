function squareOrSquareRoot(array) {
  return array.map(num => {
    const numSqrt = Math.sqrt(num);
    return numSqrt % 1 === 0 ? numSqrt : num ** 2;
  });
}
