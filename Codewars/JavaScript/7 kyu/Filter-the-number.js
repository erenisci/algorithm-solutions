function filterString(value) {
  let str = '';
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) str += value[i];
  }
  return +str;
}
