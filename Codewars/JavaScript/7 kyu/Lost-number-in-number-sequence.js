function findDeletedNumber(arr, mixArr) {
  return arr.reduce((a, b) => a + b, 0) - mixArr.reduce((a, b) => a + b, 0);
}
