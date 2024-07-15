function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
}
