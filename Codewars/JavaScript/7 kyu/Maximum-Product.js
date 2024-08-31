function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
