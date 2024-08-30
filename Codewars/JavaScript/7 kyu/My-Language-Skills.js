function myLanguages(results) {
  return Object.keys(results)
    .filter(res => results[res] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
