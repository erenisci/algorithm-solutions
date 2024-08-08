function squareSum(numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i] ** 2;
  }
  return res;
}
