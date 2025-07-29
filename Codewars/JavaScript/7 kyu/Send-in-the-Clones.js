function clonewars(kataPerDay) {
  return [
    Math.round(Math.pow(2, kataPerDay - 1)),
    Array(kataPerDay)
      .fill(1)
      .map((_, i, arr) => Math.pow(2, i) * (arr.length - i))
      .reduce((a, b) => a + b, 0),
  ];
}
