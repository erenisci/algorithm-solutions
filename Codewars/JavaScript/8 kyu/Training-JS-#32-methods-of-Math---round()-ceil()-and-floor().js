function roundIt(n) {
  const [left, right] = String(n).split('.');
  const leftLength = left.length;
  const rightLength = right.length;
  return leftLength < rightLength ? +left + 1 : leftLength > rightLength ? +left : Math.round(n);
}
