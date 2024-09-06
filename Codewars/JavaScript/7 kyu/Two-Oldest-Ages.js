function twoOldestAges(ages) {
  let f = 0,
    l = 0;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > f) {
      l = f;
      f = ages[i];
    } else if (ages[i] > l) l = ages[i];
  }
  return [l, f];
}
