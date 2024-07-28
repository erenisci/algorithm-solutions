function pointsPer48(ppg, mpg) {
  return +((48 / mpg) * ppg).toFixed(1) || 0;
}
