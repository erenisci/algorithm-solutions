function explode(s) {
  return s
    .split('')
    .map(num => num.repeat(+num))
    .join('');
}
