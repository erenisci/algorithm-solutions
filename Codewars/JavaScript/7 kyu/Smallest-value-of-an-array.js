function min(arr, toReturn) {
  return toReturn === 'index'
    ? arr.indexOf(Math.min(...arr))
    : Math.min(...arr);
}
