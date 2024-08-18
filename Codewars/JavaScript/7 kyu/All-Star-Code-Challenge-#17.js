function findYear(month, dayOfWeek) {
  if (month < 0 || month > 11 || dayOfWeek < 0 || dayOfWeek > 6) return 0;

  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, month, 1);
    if (date.getDay() === dayOfWeek) return year;
  }

  return 0;
}
