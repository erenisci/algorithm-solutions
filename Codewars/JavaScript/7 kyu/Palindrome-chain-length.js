function palindromeChainLength(n) {
  function isPalindrome(n) {
    const str = String(n);
    return str === str.split('').reverse().join('');
  }

  let steps = 0;
  while (!isPalindrome(n)) {
    n += +String(n).split('').reverse().join('');
    steps++;
  }
  return steps;
}
