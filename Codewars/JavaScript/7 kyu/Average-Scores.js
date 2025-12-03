function average(scores) {
  return Math.round(scores.reduce((acc, n) => acc + n, 0) / scores.length);
}
