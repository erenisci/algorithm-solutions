function getRealFloor(n) {
  return n > 13 ? n - 2 : 0 < n && n < 13 ? n - 1 : n;
}
