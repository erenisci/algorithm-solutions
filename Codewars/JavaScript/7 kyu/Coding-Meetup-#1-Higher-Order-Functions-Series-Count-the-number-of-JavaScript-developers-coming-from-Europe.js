function countDevelopers(list) {
  let count = 0;
  for (const dev of list) {
    if (dev.continent === 'Europe' && dev.language === 'JavaScript') count++;
  }
  return count;
}
