function arrayMadness(a, b) {
  return a.reduce((acc, cur) => acc + cur ** 2, 0) > b.reduce((acc, cur) => acc + cur ** 3, 0);
}
