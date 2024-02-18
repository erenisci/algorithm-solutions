function productFib(prod) {
  let n = 0;
  let nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}
