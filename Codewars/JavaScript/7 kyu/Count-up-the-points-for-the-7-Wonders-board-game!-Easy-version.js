function solve(compasses, gears, tablets) {
  const step1 = Math.min(compasses, gears, tablets) * 7;
  const step2 = compasses ** 2 + gears ** 2 + tablets ** 2;
  return step1 + step2;
}
