function reverse(array) {
  const res = [];
  let i = array.length - 1;
  while (i >= 0) {
    res.push(array[i]);
    i--;
  }
  return res;
}
