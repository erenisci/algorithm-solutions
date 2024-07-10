function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);
}
