function sumTriangularNumbers(n) {
  let temp = 0,
    result = 0;
  for (let i = 1; i <= n; i++) {
    temp += i;
    result += temp;
  }
  return result;
}
