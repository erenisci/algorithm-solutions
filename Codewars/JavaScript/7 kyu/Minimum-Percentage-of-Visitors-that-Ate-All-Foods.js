function minimumPercentage(foods) {
  const sum = foods.reduce((a, b) => a + b, 0);
  return Math.max(0, sum - 100 * (foods.length - 1));
}
