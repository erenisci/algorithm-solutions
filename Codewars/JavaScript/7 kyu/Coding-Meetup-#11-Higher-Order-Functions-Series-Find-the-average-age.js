function getAverageAge(list) {
  const totalAge = list.reduce((sum, dev) => sum + dev.age, 0);
  return Math.round(totalAge / list.length);
}
