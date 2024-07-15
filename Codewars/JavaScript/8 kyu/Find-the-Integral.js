function integrate(coefficient, exponent) {
  return `${(coefficient / (exponent + 1)).toFixed(0)}x^${exponent + 1}`;
}
