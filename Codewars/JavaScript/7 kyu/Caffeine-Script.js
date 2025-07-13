function caffeineBuzz(n) {
  let res = '';
  if (n % 3 === 0 && n % 4 === 0) res = 'Coffee';
  else if (n % 3 === 0) res = 'Java';
  else return 'mocha_missing!';
  return n % 2 === 0 ? res + 'Script' : res;
}
