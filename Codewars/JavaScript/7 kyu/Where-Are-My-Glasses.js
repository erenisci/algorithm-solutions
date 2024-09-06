function findGlasses(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (/O-+O/.test(arr[i])) return i;
  }
  return -1;
}
