function findLongest(array) {
  const maxLength = String(Math.max(...array)).length;
  return array.filter(num => String(num).length === maxLength)[0];
}
