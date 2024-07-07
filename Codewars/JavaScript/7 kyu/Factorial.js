function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
}

// Another KATA
/* 
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
*/
