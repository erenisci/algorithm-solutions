function differenceOfSquares(n) {
  const sqrSum = ((n * (n + 1)) / 2) ** 2;
  let sqrNum = 0;

  for (let i = 1; i <= n; i++) {
    sqrNum += i ** 2;
  }

  return sqrSum - sqrNum;
}
