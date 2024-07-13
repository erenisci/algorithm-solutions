function yearDays(year) {
  if (year % 4 !== 0) return `${year} has 365 days`;
  else if (year % 100 !== 0) return `${year} has 366 days`;
  else if (year % 400 !== 0) return `${year} has 365 days`;
  else return `${year} has 366 days`;
}
