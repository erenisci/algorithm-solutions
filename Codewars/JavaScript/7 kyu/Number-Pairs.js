function getLargerNumbers(a, b) {
  const arr = new Array(a.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.max(a[i], b[i]);
  }
  return arr;
}
