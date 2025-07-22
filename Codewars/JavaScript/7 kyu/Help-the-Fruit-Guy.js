function removeRotten(fruits) {
  if (!fruits || fruits.length === 0) return [];

  return fruits.map(fruit => {
    return fruit.toLowerCase().startsWith('rotten')
      ? fruit.slice(6).toLowerCase()
      : fruit.toLowerCase();
  });
}
