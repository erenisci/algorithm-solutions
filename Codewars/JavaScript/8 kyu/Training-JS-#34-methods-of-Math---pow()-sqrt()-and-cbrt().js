function cutCube(volume, n) {
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}
