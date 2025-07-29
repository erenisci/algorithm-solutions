function reject(array, predicate) {
  return array.filter(x => !predicate(x));
}
