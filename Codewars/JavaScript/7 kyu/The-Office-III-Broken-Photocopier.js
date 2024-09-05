function broken(x) {
  return x
    .split('')
    .map(char => (char === '0' ? '1' : '0'))
    .join('');
}
