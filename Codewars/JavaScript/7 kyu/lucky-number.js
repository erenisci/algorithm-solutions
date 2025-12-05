function isLucky(n) {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);

  return sum === 0 || sum % 9 === 0;
}
