function nbYear(p0, percent, aug, p) {
  let i = 0;
  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
    i++;
  }
  return i;
}
