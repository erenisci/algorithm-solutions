function elevatorDistance(array) {
  return array.slice(1).reduce((acc, cur, idx) => acc + Math.abs(cur - array[idx]), 0);
}
