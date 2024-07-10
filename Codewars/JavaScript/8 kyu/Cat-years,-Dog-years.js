function humanYearsCatYearsDogYears(humanYears) {
  const catYears = humanYears > 2 ? humanYears * 4 + 16 : humanYears > 1 ? 24 : 15;
  const dogYears = humanYears > 2 ? humanYears * 5 + 14 : humanYears > 1 ? 24 : 15;
  return [humanYears, catYears, dogYears];
}
