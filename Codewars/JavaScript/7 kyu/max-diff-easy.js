function maxDiff(list) {
  return Math.max(Math.max(...list) - Math.min(...list), 0);
}
