function solve(s) {
  return Math.max(...(s.match(/[aeiou]+/g).map(x => x.length) || [0]));
}
