function abbrevName(name) {
  return name
    .split(' ')
    .map(function (index) {
      return index[0][0].toUpperCase();
    })
    .join('.');
}
