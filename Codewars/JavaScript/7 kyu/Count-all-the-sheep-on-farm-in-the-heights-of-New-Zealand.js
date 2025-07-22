function lostSheep(friday, saturday, total) {
  const fridaySum = friday.reduce((acc, n) => acc + n, 0);
  const saturdaySum = saturday.reduce((acc, n) => acc + n, 0);
  return total - (fridaySum + saturdaySum);
}
