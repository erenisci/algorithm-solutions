function nbDig(n, d) {
  let countD = '';
  for (let i = 0; i <= n; i++) countD += i ** 2;
  return countD.split(d).length - 1;
}
