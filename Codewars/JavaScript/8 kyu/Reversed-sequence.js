function reverseSeq(n) {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
}
