function dBScale(intensity) {
  return Math.round(10 * Math.log10(intensity / 1e-12));
}
