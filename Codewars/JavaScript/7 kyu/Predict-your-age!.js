function predictAge(...age) {
  return Math.floor(Math.sqrt(age.map(x => x ** 2).reduce((a, b) => a + b, 0)) / 2);
}
