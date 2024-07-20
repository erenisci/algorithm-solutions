function calculateAge(y1, y2) {
  const year = y2 - y1;

  if (y1 === y2) return `You were born this very year!`;
  else if (year === 1) return `You are 1 year old.`;
  else if (year === -1) return `You will be born in 1 year.`;
  else if (year > 0) return `You are ${year} years old.`;
  else return `You will be born in ${Math.abs(year)} years.`;
}
