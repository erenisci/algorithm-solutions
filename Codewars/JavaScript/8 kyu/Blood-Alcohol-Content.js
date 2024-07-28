function bloodAlcoholContent(drinks, weight, sex, time) {
  return +(
    ((drinks.ounces * drinks.abv * 5.14) / weight) * (sex === 'male' ? 0.73 : 0.66) -
    0.015 * time
  ).toFixed(4);
}
