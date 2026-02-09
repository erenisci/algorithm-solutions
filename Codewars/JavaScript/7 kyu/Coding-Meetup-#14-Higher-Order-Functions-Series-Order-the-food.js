function orderFood(list) {
  const result = {};

  for (const dev of list) {
    const meal = dev.meal;

    if (result[meal]) {
      result[meal]++;
    } else {
      result[meal] = 1;
    }
  }

  return result;
}
