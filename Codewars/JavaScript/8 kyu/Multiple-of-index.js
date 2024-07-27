function multipleOfIndex(array) {
  return array.filter((n, i) => n === 0 || n % i === 0);
}
