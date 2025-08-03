function houseNumbersSum(inputArray) {
  let sum = 0;

  for (const num of inputArray) {
    if (num === 0) break;
    sum += num;
  }

  return sum;
}
