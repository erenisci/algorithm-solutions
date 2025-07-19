function countLanguages(list) {
  return list.reduce((acc, dev) => ({ ...acc, [dev.language]: (acc[dev.language] || 0) + 1 }), {});
}
