function calc(x) {
  const total1 = x
    .split('')
    .map(char => char.charCodeAt(0))
    .join('');
  const total2 = total1.replaceAll('7', '1');

  const totalSum1 = total1.split('').reduce((acc, cur) => acc + +cur, 0);
  const totalSum2 = total2.split('').reduce((acc, cur) => acc + +cur, 0);

  return totalSum1 - totalSum2;
}
