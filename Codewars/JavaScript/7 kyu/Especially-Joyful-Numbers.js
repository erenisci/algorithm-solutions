function numberJoy(n) {
  const sum = +String(n)
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);
  const reversed = +String(sum).split('').reverse().join('');
  return sum * reversed === n;
}
