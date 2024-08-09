function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  let sum = 0;
  for (const el of array) {
    sum += el;
  }

  return sum - Math.min(...array) - Math.max(...array);
}
