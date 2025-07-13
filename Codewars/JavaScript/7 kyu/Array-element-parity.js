function solve(arr) {
  const newArr = [...new Set(arr)];
  return newArr.reduce((a, b) => a + b, 0);
}
