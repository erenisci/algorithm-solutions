function insertDash(num) {
  return String(num)
    .split('')
    .reduce((acc, cur, i, arr) => acc + (arr[i - 1] % 2 && cur % 2 ? '-' + cur : cur));
}
