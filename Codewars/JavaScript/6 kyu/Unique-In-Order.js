function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}
