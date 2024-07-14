function all(arr, fun) {
  const arrFiltered = arr.filter(el => fun(el));
  return arrFiltered.length === arr.length;
}
