function combine(...objects) {
  return objects.reduce((acc, obj) => {
    for (const [key, val] of Object.entries(obj)) {
      acc[key] = (acc[key] ?? 0) + val;
    }
    return acc;
  }, {});
}
