function solve(s) {
  return Math.max(...s.match(/\d+/g).map(Number));
}
