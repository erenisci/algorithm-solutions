function squaresNeeded(grains) {
  return grains > 0 ? Math.ceil(Math.log2(grains + 1)) : 0;
}
