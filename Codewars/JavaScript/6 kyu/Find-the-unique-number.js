function findUniq(arr) {
  let l, c, r;
  let i = 1;
  while (i < arr.length - 1) {
    (l = i - 1), (c = i), (r = i + 1);
    if (arr[l] !== arr[c] && arr[l] !== arr[r]) return arr[l];
    if (arr[c] !== arr[l] && arr[c] !== arr[r]) return arr[c];
    if (arr[r] !== arr[c] && arr[r] !== arr[l]) return arr[r];
    i++;
  }
}
