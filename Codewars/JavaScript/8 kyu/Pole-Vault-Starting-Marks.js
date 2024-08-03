function startingMark(bodyHeight) {
  const m = (10.67 - 9.45) / (1.83 - 1.52);
  return Math.round((10.67 + m * bodyHeight - m * 1.83) * 100) / 100;
}
