function arr2bin(arr) {
  return arr
    .reduce((acc, cur) => acc + (typeof cur == 'number' ? cur : 0), 0)
    .toString(2);
}
