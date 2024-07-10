function rowWeights(array) {
  return [
    array.filter((num, i) => i % 2 === 0 && num).reduce((a, b) => a + b, 0),
    array.filter((num, i) => i % 2 !== 0 && num).reduce((a, b) => a + b, 0),
  ];
}
