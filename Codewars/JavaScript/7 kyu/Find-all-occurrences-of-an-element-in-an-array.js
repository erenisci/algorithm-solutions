function findAll(array, n) {
  return array.map((value, index) => (value === n ? index : -1)).filter(i => i !== -1);
}
