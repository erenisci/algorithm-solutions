function sum(numbers) {
  if (numbers.length === 0) return 0;
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}
