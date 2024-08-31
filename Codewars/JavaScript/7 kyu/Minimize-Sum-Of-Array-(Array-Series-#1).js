function minSum(arr) {
  let product = 0;
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length / 2; i++) {
    product += arr[i] * arr[arr.length - 1 - i];
  }

  return product;
}
