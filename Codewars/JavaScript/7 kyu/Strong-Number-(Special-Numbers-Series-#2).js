function strong(n) {
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  }
  const digits = n.toString().split('').map(Number);
  const sumOfFactorials = digits.reduce((sum, digit) => sum + factorial(digit), 0);
  return sumOfFactorials === n ? 'STRONG!!!!' : 'Not Strong !!';
}
