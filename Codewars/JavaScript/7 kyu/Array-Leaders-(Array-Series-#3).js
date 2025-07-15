function arrayLeaders(numbers) {
  const result = [];
  let rightSum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > rightSum) {
      result.unshift(numbers[i]);
    }
    rightSum += numbers[i];
  }

  return result;
}
