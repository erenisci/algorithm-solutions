function squaresOnly(array) {
  return array.filter(n => Number.isInteger(Math.sqrt(n)));
}
