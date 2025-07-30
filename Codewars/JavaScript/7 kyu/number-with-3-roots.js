function perfectRoots(n) {
  return [2, 4, 8].every(num => Math.pow(n, 1 / num) % 1 == 0);
}
