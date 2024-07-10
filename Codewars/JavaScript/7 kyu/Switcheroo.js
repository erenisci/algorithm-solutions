function switcheroo(x) {
  return x
    .split('')
    .map(str => (str === 'a' ? 'b' : str === 'b' ? 'a' : str))
    .join('');
}
